const cache = {}

// const getOrganizationName = async (tenantId) => {
//   if (cache[tenantId]) {
//     return cache[tenantId]
//   }
//   const data = await organizationResource.query({q: {tenant_id: tenantId}})
//   cache[tenantId] = data
//   return data
// }

const getOrganizationName = (tenantId) =>
  organizationResource.query({q: {tenant_id: tenantId}})

export default function App() {
  const [data, setData] = React.useState(null)

  React.useEffect(() => {
    Promise.all(props.rawData.map((r) => getOrganizationName(r.tenant_id)))
      .then(setData)
      .catch(console.warn)
  }, [props.rawData])

  return null
}
