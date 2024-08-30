"use client";
import React, { useState, useEffect } from "react";
import { Link, Card, CardHeader, CardBody } from "@nextui-org/react";

type BallPosition = {
  top: string;
  left: string;
  animationDuration: string;
  animationDelay: string;
};

const games = [
  {
    title: "Guess Who",
    description: "Try to guess the football player!",
    image: "/images/guess-who.gif",
    link: "/miniGames/guessWho",
  },
  {
    title: "Quiz",
    description: "Test your football knowledge!",
    image: "/images/quiz.gif",
    link: "/miniGames/quiz",
  },
  {
    title: "Tic Tac Toe",
    description: "Classic Tic Tac Toe with a football twist!",
    image: "/images/ticTacToe.gif",
    link: "/miniGames/ticTacToe",
  },
  {
    title: "Football Wordle",
    description: "Guess the football-related word!",
    image: "/images/wordle.gif",
    link: "/miniGames/wordle",
  },
];

export default function UCLQuiz() {
  const [ballPositions, setBallPositions] = useState<BallPosition[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const positions = [...Array(10)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      animationDuration: `${8 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
    setBallPositions(positions);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? games.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === games.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentGame = games[currentIndex];

  return (
    <div className="mt-4 flex flex-col min-h-screen font-serif font-semibold bg-black">
      <div className="soccer-ball-bg">
        {ballPositions.map((style, i) => (
          <div
            key={i}
            className="soccer-ball"
            style={style}
          ></div>
        ))}
      </div>
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-white relative">
        <h1 className="text-5xl mb-10 font-bold font-custom">Mini Games</h1>

        <div className="relative flex items-center justify-center w-full max-w-4xl">
          <button
            className="absolute left-0 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-md transition-all duration-300 transform hover:scale-110 focus:outline-none"
            onClick={handlePrev}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <Link href={currentGame.link} className="w-full max-w-md">
            <Card
              className="cursor-pointer w-full bg-white/90 backdrop-blur-md rounded-lg shadow-2xl transition-transform transform-gpu hover:scale-105 hover:rotate-1"
              isHoverable
              isPressable
            >
              <CardHeader className="text-center">
                <h2 className="text-3xl font-bold text-black font-custom2">{currentGame.title}</h2>
              </CardHeader>
              <CardBody className="flex flex-col items-center">
                <img
                  src={currentGame.image}
                  alt={currentGame.title}
                  className="h-48 w-full object-cover rounded-lg mb-4 shadow-md"
                />
                <p className="text-center text-lg text-black font-custom3">{currentGame.description}</p>
              </CardBody>
            </Card>
          </Link>

          <button
            className="absolute right-0 z-10 p-2 rounded-full bg-white/20 hover:bg-white/40 shadow-lg backdrop-blur-md transition-all duration-300 transform hover:scale-110 focus:outline-none"
            onClick={handleNext}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-8 w-8 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  );
}
