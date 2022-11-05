import {event, observable} from '@legendapp/state'

const chooseConnection = event()
const chooseTable = event()

const connections = observable<Connection[]>([])
const selectedConnectionName = observable<string | null>(null)

type Connection = {
  name: string
  type: `remote` | `local`
  url?: string
}
