import type jsonType from './01.json'
import json from './01.json'

type Item = typeof jsonType[number]

export function getData() {
  return json
}
