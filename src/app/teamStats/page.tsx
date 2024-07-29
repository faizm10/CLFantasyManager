"use client";
import {
  Table,
  TableHeader,
  TableBody,
  TableColumn,
  TableRow,
  TableCell,
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import './teamStats.css';

interface TeamStats {
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

// Path mapping for each team logo
const teamLogos: { [key: string]: string } = {
  "Real Madrid": "/images/real-madrid.png",
  "Dortmund": "/images/dortmund.png",
  "Bayern Munich": "/images/bayern-munich.png",
  "Paris S-G": "/images/psg.png",
  "Manchester City": "/images/man-city.png",
  "Atlético Madrid": "/images/atletico.png",
  "Barcelona": "/images/barca.png",
  "Arsenal": "/images/arsenal.png",
  "Porto": "/images/porto.png",
  "Inter": "/images/inter.png",
  "RB Leipzig": "/images/leipzig.png",
  "Lazio": "/images/lazio.png",
  "Real Sociedad": "/images/sociedad.png",
  "Napoli": "/images/napoli.png",
  "PSV Eindhoven": "/images/psv.png",
  "FC Copenhagen": "/images/copenhagen.png",
  "Shakhtar": "/images/shaktar.png",
  "Milan": "/images/milan.png",
  "Lens": "/images/lens.png",
  "Feyenoord": "/images/feyenoord.png",
  "Newcastle Utd": "/images/newcastle.png",
  "Galatasaray": "/images/galatasary.png",
  "Manchester Utd": "/images/united.png",
  "Benfica": "/images/benfica.png",
  "RB Salzburg": "/images/salzburg.png",
  "Young Boys": "/images/young-boys.png",
  "Braga": "/images/braga.png",
  "Celtic": "/images/celtic.png",
  "Antwerp": "/images/antwerp.png",
  "Union Berlin": "/images/union.png",
  "Sevilla": "/images/sevilla.png",
  "Red Star": "/images/belgrade.png",
};

export default function TeamStats() {
  const [data, setData] = useState<TeamStats[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<TeamStats | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fetch("/api/team-stats")
      .then((response) => response.json())
      .then((data) => {
        // Filter out any empty objects
        const filteredData = data.filter((team: TeamStats) => team.Squad);
        setData(filteredData);
      });
  }, []);

  const handleOpenModal = (team: TeamStats) => {
    setSelectedTeam(team);
    onOpen();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter((team) =>
    team.Squad.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-900 to-cyan-500 font-serif font-semibold">
      <main className="flex flex-1 flex-col items-center justify-center p-10 text-white">
        <h1 className="text-5xl mb-10 font-bold">Team Stats</h1>
        <input
          type="text"
          placeholder="Search Team"
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <Table
          className="text-black"
          aria-label="Team Stats Table"
          style={{
            height: "auto",
            minWidth: "100%",
            backgroundColor: "white",
          }}
        >
          <TableHeader>
            <TableColumn>Logo</TableColumn>
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
            <TableColumn>Top Team Scorer</TableColumn>
            <TableColumn>Goalkeeper</TableColumn>
            <TableColumn>View Full Stats</TableColumn>
          </TableHeader>
          <TableBody>
            {filteredData.map((team, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img
                    src={teamLogos[team.Squad as keyof typeof teamLogos]}
                    alt={`${team.Squad} logo`}
                    className="logo-img"
                  />
                </TableCell>
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
                <TableCell>{team["Top Team Scorer"]}</TableCell>
                <TableCell>{team.Goalkeeper}</TableCell>
                <TableCell>
                  <Button onPress={() => handleOpenModal(team)}>
                    View More
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
      {selectedTeam && (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="3xl" scrollBehavior="inside">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-center text-4xl">
                  {selectedTeam.Squad}
                </ModalHeader>
                <ModalBody>
                  <p><strong>Rank:</strong> {selectedTeam.Rk}</p>
                  <p><strong>Matches Played:</strong> {selectedTeam.MP}</p>
                  <p><strong>Wins:</strong> {selectedTeam.W}</p>
                  <p><strong>Draws:</strong> {selectedTeam.D}</p>
                  <p><strong>Losses:</strong> {selectedTeam.L}</p>
                  <p><strong>Goals For:</strong> {selectedTeam.GF}</p>
                  <p><strong>Goals Against:</strong> {selectedTeam.GA}</p>
                  <p><strong>Goal Difference:</strong> {selectedTeam.GD}</p>
                  <p><strong>Points:</strong> {selectedTeam.Pts}</p>
                  <p><strong>Top Team Scorer:</strong> {selectedTeam["Top Team Scorer"]}</p>
                  <p><strong>Goalkeeper:</strong> {selectedTeam.Goalkeeper}</p>
                  <p><strong>xG:</strong> {selectedTeam.xG}</p>
                  <p><strong>xGA:</strong> {selectedTeam.xGA}</p>
                  <p><strong>xGD:</strong> {selectedTeam.xGD}</p>
                  <p><strong>xGD/90:</strong> {selectedTeam["xGD/90"]}</p>
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
