import * as React from 'react'
import cn from 'classnames'

export default function Page() {
  const [cards, setCards] = React.useState(() =>
    Array.from({length: 10}, (_, id) => ({id, genre: `genre ${id}`})),
  )

  function onClick(id) {
    setCards((prev) =>
      prev.map((item) =>
        item.id === id ? {...item, selected: !item.selected} : item,
      ),
    )
  }

  return (
    <div className="grid grid-cols-3 gap-2 p-2 select-none cursor-pointer">
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={() => onClick(card.id)} />
      ))}
    </div>
  )
}

function Card(props) {
  return (
    <div
      className={cn(
        `rounded-xl p-2`,
        props.selected ? `bg-red-200` : `bg-green-200`,
      )}
      onClick={props.onClick}
    >
      {props.genre}
    </div>
  )
}
