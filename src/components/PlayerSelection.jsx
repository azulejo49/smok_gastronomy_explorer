import React from 'react';

const PlayerSelection = ({ onSelectPlayer }) => {
  const firstRowPlayers = [
    { id: 'ori', name: 'ORI', image: '/images/oricar_.jpg' },
    { id: 'lavi', name: 'LAVI', image: '/images/lavicar_.jpg' },
    { id: 'shoshana', name: 'SHOSHANA', image: '/images/shcar.jpg' },
    { id: 'hila', name: 'HILA', image: '/images/hilacar_.jpg' },
  ];

  const secondRowPlayers = [
    { id: 'amiram', name: 'AMIRAM', image: '/images/amiramcar_.jpg' },
    { id: 'smok', name: 'SMOK', image: '/images/smok.jpg' },
    { id: 'marley', name: 'MARLEY', image: '/images/marley.jpg' },
  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">CHOOSE YOUR PLAYER</h2>
      
      {/* First Row */}
      <div className="flex flex-row gap-4 p-2 overflow-x-auto mb-4 w-full">
        {firstRowPlayers.map(player => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
            onClick={() => onSelectPlayer(player)}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-20 h-20 md:w-24 md:h-24 object-cover mx-auto mb-2 rounded-full"
            />
            <h3 className="text-center font-semibold">{player.name}</h3>
          </div>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-row gap-4 p-2 overflow-x-auto mb-4 w-full">
        {secondRowPlayers.map(player => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
            onClick={() => onSelectPlayer(player)}
          >
            <img
              src={player.image}
              alt={player.name}
              className="w-24 h-24 object-cover mx-auto mb-2 rounded-full"
            />
            <h3 className="text-center font-semibold">{player.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelection;