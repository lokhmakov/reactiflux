export default function Page() {
  return null
}

function check(quantity, names) {
  const messages = []
  let flag = true
  for (let i = 0; i < quantity.length; i++) {
    const value = quantity[i]
    if (value <= 10) {
      messages.push(`There aren't enough on the shelves ${names[i]}`)
      flag = false
    }
  }

  return flag ? [`Everything is on the shelves.`] : messages
}

const checkMap = (quantity, names) => {
  const messages = quantity.reduce((r, v, i) => {
    return v <= 10
      ? r.concat(`There aren't enough on the shelves ${names[i]}`)
      : r
  }, [])

  return messages.length ? messages : [`Everything is on the shelves.`]
}

const names = [`chicken`, `beef`, `port`]

console.log(checkMap([1, 2, 3], names))
console.log(checkMap([11, 11, 11], names))
