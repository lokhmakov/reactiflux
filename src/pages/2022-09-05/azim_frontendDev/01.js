const list = [
  {
    src: 'xyz1',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz2',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz3',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz4',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz',
    type: 'IMAGE',
    title: '',
  },
  {
    src: 'xyz',
    type: 'VIDEO',
    title: 'bTvOQXvI6k8',
  },
  {
    src: 'xyz',
    type: 'VIDEO',
    title: 'bTvOQXvI6k8',
  },
];

const removeLast = (list, n, fn) =>
  list.reduceRight((r, v) => (n && fn(v) ? n-- : r.unshift(v), r), []);

const fnCompare = (v) => v.type === 'IMAGE';

console.log(removeLast(list, 2, fnCompare));

// Or with upper limit

const removeLastLimit = (list, max, fn) =>
  list.length > max ? removeLast(list, list.length - max, fn) : list;

console.log(removeLastLimit(list, 10, fnCompare));
