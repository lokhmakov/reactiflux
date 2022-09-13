import {assign, actions, createMachine, interpret} from 'xstate'
import {useMachine, useSelector} from '@xstate/react'

export default function Page() {
  const fromService = useSelector(s1, (v) => v)

  function _onChange(e) {
    s1.send({type: `SET`, value: e.target.value})
  }

  return (
    <div>
      <input value={fromService.context.value} onChange={_onChange} />
    </div>
  )
}

const m1 = createMachine({
  id: 'debounce',
  initial: 'idle',
  context: {
    value: '',
    debouncedValue: ``,
  },
  states: {
    idle: {
      on: {
        SET: {
          actions: [
            assign({value: (_, event) => event.value}),
            actions.cancel('debounce'),
            actions.send({type: 'DO_DEBOUNCE'}, {delay: 1000, id: 'debounce'}),
          ],
        },
        DO_DEBOUNCE: {
          actions: assign({debouncedValue: (context) => context.value}),
        },
      },
    },
  },
})

const s1 = interpret(m1)

// s1.onTransition((state) => console.log(state.value))
s1.onChange(console.log)

s1.start()

// on: {
//   mousemove: {
//     actions: [
//       cancel('debounce'),
//       send({ type: 'SOME_EVENT' }, { delay: 1000, id: 'debounce' })
//     ]
//   },
//   SOME_EVENT: {
//     // this will only be taken 1000ms after the last mouseMove
//   }
// }
