const test = 'DJ123ABCD'
// const pattern = /\w+(?=ABCD)/g
const pattern = new RegExp(`\\w+(?=ABCD)`, 'g')
console.log(test.match(pattern))
