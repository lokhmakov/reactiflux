const items = [
  {categories: ['React', 'Javascript']},
  {categories: ['CSS', 'CSHCKSB']},
]

export default function Page() {
  const categories = Array.from(
    new Set(items.flatMap(({categories}) => categories)),
  )
  return (
    <>
      {categories.map((e, key) => (console.log(key), (<li key={key}>{e}</li>)))}
    </>
  )
}
