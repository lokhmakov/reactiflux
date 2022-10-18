export {}

type Author = {
  id: number
  name: string
}

type Post = {
  author: Author
}

const posts: Post[] = [
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

const uniqueAuthors = (list: Post[]) =>
  Object.values(
    list.reduce((r: Record<number, Author>, {author}) => {
      r[author.id] = author
      return r
    }, {}),
  )

console.log(uniqueAuthors(posts))

// => [{"id":1,"name":"author1"},{"id":2,"name":"author2"},{"id":3,"name":"author3"}]
