const list = [
  `1xx2???8`,
  `1x?x?x?9`,
  `no digit no pair`,
  `abc6? ?4`,
  `1???9`,
  `1????9`,
  `1???x9??1`,
  `arrb6???4xxbl5???eee5abc`,
  `1???x9??1`,
  `abc6? ?4`,
]

const sum10 = (s) => s.replace(/[a-z]+/g, ``).split``

// const sum10 = (s) => getPairs(s)

// const getPairs = (s) =>
//   s.replace(/[a-z]+/g, ``).split``.reduce((r, v) => r + v.charCodeAt(), 0)

// const sum10 = (s) =>
//   s
//     .replace(/[a-z]+/g, ``)
//     .replace(/(\d)\?\?\?(\d)/g, (v, a, b) => (10 == +a + +b ? b : v))
//     .replace(/\d\d/g, '')

// const check = (r, _, i, a) => (i && r ? 10 == +a[i] + +a[i - 1] : r)
// const sum10 = (
//   s,
//   t = true,
//   f = false,
//   n = s.replace(/\D+/g, (m) => {
//     const l = (m.match(/\?/g) || []).length
//     return l === 0 ? `🚀` : (l !== 3 && (t = false), `?`)
//   }).split`🚀`.map((v, _, __, x = v.split`?`) =>
//     v && x.length > 1 ? ((f = true), x.reduce(check)) : true,
//   ),
//   x = s.match(/\d/g),
// ) => Boolean(t && f && x && n.every((v) => typeof v === 'boolean' && v))

// const check = (r, _, i, a) => (i && r ? 10 == +a[i] + +a[i - 1] : r)
// const sum10 = (
//   s,
//   f = false,
//   n = s.replace(/\D+/g, (m) =>
//     (m.match(/\?/g) || []).length === 3 ? `?` : `🚀`,
//   ).split`🚀`.map((v, x = v.split`?`) =>
//     v && x.length > 1 ? ((f = true), x.reduce(check)) : true,
//   ),
//   x = s.match(/\d/g),
// ) => Boolean(f && x && n.every((v) => typeof v === 'boolean' && v))

// const check = (r, _, i, a) => (i && r ? 10 == +a[i] + +a[i - 1] : r)
// const sum10 = (
//   s,
//   n = s.replace(/\D+/g, (m) =>
//     (m.match(/\?/g) || []).length === 3 ? `?` : `🚀`,
//   ).split`🚀`.map((v) => (v ? v.split`?`.reduce(check) : true)),
//   x = s.match(/\d/g),
// ) => Boolean(x && n.every((v) => typeof v === 'boolean' && v))

// const check = (r, _, i, a) => (i && r ? 10 == +a[i] + +a[i - 1] : r)
// const sum10 = (
//   s,
//   n = s.replace(/\D+/g, (s) => (s.includes(`???`) ? `?` : `🚀`)).split`🚀`.map(
//     (v) => (v ? v.split`?`.reduce(check) : true),
//   ),
// ) => n

// const check = (r, _, i, a) => (i && r ? 10 == +a[i] + +a[i - 1] : r)
// const sum10 = (
//   s,
//   n = s.replace(/\D+/g, (s) => (s.includes(`???`) ? `?` : `🚀`))
//     .split`🚀`.flatMap((v) => (v ? v.split`?`.reduce(check) : [])),
// ) => n.every((v) => v)

// const sum10 = (
//   s,
//   n = s.replace(/[^\?\d]/g, ``).split`???`.reduce((r, _, i, a) =>
//     i && r ? 10 == +a[i] + +a[i - 1] : r,
//   ),
// ) => n
//(typeof n === 'string' ? false : n)

console.log(sum10(list[0]))
