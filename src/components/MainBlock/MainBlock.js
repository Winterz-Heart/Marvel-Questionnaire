import Question from "../Question/Question";
import AnswerButton from "../AnswerButton/AnswerButton";
import HelpButton from "../HelpButton/HelpButton";
import Score from "../Score/Score";
import SubmitNextButton from "../SubmitNextButton/SubmitNextButton";

import "./MainBlock.css"

import { questions } from "../../data/Question&Answers";
import { useState } from "react";

function shuffleArray(array) {
    // Fisher-Yates shuffle
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MainBlock() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const currentQuestion = questions[currentQuestionIndex];
    const shuffledAnswers = shuffleArray(currentQuestion.answers)

    return (
        <div className="MainBlock" >
            <Question text={currentQuestion.questionText}/>
            <div className="AnswerBlock" >
                <div className="AnswerRowOne" >
                    <AnswerButton answer={shuffledAnswers[0]} />
                    <AnswerButton answer={shuffledAnswers[1]} />
                </div>
                <div className="AnswerRowTwo" >
                    <AnswerButton answer={shuffledAnswers[2]} />
                    <AnswerButton answer={shuffledAnswers[3]} />
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