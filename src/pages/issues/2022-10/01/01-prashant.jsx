import * as React from 'react'
import cn from 'classnames'

export default function App() {
  const {index, list, showPrev, showNext, on} = useQuery()

  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      <List list={list} index={index} />
      <Actions
        index={index}
        showPrev={showPrev}
        showNext={showNext}
        onClickPrev={on.prev}
        onClickNext={on.next}
      />
    </div>
  )
}

const List = ({list, index}) =>
  list.map((item, i) => <Item key={item.id} {...item} active={i === index} />)

const Actions = ({index, showPrev, showNext, onClickPrev, onClickNext}) => (
  <div className="flex items-center gap-2">
    {showPrev ? <ArrowLeft onClick={onClickPrev} /> : null}
    <div>{index}</div>
    {showNext ? <ArrowRight onClick={onClickNext} /> : null}
  </div>
)

function useQuery() {
  const [list, setList] = React.useState([])
  const [index, setIndex] = React.useState(null)

  React.useEffect(() => {
    query().then((responseList) => {
      if (responseList.length) {
        setIndex(0)
        setList(responseList)
      }
    })
  }, [])

  const showPrev = index > 0
  const showNext = index < list.length - 1

  const prev = () => setIndex((v) => (v > 0 ? v - 1 : v))
  const next = () => setIndex((v) => (v < list.length - 1 ? v + 1 : v))

  return {
    on: {
      prev,
      next,
    },
    index,
    list,
    showPrev,
    showNext,
  }
}

const makeId = () => Math.random().toString(32).slice(2)
const makeOne = (id = makeId()) => ({id, name: `name ${id}`})

async function query() {
  return Array.from({length: 10}, makeOne)
}

function Item({active, name}) {
  return (
    <div
      className={cn('rounded-xl p-2', active ? `bg-red-200` : `bg-green-200`)}
    >
      {name}
    </div>
  )
}

const ArrowLeft = (props) => (
  <div
    className={`h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 -rotate-90`}
    {...props}
  />
)

const ArrowRight = (props) => (
  <div
    className={`h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-blue-600 rotate-90`}
    {...props}
  />
)
