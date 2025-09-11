import React from 'react';

const CharacterIllustration = () => {
  return (
    <div className="w-64 hidden xl:block">
      <div className="sticky top-8">
        <div className="w-full h-80 bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl flex items-end justify-center p-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-green-400 rounded-full mb-4 mx-auto flex items-center justify-center">
              <span className="text-6xl">👨‍💻</span>
            </div>
            <div className="text-sm text-gray-600">MY PROFILE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterIllustration;