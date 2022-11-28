export default function Page() {
  return <Article title={<>Example article <em className="highlight">title</em></>}/>
}

export function Article({title}) {
  return <>
    {title}
  </>
}