import React from 'react';

const CourseCard = ({ course, onClick }) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
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
        <h4 className="font-semibold mb-2">{course.title}</h4>
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`${course.color} h-2 rounded-full transition-all duration-300`}
            style={{width: `${course.progress}%`}}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;