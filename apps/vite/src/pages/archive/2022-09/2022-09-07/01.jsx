export default function Page() {
  return null;
}

const a = [1, 2, 5, 8];
const b = [2, 6, 8, 9, 0];

const difference = (a1, a2) => a1.filter(x => !a2.includes(x))
const unique = (a1, a2) => difference(a1, a2).concat(difference(a2, a1))

console.log(JSON.stringify(unique(a, b))) // => [1,5,6,9,0]