import React, { useState, useEffect } from "react";

const CookingStage = ({ selectedIngredients, onBack, onClearIngredients }) => {
  // State variables
  const [cookingStep, setCookingStep] = useState(0);
  const [localIngredients, setLocalIngredients] = useState([...selectedIngredients]);
  const [steamParticles, setSteamParticles] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  const [showCompletionPopup, setShowCompletionPopup] = useState(false);
  const [showDelicious, setShowDelicious] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [showBlackTruffle, setShowBlackTruffle] = useState(true);
  const [showWhiteTruffle, setShowWhiteTruffle] = useState(true);
  const [showTruffle] = useState(true); // always visible
  const [isCookingFinished, setIsCookingFinished] = useState(false);
  const [selectedTruffles, setSelectedTruffles] = useState([]);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isCooking, setIsCooking] = useState(true); // New state to track cooking status
  // Truffle objects
  const BlackTruffle = {
    id: "truffle-001",
    name: "Tuber Melanosporum",
    description: "Rare black truffle with earthy aroma",
    image: "/images/blacktruff1.jpg",
  };
  const WhiteTruffle = {
    id: "truffle-002",
    name: "Tuber Magnatum Pico",
    description: "Rare white truffle with earthy aroma",
    image: "/images/whitetruff2.jpg",
  };

  // Helper to add ingredients
  const addIngredient = (ingredient) => {
    setLocalIngredients((prev) => {
      if (prev.some((ing) => ing.id === ingredient.id)) return prev;
      return [...prev, ingredient];
    });
  };

  // Handle add truffle
  const handleAddTruffle = (type) => {
    const truffleObj = type === "black" ? BlackTruffle : WhiteTruffle;
    addIngredient(truffleObj);
    if (type === "black") setShowBlackTruffle(false);
    if (type === "white") setShowWhiteTruffle(false);
    if (!selectedTruffles.includes(type))
      setSelectedTruffles((prev) => [...prev, type]);
  };

  // Sync local ingredients with selectedIngredients
  useEffect(() => {
    setLocalIngredients([...selectedIngredients]);
  }, [selectedIngredients]);

  // Simulate cooking steps
  useEffect(() => {
    if (localIngredients.length > 0 && !isCookingFinished && cookingStep < 3) {
      const timer = setInterval(() => {
        setCookingStep((prev) => (prev >= 3 ? prev : prev + 1));
      }, 14500);
      return () => clearInterval(timer);
    }
  }, [localIngredients, cookingStep, isCookingFinished]);

  // Steam particles effect
  useEffect(() => {
    if (cookingStep >= 2 && !isCookingFinished) {
      const steamTimer = setInterval(() => {
        setSteamParticles((prev) => {
          const newParticle = {
            id: Date.now(),
            x: 70 + Math.random() * 80,
            y: 60,
            opacity: 0.9,
            size: 2 + Math.random() * 2,
            speed: 0.5 + Math.random(),
            wobble: Math.random() * 2 - 1,
          };
          return [...prev, newParticle].slice(-10);
        });
      }, 40);
      return () => clearInterval(steamTimer);
    }
  }, [cookingStep, isCookingFinished]);

  // Bubbles effect
  useEffect(() => {
    if (cookingStep >= 1 && !isCookingFinished) {
      const bubbleTimer = setInterval(() => {
        setBubbles((prev) => {
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
      }, 60);
      return () => clearInterval(bubbleTimer);
    }
  }, [cookingStep, isCookingFinished]);

  // Animate bubbles and steam
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prev) =>
        prev
          .map((b) => {
            let sizeMultiplier = 1;
            if (cookingStep === 1) sizeMultiplier = 2;
            else if (cookingStep === 2) sizeMultiplier = 3;
            else if (cookingStep >= 3) sizeMultiplier = 4;
            return {
              ...b,
              y: b.y - b.speed,
              size: Math.max(b.size + 0.1 * sizeMultiplier, 0.1),
              opacity: Math.max(b.opacity - 0.01, 0),
            };
          })
          .filter((b) => b.opacity > 0)
      );
    }, 30);
    return () => clearInterval(interval);
  }, [cookingStep]);

  // Animate steam particles
  useEffect(() => {
    const interval = setInterval(() => {
      setSteamParticles((prev) =>
        prev
          .map((p) => {
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
          .filter((p) => p.opacity > 0)
      );
    }, 50);
    return () => clearInterval(interval);
  }, [cookingStep]);

  const handleFinishCooking = () => {
    setIsCookingFinished(true);
    setShowCompletionPopup(true);
    setShowDelicious(true);
    setShowFireworks(true);
    setIsCooking(false); // Re-enable buttons after cooking
  };

  const handleClear = () => {
    onClearIngredients();
    setIsCooking(false); // Re-enable buttons after clearing
  };


  // Clear ingredients
//  const handleClear = () => { old handle clear,without disable
  //  onClearIngredients();
 // };

  // Calculate progress percent
  const progressPercent = isCookingFinished
    ? 100
    : localIngredients.length > 0
    ? Math.min(cookingStep * 33, 99)
    : 0;

  return (
    <div className="relative flex flex-col items-center min-h-screen py-8 cooking-background">
      
      {/* --- Decorations / overlay --- */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <circle cx="50" cy="50" r="20" fill="#fff" opacity="0.1" />
          <rect x="150" y="100" width="100" height="20" fill="#fff" opacity="0.05" rx="4" ry="4" />
        </svg>
      </div>

      {/* --- Overlay: Messages --- */}
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
      {showFireworks && (
        <div className="absolute inset-0 z-40 pointer-events-none">
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

     {/* --- Header --- */}
      <h2 className="text-3xl font-bold mb-4 text-center text-yellow-500">Cooking Stage</h2>

      {/* --- Cooking Instructions --- */}
      <div className="flex justify-center mb-6 w-full max-w-2xl">
        <div
          className={`bg-yellow-100 p-0 rounded-lg border-2 border-yellow-300 ${
            localIngredients.length === 0 ? "opacity-50" : ""
          }`}
        >
          <h3 className="text-lg font-semibold mb-2">Cooking Instructions:</h3>
          <div className="space-y-2">
            {/* Step 1 */}
            <p className="text-gray-700">
              <span
                className={`font-bold ${
                  localIngredients.length > 0 && cookingStep >= 1
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                Step 1:
              </span>{" "}
              {localIngredients.length > 0 && cookingStep >= 1 ? "✓" : "○"} Mix Ingredients
            </p>
            {/* Step 2 */}
            <p className="text-gray-700">
              <span
                className={`font-bold ${
                  localIngredients.length > 0 && cookingStep >= 2
                    ? "text-green-600"
                    : "text-gray-500"
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
                  localIngredients.length > 0 && cookingStep >= 3
                    ? "text-green-600"
                    : "text-gray-500"
                }`}
              >
                Step 3:
              </span>{" "}
              {localIngredients.length > 0 && cookingStep >= 3 ? "✓" : "○"} Finalize & serve
            </p>
          </div>
          <p className="mt-3 text-base font-medium text-green-600 text-center">
            {localIngredients.length > 0
              ? cookingStep >= 3
                ? "Your dish is ready! Enjoy!"
                : "Cooking in progress..."
              : "Add ingredients to start cooking!"}
          </p>
        </div>
      </div>

      {/* --- 2. Scene with pot, steam, bubbles, flame --- */}
      <div className="relative mb-6 flex justify-center w-full">
       {/* Chef illustration SVG - Enhanced Professional Version */}
  <div className="absolute top-0 left-96 w-64 h-64"> {/* Changed from left-64 to left-80 */}
    <svg width="120" height="120" viewBox="0 0 200 200" className="animate-bounce">
  {/* Chef Hat - Enhanced Realistic Version */}
<g>
  {/* Base of hat */}
  <ellipse cx="100" cy="70" rx="70" ry="15" fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
  
  {/* Main body of hat - taller and more voluminous */}
  <path d="M40,70 C40,55 160,55 160,70 
           L165,75 C165,85 35,85 35,75 Z" 
        fill="#FFFFFF" stroke="#000" strokeWidth="1.5" />
  
  {/* Fluffy top section */}
  <path d="M50,75 C50,65 150,65 150,75 
           L155,80 C155,90 45,90 45,80 Z" 
        fill="#FFFFFF" stroke="#000" strokeWidth="1" />
  
  {/* Very top of hat - more rounded and fluffy */}
  <ellipse cx="100" cy="80" rx="50" ry="10" fill="#FFFFFF" stroke="#000" strokeWidth="1" />
  
  -- Texture/Detail Lines -
  <path d="M60,80 Q100,85 140,80" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.6" />
  <path d="M55,85 Q100,90 145,85" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.6" />
  <path d="M50,90 Q100,95 150,90" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.6" />
  
  -- Side folds - more realistic texture --
  <path d="M45,75 Q60,80 45,85" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.7" />
  <path d="M155,75 Q140,80 155,85" stroke="#000" strokeWidth="0.5" fill="none" opacity="0.7" />
  
  -- Top crown detail --
  <ellipse cx="100" cy="80" rx="40" ry="8" fill="#FFFFFF" stroke="#000" strokeWidth="0.5" opacity="0.8" />
  
  -- Air vents/holes for steam --
  <circle cx="80" cy="75" r="2" fill="#000" opacity="0.3" />
  <circle cx="120" cy="75" r="2" fill="#000" opacity="0.3" />
  <circle cx="100" cy="72" r="2" fill="#000" opacity="0.3" />
</g>
  
  {/* Face */}
  <circle cx="100" cy="100" r="40" fill="#F8D5A3" stroke="#000" strokeWidth="1" />
  
  {/* Eyes */}
  <circle cx="85" cy="90" r="4" fill="#000" />
  <circle cx="115" cy="90" r="4" fill="#000" />
  
  {/* Eyebrows */}
  <path d="M75,85 Q85,80 95,85" stroke="#000" strokeWidth="1.5" fill="none" />
  <path d="M105,85 Q115,80 125,85" stroke="#000" strokeWidth="1.5" fill="none" />
  
  -- Mouth --
  <path d="M85,110 Q100,120 115,110" stroke="#000" strokeWidth="2" fill="none" />
  
  -- Chef's Mustache --
  <path d="M85,105 Q100,100 115,105" stroke="#000" strokeWidth="1" fill="none" />
  <path d="M85,108 Q100,103 115,108" stroke="#000" strokeWidth="1" fill="none" />
  
  -- Chef's Uniform Collar -
  <path d="M60,140 Q100,150 140,140" stroke="#000" strokeWidth="1" fill="#FFFFFF" />
  
  -- Chef's Body *
  <rect x="60" y="140" width="80" height="50" rx="5" fill="#E74C3C" stroke="#000" strokeWidth="1" />
  
  -- Chef's Buttons --
  <circle cx="70" cy="155" r="3" fill="#000" />
  <circle cx="70" cy="170" r="3" fill="#000" />
  <circle cx="70" cy="185" r="3" fill="#000" />
  
  -- Chef's Arms -
  <path d="M60,160 L40,180" stroke="#E74C3C" strokeWidth="8" strokeLinecap="round" />
  <path d="M140,160 L160,180" stroke="#E74C3C" strokeWidth="8" strokeLinecap="round" />
  
  -- Chef's Hands -
  <circle cx="40" cy="180" r="8" fill="#F8D5A3" stroke="#000" strokeWidth="1" />
  <circle cx="160" cy="180" r="8" fill="#F8D5A3" stroke="#000" strokeWidth="1" />
  
  -- Chef's Apron Strings -
  <path d="M80,140 L80,160" stroke="#000" strokeWidth="1" strokeDasharray="2,2" />
  <path d="M120,140 L120,160" stroke="#000" strokeWidth="1" strokeDasharray="2,2" />
  
  -- Animated Cooking Utensil -
  <g>
    <rect x="170" y="170" width="30" height="5" rx="2" fill="#8B4513" transform="rotate(-30 170 170)" />
    <circle cx="185" cy="175" r="8" fill="#C0C0C0" />
    <animateTransform
      attributeName="transform"
      type="rotate"
      from="-30 185 175"
      to="-40 185 175"
      dur="2s"
      repeatCount="indefinite"
      additive="sum"
    />
  </g>
  
  -- Animated Steam --
  <g opacity="0.7">
    <path d="M185,165 Q190,155 195,165" stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <animate attributeName="d" 
        values="M185,165 Q190,155 195,165; M185,165 Q192,152 195,165; M185,165 Q188,158 195,165" 
        dur="3s" 
        repeatCount="indefinite" />
      <animate attributeName="opacity" 
        values="0.7;0.9;0.7" 
        dur="3s" 
        repeatCount="indefinite" />
    </path>
    <path d="M180,160 Q185,150 190,160" stroke="#FFFFFF" strokeWidth="1.5" fill="none">
      <animate attributeName="d" 
        values="M180,160 Q185,150 190,160; M180,160 Q187,147 190,160; M180,160 Q183,153 190,160" 
        dur="2.5s" 
        repeatCount="indefinite" />
      <animate attributeName="opacity" 
        values="0.7;0.9;0.7" 
        dur="2.5s" 
        repeatCount="indefinite" />
    </path>
  </g>
</svg>
  
  </div>
        {/* SVG Pot with steam, bubbles, flame */}
        <svg width="180" height="160" viewBox="0 0 200 180" className="mx-auto">
          {/* Pot structure */}
          <rect x="10" y="170" width="180" height="10" fill="#8B4513" />
          <ellipse cx="100" cy="140" rx="80" ry="30" fill="#555" />
          {/* Handles */}
          <path d="M30,120 Q10,100 10,80 Q10,60 30,60" stroke="#555" strokeWidth="12" fill="none" />
          <path d="M170,120 Q190,100 190,80 Q190,60 170,60" stroke="#555" strokeWidth="12" fill="none" />
          {/* Top lid */}
          <ellipse cx="100" cy="60" rx="80" ry="15" fill="#777" />

          {/* Content when cooking (if ingredients and step) */}
          {localIngredients.length > 0 && cookingStep >= 1 && (
            <ellipse cx="100" cy="110" rx="60" ry="20" fill="#8BC34A" opacity={0.8} />
          )}

          {/* Bubbles */}
          {bubbles.map((b) => (
            <circle key={b.id} cx={b.x} cy={b.y} r={b.size} fill="#FFFFFF" opacity={b.opacity} />
          ))}
          
          {/* Steam particles */}
          {steamParticles.map((p) => (
            <path
              key={p.id}
              d={`M${p.x},${p.y} Q${p.x + p.wobble * 2},${p.y - 15} ${p.x + p.wobble * 4},${p.y - 30}`}
              stroke="#FFFFFF"
              strokeWidth={p.size}
              fill="none"
              opacity={p.opacity}
            />
          ))}

          {/* Flame SVG (hidden if finished) */} {/* Flame SVG - make sure it's directly inside the main SVG, no wrapping <div> */}
          {localIngredients.length > 0 && !isCookingFinished && (
           <svg
              width="70"
              height="60"
              viewBox="0 0 60 60"
              x="65"
              y="125"
              style={{ position: 'absolute' }}
            >
              {/* Inner glow filter */}
              <defs>
                <filter id="flameGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="1 0 0 0 0
                            0 1 0 0 0
                            0 0 1 0 0
                            0 0 0 18 -7"
                    result="glow"
                  />
                  <feBlend in="SourceGraphic" in2="glow" mode="normal" />
                </filter>
              </defs>
              {/* Outer flame (yellow) */}
              <g filter="url(#flameGlow)">
                <path
                  d="M30,60 C45,40 40,20 30,10 C20,20 15,40 30,60 Z"
                  fill="#FFEB3B"
                  opacity="0.7"
                >
                  <animate
                    attributeName="d"
                    values="
                      M30,60 C45,40 40,20 30,10 C20,20 15,40 30,60 Z;
                      M30,60 C50,35 45,15 30,5 C15,15 10,35 30,60 Z;
                      M30,60 C40,45 35,25 30,15 C25,25 20,45 30,60 Z;
                      M30,60 C45,40 40,20 30,10 C20,20 15,40 30,60 Z"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.7;0.9;0.7"
                    dur="1.5s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Middle flame (orange) */}
              <g filter="url(#flameGlow)">
                <path
                  d="M30,55 C40,40 35,25 30,18 C25,25 20,40 30,55 Z"
                  fill="#FF9800"
                  opacity="0.8"
                >
                  <animate
                    attributeName="d"
                    values="
                      M30,55 C40,40 35,25 30,18 C25,25 20,40 30,55 Z;
                      M30,55 C45,35 40,20 30,13 C20,20 15,35 30,55 Z;
                      M30,55 C38,45 33,30 30,23 C27,30 22,45 30,55 Z;
                      M30,55 C40,40 35,25 30,18 C25,25 20,40 30,55 Z"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.8;1;0.8"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Inner flame (red) */}
              <g filter="url(#flameGlow)">
                <path
                  d="M30,50 C35,40 32,30 30,25 C28,30 25,40 30,50 Z"
                  fill="#F44336"
                  opacity="0.9"
                >
                  <animate
                    attributeName="d"
                    values="
                      M30,50 C35,40 32,30 30,25 C28,30 25,40 30,50 Z;
                      M30,50 C38,38 35,28 30,23 C25,28 22,38 30,50 Z;
                      M30,50 C33,45 30,35 30,30 C30,35 27,45 30,50 Z;
                      M30,50 C35,40 32,30 30,25 C28,30 25,40 30,50 Z"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.9;1;0.9"
                    dur="0.8s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
              {/* Flickering sparks */}
              <g>
                {[...Array(3)].map((_, i) => (
                  <circle
                    key={i}
                    cx={30 + Math.random() * 20 - 10}
                    cy={15 + Math.random() * 10}
                    r={0.5 + Math.random()}
                    fill="#FFFFFF"
                    opacity={0.7 + Math.random() * 0.3}
                  >
                    <animate
                      attributeName="opacity"
                      values="0;0.8;0"
                      dur={`${0.3 + Math.random() * 0.5}s`}
                      repeatCount="indefinite"
                      begin={`${Math.random() * 2}s`}
                    />
                    <animate
                      attributeName="cy"
                      values="15;5"
                      dur={`${0.5 + Math.random() * 0.5}s`}
                      repeatCount="indefinite"
                      begin={`${Math.random() * 2}s`}
                    />
                  </circle>
                ))}
              </g>
            </svg>
          )}
        </svg>

        {/* Truffle icons, always visible */}
        {showTruffle && (
          <div
            className="absolute -right-0 top-20 w-60 h-50 cursor-pointer transform transition-transform hover:scale-110 animate-pulse"
            title="Click to add truffle"
          >
            <div className="flex space-x-4">
              {showBlackTruffle && (
                <div
                  className="w-80 h-40 cursor-pointer border-4 border-gray-300 shadow-lg rounded-lg transform transition-transform hover:scale-110 hover:border-yellow-400 hover:shadow-xl"
                  onClick={() => handleAddTruffle("black")}
                  title="click to add Tuber-Melanosporum"
                >
                  <img src="/images/blacktruff1.jpg" alt="Black Truffle" className="w-full h-full object-cover rounded" />
                </div>
              )}
              {showWhiteTruffle && (
                <div
                  className="w-80 h-40 cursor-pointer border-4 border-gray-300 shadow-lg rounded-lg transform transition-transform hover:scale-110 hover:border-yellow-400 hover:shadow-xl"
                  onClick={() => handleAddTruffle("white")}
                  title="Click to add Tuber-Magnatum-Pico"
                >
                  <img src="/images/whitetruff2.jpg" alt="White Truffle" className="w-full h-full object-cover rounded" />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* --- 3. Progress Bar --- */}
      {/* Moved below instructions,  keep here for logical flow if desired */}
      <div className="w-full max-w-md mb-0">
        <div className="flex justify-between mb-2">
          <span className="font-bold bg-yellow-400">Cooking Progress</span>
          <span>{progressPercent}%</span>
        </div>
        <div className="w-full bg-gray-300 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full transition-all duration-100"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* --- 4. Ingredients list --- */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
        {(() => {
          const uniqueIngredients = Array.from(
            new Map(localIngredients.map((ing) => [ing.id, ing])).values()
          );
            return uniqueIngredients.length > 0 ? (
            uniqueIngredients.map((ing) => (
              <div
              key={ing.id}
              className="bg-white rounded-lg shadow-md p-2 flex items-center transform transition-transform hover:scale-105"
              >
              {/* show truffle images if selected */}
              {ing.name === "Black Truffle" && selectedTruffles.includes("black") && (
                <div className="w-10 h-10 object-cover rounded-full mr-2">
                <img src="/images/blacktruff1.jpg" alt="Black Truffle" className="w-full h-full object-cover rounded-full" />
                </div>
              )}
              {ing.name === "White Truffle" && selectedTruffles.includes("white") && (
                <div className="w-10 h-10 object-cover rounded-full mr-2">
                <img src="/images/whitetruff2.jpg" alt="White Truffle" className="w-full h-full object-cover rounded-full" />
                </div>
              )}
              {/* Ingredient image */}
              <img src={ing.image} alt={ing.name} className="w-10 h-10 object-cover rounded-full mr-2" />
              <span className="font-medium text-sm">{ing.name}</span>
              </div>
            ))
            ) : (
            <div className="col-span-full text-center font-bold bg-yellow-400 text-red-500">
              No ingredients selected - add some to start cooking!
            </div>
            );
        })()}
      </div>

      {/* --- 5. Action Buttons --- */}
      <div className="flex justify-between w-full mt-1 space-x-4">
        <button
          onClick={onBack}
          disabled={isCooking} // Disable during cooking
          className={`bg-blue-500 hover:bg-purple-600 text-white px-1 py-1 rounded-lg font-bold flex-1 transition-opacity ${
            isCooking ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          ← Go Back & Add New Ingredients
        </button>
        <button
          onClick={handleClear}
          disabled={isCooking} // Disable during cooking
          className={`bg-gray-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold flex-1 transition-opacity ${
            isCooking ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Clear Ingredients & Cook New Dish
        </button>
        <button
          onClick={() => {
            handleFinishCooking();
            setIsFinishing(true);
          }}
          disabled={localIngredients.length === 0 || isFinishing}
          className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-bold flex-1 transition-opacity ${
            (localIngredients.length === 0 || isFinishing) ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Finish Cooking
        </button>
      </div>


      {/* --- 6. Popup overlay after completion --- */}
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
            {/* Popup Content */}
            <div className="flex justify-center mb-6">
              {/* Chef illustration SVG */}
              <svg width="120" height="120" viewBox="0 0 200 200">
                {/* Your SVG for chef */}
                <rect x="40" y="20" width="120" height="50" rx="10" fill="#FFFFFF" stroke="#000" strokeWidth="2" />
                <circle cx="100" cy="100" r="50" fill="#FFD700" />
                <circle cx="85" cy="90" r="5" fill="#000" />
                <circle cx="115" cy="90" r="5" fill="#000" />
                <path d="M85,115 Q100,125 115,115" stroke="#000" strokeWidth="2" fill="none" />
              </svg>
            </div>
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
                <div className="absolute top-0 left-1/4 animate-ping" style={{ animationDelay: "0.5s" }}>
                  <svg width="80" height="80" viewBox="0 0 100 100">
                    <defs>
                      <radialGradient id="fireworkGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="#FF5252" />
                        <stop offset="70%" stopColor="#FF9800" />
                        <stop offset="100%" stopOpacity="0" stopColor="#FFFFFF" />
                      </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="40" fill="url(#fireworkGradient)" />
                    {[...Array(12)].map((_, i) => (
                      <line
                        key={i}
                        x1={50}
                        y1={50}
                        x2={50 + 40 * Math.cos((i * Math.PI) / 6)}
                        y2={50 + 40 * Math.sin((i * Math.PI) / 6)}
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