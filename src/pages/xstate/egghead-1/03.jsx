import {createMachine, interpret} from 'xstate'

export default function Page() {
  return null
}

const lit = {
  exit: () => console.log(`lit:exit`),
  enter: () => console.log(`lit:enter`),
  on: {
    BREAK: {
      target: `broken`,
    },
    TOGGLE: `unlit`,
  },
}
const unlit = {
  exit: [`exitUnlit`],
  on: {
    BREAK: {
      target: `broken`,
      actions: [`fromUnlitToBroken`],
    },
    TOGGLE: `lit`,
  },
}
const broken = {
  type: `final`,
  entry: [`logBroken`],
}

const on = {
  CIRCLE_EVENT: `lit`,
  CIRCLE_EVENT_WITHOUT_EXIT_ENTER: `.lit`,
}

const states = {lit, unlit, broken}
const initial = `unlit`

const actions = {
  logBroken: (context, event) =>
    console.log(`I am broken in the ${event.location}`),
  exitLit: () => console.log(`exitLit`),
  exitUnlit: () => console.log(`exitUnlit`),
  fromUnlitToBroken: () => console.log(`fromLitToBroken`),
}

const machine = createMachine(
  {
    id: `lightbulb`,
    initial,
    states,
    on,
    strict: true,
  },
  {
    actions,
  },
)

const service = interpret(machine)
  .onTransition((state) => {
    console.log(`transition`, state.value)
  })
  .start()

service.send(`TOGGLE`)

service.send(`CIRCLE_EVENT`)
service.send(`CIRCLE_EVENT_WITHOUT_EXIT_ENTER`)

service.send(`TOGGLE`)
service.send(`BREAK`, {location: `office`})
