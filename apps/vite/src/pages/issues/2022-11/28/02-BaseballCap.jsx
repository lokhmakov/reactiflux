import z from 'zod'

const snakeToCamel = (s) =>
  s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
const changeCase = z.string().transform(snakeToCamel)
console.log(changeCase.parse(`snake_case_text`)) // => snakeCaseText
