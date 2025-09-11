import React, { useState } from 'react';
import DashboardTabs from './DashboardTabs';
import ProgressTabs from './ProgressTabs';
import CourseCard from './CourseCard';
import Timeline from './Timeline';
import Recommendations from './Recommendations';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [activeFilter, setActiveFilter] = useState('In Progress');
  const [timelineFilter, setTimelineFilter] = useState('Today');

  const courses = [
    {
      id: 1,
      title: 'UX Design Basics',
      category: 'ONLINE COURSE',
      progress: 75,
      color: 'bg-orange-500'
    },
    {
      id: 2,
      title: 'Project Management',
      category: 'ONLINE COURSE',
      progress: 60,
      color: 'bg-purple-600'
    },
    {
      id: 3,
      title: 'UI Design Foundation',
      category: 'ONLINE COURSE',
      progress: 90,
      color: 'bg-yellow-500'
    },
    {
      id: 4,
      title: 'Learn to Code Swift UI',
      category: 'ONLINE COURSE',
      progress: 45,
      color: 'bg-orange-600'
    }
  ];

  const timelineItems = [
    { title: 'UX Design Basics', type: 'course', color: 'bg-orange-500' },
    { title: 'Project Management', type: 'course', color: 'bg-purple-600' }
  ];

  const handleCourseClick = (course) => {
    console.log('Course clicked:', course.title);
    // Add course click logic here
  };

  const filteredCourses = courses.filter(course => {
    if (activeFilter === 'In Progress') return course.progress > 0 && course.progress < 100;
    if (activeFilter === 'Completed') return course.progress === 100;
    if (activeFilter === 'Upcoming') return course.progress === 0;
    return true;
  });

  return (
    <div className="flex-1 space-y-6">
      {/* Tabs */}
      <div className="bg-white rounded-2xl p-10 border border-gray-200">
        <DashboardTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6">
          {activeTab === 'Dashboard' && (
            <>
              <ProgressTabs activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

              {/* Course Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {filteredCourses.map((course) => (
                  <CourseCard 
                    key={course.id} 
                    course={course}
                    onClick={handleCourseClick}
                  />
                ))}
              </div>

              {/* Timeline and Recommendations */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Timeline 
                  timelineFilter={timelineFilter}
                  setTimelineFilter={setTimelineFilter}
                  timelineItems={timelineItems}
                />
                <Recommendations />
              </div>
            </>
          )}

          {activeTab === 'Courses' && (
            <div className="py-8 text-center text-gray-500">
              <h3 className="text-lg font-semibold mb-2">All Courses</h3>
              <p>Course management content would go here</p>
            </div>
          )}

          {activeTab === 'Settings' && (
            <div className="py-8 text-center text-gray-500">
              <h3 className="text-lg font-semibold mb-2">Settings</h3>
              <p>User settings content would go here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;