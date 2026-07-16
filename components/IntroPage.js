import React from "react"

export default function IntroPage({toggleShowIntro}) {
    return (
        <header>
            <img className="top-right" src="../images/topright-blob.png"/>
            <h1>Quizzical</h1>
            <p>Test your knowledge in a quick trivia quiz!</p>
            <button className="start-quiz" onClick={toggleShowIntro}>Start quiz</button>
            <img className="bottom-left" src="../images/bottomleft-blob.png"/>
        </header>
    )
}