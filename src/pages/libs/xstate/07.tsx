import {useMachine} from '@xstate/react'
import {createMachine} from 'xstate'

const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgBcB7KKAG0gHl8BiAFXoHF2AZAUUVAAOFWLjK4K+fiAAeiAIwB2AKwkALAAYAnHM0KATOoUKAzAeMAaEAE9EAWiUKS6gwA49Lpepea9cpZoA2AF8gyzQsPEJSSmo6CHoAMwTWDm4+JBAhETEJKVkEORdjEk9VH09vJRc5AIDLGwQ9TRcSfVrVasCFF30Q0JB8Cgg4KXCcAmJyKloGSQys0XE50HzjLRI5dU9nJX9VI1V6+SVigP0FVTWFM793ELCMcaip2IYkqQWc5ZlEDRIfOTGALGTaqJR6VSKJRHApKOQbc6XQw3cEue4gMaRYgfYSLXIZfI1f6+IEg9RgiFQmG2OTuf6aTTGSF6IxAgx6PpBIA */
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
					actions: `inc`,
				},
			},
		},
		toggledOff: {
			on: {
				TOGGLE: {
					target: 'toggledOn',
					actions: ['dec', `plus`, 'sum']
				},
			},
		},
	},
})

export default function Page() {
	const [state, send] = useMachine(machine, {})

	// send({type: 'TOGGLE'})

	// return state.matches('toggleOn') ? <>ON</> : <>OFF</>
}
