import React from 'react';

const CourseCard = ({ course, onClick }) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105"
      onClick={() => onClick && onClick(course)}
    >
      <div className="relative h-32 bg-gray-900 flex items-center justify-center">
        <div className={`w-16 h-16 ${course.color} rounded-lg flex items-center justify-center`}>
          <span className="text-white text-xs font-bold text-center leading-3">
            ONLINE<br/>COURSE
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="font-semibold mb-2 text-gray-900">{course.title}</h4>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>Your progress</span>
          <span className="font-medium">{course.progress}% to complete </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`${course.progress === 100 ? 'bg-green-500' : course.color} h-2 rounded-full transition-all duration-300`}
            style={{width: `${course.progress}%`}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;