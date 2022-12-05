import {nanoid} from 'nanoid'
import create from 'zustand'
import createStore from 'zustand/vanilla'

export const types = [
  {name: `Type-1`, type: `type1`},
  {name: `Type 2`, type: `type2`},
  {name: `Type 3`, type: `type3`},
]

export const store = createStore((set, get) => ({
  list: [],
  actions: {
    create({name, type}) {
      set(({list}) => ({
        list: list.concat({id: nanoid(), name, type, open: false}),
      }))
    },

    open({id}) {
      console.log(`OPEN`, id)
      set(({list}) => ({
        list: list.map((v) =>
          v.id === id ? Object.assign(v, {open: true}) : v,
        ),
      }))
    },

    close({id}) {
      console.log(`CLOSE`, id)
      set(({list}) => ({
        list: list.map((v) =>
          v.id === id ? Object.assign(v, {open: false}) : v,
        ),
      }))
    },
  },
}))

export const useStore = create(store)
