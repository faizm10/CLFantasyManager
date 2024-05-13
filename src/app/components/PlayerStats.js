import React from "react";

const PlayerStats = ({ stats }) => {
  return (
    <div className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Goal Scorers Leaders */}
        <div>
          <h3 className="font-bold text-lg mb-2">Top Goal Scorers</h3>
          <div>
            <h4 className="font-semibold">Goals</h4>
            {stats.goals.map((player, index) => (
              <p key={index} className="text-sm">
                {player.name} ({player.team}) - {player.goals} Goals
              </p>
            ))}
          </div>
        </div>

        {/* Assist Leaders */}
        <div>
          <h3 className="font-bold text-lg mb-2">Top Assist Providers</h3>
          <div>
            <h4 className="font-semibold">Assists</h4>
            {stats.assists.map((player, index) => (
              <p key={index} className="text-sm">
                {player.name} ({player.team}) - {player.assists} Assists
              </p>
            ))}
          </div>
        </div>

        {/* Clean Sheets Leaders (for goalkeepers) */}
        <div>
          <h3 className="font-bold text-lg mb-2">Top Goalkeepers</h3>
          <div>
            <h4 className="font-semibold">Clean Sheets</h4>
            {stats.cleanSheets.map((player, index) => (
              <p key={index} className="text-sm">
                {player.name} ({player.team}) - {player.cleanSheets} Clean Sheets
              </p>
            ))}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default PlayerStats;
