const list = [`a`, `b`, `c`];

export function Screen() {
  return (
    <select onChange={console.log}>
      {list.map((v, index) => (
        <option key={index} value={v}>
          {v}
        </option>
      ))}
    </select>
  );
}
