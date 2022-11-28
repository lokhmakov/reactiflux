import z from 'zod'

const snakeToCamel = (s) =>
  s.replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())

const reduceEntriesKeys = (list, fn = snakeToCamel) =>
  list.reduce((r, [key, value]) => ((r[fn(key)] = value), r), {})

const changeKeyCase = z
  .object({
    snake_case_key1: z.string(),
    snake_case_key2: z.string(),
  })
  .transform((v) => reduceEntriesKeys(Object.entries(v)))

console.log(
  changeKeyCase.parse({
    snake_case_key1: `someValue2`,
    snake_case_key2: `someValue1`,
  }),
) // => {snakeCaseKey1: 'someValue2', snakeCaseKey2: 'someValue1'}
