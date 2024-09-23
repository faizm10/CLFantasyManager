"use client";
import React, { useState } from "react";
import { questions, AnswerOption } from '@/app/miniGames/quiz/questions';

export default function UclQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerButtonClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-cyan-500 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-24 text-white">
        <h1 className="text-5xl mb-5 font-bold">UCL Quiz</h1>
        {showScore ? (
          <div className="text-3xl">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="text-2xl mb-6">{questions[currentQuestion].questionText}</div>
            <div className="grid grid-cols-2 gap-4">
              {questions[currentQuestion].answerOptions.map((option: AnswerOption, index: number) => (
                <button
                  key={index}
                  onClick={() => handleAnswerButtonClick(option.isCorrect)}
                  className="bg-white text-blue-900 p-4 rounded hover:bg-blue-700 hover:text-white transition duration-300"
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
