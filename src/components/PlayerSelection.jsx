import React, { useEffect } from 'react';
import { publicUrl } from '../utils/path';

const PlayerSelection = ({ onSelectPlayer }) => {
 // const publicUrl = 'https://azulejo49.github.io/smok_gastronomy_explorer';
  const firstRowPlayers = [
    { id: 'ori', name: 'ORI', image: `${publicUrl}/my-assets/images/oricar_.jpg` },
    { id: 'lavi', name: 'LAVI', image: `${publicUrl}/my-assets/images/lavicar_.jpg` },
    { id: 'shoshana', name: 'SHOSHANA', image: `${publicUrl}/my-assets/images/shcar.jpg` },
    { id: 'hila', name: 'HILA', image: `${publicUrl}/my-assets/images/hilacar_.jpg` },
  ];

  const secondRowPlayers = [
    { id: 'amiram', name: 'AMIRAM', image: `${publicUrl}/my-assets/images/amiramcar_.jpg` },
    { id: 'smok', name: 'SMOK', image: `${publicUrl}/my-assets/images/smok.jpg` },
    { id: 'marley', name: 'MARLEY', image: `${publicUrl}/my-assets/images/marley.jpg` },
  ];

  useEffect(() => {
    document.querySelectorAll('img').forEach(img => {
      console.log('Image:', img.src, 'Size:', img.width, img.height);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">CHOOSE YOUR PLAYER</h2>
      {/* First Row */}
      <div className="flex flex-row gap-4 p-2 overflow-x-auto mb-4 w-full">
        {firstRowPlayers.map((player) => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
           // style={{
            // border: '3px solid transparent', // start with transparent border
            //animation: 'animate-border 2s infinite',
           // }}
            onClick={() => onSelectPlayer(player)}
          >
            <img
              src={player.image}
              alt={player.name}
              style={{
                width: '150px',
                height: '150px',
                border: '3px solid transparent',
                objectFit: 'cover',
                animation: 'animate-border 2s infinite'
              }}
            />
            <h3 className="text-center font-semibold">{player.name}</h3>
          </div>
        ))}
      </div>
      {/* Second Row */}
      <div className="flex flex-row gap-4 p-2 overflow-x-auto mb-4 w-full">
        {secondRowPlayers.map((player) => (
          <div
            key={player.id}
            className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
           //  style={{
           //  border: '3px solid transparent', // start with transparent border
           // animation: 'animate-border 2s infinite',
           // }}
            onClick={() => onSelectPlayer(player)}
          >
            <img
              src={player.image}
              alt={player.name}
              style={{
                width: '150px',
                height: '150px',
                border: '3px solid transparent',
                objectFit: 'cover',
                animation: 'animate-border 2s infinite'
              }}
            />
            <h3 className="text-center font-semibold">{player.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelection;