const types = {
  p: 'p',
  span: 'span',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

const sizes = {
  xs: 'xs',
  sm: 'sm',
  base: 'base',
  // lg: 'lg',
  // xl: 'xl',
  // '2xl': '2xl',
  // '3xl': '3xl',
  // '4xl': '4xl',
  // '5xl': '5xl',
}

export default function Page() {
  return Object.values(types).flatMap((type) =>
    Object.values(sizes).map((size) => (
      <div>
        <Text key={`${type}_${size}`} type={type} size={size}>
          {`${type.toUpperCase()} (${size})`}
        </Text>
      </div>
    )),
  )
}

function Text(props) {
  const Tag = types[props.type] || Empty
  const className = `text--${sizes[props.size] || sizes.base}`

  return <Tag className={className}>{props.children}</Tag>
}

const Empty = () => <div>Unknown</div>
