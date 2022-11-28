export default function Page() {
  return null;
}

const list = [
  { date: `2022-09-06T09:32:46` },
  { date: `2022-09-07T09:32:46` },
  { date: `2022-09-08T09:32:46` },
];

const formatDate = (v) =>
  new Date(v).toLocaleDateString('en-US', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
  });

const formatList = (list) =>
  list.map((v) => ({
    ...v,
    date: formatDate(v.date),
  }));

console.log(JSON.stringify(formatList(list))); // => [{"date":"09/06/22"},{"date":"09/07/22"},{"date":"09/08/22"}]
