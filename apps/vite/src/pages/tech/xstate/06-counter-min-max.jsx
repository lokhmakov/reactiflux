const isNotMax = (context) => context.count < 10;
const isNotMin = (context) => context.count >= 0;

const counterMachine = createMachine({
  initial: 'active',
  context: {
    count: 0,
  },
  states: {
    active: {
      on: {
        INC: {
          actions: assign({ count: increment }),
          cond: isNotMax,
        },
        DEC: {
          actions: assign({ count: decrement }),
          cond: isNotMin,
        },
      },
    },
  },
});

// ...

// assume context is { count: 9 }
counterService.send('INC');
// => 10

counterService.send('INC'); // no transition taken!
