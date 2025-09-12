import React, { useState } from 'react';
import { 
  IoBookmarkOutline as BookmarkOutline,
  IoBookmark as BookmarkFilled
} from 'react-icons/io5';

const Recommendations = () => {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-yellow-100 rounded-xl p-6">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold">Recommendations Today</h3>
        <button 
          onClick={toggleSave}
          className={`transition-colors ${
            isSaved 
              ? 'text-yellow-600 hover:text-yellow-700' 
              : 'text-gray-400 hover:text-yellow-600'
          }`}
        >
          {isSaved ? (
            <BookmarkFilled className="w-5 h-5" />
          ) : (
            <BookmarkOutline className="w-5 h-5" />
          )}
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