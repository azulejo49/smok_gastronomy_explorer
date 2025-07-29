import React from 'react';

const CategorySelection = ({ onSelectCategory, onBack }) => {
  const categories = ['seeds', 'plants', 'spices', 'fruits', 'vegetables', 'legumes', 'grains', 'nuts'];
  
  return (
    <div className="flex flex-col items-center">
      {/* Responsive flex container */}
    <div className="w-full px-20 sm:px-8 md:px-16 flex flex-col sm:flex-row items-center sm:justify-between mb-9">
        {/* Back Button - Keep in position */}
        <button
          onClick={onBack}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          ← Back to Players
        </button>
        
        {/* Category Title - Keep in position */}
        <div className="w-full px-20 sm:px-8 md:px-16">
          <h2 className="text-2xl font-bold text-left w-full sm:w-auto mb-4 sm:mb-0">CHOOSE CATEGORY</h2>
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