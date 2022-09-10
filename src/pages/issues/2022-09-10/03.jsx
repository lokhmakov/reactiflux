const footerList = [
  {name: `a`, href: `/`},
  {name: `b`, href: `/`},
  {name: `c`, href: `/`},
  {name: `d`, href: `/`},
]

export default function Page() {
  return <List />
}

const List = (props) => {
  return (
    <div>
      <p className="font-bold text-xl">{props.title}</p>
      <ul>
        {footerList.map(function ({item, href}, key) {
          return (
            <li key={key}>
              <Link href={href}>{item}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
