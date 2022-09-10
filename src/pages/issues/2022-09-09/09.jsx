const roles = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Page() {
  return <h1 className="font-bold">Page (09)</h1>
}

const list = [
  {ID: 91, ZoneID: 8, RoleID: 18},
  {ID: 92, ZoneID: 9, RoleID: 18},
  {ID: 93, ZoneID: 11, RoleID: 18},
  {ID: 94, ZoneID: 12, RoleID: 18},
]

const makeIndexes = (list) =>
  list.reduce((r, v) => {
    if (!r[v.ZoneID]) {
      r[v.ZoneID] = {}
    }
    r[v.ZoneID][v.RoleID] = true
    return r
  }, {})

const indexes = makeIndexes(list)

console.log(JSON.stringify(indexes)) // => {"8":{"18":true},"9":{"18":true},"11":{"18":true},"12":{"18":true}}

console.log(indexes?.[10]?.[20] || false)

// function YourComponent() {
//   // useEffect

//   return (
//     <>
//       {zones.map((zoneId) => (
//         <HeaderZone />
//       ))}
//       {roles.map((roleId) => (
//         <>
//           <HeaderRole />
//           {zones.map(() => (
//             <Cell active={indexes[zoneId][roleId]} />
//           ))}
//         </>
//       ))}
//     </>
//   )
// }
