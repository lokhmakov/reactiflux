import {
  Dot,
  Cross,
  ComposedChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Scatter,
  Tooltip,
} from 'recharts'

const data = [
  {
    date: '2',
    value: 40,
    typeOfWater: 'salty',
  },
  {
    date: '3',
    value: 45,
    typeOfWater: 'sweety',
  },
  {
    date: '4',
    value: 40,
    typeOfWater: 'salty',
  },
  {
    date: '5',
    value: 45,
    typeOfWater: 'sweety',
  },
]

function CustomShape(props) {
  const {payload, cx, cy} = props

  return payload.typeOfWater === `sweety` ? (
    <circle
      cx={cx - 10}
      cy={cy - 10}
      r={5}
      stroke="black"
      strokeWidth={1}
      fill={`red`}
    />
  ) : (
    <rect x={cx - 10} y={cy - 10} width="10" height="10" />
  )
}

export default function App() {
  return (
    <ComposedChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 20,
        right: 80,
        bottom: 20,
        left: 20,
      }}
    >
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <XAxis
        dataKey="date"
        label={{value: 'Index', position: 'insideBottomRight', offset: 0}}
      />
      <YAxis
        dataKey="value"
        label={{value: 'value', angle: -90, position: 'insideLeft'}}
      />
      <Scatter shape={CustomShape} dataKey="typeOfWater" />
    </ComposedChart>
  )
}
