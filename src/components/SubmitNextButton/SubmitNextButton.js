import "./SubmitNextButton.css"

function SubmitNextButton({ onClick, disable, children }) {
    return (
        <div
            className={`SubmitNextButton ${disable ? "disable" : ""}`}
            onClick={!disable ? onClick : undefined}
        >
            <p>{children}</p>
        </div>
    )
};

export default SubmitNextButton;