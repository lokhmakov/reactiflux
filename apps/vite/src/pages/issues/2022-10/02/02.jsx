const item = {
  title: 'fgjgfjgfj',
  htmlTitle: 'fgjgfjgfjy',
  pagemap: {
    cse_image: [
      {
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Paonroue.JPG/1200px-Paonroue.JPG',
      },
    ],
  },
}

const {
  pagemap: {
    cse_image: [{src}],
  },
} = item

console.log(src) // => https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Paonroue.JPG/1200px-Paon

const list = [item, item, item]

list.map(
  ({
    pagemap: {
      cse_image: [{src}],
    },
  }) => src,
)
