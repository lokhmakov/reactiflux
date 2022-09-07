import {createMachine, interpret} from 'xstate'

export default function Page() {
  return null
}

const lit = {
  on: {
    BREAK: `broken`,
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
  logBroken: () => console.log(`I am broken`),
}

const machine = createMachine({
  id: `lightbulb`,
  initial,
  states,
  strict: true,
  actions,
})

// console.log(`machine`, machine)
// console.log(`TOGGLE`, machine.transition(`unlit`, `TOGGLE`))
// console.log(`TOGGLE`, machine.transition(`lit`, `TOGGLE`))
// console.log(`TOGGLE`, machine.transition(`lit`, `ACTION_NOT_EXIST`))

const service = interpret(machine)
  .onTransition((state) => {
    console.log(state.value)
  })
  .start()

service.send(`TOGGLE`)
service.send(`TOGGLE`)
service.send(`BREAK`)
