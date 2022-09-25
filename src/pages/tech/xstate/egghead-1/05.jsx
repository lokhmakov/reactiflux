import {assign, createMachine, interpret} from 'xstate'

export default function Page() {
  return null
}

const machine = createMachine(
  {
    id: `doubleAccountMachine`,
    initial: `idle`,
    context: {
      count: 0,
      prevCount: undefined,
    },
    states: {
      idle: {
        on: {
          INC_COUNT_TWICE: {
            actions: [
              (context) => console.log(`before`, context.prevCount),
              `setPrevCount`,
              `incCount`,
              `incCount`,
              (context) => console.log(`after`, context.count),
            ],
          },
        },
      },
    },
    strict: true,
  },
  {
    actions: {
      incCount: assign({
        count: (context) => context.count + 1,
      }),
      setPrevCount: assign({
        prevCount: (context) => context.count,
      }),
    },
  },
)

const service = interpret(machine).start()

service.send(`INC_COUNT_TWICE`)
