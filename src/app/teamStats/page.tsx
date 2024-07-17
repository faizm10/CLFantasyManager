"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { useEffect, useState } from "react";

interface teamStats {
  Rk: string;
  Squad: string;
  MP: number;
  W: number;
  D: number;
  L: number;
  Pts: number;
  GF: string;
  GA: string;
  GD: string;
  xG: number;
  xGA: number;
  xGD: number;
  "xGD/90": number;
  "Top Team Scorer": string;
  Goalkeeper: string;
}

export default function PlayerStats() {
  const [data, setData] = useState<teamStats[]>([]);

  useEffect(() => {
    fetch("/api/team-stats")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-cyan-500 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-white">
        <h1 className="text-5xl mb-10 font-bold">Team Stats</h1>
        <Table
          className="text-black"
          aria-label="Player Stats Table"
          style={{
            height: "auto",
            minWidth: "100%",
            backgroundColor: "white",
          }}
        >
          <TableHeader>
            <TableColumn>Rk</TableColumn>
            <TableColumn>Squad</TableColumn>
            <TableColumn>MP</TableColumn>
            <TableColumn>W</TableColumn>
            <TableColumn>D</TableColumn>
            <TableColumn>L</TableColumn>
            <TableColumn>GF</TableColumn>
            <TableColumn>GA</TableColumn>
            <TableColumn>GD</TableColumn>
            <TableColumn>Pts</TableColumn>
            <TableColumn>xG</TableColumn>
            <TableColumn>xGA</TableColumn>
            <TableColumn>xGD</TableColumn>
            <TableColumn>xGD/90</TableColumn>
            <TableColumn>Top Team Scorer</TableColumn>
            <TableColumn>Goalkeeper</TableColumn>
          </TableHeader>
          <TableBody>
            {data.map((team, index) => (
              <TableRow key={index}>
                <TableCell>{team.Rk}</TableCell>
                <TableCell>{team.Squad}</TableCell>
                <TableCell>{team.MP}</TableCell>
                <TableCell>{team.W}</TableCell>
                <TableCell>{team.D}</TableCell>
                <TableCell>{team.L}</TableCell>
                <TableCell>{team.GF}</TableCell>
                <TableCell>{team.GA}</TableCell>
                <TableCell>{team.GD}</TableCell>
                <TableCell>{team.Pts}</TableCell>
                <TableCell>{team.xG}</TableCell>
                <TableCell>{team["xGD/90"]}</TableCell>
                <TableCell>{team.xGA}</TableCell>
                <TableCell>{team.xGD}</TableCell>
                <TableCell>{team["Top Team Scorer"]}</TableCell>
                <TableCell>{team.Goalkeeper}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}

