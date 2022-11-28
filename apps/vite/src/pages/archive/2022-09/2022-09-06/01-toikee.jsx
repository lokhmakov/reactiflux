import * as React from 'react';

export default function App() {
  const [search, setSearch] = React.useState('');

  console.log(`search`, search);

  const _onChangeValue = (value) => {
    setSearch(value);
  };

  return <Child onChangeValue={_onChangeValue} />;
}

function Child({ onChangeValue }) {
  return (
    <input
      className="bg-gray-200 m-2"
      onChange={(e) => onChangeValue(e.target.value)}
    />
  );
}
