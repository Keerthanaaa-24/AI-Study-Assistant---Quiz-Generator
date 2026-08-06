import { useState } from 'react'
import QuizGenerator from './components/QuizGenerator'
import QuizQuestion from './components/QuizQuestion'
import QuizResult from './components/QuizResult'
import './index.css'

function App() {
  const [quizData, setQuizData] = useState(null)
  const [quizState, setQuizState] = useState('generator') // 'generator', 'taking', 'result'
  const [answers, setAnswers] = useState(null)

  const handleQuizGenerated = (data) => {
    setQuizData(data)
    setQuizState('taking')
    setAnswers(null)
  }
  
  const handleQuizComplete = (userAnswers) => {
    setAnswers(userAnswers)
    setQuizState('result')
  }

  const handleReset = () => {
    setQuizData(null)
    setQuizState('generator')
    setAnswers(null)
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>AI Study Assistant</h1>
        <p>Quiz Generator Module</p>
      </header>
      
      <main className="main-content">
        {quizState === 'generator' && (
          <QuizGenerator onQuizGenerated={handleQuizGenerated} />
        )}
        
        {quizState === 'taking' && quizData && (
          <QuizQuestion 
            quizData={quizData} 
            onComplete={handleQuizComplete} 
          />
        )}
        
        {quizState === 'result' && quizData && answers && (
          <QuizResult 
            quizData={quizData} 
            answers={answers} 
            onReset={handleReset} 
          />
        )}
      </main>
    </div>
  )
}

export default App
