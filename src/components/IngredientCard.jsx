import React from 'react';

const IngredientCard = ({ ingredient, onSelect }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow w-32 sm:w-40 flex flex-col items-center p-4"
      onClick={() => onSelect(ingredient)}
    >
      <img
        src={ingredient.image}
        alt={ingredient.name}
        className="w-full h-18 object-cover rounded" //rounded/cover?
      />
      <div className="mt-2 text-center w-full">
        <h3 className="font-bold text-sm">{ingredient.name}</h3>
        <p className="text-gray-600 text-sm">
          {ingredient.category.charAt(0).toUpperCase() +
            ingredient.category.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default IngredientCard;