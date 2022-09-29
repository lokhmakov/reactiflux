import * as React from 'react'

const uniqueBy = (list, key = `name`) => [
  ...new Map(list.map((v) => [v[key], v])).values(),
]

export default function App() {
  const [files, setFiles] = React.useState([])

  console.log(files)

  function onChange(e) {
    setFiles((prev) => uniqueBy(prev.concat(...e.target.files)))
  }

  function onRemove(name) {
    setFiles((prev) => prev.filter((v) => v.name !== name))
  }

  return (
    <>
      <input type="file" multiple onChange={onChange} />
      {files.map((v, key) => (
        <div key={key} onClick={() => onRemove(v.name)}>
          {v.name}
        </div>
      ))}
    </>
  )
}
