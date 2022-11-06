const albums = [
  {
    title: 'The Eminem Show',
    songs: [
      {title: 'White America', duration: 524},
      {title: 'Cleaning out my closet', duration: 458},
      {title: 'The Kiss (Skit)', duration: 115},
      {title: 'Say Goodbye Hollywood', duration: 433},
      {title: 'Business', duration: 412},
      {title: 'Square Dance', duration: 524},
      {title: 'Soldier', duration: 346},
      {title: 'Drips', duration: 420},
      {title: 'Without Me', duration: 450},
    ],
    year: 2002,
    isBand: false,
    artist: 'Eminem',
  },
  {
    title: 'The Eminem Show',
    songs: [
      {title: 'White America', duration: 524},
      {title: 'Cleaning out my closet', duration: 458},
      {title: 'The Kiss (Skit)', duration: 115},
      {title: 'Say Goodbye Hollywood', duration: 433},
      {title: 'Business', duration: 412},
      {title: 'Square Dance', duration: 524},
      {title: 'Soldier', duration: 346},
      {title: 'Drips', duration: 420},
      {title: 'Without Me', duration: 450},
    ],
    year: 2002,
    isBand: false,
    artist: 'Eminem',
  },
]

const mapDuration = (list) =>
  list.map((album) => ({
    ...album,
    duration: album.songs.reduce((r, song) => r + song.duration, 0),
  }))

console.log(mapDuration(albums))
