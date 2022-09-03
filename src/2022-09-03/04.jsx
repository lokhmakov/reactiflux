import * as React from 'react';

export const Screen = () => {
  const ref = React.useRef();
  return (
    <>
      <button onClick={() => ref.current?.focus()}>focus</button>
      <Child ref={ref} />
    </>
  );
};

const Child = React.forwardRef((props, ref) => {
  return <textarea ref={ref} />;
});
