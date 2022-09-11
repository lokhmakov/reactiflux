export default function Page() {
  return null
}

const mapValue = (s) => s.replace(/\d/g, '')
const compare = (a, b) => mapValue(a) === mapValue(b)

const list = [`app/test/future/1/program`, `app/test/future/5/program`]

console.log(compare(list[0], list[1])) // => true
