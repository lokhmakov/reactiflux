const s = 'pins_pin1:4,pins_pin7:5,pins_pin8:6,'

const get = (s) => s.split`,`.map((v) => v.split`:`[1])

// console.log(get(s)) // => ['4', '5', '6']

const getReg = (s) => s.match(/\b\d/g)

console.log(getReg(s)) // => ['4', '5', '6']
