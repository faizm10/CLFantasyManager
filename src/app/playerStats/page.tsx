"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Input,
  useDisclosure,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import { SearchIcon } from "@/components/searchIcon";
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
  const [search, setSearch] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fetch("/api/player-stats")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const filteredData = data.filter((player) =>
    player.Player.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-black">
        <h1 className="text-5xl mb-10 font-bold">Player Stats</h1>
        <input
          className="mb-10 w-full max-w-md bg-white border border-gray-300 text-center text-black rounded-lg p-2 shadow-sm"
          placeholder="Search Player"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Table
          aria-label="Player Stats Table"
          className="bg-white shadow-lg rounded-lg"
          style={{
            height: "auto",
            width: "100%",
          }}
        >
          <TableHeader>
            <TableColumn className="bg-gray-200 font-bold">Player</TableColumn>
            <TableColumn className="bg-gray-200 font-bold">Position</TableColumn>
            <TableColumn className="bg-gray-200 font-bold">Squad</TableColumn>
            <TableColumn className="bg-gray-200 font-bold">G</TableColumn>
            <TableColumn className="bg-gray-200 font-bold">A</TableColumn>
            <TableColumn className="bg-gray-200 font-bold">Mins</TableColumn>
            <TableColumn className="bg-gray-200 font-bold">YellowCards</TableColumn>
            <TableColumn className="bg-gray-200 font-bold">RedCards</TableColumn>
          </TableHeader>
          <TableBody>
            {filteredData.map((player, index) => (
              <TableRow key={index} className="odd:bg-white even:bg-gray-50 hover:bg-yellow-100">
                <TableCell className="text-center p-4">{player.Player}</TableCell>
                <TableCell className="text-center p-4">{player.Position}</TableCell>
                <TableCell className="text-center p-4">{player.Squad}</TableCell>
                <TableCell className="text-center p-4">{player.Goals}</TableCell>
                <TableCell className="text-center p-4">{player.Assists}</TableCell>
                <TableCell className="text-center p-4">{player.Minutes}</TableCell>
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
