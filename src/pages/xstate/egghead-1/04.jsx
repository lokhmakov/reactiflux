import {createMachine, interpret, send} from 'xstate'

export default function Page() {
  return null
}

const machine = createMachine({
  id: `echo`,
  initial: `listening`,
  states: {
    listening: {
      on: {
        SPEAK: {
          actions: send(`ECHO`),
        },
        ECHO: {
          actions: () => console.log(`echo, echo!`),
        },
      },
    },
  },
  strict: true,
})

const service = interpret(machine).start()

service.send({type: `SPEAK`})
