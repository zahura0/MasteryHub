import React from 'react';
import profileImage from '../assets/myprofile-illustration.jpg';

const CharacterIllustration = () => {
  return (
    <div className="w-64 min-h-screen flex-shrink-0 bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <div className="w-100 h-180 mb-4 mx-auto flex items-center justify-center">
            <img 
              src={profileImage}
              alt="My profile illustration" 
              className="w-full h-full object-contain"
            />
          </div>
         </div>
      </div>
    </div>
  );
};

export default CharacterIllustration;