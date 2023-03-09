async function getClient() {
  return {
    getStore() {
      return {
        async get(key: string) {
          return `555`
        },
      }
    },
  }
}

export const Load = (key: string) =>
  getClient().then((client) =>
    client
      .getStore()
      .get(key)
      .then((value) => new TextDecoder().decode(new Uint8Array(value))),
  )
