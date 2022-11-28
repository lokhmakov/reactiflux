import ua from 'ua-parser-js'

const {userAgent} = window.navigator
const parser = new ua(userAgent)

console.log(userAgent)
console.log(parser.getResult())
