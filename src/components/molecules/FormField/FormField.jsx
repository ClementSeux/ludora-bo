import Label from '../../atoms/Label/Label';
import Input from '../../atoms/Input/Input';
import './FormField.css';

const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  placeholder,
  required = false,
  error 
}) => {
  return (
    <div className="form-field">
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        error={error}
      />
    </div>
  );
};

export default FormField;
