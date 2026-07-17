import React from "react"
import DropdownMenu from './DropdownMenu.js'
import { categories } from '../categories.js'
import { difficulties } from '../difficulties.js'

const DEFAULT_NUM_QUESTIONS = 10
const DEFAULT_CATEGORY = 0 // Any Category
const DEFAULT_DIFFICULTY = 0 // Any Difficulty

export default function IntroPage({ 
    toggleShowIntro, 
    formData, 
    handleChange 
}) {    
    return (
        <header>
            <img className="top-right" src="../images/topright-blob.png"/>
            <h1>Quizzical</h1>
            <p>Test your knowledge in a quick trivia quiz!</p>
            
            <form id="trivia-form">
                <div className="form-group">
                    <label for="amount">Number of Questions:</label>
                    <input
                        type="number"
                        id="numQuestions"
                        name="numQuestions"
                        min="1"
                        max="50"
                        value={formData.numQuestions}
                        onChange={handleChange}
                    />
                </div>

                <DropdownMenu name="category" options={categories} value={formData.category} onChange={handleChange}/>
                <DropdownMenu name="difficulty" options={difficulties} value={formData.difficulty} onChange={handleChange}/>
            </form>
                        
            <button className="start-quiz" onClick={toggleShowIntro}>Start quiz</button>
            <img className="bottom-left" src="../images/bottomleft-blob.png"/>
        </header>
    )
}