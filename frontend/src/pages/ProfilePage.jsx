// src/pages/ProfilePage.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import CharacterIllustration from '../components/CharacterIllustration';

const ProfilePage = () => {
  // Sample user data -  can pass this from props or context
  const user = {
    name: 'Kennedy Grey',
    role: 'Pro User',
    avatar: '🐸'
  };

  return (
    <div className="min-h-screen w-screen bg-white-500 flex overflow-x-hidden items-center justify-center p-1">
      <div className="w-full h-full flex gap-0">
        <Sidebar user={user} />
        <MainContent />
        <CharacterIllustration />
       </div>
    </div>
  );
};

export default ProfilePage;