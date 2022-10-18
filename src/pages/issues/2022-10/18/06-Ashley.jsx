const posts = [
  {
    author: {id: 1, name: `author1`},
  },
  {
    author: {id: 2, name: `author2`},
  },
  {
    author: {id: 3, name: `author3`},
  },
  {
    author: {id: 1, name: `author1`},
  },
  {
    author: {id: 2, name: `author2`},
  },
]

const uniqueAuthors = (list) =>
  Object.values(
    list.reduce((r, {author}) => {
      r[author.id] = authors
      return r
    }, {}),
  )

const uniqueAuthorsMap = (list) => {
  const authorsById = new Map()

  for (let post of posts) {
    if (post.author?.id) {
      if (!authorsById.has(post.author.id)) {
        authorsById.set(post.author.id, post.author)
      }
    }
  }

  return authorsById.values()
}

console.log(uniqueAuthors(posts))
