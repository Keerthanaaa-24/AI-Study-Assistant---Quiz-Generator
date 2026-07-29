const QuizQuestion = ({ quizData, onComplete }) => {
  const { topic, difficulty, questions } = quizData;
  const [answers, setAnswers] = useState({});

  const handleSelect = (qIndex, option) => {
    setAnswers({
      ...answers,
      [qIndex]: option
    });
  };

  const handleSubmit = () => {
    onComplete(answers);
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="card quiz-card">
      <div className="quiz-header">
        <h2>{topic} Quiz</h2>
        <span className="badge">Difficulty: {difficulty}</span>
      </div>
      <div className="questions-container">
        {questions.map((q, index) => (
          <div key={index} className="question-block">
            <h3>Question {index + 1} of {questions.length}</h3>
            <p className="question-text">{q.question}</p>
            <div className="options-list">
              {q.options.map((option, optIdx) => (
                <label 
                  key={optIdx} 
                  className={`option-label ${answers[index] === option ? 'selected' : ''}`}
                >
                  <input 
                    type="radio" 
                    name={`question-${index}`} 
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleSelect(index, option)}
                  />
                  <span className="option-text">{option}</span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="quiz-actions">
        <button 
          className="btn-primary" 
          onClick={handleSubmit} 
          disabled={!allAnswered}
        >
          Submit Quiz
        </button>
        {!allAnswered && <p className="help-text">Please answer all questions to submit.</p>}
      </div>
    </div>
  );
};

import { useState } from 'react';
export default QuizQuestion;
