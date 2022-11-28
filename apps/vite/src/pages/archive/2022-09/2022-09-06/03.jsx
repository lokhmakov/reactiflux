import * as React from 'react';

const list = [`cat`, `dog`, `fish`];

export default function Page() {
  const [value, setValue] = React.useState(list[1]);

  console.log(`Page value`, value);

  return (
    <select onChange={(e) => setValue(e.target.value)} value={value}>
      {list.map((v, key) => (
        <option key={key} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
}