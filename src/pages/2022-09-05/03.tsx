export default function Page() {
  return (
    <div>
      <textarea onChange={(e) => console.log(e.target.selectionStart)} />
    </div>
  );
}
