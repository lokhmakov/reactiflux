import { assign, createMachine, interpret } from 'xstate';
import { useMachine, useSelector } from '@xstate/react';

export default function Page() {
  return (
    <div className="p-2 grid gap-2">
      <ClientMachine />
      <ClientMachine />
      <ClientService />
      <ClientService />
      <ClientService />
    </div>
  );
}

function ClientMachine() {
  const [state, send] = useService({ machine: promiseMachine });

  return <Client state={state} send={send} />;
}

function ClientService() {
  const [state, send] = useService({ service: promiseService });

  return <Client state={state} send={send} />;
}

function Client({ state, send }) {
  // const [state, send] = useService({ machine: promiseMachine });
  // const [state, send] = useService({ service: promiseService });

  return (
    <div className="p-2 bg-gray-200">
      {state.matches('pending') && <p>Loading...</p>}
      {state.matches('rejected') && <p>Promise Rejected</p>}
      {state.matches('resolved') && <p>Promise Resolved</p>}
      <div>
        <button onClick={() => send('RESOLVE')}>Resolve</button>
        <button onClick={() => send('REJECT')}>Reject</button>
      </div>
    </div>
  );
}

function useService({ service, machine }) {
  if (service) {
    const state = useSelector(service, (v) => v);

    return [state, service.send];
  } else {
    const [state, send] = useMachine(machine);

    return [state, send];
  }
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
