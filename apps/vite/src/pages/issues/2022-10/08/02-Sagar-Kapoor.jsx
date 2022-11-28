import * as React from 'react'

export default function App() {
  return <ProductList />
}

const makeOne = (id) => ({
  sku: id,
  name: `name ${id}`,
  price: (Math.random() * 100) | 1,
  type: `type ${id}`,
})

async function getProducts() {
  return [makeOne(`1`), makeOne(`2`), makeOne(`3`)]
}

function ProductList() {
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    getProducts().then(setProducts).catch(console.warn)
  }, [])

  const onSelect = (sku) => {
    setProducts((prev) =>
      prev.map((v) => (v.sku === sku ? {...v, select: !v.select} : v)),
    )
  }

  console.log(products)

  return (
    <div>
      <div className="display">
        {products.map((product, key) => (
          <Product key={key} {...product} onSelect={onSelect} />
        ))}
      </div>
    </div>
  )
}

function Product({sku, name, price, type, onSelect, select}) {
  return (
    <div className="product">
      <div className="select">
        <input
          type="checkbox"
          checked={Boolean(select)}
          onChange={() => onSelect(sku)}
        />
      </div>
      <div className="list">
        <ul>
          <li>{sku}</li>
          <li>{name}</li>
          <li>{price} $</li>
          <li>{type}</li>
        </ul>
      </div>
    </div>
  )
}
