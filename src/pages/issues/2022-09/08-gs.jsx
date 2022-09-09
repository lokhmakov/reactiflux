export default function Page() {
  return <h1 className="font-bold">Page (08)</h1>
}

const makeRandomTuple = (length, sum, value) =>
  Array.from({length}, (_, i) =>
    length - 1 === i
      ? sum
      : ((value = (Math.random() * sum) | 1), (sum -= value), value),
  )

const result = makeRandomTuple(3, 100)

const makeListOfRandomTuples = (length) =>
  Array.from({length}, (_, i) =>
    makeRandomTuple(3, 100).map((value) => ({
      name: `random name ${i}`,
      value,
    })),
  )

console.log(JSON.stringify(makeListOfRandomTuples(4))) // => [[{"name":"random name 0","value":13},{"name":"random name 0","value":73},{"name":"random name 0","value":14}],[{"name":"random name 1","value":21},{"name":"random name 1","value":1},{"name":"random name 1","value":78}],[{"name":"random name 2","value":15},{"name":"random name 2","value":63},{"name":"random name 2","value":22}],[{"name":"random name 3","value":95},{"name":"random name 3","value":1},{"name":"random name 3","value":4}]]
