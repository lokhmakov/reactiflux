import axios from 'axios'

const url = `https://deckofcardsapi.com/api/deck/new/shuffle/`

const case1 = ({params}) => axios.get(url, {params})
const case2 = ({params}) =>
  axios({
    method: `get`,
    url,
    params,
  })

async function main() {
  const list = [case1, case2]
  const params = {deck_count: 1}

  list.map((fn, i) => {
    fn({params}).then((r) => console.log(`case ${i + 1}`, r))
  })
}

main()
