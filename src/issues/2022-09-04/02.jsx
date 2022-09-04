import React, { useState } from 'react';

function Input(props) {
  console.log(props);
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="This is Input"
        type="text"
      />
      {props.render(inputValue)}
    </>
  );
}

function Kelvin({ value }) {
  console.log(value);
  return <div>{value + 273.15}Khh</div>;
}

function Farenheit({ value }) {
  return <div>{(value * 9) / 5 + 32}</div>;
}
export function Screen() {
  return (
    <>
      <Input
        render={(inputValue) => (
          <>
            <Farenheit value={inputValue} />
            <Kelvin value={inputValue} />
          </>
        )}
      />
    </>
  );
}
