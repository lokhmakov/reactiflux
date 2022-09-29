import * as React from 'react'
import cn from 'classnames'

const makeId = () => Math.random().toString(32).slice(2)
const makeOne = (id) => ({id, genre: `genre ${id}`})
const make10 = () => Array.from({length: 10}, (_) => makeOne(makeId()))

export default function Page() {
  const [cards, setCards] = React.useState(make10)

  function onAdd10() {
    setCards((prev) => prev.concat(make10()))
  }

  const onClick = React.useCallback(
    (id) =>
      setCards((prev) =>
        prev.map((item) =>
          item.id === id ? {...item, selected: !item.selected} : item,
        ),
      ),
    [],
  )

  const onRemove = React.useCallback(
    (id) => setCards((prev) => prev.filter((item) => item.id !== id)),
    [],
  )

  return (
    <div className="grid grid-cols-3 gap-2 p-2 select-none cursor-pointer">
      {cards.map((card) => (
        <Card key={card.id} card={card} onClick={onClick} onRemove={onRemove} />
      ))}
      <button onClick={onAdd10}>Add 10</button>
    </div>
  )
}

const Card = React.memo(({card, onClick, onRemove}) => {
  console.log(`render`)

  return (
    <div
      className={cn(
        `rounded-xl p-2 flex justify-between`,
        card.selected ? `bg-red-200` : `bg-green-200`,
      )}
      onClick={() => onClick?.(card.id)}
    >
      {card.genre}
      <div
        className="rounded bg-black text-white w-4 h-4 text-xs"
        onClick={() => onRemove?.(card.id)}
      />
    </div>
  )
})
