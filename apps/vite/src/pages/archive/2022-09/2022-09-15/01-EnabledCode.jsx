export default function Page() { return null }

var str = 'foo: 1, bar: 2, $name: sawan!, $state: Odisha!'
var obj = str
  .split(',')
  .map(x => x.split(':').map(y => y.trim()))
  .reduce((a, x) => {
    a[x[0]] = x[1];
    return a;
  }, {});
    console.log(obj);


const trim = v => v.trim()
const split = (delim, fn) => v => v.split(delim).map(fn) 
const entries = (s) => Object.fromEntries(split(`,`, split(`:`, trim))(s))

console.log(entries('foo: 1, bar: 2, $name: sawan!, $state: Odisha!'))