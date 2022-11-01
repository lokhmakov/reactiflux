function myState(initalValue) {
  let state = initalValue
  return {
    get value() {
      return state
    },
    set value(data) {
      console.log(`setting my data`)
      state = data
    },
  }
}

const state = new myState('hey')

console.log(state.value) // => hey
state.value = `yo` // => setting my data
console.log(state.value) // => yo
