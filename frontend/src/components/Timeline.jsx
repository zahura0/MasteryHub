import React from 'react';

const Timeline = ({ timelineFilter, setTimelineFilter, timelineItems }) => {
  return (
    <div className="col-span-2 bg-white border border-gray-200 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Timeline</h3>
        <select 
          value={timelineFilter}
          onChange={(e) => setTimelineFilter(e.target.value)}
          className="border border-gray-200 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
      
      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${item.color} rounded-lg flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">OC</span>
            </div>
            <span className="text-sm text-gray-700">{item.title}</span>
          </div>
        ))}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-700 transition-colors">
          View by Date with
        </button>
      </div>
    </div>
  );
};

export default Timeline;