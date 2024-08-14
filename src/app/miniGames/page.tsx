import React from "react";
import {
  Link,
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardBody,
  Checkbox,
  Divider,
} from "@nextui-org/react";

export default function uclQuiz() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-cyan-500 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-24 text-white">
        <h1 className="text-5xl mb-5 font-bold">Mini Games</h1>
        <div className="flex flex-wrap">
          <Button
            href="/miniGames/guessWho"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            Guess Who
          </Button>
          <Button
            href="/miniGames/quiz"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            Quiz
          </Button>
          <Button
            href="/miniGames/ticTacToe"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            Tic Tac Toe
          </Button>
          <Button
            href="/miniGames/wordle"
            as={Link}
            color="primary"
            showAnchorIcon
            variant="solid"
          >
            Football Wordle
          </Button>
        </div>
      </main>
    </div>
  );
}
