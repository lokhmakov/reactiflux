const state = {value: 0}

const delay = (ms) => new Promise((rs) => setTimeout(rs, ms))

async function fn() {
  await delay(1000)
  state.value++
}

async function main() {
  await Promise.all(Array.from({length: 4}, fn))
  console.log(state.value)
}

main()
