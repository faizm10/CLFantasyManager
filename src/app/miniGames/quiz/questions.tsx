import React, { useState } from "react";
export type AnswerOption = {
  answerText: string;
  isCorrect: boolean;
};

export type Question = {
  questionText: string;
  answerOptions: AnswerOption[];
};
export const questions: Question[] = [
  {
    questionText:
      "Who was the top scorer in the 2023/2024 UEFA Champions League season?",
    answerOptions: [
      { answerText: "Harry Kane", isCorrect: true },
      { answerText: "Erling Haaland", isCorrect: false },
      { answerText: "Robert Lewandowski", isCorrect: false },
      { answerText: "Antoine Griezmann", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which team kept the most clean sheets in 2023/2024 Champions League season?",
    answerOptions: [
      { answerText: "Manchester City", isCorrect: false },
      { answerText: "Borussia Dortmund", isCorrect: true },
      { answerText: "Paris Saint-Germain", isCorrect: false },
      { answerText: "Real Madrid", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which player provided the most assists during the 2023/2024 Champions League season?",
    answerOptions: [
      { answerText: "Jude Bellingham", isCorrect: true },
      { answerText: "Ilkay Gündogan", isCorrect: false },
      { answerText: "Bukayo Saka", isCorrect: false },
      { answerText: "Vinícius Júnior", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which club had the highest average possession percentage in the 2023/2024 Champions League?",
    answerOptions: [
      { answerText: "Barcelona", isCorrect: false },
      { answerText: "Bayern Munich", isCorrect: true },
      { answerText: "Manchester City", isCorrect: true },
      { answerText: "Paris Saint-Germain", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which player created the most chances during the 2023/2024 Champions League season?",
    answerOptions: [
      { answerText: "Thibaut Courtois", isCorrect: false },
      { answerText: "Julian Brandt", isCorrect: true },
      { answerText: "Antoine Griezmann", isCorrect: false },
      { answerText: "Joshua Kimmich", isCorrect: false },
    ],
  },
  {
    questionText: "Which team won the 2023/2024 UEFA Champions League?",
    answerOptions: [
      { answerText: "Paris Saint-Germain", isCorrect: false },
      { answerText: "Bayern Munich", isCorrect: false },
      { answerText: "Manchester City", isCorrect: false },
      { answerText: "Real Madrid", isCorrect: true },
    ],
  },
  {
    questionText:
      "Which team had the most goals in the 2023/2024 Champions League group stages?",
    answerOptions: [
      { answerText: "Manchester City", isCorrect: true },
      { answerText: "Juventus", isCorrect: false },
      { answerText: "Barcelona", isCorrect: false },
      { answerText: "Napoli", isCorrect: false },
    ],
  },
  {
    questionText: "Who scored first in the Champions League Final?",
    answerOptions: [
      { answerText: "Vinícius Júnior", isCorrect: false },
      { answerText: "Jude Bellingham", isCorrect: false },
      { answerText: "Dani Carvajal", isCorrect: true },
      { answerText: "None of the Above", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which team made the most tackles during 2023/2024 Champions League season?",
    answerOptions: [
      { answerText: "Real Madrid", isCorrect: false },
      { answerText: "Atlético de Madrid", isCorrect: false },
      { answerText: "Borussia Dortmund", isCorrect: true },
      { answerText: "FC Barcelona", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which player had the most assists in the 2023/2024 UEFA Champions League season?",
    answerOptions: [
      { answerText: "Vinícius Júnior", isCorrect: false },
      { answerText: "Jude Bellingham", isCorrect: false },
      { answerText: "Kevin De Bruyne", isCorrect: true },
      { answerText: "Lionel Messi", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which team had the best defensive record (fewest goals conceded) in the 2023/2024 UEFA Champions League?",
    answerOptions: [
      { answerText: "Real Madrid", isCorrect: false },
      { answerText: "Inter Milan", isCorrect: true },
      { answerText: "Bayern Munich", isCorrect: false },
      { answerText: "Manchester City", isCorrect: false },
    ],
  },
  {
    questionText:
      "Who won the Golden Boot in the 2023/2024 UEFA Champions League season?",
    answerOptions: [
      { answerText: "Harry Kane", isCorrect: true },
      { answerText: "Erling Haaland", isCorrect: false },
      { answerText: "Kylian Mbappé", isCorrect: false },
      { answerText: "Robert Lewandowski", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which team scored the most goals during the 2023/2024 UEFA Champions League knockout stages?",
    answerOptions: [
      { answerText: "Manchester City", isCorrect: true },
      { answerText: "Real Madrid", isCorrect: false },
      { answerText: "Bayern Munich", isCorrect: false },
      { answerText: "Barcelona", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which player made the most appearances in the 2023/2024 UEFA Champions League season?",
    answerOptions: [
      { answerText: "Jude Bellingham", isCorrect: false },
      { answerText: "Kevin De Bruyne", isCorrect: false },
      { answerText: "Vinícius Júnior", isCorrect: true },
      { answerText: "Erling Haaland", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which goalkeeper saved the most penalties during the 2023/2024 UEFA Champions League season?",
    answerOptions: [
      { answerText: "Thibaut Courtois", isCorrect: false },
      { answerText: "Ederson", isCorrect: true },
      { answerText: "Mike Maignan", isCorrect: false },
      { answerText: "Gianluigi Donnarumma", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which team had the highest possession percentage in the 2023/2024 UEFA Champions League season?",
    answerOptions: [
      { answerText: "Real Madrid", isCorrect: false },
      { answerText: "Barcelona", isCorrect: false },
      { answerText: "Manchester City", isCorrect: true },
      { answerText: "Paris Saint-Germain", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which manager led their team to win the 2023/2024 UEFA Champions League?",
    answerOptions: [
      { answerText: "Pep Guardiola", isCorrect: false },
      { answerText: "Carlo Ancelotti", isCorrect: true },
      { answerText: "Xavi Hernandez", isCorrect: false },
      { answerText: "Julian Nagelsmann", isCorrect: false },
    ],
  },
  {
    questionText:
      "Which player won the UEFA Champions League 2023/2024 Player of the Tournament?",
    answerOptions: [
      { answerText: "Harry Kane", isCorrect: false },
      { answerText: "Vinícius Júnior", isCorrect: true },
      { answerText: "Kevin De Bruyne", isCorrect: false },
      { answerText: "Kylian Mbappé", isCorrect: false },
    ],
  },
];
