import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'

const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBcB7KKAG0gHl8BiAFXoHF2AZAUUVAAOFWLjK4K+fiAAeiALQBGABwAGEgHZ1AVgCcAFi1KdShQDYFAJj0AaEAE95SvWvUqtpj1r1L1OzQF9-WzQsPEJSSmo6CHoAM1jWDm4+JBAhETEJKVkERVUNbX1DYzNLG3tHZw03D1MvHz91QKCQfAoIOCkQnAJicipaBklU9NFxYdAcvJdCgyMTcytbB1z1fPUAZiUlDwsLFVMDvUDgjB7w-qiGeKlRzImZeWUZ3TmSxfKVuVclDUONrRaTRaDY6DbHFrdMLEW7CMZZVJTfZ6AqvYoLMrLeQ6SwkUxOBSAvQKQl1BTNfxAA */
createMachine({
	context: {toggleCount: 0},
	tsTypes: {} as import('./07.typegen').Typegen0,
	schema: {events: {} as {type: `TOGGLE`}},
	id: '(machine)',
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
