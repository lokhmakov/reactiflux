import { assign, createMachine, interpret } from 'xstate';
import { useMachine, useSelector } from '@xstate/react';

export default function Page() {
  return <div className="p-2 grid gap-2">xstate (04-age)</div>;
}

const isAdult = ({ age }) => age >= 18;
const isMinor = ({ age }) => age < 18;

const ageMachine = createMachine({
  id: 'age',
  context: { age: undefined }, // age unknown
  initial: 'unknown',
  states: {
    unknown: {
      on: {
        '': [
          { target: 'adult', cond: isAdult },
          { target: 'child', cond: isMinor },
        ],
      },
    },
    adult: { type: 'final' },
    child: { type: 'final' },
  },
});

// console.log(ageMachine.initialState.value);

// const personData = { age: 28 };

// const personMachine = ageMachine.withContext(personData);

// console.log(personMachine.initialState.value);

const ageService = interpret(ageMachine).onTransition((state) =>
  console.log(state.value)
);

ageService.start();

console.log(`ageService`, ageService);

// ageService.

const countMachine = createMachine(
  {
    initial: 'start',
    context: { count: 0 },
    states: {
      start: {
        entry: 'increment',
      },
    },
  },
  {
    actions: {
      increment: assign({ count: (context) => context.count + 1 }),
      decrement: assign({ count: (context) => context.count - 1 }),
    },
  }
);

const countService = interpret(countMachine).onTransition((state) =>
  console.log(state.value)
);

countService.start()
countService.