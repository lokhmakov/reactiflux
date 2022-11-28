import * as React from 'react'

type Context = {
  header: string
  updateHeader: (header: string) => void
}

const Context = React.createContext<Context>({
  header: ``,
  updateHeader: (v) => {},
})

export default function App() {
  const [header, setHeader] = React.useState(`header`)

  const updateHeader = (v: string) => setHeader(v)

  return (
    <Context.Provider value={{header, updateHeader}}>
      {/* Your router stuff */}
      <Layout>
        <Page1 />
      </Layout>
    </Context.Provider>
  )
}

function Layout(props: {children: React.ReactNode}) {
  const {header} = React.useContext(Context)

  return (
    <>
      <div>{header}</div>
      {props.children}
    </>
  )
}

function Page1() {
  const {updateHeader} = React.useContext(Context)

  return <button onClick={() => updateHeader(`New header`)}>click me!</button>
}
