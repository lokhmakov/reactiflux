const skills = [`value1`, `value2`, `value3`]

export default function Page() {
  return (
    <>
      <div>{skills.join(`, `)}</div>
      <div>{skills.map(mapSkill)}</div>
      <div>{firstSkill(skills)}</div>
    </>
  )
}

const mapSkill = (label, key) => <Skill key={key} label={label} />
const firstSkill = ([skill]) => (skill ? <Skill label={skill} /> : null)
const Skill = ({label}) => <div>{label}</div>
