import {assign, createMachine, interpret} from 'xstate'

export default function Page() {
  return null
}

const m = createMachine(
  {
    id: `vendingMachine`,
    predictableActionArguments: true,
    initial: `idle`,
    context: {
      deposited: 0,
    },
    states: {
      idle: {
        on: {
          SELECT_ITEM: {
            target: `vending`,
            cond: `depositedEnough`,
          },
          DEPOSIT_25: {
            actions: [`addQuarter`],
          },
        },
      },
      vending: {},
    },
  },
  {
    actions: {
      addQuarter: assign({
        deposited: (context) => context.deposited + 25,
      }),
    },
    guards: {
      depositedEnough: (context) => context.deposited >= 100,
    },
  },
)

const s = interpret(m)

s.onChange((current, prev) => {
  console.log(`onChange`, current, prev)
})

s.onTransition((state, action) => {
  console.log(`onTransition`, state.value, [state, action])
})

s.start()

s.send(`DEPOSIT_25`)
s.send(`DEPOSIT_25`)
s.send(`DEPOSIT_25`)
s.send(`DEPOSIT_25`)
s.send(`SELECT_ITEM`)
