import React from 'react';
import { IoClose as X } from 'react-icons/io5';

const CourseProgressModel = ({ course, isOpen, onClose }) => {
  if (!isOpen || !course) return null;

  const isCompleted = course.progress === 100;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Model */}
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full relative transform transition-all"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>

          {/* Course Image/Icon Section */}
          <div className="relative h-40 bg-gray-900 rounded-t-2xl flex items-center justify-center overflow-hidden">
            <div className={`w-20 h-20 ${course.color} rounded-2xl flex items-center justify-center`}>
              <span className="text-white text-sm font-bold text-center leading-4">
                ONLINE<br/>COURSE<br/>
                <span className="text-xs opacity-80">DESIGN EDITION</span>
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            {/* Course Title */}
            <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">
              {course.title}
            </h2>

            {/* Progress Status */}
            <div className="text-center mb-6">
              <div className="text-sm text-gray-600 mb-1">Your progress</div>
              <div className="text-2xl font-bold text-gray-900 mb-3">
                {course.progress}% {isCompleted ? 'completed' : 'to complete'}
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
                <div 
                  className={`${isCompleted ? 'bg-green-500' : course.color} h-3 rounded-full transition-all duration-500`}
                  style={{width: `${course.progress}%`}}
                ></div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center">
              {isCompleted ? (
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  GET THE CERTIFICATE
                </button>
              ) : (
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                  COMPLETE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseProgressModel;