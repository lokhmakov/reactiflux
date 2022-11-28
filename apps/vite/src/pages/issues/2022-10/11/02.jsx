async function query(n) {
  if (n === 0) throw new Error(`Cannot multiple 0`)
  return n * 2
}

async function main() {
  const list = [1, 2, 3, 0, 5]
  return Promise.allSettled(list.map(query))
}

const log = (v) => console.log(v) // => [{"status":"fulfilled","value":2},{"status":"fulfilled","value":4},{"status":"fulfilled","value":6},{"status":"rejected","reason":{}},{"status":"fulfilled","value":10}]
main().then(log)
