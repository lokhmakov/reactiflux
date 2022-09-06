import * as React from 'react';

console.log(localStorage.getItem(`key`));

export default function Page() {
  useLocalStorage({
    onSetItem(key, value) {
      console.log(`setItem`, key, value);
    },
  });

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

function useLocalStorage({ onSetItem }) {
  React.useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const save = localStorage;

    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      enumerable: true,
      value: new Proxy(localStorage, {
        get: function (storage, key) {
          if (key === `setItem`) {
            return (...args) => {
              try {
                onSetItem(...args);
              } catch {}
              storage.setItem.apply(storage, args);
            };
          }

          return storage[key].bind(storage);
        },
      }),
    });

    return () => {
      Object.defineProperty(window, 'localStorage', {
        configurable: true,
        enumerable: true,
        value: save,
      });
    };
  }, []);
}
