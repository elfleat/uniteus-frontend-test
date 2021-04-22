
const Input = ({ placeholder = "", onChange, className, value }) => {
    return (
        <>
            <input
                className={className}
                type="text"
                value={value}
                onChange={({ target }) => onChange(target.value)} placeholder={placeholder}
            />
        </>
    );
};

export default Input;