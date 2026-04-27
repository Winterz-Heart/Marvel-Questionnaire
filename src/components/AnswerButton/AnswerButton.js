import "./AnswerButton.css"

function AnswerButton({ answer }) {
    return (
        <div className="Answer">
            <p>{answer}</p>
        </div>
    )
}

export default AnswerButton;