const push = (map, key, value) => (
  (map[key] = map[key] || []), map[key].push(value), map
);
const groupBy = (list, mapIndex, mapValue) =>
  list.reduce((r, v) => push(r, mapIndex(v), mapValue(v)), {});
const ourIndex = (v) => v.size;
const ourValue = (v) => v;

const arr = [
  {
    text: 'one',
    size: 'big',
  },
  {
    text: 'two',
    size: 'small',
  },
  {
    text: 'three',
    size: 'small',
  },
  {
    text: 'four',
    size: 'small',
  },
  {
    text: 'five',
    size: 'small',
  },
  {
    text: 'six',
    size: 'big',
  },
];

const list = groupBy(arr, ourIndex, ourValue);

console.log(list);
