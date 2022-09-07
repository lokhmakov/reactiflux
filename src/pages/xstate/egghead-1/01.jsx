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
    BREAK: `broken`,
    TOGGLE: `lit`,
  },
}
const broken = {
  type: `final`,
}

const states = {lit, unlit, broken}
const initial = `unlit`

const machine = createMachine({
  id: `lightbulb`,
  initial,
  states,
  strict: true,
})

// console.log(`machine`, machine)
// console.log(`TOGGLE`, machine.transition(`unlit`, `TOGGLE`))
// console.log(`TOGGLE`, machine.transition(`lit`, `TOGGLE`))
// console.log(`TOGGLE`, machine.transition(`lit`, `ACTION_NOT_EXIST`))

const service = interpret(machine)
  .onTransition((state) => {
    if (state.matches(`broken`)) {
      console.log(`I am broken!`)
    }
    console.log(state.value)
  })
  .start()

service.send(`TOGGLE`)
service.send(`TOGGLE`)
service.send(`TOGGLE`)
service.send(`BREAK`)
service.send(`BREAK`)
