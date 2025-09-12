import React from 'react';
import { 
  IoNotifications as Bell,
  IoCalendar as Calendar,
  IoChatbubble as MessageSquare,
  IoTrophy as Award,
  IoOpenOutline as ExternalLink 
} from 'react-icons/io5';

const Sidebar = ({ user = { name: 'Kennedy Grey', role: 'Pro User', avatar: '🐸' } }) => {
  return (
    <div className="w-65 min-h-screen bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm opacity-90">ONLINE</span>
        <Bell className="w-5 h-5" />
      </div>
      
      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-blue-500 mb-6 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-3xl">{user.avatar}</span>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-2">{user.name}</h3>
        <p className="text-base opacity-90 mb-6">{user.role}</p>
      </div>
      
      {/* Navigation Menu */}
      <div className="space-y-2 mb-8">
        <div className="flex items-center space-x-4 text-base cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-colors">
          <Award className="w-5 h-5" />
          <span>My Certificates</span>
        </div>
        <div className="flex items-center space-x-4 text-base cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-colors">
          <ExternalLink className="w-5 h-5" />
          <span>My Purchases</span>
        </div>
        <div className="flex items-center space-x-4 text-base cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-colors">
          <Calendar className="w-5 h-5" />
          <span>Calendar</span>
        </div>
        <div className="flex items-center space-x-4 text-base cursor-pointer hover:bg-white/10 p-3 rounded-lg transition-colors">
          <MessageSquare className="w-5 h-5" />
          <span>Messages</span>
        </div>
      </div>
      
      {/* Help Center */}
      <div className="bg-white rounded-xl p-6 mt-auto">
        <h3 className="text-lg font-bold mb-3 text-black">Help Center</h3>
        <p className="text-black/80 text-sm mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="bg-gray-900 hover:bg-gray-700 text-white px-6 py-2.5 rounded-lg text-sm transition-colors">
          Go to help center
        </button>
      </div>
    </div>
  );
};

export default Sidebar;