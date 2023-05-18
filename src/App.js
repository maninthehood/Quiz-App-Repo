import React from 'react';
import { useState } from 'react';
import { questions } from './data.js';
import './style.css';

export default function App() {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true)
    }
  };
  return (
    <main className="app">
    </main>
  );
}
