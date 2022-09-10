import * as React from 'react'

export default function Page() {
  useQuery()

  return <>123</>
}

const groupBy = (list, fnIndex = (v) => v.id, fnValue = (v) => v) =>
  list.reduce((r, v) => {
    r[fnIndex(v)] = fnValue(v)
    return r
  }, {})

async function useQuery() {
  const [sports, setSports] = React.useState({
    data: {},
    order: [],
  })

  const [players, setPlayers] = React.useState({
    data: {},
    order: [],
  })

  React.useEffect(() => {
    query()
      .then((queryData) => {
        const _sports = groupBy(
          queryData,
          (v) => v.id,
          ({players, ...sport}) => sport,
        )

        const playersWithSportId = queryData.flatMap(({players, id: sportId}) =>
          players.map((v) => ({
            ...v,
            sportId,
          })),
        )
        const _players = groupBy(playersWithSportId)

        console.log(_players)
      })
      .catch(console.warn)
  }, [])
}

async function query() {
  return [
    {
      id: 10001,
      name: 'Football',
      players: [
        {
          id: 35,
          name: 'John',
        },
        {
          id: 36,
          name: 'Steven',
        },
        {
          id: 37,
          name: 'Mike',
        },
      ],
    },
    {
      id: 10002,
      name: 'Rugby',
      players: [
        {
          id: 44,
          name: 'Steve',
        },
        {
          id: 45,
          name: 'Shen',
        },
        {
          id: 46,
          name: 'Shaun',
        },
      ],
    },
  ]
}
