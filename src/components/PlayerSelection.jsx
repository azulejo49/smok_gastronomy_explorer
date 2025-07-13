import React from 'react';

const PlayerSelection = ({ onSelectPlayer }) => {
  const players = [
    { 
      id: 'ori', 
      name: 'ORI', 
      image: '/images/oricar_.jpg'  // Direct public URL
    },
    { 
      id: 'lavi', 
      name: 'LAVI', 
      image: '/images/lavicar_.jpg'  // Direct public URL
    },
    { 
      id: 'shoshana', 
      name: 'SHOSHANA', 
      image: '/images/shcar.jpg'  // Direct public URL 
    },
    { 
      id: 'hila', 
      name: 'HILA', 
      image: '/images/hilacar_.jpg' 
    },
    { 
      id: 'amiram', 
      name: 'AMIRAM', 
      image: '/images/amiramcar_.jpg' 
    },
    { 
      id: 'smok', 
      name: 'SMOK', 
      image: '/images/smok.jpg'  // Direct public URL
    },
    { 
      id: 'marley', 
      name: 'MARLEY', 
      image: '/images/marley.jpg'  // Direct public URL
    },

  ];

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-20">CHOOSE YOUR PLAYER</h2>
      <div className="flex flex-row gap-8 overflow-x-auto">
        {players.map(player => (
          <div 
            key={player.id}
            className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0"
            onClick={() => onSelectPlayer(player)}
          >
            <img 
             src={player.image} alt={player.name} style={{ width: '100px', height: '100px' }}
              className="w-32 h-32 mx-auto mb-4 object-cover rounded-full"
            />
            <h3 className="font-semibold text-lg text-center">{player.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerSelection;