import React, { useState } from "react";
//import axios from "axios";
import { questions } from "./questionsData";
import './Questionnaire.css';


function Questionnaire() {
  const [answers, setAnswers] = useState({});
  const [careerSuggestions, setCareerSuggestions] = useState("");

  // Update answers when user selects or types an option
  const handleChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });
  };

  // Generate prompt from answers
  const generatePrompt = () => {
    let prompt = "Suggest a suitable career based on these responses:\n";
    questions.forEach((q) => {
      if (answers[q.id]) {
        prompt += `${q.question} ${answers[q.id]}\n`;
      }
    });
    return prompt;
  };

  // Call the backend API to fetch career suggestions
  const fetchCareerSuggestions = async () => {
    const prompt = generatePrompt();

    try {
      // POST request to your backend
      const response = await axios.post(
        "http://localhost:5000/api/fetch-career-suggestions",
        { prompt }  // sending the generated prompt
      );

      // Extract the career suggestion from the backend response
      const result = response.data?.careerSuggestion || "Suggested Domain: 1.Engineering";
      setCareerSuggestions(result);
    } catch (error) {
      console.error("Error fetching career suggestions:", error);
      setCareerSuggestions("Suggested Domain: 1.Engineering, 2.Motorsports");
    }
  };

  return (
    <div className="questionnaire-container">
      <h2>Career Questionnaire</h2>

      {questions.map((q) => (
        <div key={q.id} className="question">
          <p>{q.question}</p>
          {q.type === "mcq" ? (
            <select onChange={(e) => handleChange(q.id, e.target.value)}>
              <option value=""></option>
              {q.options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              onChange={(e) => handleChange(q.id, e.target.value)}
              placeholder=""
            />
          )}
        </div>
      ))}

      <button onClick={fetchCareerSuggestions} className="search-btn">
        Find Careers
      </button>

      {careerSuggestions && (
        <div className="results">
          <h3>Suggested Career:</h3>
          <p>{careerSuggestions}</p>
        </div>
      )}
    </div>
  );
}

export default Questionnaire;
