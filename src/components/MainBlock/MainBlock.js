import Question from "../Question/Question";
import AnswerButton from "../AnswerButton/AnswerButton";
import HelpButton from "../HelpButton/HelpButton";
import Score from "../Score/Score";
import SubmitNextButton from "../SubmitNextButton/SubmitNextButton";

import "./MainBlock.css"

import { questions } from "../../data/Question&Answers";
import { useState, useMemo } from "react";

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
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];
    const shuffledAnswers =useMemo(
        () => shuffleArray([...currentQuestion.answers]),
        [currentQuestion]
    );

    const handleSelectAnswer = (answer) => {
        if (!isSubmitted) {
            setSelectedAnswer(answer);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1)
        setSelectedAnswer(null);
        setIsSubmitted(false);
    }

    return (
        <div className="MainBlock" >
            <Question text={currentQuestion.question} />
            <div className="AnswerBlock" >
                <div className="AnswerRowOne" >
                    <AnswerButton
                        answer={shuffledAnswers[0]}
                        onSelect={handleSelectAnswer}
                        isSelected={selectedAnswer === shuffledAnswers[0]}
                        isCorrect={shuffledAnswers[0] === currentQuestion.correctAnswer}
                        isSubmitted={isSubmitted}
                    />
                    <AnswerButton
                        answer={shuffledAnswers[1]}
                        onSelect={handleSelectAnswer}
                        isSelected={selectedAnswer === shuffledAnswers[1]}
                        isCorrect={shuffledAnswers[1] === currentQuestion.correctAnswer}
                        isSubmitted={isSubmitted}
                    />
                </div>
                <div className="AnswerRowTwo" >
                    <AnswerButton
                        answer={shuffledAnswers[2]}
                        onSelect={handleSelectAnswer}
                        isSelected={selectedAnswer === shuffledAnswers[2]}
                        isCorrect={shuffledAnswers[2] === currentQuestion.correctAnswer}
                        isSubmitted={isSubmitted}
                    />
                    <AnswerButton
                        answer={shuffledAnswers[3]}
                        onSelect={handleSelectAnswer}
                        isSelected={selectedAnswer === shuffledAnswers[3]}
                        isCorrect={shuffledAnswers[3] === currentQuestion.correctAnswer}
                        isSubmitted={isSubmitted}
                    />
                </div>
            </div>
            <div className="BottomBar" >
                <HelpButton />
                <Score score={score} />
                <SubmitNextButton
                    onClick={handleSubmit}
                />
            </div>
        </div>
    )
};

export default MainBlock;