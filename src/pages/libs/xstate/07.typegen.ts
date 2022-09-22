// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
	'@@xstate/typegen': true
	internalEvents: {
		'xstate.init': {type: 'xstate.init'}
	}
	invokeSrcNameMap: {}
	missingImplementations: {
		actions: 'dec' | 'sum'
		services: never
		guards: never
		delays: never
	}
	eventsCausingActions: {
		dec: 'TOGGLE'
		sum: 'TOGGLE'
	}
	eventsCausingServices: {}
	eventsCausingGuards: {}
	eventsCausingDelays: {}
	matchesStates: 'toggledOff' | 'toggledOn'
	tags: never
}
