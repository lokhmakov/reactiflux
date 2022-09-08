import * as React from 'react';

export function Screen() {
  const ref = React.useRef();

  return (
    <>
      <button onClick={() => ref.current?.inc()}>foo</button>
      <Children ref={ref} />
    </>
  );
}

const Children = React.forwardRef((_, ref) => {
  const [value, setValue] = React.useState(0);
  React.useImperativeHandle(ref, () => ({
    inc: () => setValue((v) => v + 1),
  }));

  return <div>{value}</div>;
});
