import {assign, createMachine, interpret} from 'xstate'

export default function Page() {
  return null
}

const m = createMachine({
  id: `door`,
  predictableActionArguments: true,
  initial: `idle`,
  states: {
    locked: {
      id: 'locked',
      on: {
        UNLOCK: `unlocked`,
      },
    },
    unlocked: {
      initial: `closed`,
      states: {
        closed: {
          LOCK_USING_PARENT: `#door.locked`,
          LOCK_BY_ID: `#locked`,
          OPEN: `opened`,
        },
        opened: {},
      },
    },
  },
})

const s = interpret(m)

s.start()
