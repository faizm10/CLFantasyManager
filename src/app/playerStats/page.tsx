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
    <div className="flex flex-col min-h-screen bg-gray-100 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-black">
        <h1 className="text-5xl mb-10 font-bold">Player Stats</h1>
        <Input
          className="mb-10 w-full max-w-md text-center text-black p-2"
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
                <TableCell className="text-center p-4">
                  {player.Position}
                </TableCell>
                <TableCell className="text-center p-4">
                  {player.Squad}
                </TableCell>
                <TableCell className="text-center p-4">
                  {player.Goals}
                </TableCell>
                <TableCell className="text-center p-4">
                  {player.Assists}
                </TableCell>
                <TableCell className="text-center p-4">
                  {player.Minutes}
                </TableCell>
                <TableCell className="text-center p-4">
                  {player.Yellow}
                </TableCell>
                <TableCell className="text-center p-4">
                  {player.RedCard}
                </TableCell>
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
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="full">
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
                    <strong>Position:</strong> {selectedPlayer.Position}
                  </p>
                  <p>
                    <strong>Squad:</strong> {selectedPlayer.Squad}
                  </p>
                  <p>
                    <strong>Date of Birth:</strong> {selectedPlayer.DOB}
                  </p>
                  <p>
                    <strong>Goals:</strong> {selectedPlayer.Goals}
                  </p>
                  <p>
                    <strong>Assists:</strong> {selectedPlayer.Assists}
                  </p>
                  <p>
                    <strong>Minutes:</strong> {selectedPlayer.Minutes}
                  </p>
                  <p>
                    <strong>Starts:</strong> {selectedPlayer.Starts}
                  </p>
                  <p>
                    <strong>G+A:</strong> {selectedPlayer["G+A"]}
                  </p>
                  <p>
                    <strong>Non-Penalty Goals:</strong>{" "}
                    {selectedPlayer.NonPenKickGoals}
                  </p>
                  <p>
                    <strong>Penalty Kicks Attempted:</strong>{" "}
                    {selectedPlayer.PenKickAttempted}
                  </p>
                  <p>
                    <strong>Penalty Kicks Made:</strong>{" "}
                    {selectedPlayer.PenKickMade}
                  </p>
                  <p>
                    <strong>Yellow Cards:</strong> {selectedPlayer.Yellow}
                  </p>
                  <p>
                    <strong>Red Cards:</strong> {selectedPlayer.RedCard}
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
