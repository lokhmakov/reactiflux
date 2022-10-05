import styled from 'styled-components'

export default function App() {
  return (
    <Layout>
      <table>
        <tbody>
          <TableData />
        </tbody>
      </table>
    </Layout>
  )
}

export function TableData() {
  return units?.units?.map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>
        <CostCell cost={item.cost} />
      </td>
    </tr>
  ))
}

function CostCell({cost}) {
  return Object.entries(cost)
    .map(([key, value]) => `${key}: ${value}`)
    .join(`, `)
}

const units = {
  units: [
    {
      id: `1`,
      name: `Arched`,
      age: `Feudal`,
      cost: {
        Food: 25,
        Gold: 45,
      },
    },
    {
      id: `2`,
      name: `Crossbowman`,
      age: `Castle`,
      cost: {
        Wood: 25,
        Gold: 45,
      },
    },
  ],
}

const Layout = styled.div`
  table,
  tr,
  td {
    border: 1px solid black;
  }

  td {
    padding: 0.5rem;
  }
`
