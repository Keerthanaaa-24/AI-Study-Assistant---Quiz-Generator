import { useState } from 'react';
import axios from 'axios';

const QuizGenerator = ({ onQuizGenerated }) => {
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [numQuestions, setNumQuestions] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError("Please enter a topic.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';
      const response = await axios.post(`${apiUrl}/api/quiz/generate`, {
        topic,
        difficulty,
        numberOfQuestions: numQuestions
      });
      if (response.data && response.data.questions && response.data.questions.length > 0) {
        onQuizGenerated(response.data);
      } else {
        setError("Failed to generate quiz. Please try another topic.");
      }
    } catch (err) {
      console.error("Axios Error Details:", err);
      
      let errorMessage = "Failed to connect to the server. Please ensure the backend is running.";
      if (err.response) {
        // The request was made and the server responded with a status code
        if (err.response.status === 404) {
          errorMessage = "Quiz endpoint not found (404).";
        } else if (err.response.status >= 500) {
          errorMessage = "Server error occurred while generating the quiz (500).";
        } else {
          errorMessage = `Server returned an error: ${err.response.status}`;
        }
      } else if (err.request) {
        // The request was made but no response was received
        if (err.message === "Network Error") {
          errorMessage = "Network Error: Could not reach the backend. Is it running and CORS configured?";
        }
      }
      
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card generator-card">
      <h2>Generate Quiz</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleGenerate}>
        <div className="form-group">
          <label>Topic:</label>
          <input 
            type="text" 
            value={topic} 
            onChange={(e) => setTopic(e.target.value)} 
            placeholder="e.g., Java, Python, HTML"
          />
        </div>
        <div className="form-group">
          <label>Difficulty:</label>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div className="form-group">
          <label>Number of Questions:</label>
          <select value={numQuestions} onChange={(e) => setNumQuestions(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
          </select>
        </div>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? 'Generating your quiz...' : 'Generate Quiz'}
        </button>
      </form>
    </div>
  );
};

export default QuizGenerator;
