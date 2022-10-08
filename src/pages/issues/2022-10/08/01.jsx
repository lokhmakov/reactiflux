function reverseString(a) {
  let left = 0
  let right = a.length - 1

  while (left < right) {
    ;[a[left++], a[right--]] = [a[right], a[left]]
  }
}

const a = `hello`.split``
reverseString(a)

console.log(a)
