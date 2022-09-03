import { useState } from 'react';
import reactLogo from './assets/react.svg';

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <div className="text-6xl text-red-600">{count}</div>
        <button
          className="px-6 py-2 rounded bg-green-800 hover:bg-green-600 text-white"
          type="button"
          onClick={() => setCount((count) => count + 1)}
        >
          count+
        </button>
      </div>
    </div>
  );
};
