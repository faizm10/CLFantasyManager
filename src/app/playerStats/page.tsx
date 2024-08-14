"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Pagination,
  Input,
} from "@nextui-org/react";
import {
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
  POS: string;
  Squad: string;
  Age: number;
  Born: number;
  MP: number;
  Starts: number;
  Min: number;
  "90s": number;
  Gls: number;
  Ast: number;
  "G+A": number;
  "G-PK": number;
  PK: number;
  PKatt: number;
  CrdY: number;
  CrdR: number;
  xG: number;
  npxG: number;
  xAG: number;
  "npxG+xAG": number;
}

const ITEMS_PER_PAGE = 25; // Adjust the number of items per page as needed

export default function PlayerStats() {
  const [data, setData] = useState<PlayerStats[]>([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerStats | null>(
    null
  );
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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = filteredData.slice(startIndex, endIndex);

  const handleOpenModal = (player: PlayerStats) => {
    setSelectedPlayer(player);
    onOpen();
  };

  return (
    <div className="pt-10 flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-cyan-500 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-black">
        <h1 className="text-5xl mb-10 font-bold text-white">Player Stats</h1>
        <Input
          className="mb-10 w-full max-w-md text-center text-white p-2"
          placeholder="Search Player"
          onChange={(e) => setSearch(e.target.value)}
          variant="underlined"
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
            <TableColumn className="bg-gray-200 font-bold text-center">
              Player
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              Position
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              Squad
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              G
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              A
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              Mins
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              Yellow Cards
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              Red Cards
            </TableColumn>
            <TableColumn className="bg-gray-200 font-bold text-center">
              View Full Stats
            </TableColumn>
          </TableHeader>
          <TableBody>
            {paginatedData.map((player, index) => (
              <TableRow
                key={index}
                className="odd:bg-white even:bg-gray-50 hover:bg-yellow-100"
              >
                <TableCell className="text-center p-4">
                  {player.Player}
                </TableCell>
                <TableCell className="text-center p-4">{player.POS}</TableCell>
                <TableCell className="text-center p-4">
                  {player.Squad}
                </TableCell>
                <TableCell className="text-center p-4">{player.Gls}</TableCell>
                <TableCell className="text-center p-4">{player.Ast}</TableCell>
                <TableCell className="text-center p-4">{player.Min}</TableCell>
                <TableCell className="text-center p-4">{player.CrdY}</TableCell>
                <TableCell className="text-center p-4">{player.CrdR}</TableCell>
                <TableCell className="text-center p-4">
                  <Button onPress={() => handleOpenModal(player)}>
                    View More
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Pagination
          total={Math.ceil(filteredData.length / ITEMS_PER_PAGE)}
          initialPage={1}
          showControls
          onChange={(page) => setCurrentPage(page)}
          className="mt-10 p-4 space-x-5"
          color="primary"
          size="lg"
        />
      </main>
      {selectedPlayer && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          size="3xl"
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center text-4xl">
                  {selectedPlayer.Player}
                </ModalHeader>
                <ModalBody>
                  <p>
                    <strong>Nation:</strong> {selectedPlayer.Nation}
                  </p>
                  <p>
                    <strong>Position:</strong> {selectedPlayer.POS}
                  </p>
                  <p>
                    <strong>Squad:</strong> {selectedPlayer.Squad}
                  </p>
                  <p>
                    <strong>Age:</strong> {selectedPlayer.Age}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {selectedPlayer.Born}
                  </p>
                  <p>
                    <strong>Matches Played:</strong> {selectedPlayer.MP}
                  </p>
                  <p>
                    <strong>Starts:</strong> {selectedPlayer.Starts}
                  </p>
                  <p>
                    <strong>Minutes:</strong> {selectedPlayer.Min}
                  </p>
                  <p>
                    <strong>90s:</strong> {selectedPlayer["90s"]}
                  </p>
                  <p>
                    <strong>Goals:</strong> {selectedPlayer.Gls}
                  </p>
                  <p>
                    <strong>Assists:</strong> {selectedPlayer.Ast}
                  </p>
                  <p>
                    <strong>Goals + Assists:</strong> {selectedPlayer["G+A"]}
                  </p>
                  <p>
                    <strong>Non-Penalty Goals:</strong> {selectedPlayer["G-PK"]}
                  </p>
                  <p>
                    <strong>Penalty Kicks:</strong> {selectedPlayer.PK}
                  </p>
                  <p>
                    <strong>Penalty Kicks Attempted:</strong>{" "}
                    {selectedPlayer.PKatt}
                  </p>
                  <p>
                    <strong>Yellow Cards:</strong> {selectedPlayer.CrdY}
                  </p>
                  <p>
                    <strong>Red Cards:</strong> {selectedPlayer.CrdR}
                  </p>
                  <p>
                    <strong>xG:</strong> {selectedPlayer.xG}
                  </p>
                  <p>
                    <strong>Non-Penalty xG:</strong> {selectedPlayer.npxG}
                  </p>
                  <p>
                    <strong>xAG:</strong> {selectedPlayer.xAG}
                  </p>
                  <p>
                    <strong>Non-Penalty xG + xAG:</strong>{" "}
                    {selectedPlayer["npxG+xAG"]}
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="bg-red-700 text-white hover:text-black"
                    variant="light"
                    onPress={onClose}
                  >
                    Close
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}
