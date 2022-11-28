import createStore from 'zustand/vanilla'

type Connection = {
  name: string
  type: `remote` | `local`
  url?: string
}

interface ConnectionsState {
  connections: Connection[]
  selectedName: string | null

  choose: (name: string) => void
}

const connections = createStore<ConnectionsState>((set, get) => ({
  connections: [],
  selectedName: null,

  choose: (selectedName) => set({selectedName}),
}))

connections.subscribe((state) => console.log(`connections`, state))

connections.setState({selectedName: `12345`})
