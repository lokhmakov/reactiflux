import {data} from './data.js'

const push = (map, key, value) => (
  (map[key] = map[key] || []), map[key].push(value), map
);
const groupBy = (list, mapIndex, mapValue) =>
  list.reduce((r, v) => push(r, mapIndex(v), mapValue(v)), {});
const ourIndex = ([key, value]) => value
const ourValue = ([key, value]) => key

