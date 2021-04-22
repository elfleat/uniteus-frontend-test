import "./submitButton.css";

const SubmitButton = ({ onClick, className, label }) => {
    return (
        <>
            <button onClick={onClick} className="submit-button">{label}</button>
        </>
    );
};

export default SubmitButton;