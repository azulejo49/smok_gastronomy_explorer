import React, { useState } from 'react';
import ingredients from './data/ingredients'; // ensure this exists
import IngredientCard from './components/IngredientCard';
import CookingStage from './components/CookingStage';
import PlayerSelection from './components/PlayerSelection';
import CategorySelection from './components/CategorySelection';

function App() {
  const [hasCooked, setHasCooked] = useState(false);
  const [step, setStep] = useState('player'); // 'player', 'category', 'ingredients', 'cooking'
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleSelectPlayer = (player) => {
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
    if (step === 'ingredients') setStep('category');
  };

  const filteredIngredients = selectedCategory
    ? ingredients.filter(i => i.category === selectedCategory)
    : ingredients;

  // Add this function
  const handleClearIngredients = () => {
    setSelectedIngredients([]);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-green-600 text-white p-4 shadow-md">
        <h1 className="text-3xl font-bold text-center">Smok Gastronomy Explorer</h1>
        {selectedPlayer && (
          <div className="text-center mt-2">
            <span className="text-purple-900">Player: {selectedPlayer.name}</span>
          </div>
        )}
      </header>
      <main className="container mx-auto py-8 px-4">
        {step === 'player' && <PlayerSelection onSelectPlayer={handleSelectPlayer} />}
        {step === 'category' && (
          <CategorySelection onSelectCategory={handleSelectCategory} onBack={() => setStep('player')} />
        )}
        {step === 'ingredients' && (
          <>
            <div className="mb-6 flex justify-between items-center">
              <button
                onClick={goBack}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
              >
                ← Back to Categories
              </button>
              <h2 className="text-2xl font-bold">
                {selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Ingredients
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredIngredients.map(ing => (
                <IngredientCard key={ing.id} ingredient={ing} onSelect={handleSelectIngredient} />
              ))}
            </div>
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
  );
}

export default App;