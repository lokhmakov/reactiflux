// https://www.elated.com/working-with-dates/
// https://www.webdevelopersnotes.com/10-ways-to-format-time-and-date-using-javascript

export default function Page() {
  return null
}

console.log(
  new Date().toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
  }),
)
