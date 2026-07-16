import { decode } from 'html-entities'

export let NUMBER_OF_QUESTIONS = 10
export let NUMBER_OF_ANSWERS_PER_QUESTION = 4

export function parseTrivia(data) {
    let trivia = []
    
    for (let i = 0; i < data.length; i++) {
        trivia.push({
            question: decode(data[i].question),
            correctAnswer: decode(data[i].correct_answer),
            answers: shuffleArray([decode(data[i].correct_answer), ...decodeArray(data[i].incorrect_answers)])
        })
    }
    
    return trivia
}

function decodeArray(array) {
    for (let i = 0; i < array.length; i++){
        array[i] = decode(array[i])
    }
    
    return array
}

function shuffleArray(array) {
    let currentIndex = array.length

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    
    return array
}