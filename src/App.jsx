import React, { useState, useEffect } from 'react';
import ingredients from './data/ingredients'; // ensure this exists
import IngredientCard from './components/IngredientCard';
import CookingStage from './components/CookingStage';
import PlayerSelection from './components/PlayerSelection';
import CategorySelection from './components/CategorySelection';

function App() {
  // State variables
  const [hasCooked, setHasCooked] = useState(false);
  const [step, setStep] = useState('player'); // 'player', 'category', 'ingredients', 'cooking'
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  
  // Disable scrolling on mount and restore on unmount
  useEffect(() => {
    document.body.style.overflow = 'hidden'; // disable scroll
    return () => {
      document.body.style.overflow = 'auto'; // restore scroll
    };
  }, []);

  // Function to reset all user-specific data
  const resetUserData = () => {
    setSelectedCategory(null);               // Reset selected category
    setSelectedIngredients([]);              // Clear selected ingredients
    setHasCooked(false);                     // Reset cooking completion
    // Add any other user-specific states here if needed
  };

  // Handle player selection, reset data before setting new player
  const handleSelectPlayer = (player) => {
    resetUserData(); // Reset previous data on player change
    setSelectedPlayer(player); // Set new player
    setStep('category'); // Move to category selection
  };

  // Handle category selection
  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
    setStep('ingredients');
  };

  // Handle ingredient selection
  const handleSelectIngredient = (ingredient) => {
    setSelectedIngredients(prev => {
      // Avoid duplicates
      if (prev.find(i => i.id === ingredient.id)) return prev;
      return [...prev, ingredient];
    });
  };

  // Start cooking
  const startCooking = () => {
    setStep('cooking');
    setHasCooked(false);
  };
  

  // Go back to previous step
  const goBack = () => {
    if (step === 'category') setStep('player');
    if (step === 'ingredients') setStep('category');
  };

  // Filter ingredients based on selected category
  const filteredIngredients = selectedCategory
    ? ingredients.filter(i => i.category === selectedCategory)
    : ingredients;

  // Clear selected ingredients
  const handleClearIngredients = () => {
    setSelectedIngredients([]);
  };

  return (
    <div className="w-screen h-screen">
      {/* Main container with fixed height */}
      <div className="min-h-screen flex flex-col" style={{ height: '100vh' }}>
        {/* Header */}
        <header className="bg-gradient-to-br from-green-600 via-green-500 to-blue-500 text-white p-4 shadow-md flex-shrink-0">
          <h1 className="text-3xl font-bold text-center">Smok Gastronomy Explorer</h1>
          {selectedPlayer && (
            <div className="text-center mt-2">
              
              <span className="font-bold text-purple-900">PLAYER: {selectedPlayer.name}</span>
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
              {/* Ingredients Header & Back Button */}
              <div className="mb-0 flex justify-between items-center">
                <button
                  onClick={goBack}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center ml-80"
                >
                  ← Back to Categories
                </button>
                <h2 className=" - text-2xl font-bold">
                  {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Ingredients
                </h2>
              </div>

              {/* Ingredient Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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