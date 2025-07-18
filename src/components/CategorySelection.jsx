import React from 'react';

const CategorySelection = ({ onSelectCategory, onBack }) => {
  const categories = ['seeds', 'plants', 'spices', 'fruits', 'vegetables', 'legumes', 'grains', 'nuts'];
  
  return (
    <div className="flex flex-col items-center">
      <div className="mb-9 flex justify-center w-full">
        {/* Back Button - Keep in position */}
        <button
          onClick={onBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center ml-80"
        >
          ← Back to Players
        </button>
        
        {/* Category Title - Keep in position */}
        <div className="flex-grow flex justify-center">
          <h2 className="bg-yellow-100 text-2xl font-bold">CHOOSE A CATEGORY</h2>
        </div>
      </div>
      
      {/* Categories in a single line */}
      <div className="flex justify-center w-full flex-wrap gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition-colors min-w-[120px]"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySelection;