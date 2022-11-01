export const FormDropdown = ({label, name, options}) => (
  <div style={formRow}>
    {label && (
      <label htmlFor={label} style={labelStlye}>
        {label}
      </label>
    )}
    <select name={name} id={label} style={inputStyle}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)
