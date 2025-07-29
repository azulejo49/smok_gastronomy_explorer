// src/App.jsx
import React, { useState, useEffect } from 'react';
import ingredients from './data/ingredients'; // ensure this exists
import IngredientCard from './components/IngredientCard';
import CookingStage from './components/CookingStage';
import PlayerSelection from './components/PlayerSelection';
import CategorySelection from './components/CategorySelection';
import { publicUrl } from './utils/path';
function App() {
  // State variables
  const [hasCooked, setHasCooked] = useState(false);
  const [step, setStep] = useState('player'); // 'player', 'category', 'ingredients', 'cooking'
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const kitchenImage = `${publicUrl}/images/kitchen1.jpg`;
  console.log('kitchenImage →', kitchenImage);
  // Disable scrolling on mount and restore on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // disable scroll
    return () => {
      document.body.style.overflow = 'auto'; // restore scroll
    };
  }, []);

  const resetUserData = () => {
    setSelectedCategory(null);
    setSelectedIngredients([]);
    setHasCooked(false);
  };

  const handleSelectPlayer = (player) => {
    resetUserData();
    setSelectedPlayer(player);
    setStep('category');
  };

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setStep('ingredients');
  };

  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredients(prev => {
      if (prev.find(i => i.id === ingredient.id)) return prev;
      return [...prev, ingredient];
    });
  };

  const startCooking = () => {
    setStep('cooking');
    setHasCooked(false);
  };

  const goBack = () => {
    if (step === 'category') setStep('player');
    else if (step === 'ingredients') setStep('category');
  };

  const filteredIngredients = selectedCategory
    ? ingredients.filter(i => i.category === selectedCategory)
    : ingredients;

  const handleClearIngredients = () => {
    setSelectedIngredients([]);
  };

  return (
  <div
    className="min-h-screen flex flex-col"
    style={{
      backgroundImage: `url(${kitchenImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundColor: 'red', // debug fallback
      height: '100vh',
      width: '100%',
      border: '4px solid lime' // debug border
    }}
  >
    {/* ✅ Debug Test: confirm image + visibility */}
    <div
      style={{
        backgroundImage: `url(${kitchenImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'red',
        height: '100vh',
        width: '100%',
        border: '4px solid lime'
      }}
    >
      <h1 style={{ color: 'white' }}>TEST</h1>
    </div>

    {/* Main layout */}
    <div className="min-h-screen flex flex-col" style={{ height: '100vh' }}>
      {/* Header */}
      <header className="app-header text-white flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold text-center mb-2">Smok Gastronomy Explorer</h1>
        {selectedPlayer && (
          <div className="text-center">
            <span className="font-bold text-purple-900">
              PLAYER: {selectedPlayer.name}
            </span>
          </div>
        )}
      </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-4" style={{ paddingBottom: '20px' }}>
          {step === 'player' && (
            <PlayerSelection onSelectPlayer={handleSelectPlayer} />
          )}

          {step === 'category' && (
            <CategorySelection
              onSelectCategory={handleSelectCategory}
              onBack={() => setStep('player')}
            />
          )}

          {step === 'ingredients' && (
            <>
              {/* Header & Back Button */}
              <div className="mb-4 flex justify-between items-center">
                <button
                  onClick={goBack}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
                >
                  ← Back to Categories
                </button>
                <h2 className="text-2xl font-bold capitalize">{selectedCategory} Ingredients</h2>
              </div>

              {/* Ingredients Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                {filteredIngredients.map((ing) => (
                  <IngredientCard
                    key={ing.id}
                    ingredient={ing}
                    onSelect={handleSelectIngredient}
                  />
                ))}
              </div>

              {/* Start Cooking Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={startCooking}
                  disabled={selectedIngredients.length === 0 || hasCooked}
                  className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Start Cooking!
                </button>
              </div>
            </>
          )}

          {step === 'cooking' && (
            <CookingStage
              selectedIngredients={selectedIngredients}
              onBack={() => setStep('ingredients')}
              onClearIngredients={handleClearIngredients}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;