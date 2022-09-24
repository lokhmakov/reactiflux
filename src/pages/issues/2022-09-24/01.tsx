export {}

const transition = {
  a: `A`,
  b: `B`,
  c: `C`,
} as const

type Keys = keyof typeof transition
type Values = typeof transition[keyof typeof transition]

function get(key: Keys): Values {
  return transition[key]
}

function objectEntries(o: typeof transition): ReadonlyArray<[Keys, Values]> {
  return Object.entries(o) as any
}

console.log(objectEntries(transition).map(([key, value]) => get(key) === value))
