import "./AnswerButton.css"

function AnswerButton({ answer, onSelect, isSelected, isCorrect, isSubmitted }) {
    let className = ""
    if (isSubmitted) {
        if (isCorrect) className = "correct"
        else if (isSelected) className = "incorrect"
    } else if (isSelected) {
        className = "selected"
    }

    return (
        <div
            className={`Answer ${className}`}
            onClick={() => onSelect(answer)}
        >
            <p>{answer}</p>
        </div>
    )
}

export default AnswerButton;