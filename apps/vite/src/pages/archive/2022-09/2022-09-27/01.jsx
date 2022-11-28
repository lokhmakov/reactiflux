const delay = (ms) => new Promise((rs) => setTimeout(rs, ms))

async function query() {
  return [`item1`, `item2`, `item3`]
}

async function main() {
  const data = await query().then(delay(500))
  console.log(data) // => [`item1`, `item2`, `item3`]
}

main()
