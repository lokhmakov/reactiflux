const str = 'PRIVATE'

const cap1 = (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
const cap2 = (s) =>
  s.replace(/./g, (c, i) => (i === 0 ? c.toUpperCase() : c.toLowerCase()))

const fns = [cap1, cap2]

fns.map((fn) => console.log(fn(str)))
