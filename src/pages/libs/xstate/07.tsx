import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'

const machine =
	/** @xstate-layout N4IgpgJg5mDOIC5QDMD2qCMAmAzAOgBdUooAbSAeQDsBiAFQoHFGAZAUUVAAdVYBLAn1RVOIAB6IAtDgAceACwyADADYMAdhlYVWAJyasAGhABPKbqx4MOnEtVKArPPm6lMgL7vjaTLkLEySmRkeiZWDiQQHn5BYVEJBGk5RVUNLR19LWMzBFkHPBlXXRxZDCV1eRV1Ty8QKlQIOFEfbHwiEnIIalFogSERSISceXwMHBU3XEqMB20HbMQMeUtcbTGlLAclXRUHHE9vdFb-DqDkHt4+uMGpHHV1PAcVHF1luxl5JyNTReW8VYcrnUz3UFieBxALVwFxi-XiUnkSgwj2eryw70+ywWiWs8isszBMj2MiJWCwNXcQA */
	createMachine({
		context: {toggleCount: 0},
		tsTypes: {} as import('./07.typegen').Typegen0,
		schema: {events: {} as {type: `TOGGLE`}},
		id: 'foo123',
		initial: 'toggledOff',
		states: {
			toggledOn: {
				on: {
					TOGGLE: {
						target: 'toggledOff',
					},
				},
			},
			toggledOff: {
				on: {
					TOGGLE: {
						target: 'toggledOn',
					},
				},
			},
		},
	})

export default function Page() {
	const [state, send] = useMachine(machine)

	// send({type: 'TOGGLE'})

	// return state.matches('toggleOn') ? <>ON</> : <>OFF</>
}
