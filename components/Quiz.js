import React from "react"
import Question from "./Question"
import Answer from "./Answer"
import { parseTrivia, NUMBER_OF_QUESTIONS, NUMBER_OF_ANSWERS_PER_QUESTION } from "./../utils"

export default function Quiz({toggleShowIntro}) {
    const [triviaQuestions, setTriviaQuestions] = React.useState([])
    const [selectedAnswers, setSelectedAnswers] = React.useState(() => populateSelectedAnswers())
    const [quizSubmitted, setQuizSubmitted] = React.useState(false)
    
    let numOfCorrectAnswers = 0
    for (let i = 0; quizSubmitted && i < triviaQuestions.length; i++) {
        for (let j = 0; j < triviaQuestions[i].answers.length; j++) {
            if ((triviaQuestions[i].correctAnswer === triviaQuestions[i].answers[j]) && selectedAnswers[i][j]) numOfCorrectAnswers++
        }
    }
    
    function populateSelectedAnswers() {
        return (new Array(NUMBER_OF_QUESTIONS).fill(null).map((_, i) =>
            new Array(NUMBER_OF_ANSWERS_PER_QUESTION).fill(false))
        )
    }
    
    React.useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=${NUMBER_OF_QUESTIONS}&category=15&difficulty=easy&type=multiple`)
            .then(res => res.json())
            .then(data => setTriviaQuestions(parseTrivia(data.results)))
            .catch(err => console.error("Fetch error: " + err))
    }, [])
    
    const triviaQuestionElements = triviaQuestions && triviaQuestions.length > 0 
        ? triviaQuestions.map((triviaQuestion, qIndex) => (
            <div key={`q-${qIndex}`}>
                <Question question={triviaQuestion.question} />

                <div className="question-answers">
                {triviaQuestion.answers.map((answer, aIndex) => (
                    <Answer
                    key={`a-${qIndex}-${aIndex}`}
                    answer={answer}
                    quizSubmitted={quizSubmitted}
                    isCorrect={answer === triviaQuestion.correctAnswer}
                    isSelected={selectedAnswers[qIndex][aIndex]}
                    togglePressed={togglePressed}
                    id={`${qIndex}-${aIndex}`}
                    />
                ))}
                </div>
                
                <hr/>
            </div>
            ))
        : null
        
    
    function togglePressed(id) {
        let [qI, aI] = id.split("-").map(index => parseInt(index))
        
        setSelectedAnswers(prevSelectedAnswers => {
            const newSelected = prevSelectedAnswers.map(row => [...row]);
            newSelected[qI] = newSelected[qI].map(() => false);
            newSelected[qI][aI] = !newSelected[qI][aI];
            return newSelected;
        })
    }
    
    function submitQuiz() {
        setQuizSubmitted(true)
    }
    
    return (
        <React.Fragment>
            <img className="top-right small" src="../images/topright-blob.png"/>
            
            <section className="quiz">
                {triviaQuestions.length > 0 ? triviaQuestionElements : <p>Loading trivia questions...</p>}
            </section>
            
            {!quizSubmitted ? <button className="check-answer" onClick={submitQuiz}>Check answers</button> : null}
            {quizSubmitted ? 
                <div className="correct-answers-container">
                    <h3 className="correct-answer-count">You scored {numOfCorrectAnswers}/{triviaQuestions.length} correct answers</h3>
                    <button className="play-again" onClick={toggleShowIntro}>Play again</button>
                </div>
            : null}
            <img className="bottom-left small" src="../images/bottomleft-blob.png"/>
        </React.Fragment>
    )
}
