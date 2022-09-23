import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'

const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QDMD2qBCBDATgFgFYA2AOgBdUooAbSAeQDsBiAZQHUBJAFQGEAJRKAAOqWAEsyY1A0EgAHogCMigMwliAJgAMRItrx4AnIqKGANCACeiALQAOAnhJ2Hht0QDsxonjsBfPws0TFxCUgoqWgg6ZGRFJi46AHEkgBkAUVkRcUlpWQUERS1DEjwiAg0PD2JFbRVTC2sEex0SYzxairxqjxVDAMCQBlQIOFlg7HxickoaehkkEGyJKQXQAo0NUh9DIiLDFQItDTstO0bbBy0SXuOPE+PDDo8AoPRJsJnI+ljFLNEVnlFgUbBoCCQVAYTEViFoagQLs0HGoNCo7g8NE9FC9BhNQsR-jlVvlbEYIVC9nCiFTFAirLZDFtnB5dAcPIo7IYjv4BkA */
  createMachine({
    context: {toggleCount: 0},
    tsTypes: {} as import('./07.typegen').Typegen0,
    schema: {events: {} as {type: `TOGGLE`} | {type: `SWITCH`}},
    id: 'fooBar456',
    initial: 'toggledOff1',
    states: {
      toggledOn: {
        on: {
          SWITCH: {
            target: 'toggledOff1',
          },
        },
      },
      toggledOff1: {
        on: {
          TOGGLE: {
            target: 'toggledOn',
          },
        },
      },
    },
  })

export default function Page() {
  const [state, send] = useMachine(machine, {})
  return null
}
