import React from "react"
import IntroPage from "./components/IntroPage"
import Quiz from "./components/Quiz"

export default function App() {
    const [showIntro, setShowIntro] = React.useState(true)
    
    function toggleShowIntro() {
        setShowIntro(prevShowIntro => !prevShowIntro)
    }
    
    return (
        <>
            {showIntro && <IntroPage toggleShowIntro={toggleShowIntro}/>}
            {!showIntro && <Quiz toggleShowIntro={toggleShowIntro}/>}
        </>
    )
}