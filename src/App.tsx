import * as A from './issues/2022-09-04/02';

function App() {
  return <A.Screen />;
}

export default App;

const superLongArray = [1, 2, 3];

async function main() {
  for await (const i of superLongArray) {
    console.log(i);
  }
}

main(); // => 1, 2, 3

Object.assign(superLongArray, {
  async *[Symbol.asyncIterator]() {
    yield 10;
    yield 9;
    yield 8;
  },
});

main(); // => 10, 9, 8
