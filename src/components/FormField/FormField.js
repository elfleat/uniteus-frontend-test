import { Input } from './..';
import './formField.css';

const FormField = ({ value, label, onChange }) => {
    return (
        <label className="form-field-container">
            <span>{label}</span>
            <Input className={`filter-input filter-input-${label}`} value={value} onChange={onChange} />
        </label>
    );
};

export default FormField;