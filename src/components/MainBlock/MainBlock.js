import Question from "../Question/Question";
import AnswerButton from "../AnswerButton/AnswerButton";
import HelpButton from "../HelpButton/HelpButton";
import Score from "../Score/Score";
import SubmitNextButton from "../SubmitNextButton/SubmitNextButton";

import "./MainBlock.css"

function MainBlock() {
    return (
        <div className="MainBlock" >
            <Question />
            <div className="AnswerBlock" >
                <div className="AnswerRowOne" >
                    <AnswerButton />
                    <AnswerButton />
                </div>
                <div className="AnswerRowTwo" >
                    <AnswerButton />
                    <AnswerButton />
                </div>
            </div>
            <div className="BottomBar" >
                <HelpButton />
                <Score />
                <SubmitNextButton />
            </div>
        </div>
    )
};

export default MainBlock;