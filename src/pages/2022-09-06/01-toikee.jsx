import * as React from 'react';

export default function App() {
  const [search, setSearch] = React.useState('');

  console.log(`search`, search);

  const _onChange = (value) => {
    setSearch(value);
  };

  return <Child onChangeValue={_onChange} />;
}

function Child({ onChangeValue }) {
  return <input onChange={(e) => onChangeValue(e.target.value)} />;
}
