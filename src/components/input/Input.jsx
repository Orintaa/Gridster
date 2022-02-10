import "./input.css";

export const Input = ({ label, value, name, onChange }) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className="input"
        type="text"
        name={name}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};
