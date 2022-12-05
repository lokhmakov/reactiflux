import * as React from 'react'

import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'

import {useStore, types} from './store'

export default function App() {
  return (
    <div className="flex justify-end">
      <SectionDrawer />
      <SectionActions />
    </div>
  )
}

function SectionActions() {
  const {
    actions: {create},
  } = useStore()

  const _onClick = React.useCallback(
    ({
      target: {
        dataset: {type},
      },
    }) => {
      create({name: `name`, type})
    },
    [create],
  )

  return (
    <div className="flex gap-2 p-2">
      {types.map((type) => (
        <Button
          key={type.name}
          data-type={type.type}
          variant="contained"
          onClick={_onClick}
        >
          {type.name}
        </Button>
      ))}
    </div>
  )
}

function SectionDrawer() {
  const {
    list,
    actions: {open, close, create},
  } = useStore()

  return list.map((item) => (
    <CustomDrawer
      key={item.id}
      isOpen={item.open}
      type={item.type}
      open={() => open({id: item.id})}
    >
      <div onClick={() => close({id: item.id})}>Content ({item.type})</div>
      <Button
        variant="contained"
        onClick={() => create({name: `name`, type: types[2].type})}
      >
        Type 3
      </Button>
    </CustomDrawer>
  ))
}

function CustomDrawer({isOpen, type, open, children}) {
  React.useEffect(() => open?.(), [])

  return (
    <Drawer open={isOpen}>
      <div className="min-w-[300px]">{children}</div>
    </Drawer>
  )
}
