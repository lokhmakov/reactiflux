const store = new Proxy(
  { count: 0 },
  {
    set(target, key, value) {
      return (target[key] = value), true;
    },
  }
);

store.count++;
store.count--;

console.log(store.count);
