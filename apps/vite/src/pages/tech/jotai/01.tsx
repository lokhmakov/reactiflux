import {atom} from 'jotai'
import {useAtom} from 'jotai'
import type {PrimitiveAtom} from 'jotai'

type Connection = {
  name: string
  type: `remote` | `local`
  url?: string
}

const connections = atom<PrimitiveAtom<Connection>[]>([])
const selectedConnection = atom<string | null>(`name`)

console.log(selectedConnection)

export default function Page() {
  const [name] = useAtom(selectedConnection)

  console.log(name)

  return <div>{name}</div>
}
