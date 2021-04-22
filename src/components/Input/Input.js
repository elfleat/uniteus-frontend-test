
const Input = ({ placeholder = "", onChange, className, value }) => {
    return (
        <div>
            <input
                className={className}
                type="text"
                value={value}
                onChange={({ target }) => onChange(target.value)} placeholder={placeholder}
            />
        </div>
    )
};

export default Input;