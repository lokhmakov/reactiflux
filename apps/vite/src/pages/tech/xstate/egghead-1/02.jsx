import {createMachine, interpret} from 'xstate'

export default function Page() {
  return null
}

const lit = {
  on: {
    BREAK: {
      target: `broken`,
      actions: [`logBroken`],
    },
    TOGGLE: `unlit`,
  },
}
const unlit = {
  on: {
    BREAK: {
      target: `broken`,
      actions: [`logBroken`],
    },
    TOGGLE: `lit`,
  },
}
const broken = {
  type: `final`,
}

const states = {lit, unlit, broken}
const initial = `unlit`

const actions = {
  logBroken: (context, event) =>
    console.log(`I am broken in the ${event.location}`),
}

const machine = createMachine(
  {
    id: `lightbulb`,
    initial,
    states,
    strict: true,
  },
  {
    actions,
  },
)

const service = interpret(machine)
  .onTransition((state) => {
    console.log(state.value)
  })
  .start()

service.send(`TOGGLE`)
service.send(`TOGGLE`)
service.send(`BREAK`, {location: `office`})
