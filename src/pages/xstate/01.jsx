import { assign, createMachine, interpret } from 'xstate';
import { useMachine } from '@xstate/react';

export default function Page() {
  return <div>xstate (01)</div>;
}

const promiseMachine = createMachine({
  id: 'promise',
  initial: 'pending',
  states: {
    pending: {
      on: {
        RESOLVE: { target: 'resolved' },
        REJECT: { target: 'rejected' },
      },
    },
    resolved: {
      type: 'final',
    },
    rejected: {
      type: 'final',
    },
  },
});

const promiseService = interpret(promiseMachine).onTransition((state) =>
  console.log(state.value)
);

promiseService.start();
promiseService.send({ type: 'RESOLVE' });

// async function fetchUser(userId) {
//   return { userId };
// }

// const userMachine = createMachine({
//   id: 'user',
//   initial: 'idle',
//   context: {
//     userId: 42,
//     user: undefined,
//     error: undefined,
//   },
//   states: {
//     idle: {
//       on: {
//         FETCH: { target: 'loading' },
//       },
//     },
//     loading: {
//       invoke: {
//         id: 'getUser',
//         src: (context, event) => fetchUser(context.userId),
//         onDone: {
//           target: 'success',
//           actions: assign({ user: (context, event) => event.data }),
//         },
//         onError: {
//           target: 'failure',
//           actions: assign({ error: (context, event) => event.data }),
//         },
//       },
//     },
//     success: {},
//     failure: {
//       on: {
//         RETRY: { target: 'loading' },
//       },
//     },
//   },
// });
