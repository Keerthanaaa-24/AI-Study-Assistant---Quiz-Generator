const QuizResult = ({ quizData, answers, onReset }) => {
  const { questions } = quizData;
  
  let correctCount = 0;
  questions.forEach((q, index) => {
    if (answers[index] === q.correctAnswer) {
      correctCount++;
    }
  });

  const total = questions.length;
  const percentage = Math.round((correctCount / total) * 100);

  return (
    <div className="card result-card">
      <div className="result-header">
        <h2>Quiz Completed!</h2>
        <div className="score-display">
          <div className="score-circle">
            <span className="score-text">{correctCount} / {total}</span>
          </div>
          <p className="percentage-text">Score: {percentage}%</p>
        </div>
        <div className="stats-row">
          <span className="stat correct">✓ Correct: {correctCount}</span>
          <span className="stat incorrect">✗ Incorrect: {total - correctCount}</span>
        </div>
      </div>
      
      <div className="review-container">
        <h3>Review your answers</h3>
        {questions.map((q, index) => {
          const userAnswer = answers[index];
          const isCorrect = userAnswer === q.correctAnswer;
          return (
            <div key={index} className={`review-block ${isCorrect ? 'correct-block' : 'incorrect-block'}`}>
              <p className="review-question"><strong>Q{index + 1}:</strong> {q.question}</p>
              {isCorrect ? (
                <p className="success-text">✓ Correct ({userAnswer})</p>
              ) : (
                <div className="review-details">
                  <p className="error-text">✗ Your Answer: {userAnswer}</p>
                  <p className="success-text">✓ Correct Answer: {q.correctAnswer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="action-row">
        <button className="btn-primary" onClick={onReset}>Generate Another Quiz</button>
      </div>
    </div>
  );
};

export default QuizResult;
