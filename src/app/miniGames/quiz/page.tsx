"use client";

import React, { useState } from "react";

type AnswerOption = {
  answerText: string;
  isCorrect: boolean;
};

type Question = {
  questionText: string;
  answerOptions: AnswerOption[];
};

export default function UclQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions: Question[] = [
    {
      questionText: "Who was the top scorer in the 2023/2024 UEFA Champions League season?",
      answerOptions: [
        { answerText: "Harry Kane", isCorrect: true },
        { answerText: "Erling Haaland", isCorrect: false },
        { answerText: "Robert Lewandowski", isCorrect: false },
        { answerText: "Antoine Griezmann", isCorrect: false },
      ],
    },
    {
      questionText: "Which team kept the most clean sheets in 2023/2024 Champions League season?",
      answerOptions: [
        { answerText: "Manchester City", isCorrect: false },
        { answerText: "Borussia Dortmund", isCorrect: true },
        { answerText: "Paris Saint-Germain", isCorrect: false },
        { answerText: "Real Madrid", isCorrect: false },
      ],
    },
    {
      questionText: "Which player provided the most assists during the 2023/2024 Champions League season?",
      answerOptions: [
        { answerText: "Jude Bellingham", isCorrect: true },
        { answerText: "Ilkay Gündogan", isCorrect: false },
        { answerText: "Bukayo Saka", isCorrect: false },
        { answerText: "Vinícius Júnior", isCorrect: false },
      ],
    },
    {
      questionText: "Which club had the highest average possession percentage in the 2023/2024 Champions League?",
      answerOptions: [
        { answerText: "Barcelona", isCorrect: false },
        { answerText: "Bayern Munich", isCorrect: true },
        { answerText: "Manchester City", isCorrect: true },
        { answerText: "Paris Saint-Germain", isCorrect: false },
      ],
    },
    {
      questionText: "Which player created the most chances during the 2023/2024 Champions League season?",
      answerOptions: [
        { answerText: "Thibaut Courtois", isCorrect: false },
        { answerText: "Julian Brandt", isCorrect: true },
        { answerText: "Antoine Griezmann", isCorrect: false },
        { answerText: "Joshua Kimmich", isCorrect: false },
      ],
    },
  ];

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
              {questions[currentQuestion].answerOptions.map((option, index) => (
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
