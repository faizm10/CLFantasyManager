import PlayerStats from '../components/PlayerStats';
import React from 'react';

const ChampionsLeagueStats = () => {
  const soccerData = {
    goals: [
      { name: "Lionel Messi", team: "PSG", goals: 10 },
      { name: "Cristiano Ronaldo", team: "Manchester United", goals: 8 }
    ],
    assists: [
      { name: "Kevin De Bruyne", team: "Manchester City", assists: 12 },
      { name: "Mohamed Salah", team: "Liverpool", assists: 9 }
    ],
    cleanSheets: [
      { name: "Jan Oblak", team: "Atletico Madrid", cleanSheets: 6 },
      { name: "Thibaut Courtois", team: "Real Madrid", cleanSheets: 5 }
    ]
  };

  return (
    <div className="container mx-auto">
      <PlayerStats stats={soccerData} />
    </div>
  );
};

export default ChampionsLeagueStats;
