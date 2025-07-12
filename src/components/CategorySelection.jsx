import React from 'react';

const CategorySelection = ({ onSelectCategory, onBack }) => {
  const categories = ['seeds', 'plants', 'spices', 'fruits', 'vegetables'];

  return (
    <div className="flex flex-col items-center">
      <div className="mb-6 flex justify-between items-center w-full">
        <button 
          onClick={onBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center"
        >
          ← Back to Players
        </button>
        <h2 className="text-2xl font-bold">Choose a Category</h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600 transition-colors flex flex-col items-center"
          >
            <span className="text-lg">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;