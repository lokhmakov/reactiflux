export default function Page() {
  return null
}

const sourceList = [`console.log(1); console.log(2);`, `console.log(3);`]
const fns = sourceList.map((source) => new Function(source))

fns.forEach((fn) => fn())
