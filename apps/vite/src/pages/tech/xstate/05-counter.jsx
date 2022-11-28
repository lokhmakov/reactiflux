const increment = (context) => context.count + 1;
const decrement = (context) => context.count - 1;

const counterMachine = createMachine({
  initial: 'active',
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: { actions: assign({ count: increment }) },
        DEC: { actions: assign({ count: decrement }) },
      },
    },
  },
});

const counterService = interpret(counterMachine)
  .onTransition((state) => console.log(state.context.count))
  .start();
// => 0

counterService.send('INC');
// => 1

counterService.send('INC');
// => 2

counterService.send('DEC');
