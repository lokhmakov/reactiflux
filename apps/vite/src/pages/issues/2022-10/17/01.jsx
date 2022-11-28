function update(value) {
  console.log(value)
  // document.getElementById('demo').innerHTML = value
}

const myDisplay = (error = false) => {
  const myPromise = new Promise((resolve, reject) => {
    if (error) {
      return reject(`My error value`)
    }
    resolve(`My success value`)
  })

  myPromise.then(update).catch(update)
}

myDisplay() // => My success value
myDisplay(true) // => My error value
