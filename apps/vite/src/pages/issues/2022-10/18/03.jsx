export default function App() {
  return (
    <Layout>
      {/*Your router stuff*/}
      <PageLogin />
    </Layout>
  )
}

function PageLogin() {
  return (
    <main>
      <h1>PageLogin</h1>
    </main>
  )
}

function PageHome() {
  return (
    <main>
      <h1>PageHome</h1>
    </main>
  )
}

function Layout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

function Header() {
  return <header>Mmm, header - nice!</header>
}

function Footer() {
  return <footer>Footer! Finish</footer>
}
