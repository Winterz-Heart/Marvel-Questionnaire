import "./HelpButton.css"

function HelpButton({ onClick }) {
    return (
        <div
            className="HelpButton"
            onClick={onClick}
        >
            <p>Help</p>
        </div>
    )
};

export default HelpButton;