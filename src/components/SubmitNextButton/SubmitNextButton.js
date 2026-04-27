import "./SubmitNextButton.css"

function SubmitNextButton({ onClick }) {
    return (
        <div
            className="SubmitNextButton"
            onClick={onClick}
        >
            <p>Submit</p>
        </div>
    )
};

export default SubmitNextButton;