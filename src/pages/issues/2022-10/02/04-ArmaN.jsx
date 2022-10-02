import * as React from 'react'

const Context = React.createContext()

export default function App() {
  const [header, setHeader] = React.useState(`header`)

  const updateHeader = (s) => setHeader(s)

  return (
    <Context.Provider value={{header, updateHeader}}>
      {/* Your router stuff */}
      <Layout>
        <Page1 />
      </Layout>
    </Context.Provider>
  )
}

function Layout(props) {
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
