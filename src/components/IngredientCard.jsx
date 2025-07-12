import React from 'react';

const IngredientCard = ({ ingredient, onSelect }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={() => onSelect(ingredient)}
    >
      <img 
        src={ingredient.image} 
        alt={ingredient.name} 
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{ingredient.name}</h3>
        <p className="text-gray-600 text-sm">
          {ingredient.category.charAt(0).toUpperCase() + ingredient.category.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default IngredientCard;