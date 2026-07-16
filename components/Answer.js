import React from "react"

export default function Answer(props) {
    const [ answer, quizSubmitted, isCorrect, isSelected, togglePressed, id ] = 
        [ props.answer, props.quizSubmitted, props.isCorrect, props.isSelected, props.togglePressed, props.id ]
        
    let className = ""
    if (quizSubmitted)
        className = isCorrect ? "correct" : 
                    isSelected ? "incorrect" : "disabled"
    else {
        className = isSelected ? "selected" : "answer"
    }
    
    return (
        <button className={className} onClick={() => togglePressed(id)}>{answer}</button>
    )
}