import '@master/css'
import * as React from 'react'
import {cva} from 'class-variance-authority'
import type {VariantProps} from 'class-variance-authority'

export default function App() {
  return (
    <>
      <Button size="small">Small</Button>
      <Button size="small" intent="secondary">
        Small
      </Button>
      <Button>Medium</Button>
      <Button intent="secondary">Medium</Button>
    </>
  )
}

export const Button = (
  props: VariantProps<typeof button> & {children: React.ReactNode},
) => {
  return <button className={button(props)} {...props} />
}

const button = cva([`font:semibold`, `border:1|solid|blue-40`, `r:10`], {
  variants: {
    intent: {
      primary: [
        `bg:blue-50`,
        `font:white`,
        `border:transparent`,
        `bg:blue-60:hover`,
      ],
      secondary: [
        `bg:white`,
        `font:gray-100`,
        `border:gray-40`,
        `bg:gray-80:hover`,
      ],
    },
    size: {
      small: [`font-size:12`, `py:5`, `px:7`],
      medium: [`font-size:14`, `py:7`, `px:14`],
    },
  },
  compoundVariants: [{intent: `primary`, size: `medium`, class: `t:uppercase`}],
  defaultVariants: {
    intent: `primary`,
    size: `medium`,
  },
})
