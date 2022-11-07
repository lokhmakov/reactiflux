const dayBegin = (d = new Date()) => (d.setUTCHours(0, 0, 0, 0), d)
const dayEnd = (d = new Date()) => (d.setUTCHours(23, 59, 59, 999), d)
const formatTime = (d) => d.toISOString()
const dateAdd15Min = (d) => (d.setMinutes(d.getMinutes() + 15), d)

function* timeRange(
  begin = dayBegin(),
  end = dayEnd(),
  stepFn = dateAdd15Min,
  formatFn = formatTime,
) {
  while (begin < end) yield formatFn(stepFn(begin))
}

console.log([...timeRange()])
