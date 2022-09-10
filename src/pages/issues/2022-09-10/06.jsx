import {data} from './06-data'

export default function Page() {}

function findProductById(list, id) {
  let queue = [...list]

  while (queue.length) {
    const current = queue.shift()
    if (current.id === id) {
      return current
    }

    if (current.products?.length) {
      queue.push(...current.products)
    }

    if (current.subCategories?.length) {
      queue.push(...current.subCategories)
    }
  }
}

console.log(findProductById(data, 141))
