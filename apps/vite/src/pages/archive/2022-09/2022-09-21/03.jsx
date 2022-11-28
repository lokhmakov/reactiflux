import * as React from 'react'
import qs from 'query-string'

export default function Page() {
  return null
}

const s = `Class=Thing Name=Foobar0
Group=Foo
Tag=Thing`

console.log(qs.parse(s.replace(/[\n ]/g, `&`)))
