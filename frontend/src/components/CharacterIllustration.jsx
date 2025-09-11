import React from 'react';

const CharacterIllustration = () => {
  return (
    <div className="w-64 min-h-screen flex-shrink-0 bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-32 h-32 bg-green-400 rounded-full mb-4 mx-auto flex items-center justify-center">
            <span className="text-6xl">👨‍💻</span>
          </div>
          <div className="text-sm text-gray-600">MY PROFILE</div>
        </div>
      </div>
    </div>
  );
};

export default CharacterIllustration;