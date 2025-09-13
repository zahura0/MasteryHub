import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Simple placeholder dataset. Replace with API later.
const allCourses = [
  { id: 1, title: 'Motion Graphics: Create a Nice Typography Animation', price: 33.99, students: 5057, duration: '08h 30m', category: 'Design', tag: 'Digital Marketing Agency', thumb: '/src/assets/image_01.png' },
  { id: 2, title: 'The Complete Financial Analyst Training & Investing', price: 45.99, students: 5057, duration: '07h 40m', category: 'Workshops', tag: 'Design Courses', thumb: '/src/assets/image_02.png' },
  { id: 3, title: 'Education Software and PHP and JS System Script', price: 33.99, students: 5057, duration: '06h 12m', category: 'Web Dev', tag: 'English Course', thumb: '/src/assets/image_03.png' },
  { id: 4, title: 'Marketing 2025: Complete Guide To Instagram Growth', price: 33.99, students: 5057, duration: '03h 48m', category: 'Marketing', tag: 'Masterclass', thumb: '/src/assets/image_04.png' },
  { id: 5, title: 'Advance PHP knowledge with JS to make smart web', price: 23.99, students: 5057, duration: '05h 20m', category: 'Web Dev', tag: 'Founder Insights', thumb: '/src/assets/image_02.png' },
  { id: 6, title: 'Learn 3D Modelling and Design for Beginners', price: 33.99, students: 5057, duration: '06h 00m', category: '3D', tag: 'Digital Marketing', thumb: '/src/assets/image_01.png' },
];

const categories = ['All', 'Workshops', 'Web Dev', 'Design', 'Marketing', '3D'];

export default function Courses() {
  const [q, setQ] = useState('');
  const [category, setCategory] = useState('All');
  const [duration, setDuration] = useState('any');

  const filtered = useMemo(() => {
    return allCourses.filter(c => {
      const matchesQ = q.trim() === '' || c.title.toLowerCase().includes(q.toLowerCase());
      const matchesCat = category === 'All' || c.category === category;
      const matchesDur = duration === 'any' || parseInt(c.duration) <= (duration === 'short' ? 4 : duration === 'medium' ? 6 : 100);
      return matchesQ && matchesCat && matchesDur;
    });
  }, [q, category, duration]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/60">
      {/* Hero with overlay like the design */}
      <section className="relative h-64 md:h-120 bg-[url('/src/assets/course-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-indigo-900/60" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold max-w-xl leading-tight">
            Unlock Your Potential with MasteryHub
          </h1>
          <p className="text-white/90 text-sm sm:text-base mt-3 max-w-md">
            Join MasteryHub today to access a wide range of courses designed to enhance your skills.
          </p>
        </div>
      </section>

      {/* Toolbar */}
      <section className="-mt-6 md:-mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/90 backdrop-blur rounded-2xl shadow border border-gray-200 p-3 md:p-4 flex flex-col md:flex-row gap-3 items-stretch">
            {/* Search */}
            <div className="flex-1 flex items-center gap-2 border rounded-xl px-3 py-2 bg-white">
              <span className="text-gray-400">🔎</span>
              <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" className="w-full outline-none text-base"/>
            </div>
            {/* Filters */}
            <div className="grid grid-cols-2 md:flex md:flex-row gap-3">
              <select value={category} onChange={e=>setCategory(e.target.value)} className="px-3 py-2 rounded-xl border bg-white text-base">
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
              <select value={duration} onChange={e=>setDuration(e.target.value)} className="px-3 py-2 rounded-xl border bg-white text-base">
                <option value="any">Duration: any</option>
                <option value="short">Duration: ≤ 4h</option>
                <option value="medium">Duration: ≤ 6h</option>
                <option value="long">Duration: 6h+</option>
              </select>
              <button className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-base font-medium">Filter</button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900 font-bold text-xl">Browse Your Course</h2>
            <div className="text-sm text-gray-500">{filtered.length} results</div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map(course => (
              <div key={course.id} className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition overflow-hidden">
                <div className="h-36 bg-gray-100 relative overflow-hidden">
                  <img src={course.thumb} alt="thumb" className="w-full h-full object-cover"/>
                  <span className="absolute top-2 left-2 text-xs bg-indigo-600 text-white rounded-full px-2 py-1">{course.tag}</span>
                </div>
                <div className="p-4 space-y-2">
                  <div className="text-xs text-gray-500 flex justify-between">
                    <span>{course.students.toLocaleString()} Students</span>
                    <span>{course.duration}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug line-clamp-2 min-h-[44px]">{course.title}</h3>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-indigo-700 font-bold text-base">${course.price}</span>
                    <div className="flex items-center gap-2">
                      <Link to="/course_cart" className="text-xs px-2.5 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">Add to Cart</Link>
                      <button className="text-sm text-indigo-600 hover:text-indigo-800" aria-label="Add to wishlist">♡</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button className="text-sm rounded-full bg-indigo-600 text-white px-6 py-2 font-medium hover:bg-indigo-700">See More</button>
          </div>
        </div>
      </section>
    </div>
  );
}
