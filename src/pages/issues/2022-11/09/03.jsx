export default function Page() {
  function changeItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value))
    setIsHidden1(true)
  }

  return (
    <h2
      key={story._id}
      onClick={(e) => changeItem(`stage1`, e.currentTarget.innerText)}
    >
      {story.stage1.first}
    </h2>
  )
}
