import * as React from 'react'

export default function List() {
  const [selectedProductIds, setSelectedProductIds] = React.useState([])
  const [products, setProducts] = React.useState([])

  React.useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => setProducts(res.products))
  }, [])

  function handleResetClick(e) {
    e.preventDefault()
    setSelectedProductIds([])
  }

  function isChecked(list, id) {
    return list.includes(id)
  }

  const handleToggle = React.useCallback((product) => {
    setSelectedProductIds((prev) => {
      if (!isChecked(prev, product.id)) {
        return [...prev, product.id]
      } else {
        return prev.filter((item) => item !== product.id)
      }
    })
  }, [])

  return (
    <>
      <form>
        {products.map((product) => (
          <Item
            key={product.id}
            isChecked={isChecked(selectedProductIds, product.id)}
            product={product}
            onToggleSelectProduct={handleToggle}
          />
        ))}
        <button onClick={handleResetClick}>Reset</button>
      </form>
    </>
  )
}

const Item = React.memo(function Item({
  product,
  isChecked,
  onToggleSelectProduct,
}) {
  console.log(`render`)

  return (
    <div>
      <label htmlFor={product.title}>
        <input
          id={product.title}
          className="title"
          type="checkbox"
          checked={isChecked}
          onChange={() => onToggleSelectProduct(product)}
        />
        {product.title}
      </label>
    </div>
  )
})
