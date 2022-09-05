export default function Page() {
  return (
    <div>
      <button onClick={(e) => console.log(e.target.innerText)}>
        Your text
      </button>
    </div>
  );
}
