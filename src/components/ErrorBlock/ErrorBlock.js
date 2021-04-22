import './errorBlock.css';

const ErrorBlock = ({ visible = false, message, onClose }) => {
    return (
        <>
            <div className={`error-block is-${visible ? '' : 'in'}active`}>
                <p>{message} <a href="#" onClick={onClose}>×</a></p>
            </div>
        </>
    );
};

export default ErrorBlock;