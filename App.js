import React from "react"
import IntroPage from "./components/IntroPage"
import Quiz from "./components/Quiz"

export default function App() {
    const [showIntro, setShowIntro] = React.useState(true)
    const [formData, setFormData] = React.useState({
        numQuestions: 10,
        category: 0,
        difficulty: ""
    });

    function toggleShowIntro() {
        setShowIntro(prev => !prev);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        setFormData(prev => {
            const newData = Object.assign({}, prev);
            newData[name] = value;
            return newData;
        });
    };
    
    return (
        <>
            {showIntro && 
                <IntroPage 
                    toggleShowIntro={toggleShowIntro}
                    formData={formData}
                    handleChange={handleChange}
                />
            }
            
            {!showIntro && 
                <Quiz 
                    formData={formData}
                    toggleShowIntro={toggleShowIntro}
                />
            }
        </>
    )
}
