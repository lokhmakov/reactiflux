export default function Page() {
  return null
}

const checkOverdue = (s) => Date.now() - new Date(s) > 0

const list = [
  `Saturday, Oct 28, 2022`,
  `Saturday, Sep 1, 2022`,
  `Saturday, Sep 23, 2022`,
]

console.log(list.map(checkOverdue)) // => [false, true, false]
