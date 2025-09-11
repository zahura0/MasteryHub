import React from 'react';
import { 
  IoOpenOutline as ExternalLink 
} from 'react-icons/io5';

const Recommendations = () => {
  return (
    <div className="bg-yellow-100 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold">Recommendations Today</h3>
        <button className="text-yellow-600 hover:text-yellow-700 transition-colors">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
      <div className="mb-4">
        <h4 className="font-semibold text-lg mb-2">Graphic Design</h4>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur elit.
        </p>
      </div>
    </div>
  );
};

export default Recommendations;