import {assign, actions, createMachine, interpret} from 'xstate'
import {useActor, useMachine, useInterpret, useSelector} from '@xstate/react'

const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QTAIwPYFcB2BjMAdAJYQA2YAxAMoCiAKoqAA7qxEAuR62jIAHogBMABgAsBAOyCAHAE4ArNMEBGUdMUAaEAE9EAWmWCCANmGyV0pcOU3zAXztaUGHPmJlKAEQDyAfU80AELeAKoAcgDCNLwsbJzcvAIIegDMKcoEKbJSErLGojbqxsZaugjKxpkS8srSooLGslnC8qLyDo4g2Ogo8Eggzlh4hCTkMawcXDz9SdIZZrVi8lLWgimipYgpDQRKstLG8gqWZikOTmhD+ONxU4n6KfLymdmCufmF8sWbyXUEihIJOlFOp5GtRB07EA */
createMachine({
	context: {value: '', debouncedValue: ``},
	id: 'debounce',
	initial: 'idle',
	states: {
		idle: {
			on: {
				SET: {
					actions: [
						assign({value: (_, event) => event.value}),
            actions.cancel('debounce'),
						actions.send({type: 'DO_DEBOUNCE'}, {delay: 1000, id: 'debounce'}),
            // actions.log(
            //   (context, event) => `value: ${context.value}, debouncedValue: ${context.debouncedValue}`,
            //   `Set`
            // )
					],
				},
				DO_DEBOUNCE: {
					actions: assign({debouncedValue: (context) => context.value}),
				},
			},
		},
	},
})

const service = interpret(machine)
service.onChange(console.log)
service.start()

export default function Page() {
  const fromService = useSelector(service, v => v)


  function _onChange(e) {
    service.send({type: `SET`, value: e.target.value})
  }

  return (
    <div>
      <h1>Debounce</h1>
      <input value={fromService.context.value} onChange={_onChange} />
    </div>
  )
}

