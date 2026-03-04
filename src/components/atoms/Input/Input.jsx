import './Input.css';

const Input = ({ 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder,
  required = false,
  disabled = false,
  error 
}) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={`input ${error ? 'input-error' : ''}`}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
};

export default Input;
