import z from 'zod'

const schema = z.string()

const env = {
  log: true,
}

async function fetch() {
  return {
    async json() {
      return `Sssstring`
    },
  }
}

const log = (label) => (data) => {
  if (env.log) {
    console.log(label, data)
  }
  return data
}

async function main() {
  try {
    const data = await fetch()
      .then((r) => r.json())
      .then(log(`beforeParse`))
      .then(schema.parse)
      .then(log(`afterParse`))

    console.log(`Using my pretty nice data:`, data)
  } catch (error) {
    console.log(`My error`, error)
  }
}

async function mainWithoutThen() {
  try {
    const response = await fetch()
    const rawData = await response.json()
    log(`beforeParse`)(rawData)
    const data = schema.parse(rawData)
    log(`afterParse`)(data)

    console.log(`Using my pretty nice data:`, data)
  } catch (error) {
    console.log(`My error`, error)
  }
}

main()
