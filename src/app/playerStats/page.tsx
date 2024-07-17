"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

interface PlayerStats {
  Player: string;
  Nation: string;
  Position: string;
  Squad: string;
  DOB: string;
  Goals: number;
  Assists: number;
  Minutes: number;
  Starts: number;
  "G+A": number;
  NonPenKickGoals: number;
  PenKickAttempted: number;
  PenKickMade: number;
  Yellow: number;
  RedCard: number;
}

export default function PlayerStats() {
  const [data, setData] = useState<PlayerStats[]>([]);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fetch("/api/player-stats")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-black">
        <h1 className="text-5xl mb-10 font-bold">Player Stats</h1>
        <Table
          aria-label="Player Stats Table"
          style={{
            height: "auto",
            width: "100%",
            backgroundColor: "white",
          }}
        >
          <TableHeader>
            <TableColumn>Player</TableColumn>
            <TableColumn>Position</TableColumn>
            <TableColumn>Squad</TableColumn>
            <TableColumn>G</TableColumn>
            <TableColumn>A</TableColumn>
            <TableColumn>Mins</TableColumn>
            <TableColumn>Starts</TableColumn>
            <TableColumn>G+A</TableColumn>
            <TableColumn>NonPenKickGoals</TableColumn>
            <TableColumn>PenKickAttempted</TableColumn>
            <TableColumn>PenKickMade</TableColumn>
            <TableColumn>YellowCards</TableColumn>
            <TableColumn>RedCards</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((player, index) => (
              <TableRow key={index}>
                <TableCell className="bg-purple-500 rounded-lg text-center p-4">
                  {player.Player}
                </TableCell>
                <TableCell className="bg-pink-500 rounded-lg text-center p-4">
                  {player.Position}
                </TableCell>
                <TableCell className="text-center p-4">{player.Squad}</TableCell>
                <TableCell className="text-center p-4">{player.Goals}</TableCell>
                <TableCell className="text-center p-4">{player.Assists}</TableCell>
                <TableCell className="text-center p-4">{player.Minutes}</TableCell>
                <TableCell className="text-center p-4">{player.Starts}</TableCell>
                <TableCell className="text-center p-4">{player["G+A"]}</TableCell>
                <TableCell className="text-center p-4">{player.NonPenKickGoals}</TableCell>
                <TableCell className="text-center p-4">{player.PenKickAttempted}</TableCell>
                <TableCell className="text-center p-4">{player.PenKickMade}</TableCell>
                <TableCell className="text-center p-4">{player.Yellow}</TableCell>
                <TableCell className="text-center p-4">{player.RedCard}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
