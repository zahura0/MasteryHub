import React from 'react';

const ProgressTabs = ({ activeFilter, setActiveFilter }) => {
  const filters = ['In Progress', 'Upcoming', 'Completed'];

  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex space-x-6">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`font-medium pb-1 transition-colors ${
              activeFilter === filter
                ? 'text-purple-600 border-b-2 border-purple-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <button className="text-purple-600 text-sm hover:text-purple-700 transition-colors">
        View All
      </button>
    </div>
  );
};

export default ProgressTabs;