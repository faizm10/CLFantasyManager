"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Card
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

  useEffect(() => {
    fetch("/api/player-stats")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-cyan-500 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-white">
        <h1 className="text-5xl mb-10 font-bold">Player Stats</h1>
        <Table
          // aria-label="Player Stats Table"
          style={{
            height: "auto",
            minWidth: "100%",
            backgroundColor: "white",
          }}
          className="text-black"
          radius="md"
        >
          <TableHeader>
            <TableColumn>Player</TableColumn>
            <TableColumn>Nation</TableColumn>
            <TableColumn>Position</TableColumn>
            <TableColumn>Squad</TableColumn>
            <TableColumn>DOB</TableColumn>
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
              <TableRow key={index } className=" text-center">
                <TableCell>{player.Player}</TableCell>
                <TableCell>{player.Nation}</TableCell>
                <TableCell>{player.Position}</TableCell>
                <TableCell>{player.Squad}</TableCell>
                <TableCell>{player.DOB}</TableCell>
                <TableCell>{player.Goals}</TableCell>
                <TableCell>{player.Assists}</TableCell>
                <TableCell>{player.Minutes}</TableCell>
                <TableCell>{player.Starts}</TableCell>
                <TableCell>{player["G+A"]}</TableCell>
                <TableCell>{player.NonPenKickGoals}</TableCell>
                <TableCell>{player.PenKickAttempted}</TableCell>
                <TableCell>{player.PenKickMade}</TableCell>
                <TableCell>{player.Yellow}</TableCell>
                <TableCell>{player.RedCard}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
