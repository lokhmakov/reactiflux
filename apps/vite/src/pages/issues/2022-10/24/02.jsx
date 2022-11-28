const list = [1, 2, 3, 4, 5, 6, 7]

async function main() {
  for (let i of list) {
    const r = await query(i)
    console.log(r)
  }
  console.log(`final`)
}

main()

async function query(n) {
  someAsyncOperationWithCallback(() => {
    console.log(`Am I right?`)
  })
  return n
}

function someAsyncOperationWithCallback(cb) {
  setTimeout(cb, 100)
}
