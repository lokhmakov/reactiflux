import * as React from 'react'

export default function Page() {
  const fromProducts = useProducts()

  return (
    <>
      <SectionList mapFn={fromProducts.map} />
      <SectionSwitch onSwitch={fromProducts.switch} />
    </>
  )
}

function SectionSwitch({onSwitch}) {
  return <button onClick={onSwitch}>Switch</button>
}

function SectionList({mapFn}) {
  return mapFn((product) => <Product key={product.id} product={product} />)
}

const groupById = (list) => list.reduce((r, v) => ((r[v.id] = v), r), {})

function useProducts() {
  const [products, setProducts] = React.useState({
    data: {},
    order: [],
    orderPrice: [],
  })

  const [currentOrder, setCurrentOrder] = React.useState(`order`)

  React.useEffect(() => {
    const indexed = groupById(mockList)
    const order = Object.keys(indexed)
    const orderPrice = [...order].sort(
      (a, b) => indexed[a].price - indexed[b].price,
    )

    setProducts({
      data: indexed,
      order,
      orderPrice,
    })
  }, [])

  return {
    products,
    map: (fn) => products[currentOrder].map((id) => fn(products.data[id])),
    switch: () =>
      setCurrentOrder((v) => (v === `order` ? `orderPrice` : `order`)),
  }
}

function Product({product}) {
  return <div>{product.name}</div>
}

const mockList = [
  {id: 1, name: `Product 1`, price: 40},
  {id: 2, name: `Product 2`, price: 30},
  {id: 3, name: `Product 3`, price: 20},
  {id: 4, name: `Product 4`, price: 10},
]
