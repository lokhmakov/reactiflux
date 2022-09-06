import * as React from 'react';

Object.defineProperty(window, 'localStorage', {
  configurable: true,
  enumerable: true,
  value: new Proxy(localStorage, {
    get: function (storage, key) {
      if (key === `setItem`) {
        return (...args) => {
          console.log(`setItem called`, args);
          storage.setItem.apply(storage, args);
        };
      }

      return storage[key].bind(storage);
    },
  }),
});

export default function Page() {
  return (
    <div className="grid gap-2">
      <button
        className="p-1 bg-green-400 rounded-lg"
        onClick={() => localStorage.setItem(`key`, new Date().toISOString())}
      >
        Change Me
      </button>
    </div>
  );
}
