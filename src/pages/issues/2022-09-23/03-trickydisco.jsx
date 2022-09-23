export default function App() {
  return null
}

function extend(defaults, link) {
  return {
    ...defaults,
    url: `${link}/hardCodedString`,
  }
}

function get(data, options) {
  const defaults = {
    a: data.a * 2,
    b: 2,
    c: 3,
  }

  if (options.flag) {
    return extend(defaults, data.link)
  }

  return defaults
}

const data = {a: 1, link: `foo`}

console.log(get(data, {flag: false})) // => {a: 2, b: 2, c: 3}
console.log(get(data, {flag: true})) // => {a: 2, b: 2, c: 3, url: 'foo/hardCodedString'}
