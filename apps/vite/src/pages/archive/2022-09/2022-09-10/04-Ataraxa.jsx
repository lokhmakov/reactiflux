export default function Page() {
  return (
    <div id="bar">
      <div id="foo" onMouseEnter={(e) => console.log(e.target.id)}>
        Foo
      </div>
    </div>
  )
}
