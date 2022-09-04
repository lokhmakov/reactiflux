import * as React from 'react';

export const Screen = () => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  return (
    <>
      <button onClick={() => ref.current?.focus()}>focus</button>
      <Child ref={ref} />
    </>
  );
};

const Child = React.forwardRef<HTMLTextAreaElement>((props, ref) => {
  return (
    <>
      <div onClick={() => (ref as React.RefObject<HTMLTextAreaElement>).current?.focus()}>fff</div>
      <textarea ref={ref} />
    </>
  );
});
