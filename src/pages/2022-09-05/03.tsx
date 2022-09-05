export default function Page() {
  return (
    <div>
      <textarea
        onChange={(e) => console.log(e.target.selectionStart)}
        onKeyUp={(e) =>
          console.log((e.target as HTMLInputElement).selectionStart)
        }
      />
    </div>
  );
}
