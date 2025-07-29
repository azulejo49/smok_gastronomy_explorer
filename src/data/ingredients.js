const ingredients = [
  // Seeds (10)
  {
    id: 1,
    name: "Sunflower Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FFD700"/><circle cx="50" cy="50" r="30" fill="%23F4A460"/></svg>',
  },
  {
    id: 2,
    name: "Pumpkin Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23FF8C00"/><ellipse cx="50" cy="50" rx="30" ry="20" fill="%238B4513"/></svg>',
  },
  {
    id: 3,
    name: "Chia Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="30" cy="30" r="5" fill="%234682B4"/><circle cx="50" cy="20" r="5" fill="%234682B4"/><circle cx="70" cy="30" r="5" fill="%234682B4"/><circle cx="25" cy="50" r="5" fill="%234682B4"/><circle cx="45" cy="60" r="5" fill="%234682B4"/><circle cx="65" cy="50" r="5" fill="%234682B4"/><circle cx="30" cy="70" r="5" fill="%234682B4"/><circle cx="50" cy="80" r="5" fill="%234682B4"/><circle cx="70" cy="70" r="5" fill="%234682B4"/></svg>',
  },
  {
    id: 4,
    name: "Flax Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="40" width="40" height="20" rx="10" fill="%23F4A460"/><rect x="40" y="30" width="20" height="40" rx="10" fill="%23F4A460"/></svg>',
  },
  {
    id: 5,
    name: "Sesame Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23D2B48C8"/><ellipse cx="50" cy="50" rx="20" ry="15" fill="%23FFFFFF"/></svg>',
  },
  {
    id: 6,
    name: "Poppy Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23800000"/><circle cx="50" cy="50" r="30" fill="%23FFFFFF"/></svg>',
  },
  {
    id: 7,
    name: "Jute Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="30" width="40" height="40" rx="5" fill="%233CB371"/><rect x="40" y="20" width="20" height="60" rx="5" fill="%233CB371"/></svg>',
  },
  {
    id: 8,
    name: "Mustard Seeds",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FFD700"/><circle cx="50" cy="50" r="30" fill="%23808000"/></svg>',
  },
  {
    id: 9,
    name: "Jalapeno (Flakes)",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%233CB371"/></svg>',
  },
  {
    id: 10,
    name: "goji berries",
    category: "seeds",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23D2691E"/></svg>',
  },

  // Plants (10)
  {
    id: 11,
    name: "Basil",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="20" width="10" height="60" fill="%23800000"/><path d="M45,20 L55,20 L50,10 Z" fill="%23800000"/><path d="M40,30 L60,30 L50,25 Z" fill="%233CB371"/><path d="M40,40 L60,40 L50,35 Z" fill="%233CB371"/><path d="M40,50 L60,50 L50,45 Z" fill="%233CB371"/><path d="M40,60 L60,60 L50,55 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 12,
    name: "Parsley",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="40" width="10" height="40" fill="%233CB371"/><path d="M45,40 L55,40 L50,30 Z" fill="%233CB371"/><path d="M35,50 L65,50 L50,45 Z" fill="%233CB371"/><path d="M35,60 L65,60 L50,55 Z" fill="%233CB371"/><path d="M35,70 L65,70 L50,65 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 13,
    name: "Mint",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="30" width="10" height="50" fill="%233CB371"/><path d="M45,30 L55,30 L50,20 Z" fill="%233CB371"/><path d="M30,40 L70,40 L50,35 Z" fill="%233CB371"/><path d="M30,50 L70,50 L50,45 Z" fill="%233CB371"/><path d="M30,60 L70,60 L50,55 Z" fill="%233CB371"/><path d="M30,70 L70,70 L50,65 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 14,
    name: "Rosemary",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="20" width="10" height="60" fill="%23808080"/><path d="M45,20 L55,20 L50,10 Z" fill="%23808080"/><path d="M35,30 L65,30 L50,25 Z" fill="%233CB371"/><path d="M35,40 L65,40 L50,35 Z" fill="%233CB371"/><path d="M35,50 L65,50 L50,45 Z" fill="%233CB371"/><path d="M35,60 L65,60 L50,55 Z" fill="%233CB371"/><path d="M35,70 L65,70 L50,65 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 15,
    name: "Thyme",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="30" width="10" height="50" fill="%23808080"/><path d="M45,30 L55,30 L50,20 Z" fill="%23808080"/><path d="M30,40 L70,40 L50,35 Z" fill="%233CB371"/><path d="M30,50 L70,50 L50,45 Z" fill="%233CB371"/><path d="M30,60 L70,60 L50,55 Z" fill="%233CB371"/><path d="M30,70 L70,70 L50,65 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 16,
    name: "Cilantro(Coriander)",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="30" width="10" height="50" fill="%233CB371"/><path d="M45,30 L55,30 L50,20 Z" fill="%233CB371"/><path d="M30,40 L70,40 L50,35 Z" fill="%233CB371"/><path d="M30,50 L70,50 L50,45 Z" fill="%233CB371"/><path d="M30,60 L70,60 L50,55 Z" fill="%233CB371"/><path d="M30,70 L70,70 L50,65 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 17,
    name: "Dill",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="30" width="10" height="50" fill="%233CB371"/><path d="M45,30 L55,30 L50,20 Z" fill="%233CB371"/><path d="M30,40 L70,40 L50,35 Z" fill="%233CB371"/><path d="M30,50 L70,50 L50,45 Z" fill="%233CB371"/><path d="M30,60 L70,60 L50,55 Z" fill="%233CB371"/><path d="M30,70 L70,70 L50,65 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 18,
    name: "Sage",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="30" width="10" height="50" fill="%23808080"/><path d="M45,30 L55,30 L50,20 Z" fill="%23808080"/><path d="M30,40 L70,40 L50,35 Z" fill="%233CB371"/><path d="M30,50 L70,50 L50,45 Z" fill="%233CB371"/><path d="M30,60 L70,60 L50,55 Z" fill="%233CB371"/><path d="M30,70 L70,70 L50,65 Z" fill="%233CB371"/></svg>',
  },
  {
    id: 19,
    name: "Lavender",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M50,20 L60,50 L50,80 L40,50 Z" fill="%239370DB"/><path d="M30,30 L70,30" stroke="%23E6E6FA" stroke-width="2"/><path d="M35,40 L65,40" stroke="%23E6E6FA" stroke-width="2"/><path d="M40,50 L60,50" stroke="%23E6E6FA" stroke-width="2"/><path d="M35,60 L65,60" stroke="%23E6E6FA" stroke-width="2"/><path d="M30,70 L70,70" stroke="%23E6E6FA" stroke-width="2"/></svg>',
  },
  {
    id: 20,
    name: "Spinach",
    category: "plants",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="45" y="30" width="10" height="50" fill="%233CB371"/><path d="M45,30 L55,30 L50,20 Z" fill="%233CB371"/><path d="M30,40 L70,40 L50,35 Z" fill="%233CB371"/><path d="M30,50 L70,50 L50,45 Z" fill="%233CB371"/><path d="M30,60 L70,60 L50,55 Z" fill="%233CB371"/><path d="M30,70 L70,70 L50,65 Z" fill="%233CB371"/></svg>',
  },

  // Spices (10)
  {
    id: 21,
    name: "Cinnamon",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="35" y="30" width="30" height="10" rx="5" fill="%238B4513"/><rect x="35" y="50" width="30" height="10" rx="5" fill="%238B4513"/><rect x="35" y="70" width="30" height="10" rx="5" fill="%238B4513"/></svg>',
  },
  {
    id: 22,
    name: "Paprika",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FF6347"/></svg>',
  },
  {
    id: 23,
    name: "Turmeric",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="30" width="40" height="40" rx="5" fill="%23FFD700"/></svg>',
  },
  {
    id: 24,
    name: "Cumin",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23D2691E"/></svg>',
  },
  {
    id: 25,
    name: "Jalapeno (Flakes)",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%233CB371"/></svg>',
  },
  {
    id: 26,
    name: "Saffron",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 L70,30 L50,10 Z" fill="%23FFD700"/><path d="M30,50 L70,50 L50,30 Z" fill="%23FFD700"/><path d="M30,70 L70,70 L50,50 Z" fill="%23FFD700"/></svg>',
  },
  {
    id: 27,
    name: "Cayenne Pepper",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M50,20 L60,50 L50,80 L40,50 Z" fill="%23FF4500"/></svg>',
  },
  {
    id: 28,
    name: "Nutmeg",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23A0522D"/></svg>',
  },
  {
    id: 29,
    name: "Ginger",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23FF8C00"/></svg>',
  },
  {
    id: 30,
    name: "Cloves",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M50,20 L60,50 L50,80 L40,50 Z" fill="%23800000"/></svg>',
  },
  {
    id: 31,
    name: "Black Pepper",
    category: "spices",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23000000"/><circle cx="50" cy="50" r="30" fill="%23FFFFFF"/></svg>',
  },

  // Fruits (10)
  {
    id: 32,
    name: "Apple",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23FF0000"/><path d="M40,10 L60,10" stroke="%23660000" stroke-width="3"/></svg>',
  },
  {
    id: 33,
    name: "Banana",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 70,20 80,30 C90,40 90,70 80,80 C70,90 40,90 30,80 C20,70 20,40 30,30 Z" fill="%23FFFF00"/></svg>',
  },
  {
    id: 34,
    name: "Orange",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FFA500"/></svg>',
  },
  {
    id: 35,
    name: "Strawberry",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23FF69B4"/><path d="M40,10 L60,10" stroke="%23336633" stroke-width="2"/><path d="M45,5 L55,5" stroke="%23336633" stroke-width="2"/></svg>',
  },
  {
    id: 36,
    name: "Blueberry",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%234169E1"/></svg>',
  },
  {
    id: 37,
    name: "Mango",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 70,20 80,30 C90,40 90,70 80,80 C70,90 40,90 30,80 C20,70 20,40 30,30 Z" fill="%23FFA500"/><path d="M30,30 L20,20" stroke="%23660000" stroke-width="3"/></svg>',
  },
  {
    id: 38,
    name: "Pineapple",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M50,20 L60,50 L50,80 L40,50 Z" fill="%23FFD700"/><path d="M30,30 L70,30" stroke="%23660000" stroke-width="2"/><path d="M35,40 L65,40" stroke="%23660000" stroke-width="2"/><path d="M40,50 L60,50" stroke="%23660000" stroke-width="2"/><path d="M35,60 L65,60" stroke="%23660000" stroke-width="2"/><path d="M30,70 L70,70" stroke="%23660000" stroke-width="2"/></svg>',
  },
  {
    id: 39,
    name: "Watermelon",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="45" ry="30" fill="%23008000"/><ellipse cx="50" cy="50" rx="40" ry="25" fill="%23FF6347"/></svg>',
  },
  {
    id: 40,
    name: "Grapes",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="30" cy="30" r="10" fill="%23800000"/><circle cx="50" cy="30" r="10" fill="%23800000"/><circle cx="70" cy="30" r="10" fill="%23800000"/><circle cx="25" cy="50" r="10" fill="%23800000"/><circle cx="45" cy="50" r="10" fill="%23800000"/><circle cx="65" cy="50" r="10" fill="%23800000"/><circle cx="30" cy="70" r="10" fill="%23800000"/><circle cx="50" cy="70" r="10" fill="%23800000"/><circle cx="70" cy="70" r="10" fill="%23800000"/><path d="M30,30 L50,70" stroke="%23000000" stroke-width="2"/><path d="M50,30 L70,70" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 41,
    name: "Kiwi",
    category: "fruits",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23808000"/><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23FFFFFF"/><ellipse cx="50" cy="50" rx="15" ry="10" fill="%23006400"/></svg>',
  },

  // Vegetables (15)
  {
    id: 42,
    name: "Tomato(Botanically-Fruit)",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23FF6347"/><path d="M40,20 L60,20" stroke="%23660000" stroke-width="2"/></svg>',
  },
  {
    id: 43,
    name: "Carrot",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M50,20 L60,80 L40,80 Z" fill="%23FFA500"/><path d="M45,20 L55,20" stroke="%23660000" stroke-width="3"/></svg>',
  },
  {
    id: 44,
    name: "Onion",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M50,20 C30,30 20,50 20,70 C20,90 40,90 50,90 C60,90 80,90 80,70 C80,50 70,30 50,20 Z" fill="%23FFFFFF"/><path d="M40,40 L60,40" stroke="%23800000" stroke-width="2"/><path d="M35,50 L65,50" stroke="%23800000" stroke-width="2"/><path d="M30,60 L70,60" stroke="%23800000" stroke-width="2"/><path d="M25,70 L75,70" stroke="%23800000" stroke-width="2"/></svg>',
  },
  {
    id: 45,
    name: "Potato",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23D2B48C8"/><path d="M30,30 L70,70" stroke="%23000000" stroke-width="2"/><path d="M30,70 L70,30" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 46,
    name: "Artichoke",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23228B22"/><path d="M40,40 L60,40" stroke="%23006400" stroke-width="2"/><path d="M35,50 L65,50" stroke="%23006400" stroke-width="2"/><path d="M30,60 L70,60" stroke="%23006400" stroke-width="2"/></svg>',
  },
  {
    id: 47,
    name: "Broccoli",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M50,20 L60,50 L50,80 L40,50 Z" fill="%23006400"/><path d="M35,30 L65,30" stroke="%233CB371" stroke-width="2"/><path d="M35,40 L65,40" stroke="%233CB371" stroke-width="2"/><path d="M40,50 L60,50" stroke="%233CB371" stroke-width="2"/><path d="M35,60 L65,60" stroke="%233CB371" stroke-width="2"/><path d="M30,70 L70,70" stroke="%233CB371" stroke-width="2"/></svg>',
  },
  {
    id: 48,
    name: "Bell Pepper",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23008000"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M35,15 L65,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 49,
    name: "Cucumber",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="30" width="40" height="60" rx="20" fill="%23008000"/></svg>',
  },
  {
    id: 50,
    name: "Zucchini",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23008000"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 51,
    name: "Eggplant",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23808080"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 52,
    name: "Jerusalem Artichoke=Batata Ksbia",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23808080"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 53,
    name: "chickpea",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23808080"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 54,
    name: "Leek",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="30" width="40" height="60" rx="20" fill="%23008000"/></svg>',
  },
  {
    id: 55,
    name: "CauliFlower",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23808080"/></svg>',
  },
  {
    id: 56,
    name: "BeetRoot",
    category: "vegetables",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23FF6347"/><path d="M40,20 L60,20" stroke="%23660000" stroke-width="2"/></svg>',
  },

  // Legumes (4)
  {
    id: 57,
    name: "Red Lentils",
    category: "legumes",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FF6347"/></svg>',
  },
  {
    id: 58,
    name: "Green lentils",
    category: "legumes",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="30" width="40" height="60" rx="20" fill="%23008000"/></svg>',
  },
  {
    id: 59,
    name: "Red Beans",
    category: "legumes",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23D2691E"/></svg>',
  },
  {
    id: 60,
    name: "White Beans",
    category: "legumes",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23808080"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },

  // Grains (8)
  {
    id: 61,
    name: "Wheat",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FF6347"/></svg>',
  },
  {
    id: 62,
    name: "Bulgur",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="40" width="40" height="20" rx="10" fill="%23F4A460"/><rect x="40" y="30" width="20" height="40" rx="10" fill="%23F4A460"/></svg>',
  },
  {
    id: 63,
    name: "Corn",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23D2691E"/></svg>',
  },
  {
    id: 64,
    name: "Samolina",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23808080"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 65,
    name: "Buckwheat",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23808080"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 66,
    name: "Quinoa",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FF6347"/><circle cx="50" cy="50" r="30" fill="%23FFFFFF"/></svg>',
  },
  {
    id: 67,
    name: "Rice",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FF6347"/><circle cx="50" cy="50" r="30" fill="%23FFFFFF"/></svg>',
  },
{
    id: 68,
    name: "Oats",
    category: "grains",
    image:
      'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><circle cx="50" cy="50" r="40" fill="%23FF6347"/><circle cx="50" cy="50" r="30" fill="%23FFFFFF"/></svg>',
  },
  // Nuts (8)
  {
     id: 69,
    name: "Almonds",
    category: "nuts",
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23FFD700"/></svg>',
  },
  {
    id: 70,
    name: "Chestnuts",
    category: "nuts",
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23FFA500"/></svg>',
  },
  {
    id: 71,
    name: "Cashews",
    category: "nuts",
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><path d="M30,30 C40,20 60,20 70,30 C80,40 80,60 70,70 C60,80 40,80 30,70 C20,60 20,40 30,30 Z" fill="%23808080"/><path d="M40,20 L60,20" stroke="%23000000" stroke-width="2"/><path d="M45,15 L55,15" stroke="%23000000" stroke-width="2"/><path d="M40,80 L60,80" stroke="%23000000" stroke-width="2"/></svg>',
  },
  {
    id: 72,
    name: "Macadamia",
    category: "nuts",
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23FFA500"/></svg>',
  },
  {
    id: 73,
    name: "Pecans",
    category: "nuts",
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23D2691E"/></svg>',
  },
  {
    id: 74,
    name: "Peanuts",
    category: "nuts",
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="30" ry="20" fill="%23FFA500"/></svg>',
  },
  {
    id: 75,
    name: "Pistachios",
    category: "nuts",
    image:  'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><rect x="30" y="30" width="40" height="60" rx="20" fill="%23008000"/></svg>',
  },
  {
    id: 76,
    name: "Walnuts",
    category: "nuts",
    image: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="300" height="200"><ellipse cx="50" cy="50" rx="40" ry="30" fill="%23808080"/></svg>',
  },
];

export default ingredients;