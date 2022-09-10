import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

export default function Page() {
  const [value, setValue] = React.useState('')

  return <div className={() => 'foo'}>123</div>

  return <ReactQuill theme="snow" value={value} onChange={setValue} />
}
