function getStatsOld(data) {
  const {width, height, weight, maxWeight, length, fuel} = data

  const stats = []

  if (width) {
    stats.push({
      icon: 'arrowHorizontal',
      label: 'Width',
      value: `${width}mm`,
    })
  }

  if (length) {
    stats.push({
      icon: 'arrowHorizontal',
      label: 'Length',
      value: `${length}kg`,
    })
  }

  if (height) {
    stats.push({
      icon: 'arrowVertical',
      label: 'Height',
      value: `${height}kg`,
    })
  }

  if (fuel) {
    stats.push({
      icon: 'fuel',
      label: 'Fuel',
      value: fuel,
    })
  }

  if (weight) {
    stats.push({
      icon: 'weight',
      label: 'Weight',
      value: `${weight}kg`,
    })
  }

  if (maxWeight) {
    stats.push({
      icon: 'weight',
      label: 'Max Weight',
      value: `${maxWeight}kg`,
    })
  }
}

const list = [
  {
    name: `width`,
    icon: `arrowHorizontal`,
    label: `Width`,
    value: ({width}) => `${width}mm`,
  },
  {
    name: `length`,
    icon: `arrowHorizontal`,
    label: `Length`,
    value: ({length}) => `${length}kg`,
  },
]

function getStats(params) {
  return list.reduce(
    (r, v) => (
      v.name in params && params[v.name]
        ? r.push({...v, value: v.value(params)})
        : r,
      r
    ),
    [],
  )
}

console.log(getStats({width: 10, length: 20}))
