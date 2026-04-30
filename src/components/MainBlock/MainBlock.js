import Question from "../Question/Question";
import AnswerButton from "../AnswerButton/AnswerButton";
import HelpButton from "../HelpButton/HelpButton";
import Score from "../Score/Score";
import SubmitNextButton from "../SubmitNextButton/SubmitNextButton";

import "./MainBlock.css"

import { questions } from "../../data/Question&Answers";
import { useState, useMemo, useEffect } from "react";

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
    const [shuffledQuestions, setShuffledQuestions] = useState([]);

    const [showStartScreen, setShowStartScreen] = useState(true);
    const [showOverlay, setShowOverlay] =  useState(false);
    const [showFinishOverlay, setShowFinishOverlay] = useState(false);
    
    useEffect(() => {
        setShuffledQuestions(shuffleArray([...questions]))
    }, []);

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const shuffledAnswers = useMemo(
        () => currentQuestion ? shuffleArray([...currentQuestion.answers]) : [],
        [currentQuestion]
    );

    const handleSelectAnswer = (answer) => {
        if (!isSubmitted) {
            setSelectedAnswer(answer);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
        if (
            currentQuestion &&
            selectedAnswer === currentQuestion.correctAnswer
        ) {
            setScore(score + 1);
        }
    }

    const handleNextQuestion = () => {
        if (currentQuestionIndex === shuffledQuestions.length -1) {
            setShowFinishOverlay(true);
            return;
        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            setSelectedAnswer(null);
            setIsSubmitted(false);
        }
    }

    if (!currentQuestion) {
        return <div>Loading...</div>;
    }

    return (
        <div className="MainBlock" >
            {showStartScreen && (
                    <div className="OverlayContent">
                        <p>Welcome to the Marvelous Marvel Questionnaire</p>
                        <p>Here we have a series of 20 questions for you to answer</p>
                        <p>Can you prove that you are a super fan?</p>
                        <br/>
                        <div
                            className="Button"
                            onClick={() => setShowStartScreen(false)}
                        >
                            <p>Start</p>
                        </div>
                    </div>
            )}
            {showOverlay && (
                    <div
                        className="OverlayContent"
                        onClick={e => e.stopPropagation()}
                        >
                        <p>Select your answer by clicking it. This will casue it to be highligthed</p>
                        <p>Once you have selected your answer, hit submit. If your selcetion was correct, it will be highligthed Green.
                            If it was wrong it will be red and the correct answer will be green.</p>
                        <p>After you have submitted yuor answer, hit next to see the next question.</p>
                        <br/>
                        <div
                            className="Button"
                            onClick={() => setShowOverlay(false)}
                        >
                            <p>Return</p>
                        </div>
                    </div>
            )}
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
                <HelpButton onClick={() => {
                    setShowOverlay(true)
                }}  />
                <Score
                    score={score}
                />
                <SubmitNextButton
                    onClick={() => {
                        (isSubmitted ? handleNextQuestion : handleSubmit)();
                    }}
                    disable={
                        (!selectedAnswer && !isSubmitted)
                    }
                >  
                    {isSubmitted
                    ? currentQuestionIndex === shuffledQuestions.length - 1
                        ? "Finish"
                        : "Next"
                    : "Submit"}
                </SubmitNextButton>
            </div>
            {showFinishOverlay && (
                <div className="OverlayContent">
                    <p>Finish</p>
                    <br/>
                    <p>Final Score: {score}</p>
                </div>
            )}
        </div>
    )
};

export default MainBlock;