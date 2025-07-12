import React, { useState, useEffect } from "react";

const CookingStage = ({ selectedIngredients, onBack, onClearIngredients }) => {
  // State to manage the current cooking step (progression from 0 to 3)
  const [cookingStep, setCookingStep] = useState(0);
  // Local copy of ingredients
  const [localIngredients, setLocalIngredients] = useState([...selectedIngredients]);
  // Visual effects
  const [steamParticles, setSteamParticles] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  // Popup overlays
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [showDelicious, setShowDelicious] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  // Truffle display controls
  const [showBlackTruffle, setShowBlackTruffle] = useState(true);
  const [showWhiteTruffle, setShowWhiteTruffle] = useState(true);

  // Declare showTruffle (if always visible)
  const showTruffle = true; // or useState if toggling

  // Truffle objects
  const BlackTruffle = {
    id: "truffle-001",
    name: "Black Truffle",
    description: "Rare black truffle with earthy aroma",
  };
  const WhiteTruffle = {
    id: "truffle-002",
    name: "White Truffle",
    description: "Rare white truffle with earthy aroma",
  };

  // Function to handle adding truffles
  const handleAddTruffle = (type) => {
    if (type === "black") {
      setLocalIngredients(prev => [...prev, BlackTruffle]);
      setShowBlackTruffle(false);
    } else if (type === "white") {
      setLocalIngredients(prev => [...prev, WhiteTruffle]);
      setShowWhiteTruffle(false);
    }
  };

  // Synchronize local ingredients with parent when selectedIngredients change
  useEffect(() => {
    setLocalIngredients([...selectedIngredients]);
  }, [selectedIngredients]);

  // Simulate cooking steps every 10 seconds
  useEffect(() => {
    if (localIngredients.length > 0 && cookingStep < 3) {
      const timer = setInterval(() => {
        setCookingStep(prev => (prev >= 3 ? prev : prev + 1));
      }, 14600);
      return () => clearInterval(timer);
    }
  }, [localIngredients, cookingStep]);

  // Generate steam particles when cooking is advanced past step 2
  useEffect(() => {
    if (cookingStep >= 2) {
      const steamTimer = setInterval(() => {
        setSteamParticles(prev => {
          const newParticle = {
            id: Date.now(),
            x: 70 + Math.random() * 60,
            y: 60,
            opacity: 0.9,
            size: 2 + Math.random() * 3,
            speed: 0.5 + Math.random(),
            wobble: Math.random() * 2 - 1,
          };
          return [...prev, newParticle].slice(-10);
        });
      }, 300);
      return () => clearInterval(steamTimer);
    }
  }, [cookingStep]);

  // Generate bubbles when cooking is at step 1 or higher
  useEffect(() => {
    if (cookingStep >= 1) {
      const bubbleTimer = setInterval(() => {
        setBubbles(prev => {
          const newBubble = {
            id: Date.now(),
            x: 50 + Math.random() * 100,
            y: 110,
            size: 3 + Math.random() * 2,
            speed: 0.3 + Math.random(),
            opacity: 0.7 + Math.random() * 0.3,
          };
          return [...prev, newBubble].slice(-15);
        });
      }, 400);
      return () => clearInterval(bubbleTimer);
    }
  }, [cookingStep]);

  // Animate bubbles upward and fade
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prev =>
        prev
          .map(b => {
            let sizeMultiplier = 1;
            if (cookingStep === 1) sizeMultiplier = 1;
            else if (cookingStep === 2) sizeMultiplier = 1.5;
            else if (cookingStep >= 3) sizeMultiplier = 2;

            return {
              ...b,
              y: b.y - b.speed,
              size: Math.max(b.size + 0.1 * sizeMultiplier, 0.1),
              opacity: Math.max(b.opacity - 0.01, 0),
            };
          })
          .filter(b => b.opacity > 0)
      );
    }, 100);
    return () => clearInterval(interval);
  }, [cookingStep]);

  // Animate steam particles similarly
  useEffect(() => {
    const interval = setInterval(() => {
      setSteamParticles(prev =>
        prev
          .map(p => {
            let sizeMultiplier = 1;
            if (cookingStep === 2) sizeMultiplier = 1.5;
            else if (cookingStep >= 3) sizeMultiplier = 2;
            return {
              ...p,
              y: p.y - p.speed,
              size: p.size + 0.02 * sizeMultiplier,
              opacity: p.opacity - 0.005,
            };
          })
          .filter(p => p.opacity > 0)
      );
    }, 100);
    return () => clearInterval(interval);
  }, [cookingStep]);

  // Finish cooking
  const handleFinishCooking = () => {
    setShowCompletionPopup(true);
    setShowDelicious(true);
    setShowFireworks(true);
  };

  // Clear ingredients
  const handleClear = () => {
    onClearIngredients();
  };

  // Unique ingredients for display
//  const uniqueIngredients = localIngredients.filter(
 //   (ing, index, self) => index === self.findIndex(i => i.id === ing.id)
//  );

  return (
    <div className="flex flex-col items-center min-h-screen py-4 bg-gray-200 relative">
      {/* Overlay: Delicious message */}
      {showDelicious && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-4xl font-bold text-green-600 mb-4">🎉 Delicious! 🎉</h2>
            <button
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => {
                setShowDelicious(false);
                setShowFireworks(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Overlay: Fireworks */}
      {showFireworks && (
        <div className="absolute inset-0 z-40 pointer-events-none">
          {/* Simple fireworks SVG */}
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="animate-bounce text-6xl">🎆🎆🎆</div>
          </div>
          <button
            className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded z-50"
            onClick={() => setShowFireworks(false)}
          >
            Close Fireworks
          </button>
        </div>
      )}

      {/* Header */}
      <h2 className="text-3xl font-bold mb-6 text-center">Cooking Stage</h2>

      {/* Scene container with Chef and Pot */}
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Scene: Chef and Pot */}
        <div className="relative mb-6 flex justify-center w-full">

          {/* Chef Illustration SVG */}
<div className="absolute -left-40 top-0 w-64 h-64">
  <svg viewBox="0 0 200 200" className="w-full h-full">
    {/* Chef Hat */}
    <path
      d="
        M65,40
        C60,15 140,15 135,40
        C150,45 150,60 135,65
        H65
        C50,60 50,45 65,40
        Z
      "
      fill="#FFFFFF"
      stroke="#000"
      strokeWidth="2"
    />
    {/* Hat Band */}
    <rect x="65" y="65" width="70" height="10" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
    {/* Neck */}
    <rect x="90" y="130" width="20" height="10" fill="#FDD7AA" stroke="#000" strokeWidth="1"/>
    {/* Face */}
    <path
      d="
        M100,75
        C80,75 75,100 100,115
        C125,100 120,75 100,75
        Z
      "
      fill="#FDD7AA"
      stroke="#000"
      strokeWidth="1"
    />
    {/* Hat Band */}
    <rect x="65" y="65" width="70" height="10" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
    {/* Neck */}
    <rect x="90" y="130" width="20" height="10" fill="#FDD7AA" stroke="#000" strokeWidth="1"/>
    {/* Face */}
    <ellipse cx="100" cy="100" rx="30" ry="35" fill="#FDD7AA" stroke="#000" strokeWidth="1" />
    {/* Ears */}
    <circle cx="70" cy="100" r="5" fill="#FDD7AA" stroke="#000" strokeWidth="1" />
    <circle cx="130" cy="100" r="5" fill="#FDD7AA" stroke="#000" strokeWidth="1" />
    {/* Eyes */}
    <circle cx="88" cy="95" r="4" fill="#000" />
    <circle cx="112" cy="95" r="4" fill="#000" />
    {/* Nose */}
    <path d="M100,95 Q98,105 100,105" stroke="#000" strokeWidth="1" fill="none" />
    {/* Smile */}
    <path d="M85,115 Q100,125 115,115" stroke="#000" strokeWidth="2" fill="none" />
    {/* Chef Coat */}
    <rect x="80" y="135" width="40" height="40" fill="#FFFFFF" stroke="#000" strokeWidth="1"/>
    {/* Buttons */}
    <circle cx="100" cy="145" r="2" fill="#000"/>
    <circle cx="100" cy="155" r="2" fill="#000"/>
    <circle cx="100" cy="165" r="2" fill="#000"/>
    {/* Arms */}
    <line x1="80" y1="140" x2="60" y2="160" stroke="#000" strokeWidth="2"/>
    <circle cx="58" cy="162" r="3" fill="#FDD7AA" stroke="#000" strokeWidth="1"/>
    <line x1="120" y1="140" x2="140" y2="160" stroke="#000" strokeWidth="2"/>
    <circle cx="142" cy="162" r="3" fill="#FDD7AA" stroke="#000" strokeWidth="1"/>
    {/* Legs */}
    <rect x="85" y="175" width="6" height="20" fill="#000"/>
    <rect x="109" y="175" width="6" height="20" fill="#000"/>
  </svg>
</div>




          {/* Cooking Pot SVG */}
          <svg width="180" height="160" viewBox="0 0 200 180" className="mx-auto">
            {/* Pot Structure */}
            <rect x="10" y="170" width="180" height="10" fill="#8B4513"/>
            <ellipse cx="100" cy="140" rx="80" ry="30" fill="#555"/>
            {/* Handles */}
            <path d="M30,120 Q10,100 10,80 Q10,60 30,60" stroke="#555" strokeWidth="12" fill="none"/>
            <path d="M170,120 Q190,100 190,80 Q190,60 170,60" stroke="#555" strokeWidth="12" fill="none"/>
            {/* Top Lid */}
            <ellipse cx="100" cy="60" rx="80" ry="15" fill="#777"/>
            {/* Content when cooking */}
            {localIngredients.length > 0 && cookingStep >= 1 && (
              <ellipse cx="100" cy="110" rx="60" ry="20" fill="#8BC34A" opacity={0.8}/>
            )}
            {/* Bubbles */}
            {bubbles.map(b => (
              <circle key={b.id} cx={b.x} cy={b.y} r={b.size} fill="#FFFFFF" opacity={b.opacity}/>
            ))}
            {/* Steam particles */}
            {steamParticles.map(p => (
              <path
                key={p.id}
                d={`M${p.x},${p.y} Q${p.x + p.wobble * 2},${p.y - 15} ${p.x + p.wobble * 4},${p.y - 30}`}
                stroke="#FFFFFF"
                strokeWidth={p.size}
                fill="none"
                opacity={p.opacity}
              />
            ))}
          </svg>

          {/* Flame indicator */}
          {localIngredients.length > 0 && (
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
              {/* Simple flame SVG */}
              <svg width="60" height="50" viewBox="0 0 60 50">
                <path
                  d="M30,50 C40,35 35,20 30,15 C25,20 20,35 30,50 Z"
                  fill="orange"
                  filter="url(#glow)"
                >
                  <animate
                    attributeName="d"
                    values="
                      M30,50 C40,35 35,20 30,15 C25,20 20,35 30,50 Z;
                      M30,50 C45,30 35,15 30,10 C25,15 15,30 30,50 Z;
                      M30,50 C35,40 30,25 30,20 C30,25 25,40 30,50 Z;
                      M30,50 C40,35 35,20 30,15 C25,20 20,35 30,50 Z"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                <defs>
                  <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" result="blur"/>
                    <feMerge>
                      <feMergeNode in="blur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
              </svg>
            </div>
          )}

          {/* Truffle Icon - click to add */}
          {showTruffle && (
            <div
              className="absolute -right-20 top-20 w-24 h-24 cursor-pointer transform transition-transform hover:scale-110 animate-pulse"
              title="Click to add truffle"
            >
              {/* Truffle icons container */}
              <div className="flex space-x-4">
                {/* Black Truffle Icon */}
                {showBlackTruffle && (
                  <div
                    className="w-24 h-24 cursor-pointer"
                    onClick={() => handleAddTruffle("black")}
                    title="Click to add Black Truffle"
                  >
                    <svg viewBox="0 0 150 150" width="100%" height="100%">
                      {/* Larger base shape */}
                      <ellipse cx="75" cy="75" rx="60" ry="45" fill="#222" stroke="#444" strokeWidth="3"/>
                      {/* Spots */}
                      <circle cx="52.5" cy="60" r="6" fill="#444"/>
                      <circle cx="90" cy="52.5" r="4.5" fill="#444"/>
                      <circle cx="67.5" cy="90" r="3.75" fill="#444"/>
                      <circle cx="82.5" cy="82.5" r="4.5" fill="#444"/>
                      <circle cx="60" cy="75" r="3" fill="#444"/>
                      <circle cx="97.5" cy="75" r="3.75" fill="#444"/>
                      <circle cx="75" cy="67.5" r="3" fill="#444"/>
                      <circle cx="60" cy="90" r="3" fill="#444"/>
                      <circle cx="90" cy="90" r="3" fill="#444"/>
                      <circle cx="75" cy="97.5" r="2.25" fill="#444"/>
                    </svg>
                  </div>
                )}
                {/* White Truffle Icon */}
                {showWhiteTruffle && (
                  <div
                    className="w-24 h-24 cursor-pointer"
                    onClick={() => handleAddTruffle("white")}
                    title="Click to add White Truffle"
                  >
                    <svg viewBox="0 0 300 300" width="100%" height="100%">
                      {/* White base */}
                      <ellipse cx="150" cy="150" rx="120" ry="90" fill="#fff" stroke="#444" strokeWidth="4"/>
                      {/* Spots */}
                      <circle cx="70" cy="80" r="10" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="120" cy="70" r="8" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="90" cy="120" r="7" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="110" cy="110" r="8" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="80" cy="100" r="6" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="130" cy="100" r="7" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="100" cy="90" r="6" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="80" cy="120" r="6" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="120" cy="120" r="6" fill="#000" stroke="#000" strokeWidth="1"/>
                      <circle cx="100" cy="130" r="5" fill="#000" stroke="#000" strokeWidth="1"/>
                    </svg>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-md mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Cooking Progress</span>
          <span>{localIngredients.length > 0 ? Math.min(cookingStep * 33, 99) : 0}%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-100"
            style={{ width: `${localIngredients.length > 0 ? Math.min(cookingStep * 33, 99) : 0}%` }}
          />
        </div>
      </div>

      {/* Ingredients List */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
        {(() => {
          const uniqueIngredients = localIngredients.filter(
            (ing, index, self) => index === self.findIndex(i => i.id === ing.id)
          );
          return uniqueIngredients.length > 0 ? (
            uniqueIngredients.map((ing) => (
              <div
                key={ing.id}
                className="bg-white rounded-lg shadow-md p-2 flex items-center transform transition-transform hover:scale-105"
              >
                {/* Placeholder for ingredient image */}
                <div className="w-10 h-10 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-xs text-gray-400">
                  Img
                </div>
                <span className="font-medium text-sm">{ing.name}</span>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-4 text-gray-500">
              No ingredients selected - add some to start cooking!
            </div>
          );
        })()}
      </div>

      {/* Cooking instructions */}
      <div
        className={`bg-yellow-100 p-5 rounded-lg border-2 border-yellow-300 mb-6 w-full ${
          localIngredients.length === 0 ? "opacity-50" : ""
        }`}
      >
        <h3 className="text-lg font-semibold mb-2">Cooking Instructions:</h3>
        <div className="space-y-2">
          {/* Step 1 */}
          <p className="text-gray-700">
            <span
              className={`font-bold ${
                localIngredients.length > 0 && cookingStep >= 1 ? "text-green-600" : "text-gray-500"
              }`}
            >
              Step 1:
            </span>{" "}
            {localIngredients.length > 0 && cookingStep >= 1 ? "✓" : "○"} Prepare ingredients
          </p>
          {/* Step 2 */}
          <p className="text-gray-700">
            <span
              className={`font-bold ${
                localIngredients.length > 0 && cookingStep >= 2 ? "text-green-600" : "text-gray-500"
              }`}
            >
              Step 2:
            </span>{" "}
            {localIngredients.length > 0 && cookingStep >= 2 ? "✓" : "○"} Heat & cook
          </p>
          {/* Step 3 */}
          <p className="text-gray-700">
            <span
              className={`font-bold ${
                localIngredients.length > 0 && cookingStep >= 3 ? "text-green-600" : "text-gray-500"
              }`}
            >
              Step 3:
            </span>{" "}
            {localIngredients.length > 0 && cookingStep >= 3 ? "✓" : "○"} Finalize & serve
          </p>
        </div>
        <p className="mt-3 text-base font-medium text-green-600">
          {localIngredients.length > 0
            ? cookingStep >= 3
              ? "Your dish is ready! Enjoy!"
              : "Cooking in progress..."
            : "Add ingredients to start cooking!"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between w-full mt-4 space-x-4">
        <button
          onClick={onBack}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-bold flex-1"
        >
          ← Back to Ingredients
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold flex-1"
        >
          Clear Ingredients & Stop Cooking
        </button>
        <button
          onClick={handleFinishCooking}
          disabled={localIngredients.length === 0}
          className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold flex-1 transition-opacity ${
            localIngredients.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Finish Cooking
        </button>
      </div>

      {/* Popup overlay after completion */}
      {showCompletionPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full relative">
            {/* Close button */}
            <button
              onClick={() => {
                setShowCompletionPopup(false);
                setShowDelicious(false);
                setShowFireworks(false);
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              ✖
            </button>
            {/* Popup content */}
            <div className="flex justify-center mb-4">
              {/* Chef illustration SVG */}
              <svg width="120" height="120" viewBox="0 0 200 200">
                {/* Chef Hat */}
                <rect x="40" y="20" width="120" height="50" rx="10" fill="#FFFFFF" stroke="#000" strokeWidth="2"/>
                {/* Head */}
                <circle cx="100" cy="100" r="50" fill="#FFD700"/>
                {/* Eyes */}
                <circle cx="85" cy="90" r="5" fill="#000"/>
                <circle cx="115" cy="90" r="5" fill="#000"/>
                {/* Smile */}
                <path d="M85,115 Q100,125 115,115" stroke="#000" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            {/* Message */}
            <h2 className="text-2xl font-bold text-center mb-4">🎉 Cooking Complete! 🎉</h2>
            {showDelicious && (
              <div className="flex justify-center mb-4">
                <p className="text-3xl font-bold text-red-500 animate-bounce">Delicious!</p>
              </div>
            )}
            <p className="text-center mb-6">Your dish is ready to serve!</p>
            {/* Continue Button */}
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => {
                  setShowCompletionPopup(false);
                  setShowDelicious(false);
                  setShowFireworks(false);
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-bold transition-colors"
              >
                Continue Cooking
              </button>
            </div>
            {/* Fireworks SVG */}
            {showFireworks && (
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 animate-ping" style={{ animationDelay: '0.5s' }}>
                  <svg width="60" height="80" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="fireworkGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="40%" stopColor="#FF5252" />
                        <stop offset="50%" stopColor="#FF9800" />
                        <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <circle cx="80" cy="90" r="90" fill="url(#fireworkGradient)" />
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={i}
                        x1={50}
                        y1={50}
                        x2={50 + 40 * Math.cos(i * Math.PI / 6)}
                        y2={50 + 40 * Math.sin(i * Math.PI / 6)}
                        stroke="#FF5252"
                        strokeWidth="2"
                        strokeOpacity="0.7"
                      />
                    ))}
                  </svg>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CookingStage;