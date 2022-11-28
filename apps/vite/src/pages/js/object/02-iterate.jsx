const o = {
  a: 1,
  b: 2,
}

function forIn() {
  for (let key in o) {
    console.log(key, o[key])
  }
}

function objectKeys() {
  Object.keys(o).map((key) => console.log(o[key]))
}

function objectEntries() {
  Object.entries(o).map(([key, value]) => console.log(key, value))
}

function objectGetOwnPropertyNames() {
  Object.getOwnPropertyNames(o).map((key) => console.log(o[key]))
}

function reflectOwnKeys() {
  Reflect.ownKeys(o).map((key) => console.log(o[key]))
}
