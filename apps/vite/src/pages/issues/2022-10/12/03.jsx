const makeMagicRegexp = (regexp) => ({
  [Symbol.match](s, n = s.length) {
    return [
      ...new Set(
        Array.from(s, (_, i) => s.slice(i).match(regexp)).flatMap((v) =>
          v ? v : [],
        ),
      ).values(),
    ]
  },
})
const r = `arrb6???4???xxbl5???eee5`.match(
  makeMagicRegexp(/\d\w*?\?{3}\w*?\d/g),
)

console.log(r) // => ['6???4', '5???eee5', '4???xxbl5']
