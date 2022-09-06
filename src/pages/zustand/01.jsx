import createStore from 'zustand/vanilla';
import createHook from 'zustand';

export default function Page() {
  return <div className="m-2 font-bold bg-gray-200">Zustand (01)</div>;
}

const $value = createStore((set) => ({
  value: 0,
  inc: () => set((state) => ({ value: state.value + 1 })),
  dec: () => set((state) => ({ value: state.value - 1 })),
}));

const $query = createStore((set) => ({
  fetch: async () => {
    const value = $value.getState().value;
    return value;
  },
}));

$value.getState().inc();
$value.getState().inc();
$value.getState().inc();
$query.getState().fetch().then(console.log);
