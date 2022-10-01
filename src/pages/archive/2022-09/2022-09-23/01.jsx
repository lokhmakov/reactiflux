import IconButton from '@mui/material/IconButton'

export default function App() {
  return (
    <IconButton
      id="id1"
      name="name1"
      onClick={(e) => console.log(e.target.name)}
    >
      Click Me
    </IconButton>
  )
}
