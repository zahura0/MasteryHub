import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import heroGirl from '../assets/girl-stu-hero.png';
import image01 from '../assets/image_01.png';
import image02 from '../assets/image_02.png';
import image03 from '../assets/image_03.png';
import image04 from '../assets/image_04.png';
import webinar from '../assets/webinar.png';
import service from '../assets/service.png';
import payment from '../assets/payment.png';
import certificate from '../assets/certificate-of-origin.png';
// Category images
import digitalMarketingImg from '../assets/images/digital-marketing.png';
import webDevelopmentImg from '../assets/images/web development.png';
import artImg from '../assets/images/Art.png';
import personalDevelopmentImg from '../assets/images/personal-development.png';
import itSoftwareImg from '../assets/images/it-software.png';

// Data (placeholder – replace with real API data later)
const featuredCourses = [
  { id: 1, title: 'Motion Graphics: Create a Nice Typography Animation', author: 'LÆTITIA HENRY', price: 33.99, image: image01, duration: '08h 30m', lessons: 42, tag: 'Digital Marketing' },
  { id: 2, title: 'The Complete Financial Analyst Training & Investing', author: 'LÆTITIA HENRY', price: 46.99, image: image02, duration: '06h 10m', lessons: 30, tag: 'Design' },
  { id: 3, title: 'Education Software and PHP and JS System Script', author: 'LÆTITIA HENRY', price: 33.99, image: image03, duration: '09h 12m', lessons: 54, tag: 'English Course' },
  { id: 4, title: 'Marketing 2025: Complete Guide To Instagram Growth', author: 'LÆTITIA HENRY', price: 33.99, image: image04, duration: '04h 48m', lessons: 18, tag: 'Content Creation' },
  { id: 5, title: 'Advance PHP knowledge with JS to make smart web', author: 'LÆTITIA HENRY', price: 23.99, image: image02, duration: '07h 05m', lessons: 36, tag: 'Fullstack' },
  { id: 6, title: 'Learn 3D Modelling and Design for Beginners', author: 'LÆTITIA HENRY', price: 33.99, image: image01, duration: '05h 20m', lessons: 25, tag: '3D Design' },
];

const process = [
  { icon: webinar, title: '01. Learn', desc: 'Access curated videos & interactive lessons delivered by expert instructors across domains.' },
  { icon: service, title: '02. Graduate', desc: 'Complete checkpoints & earn shareable certificates to validate real progress publicly.' },
  { icon: payment, title: '03. Work', desc: 'Apply skills on real-world briefs & portfolio challenges leading to tangible outcomes.' },
];

const categories = [
  { name: 'Digital Marketing', count: 25, image: digitalMarketingImg },
  { name: 'Web Development', count: 16, image: webDevelopmentImg },
  { name: 'Art & Humanities', count: 78, image: artImg },
  { name: 'Personal Development', count: 22, image: personalDevelopmentImg },
  { name: 'IT and Software', count: 110, image: itSoftwareImg },
  { name: 'Graphic Design', count: 85 },
];

const testimonials = [
  { name: 'Ronald Richards', text: 'Excellent choice for logical skill practice. Learnt in-depth software concepts and secured a freelance project quickly.', rating: 5 },
  { name: 'Wade Warren', text: 'Course structure was practical. I used lessons to build confidently. Layout is tidy & flows well.', rating: 4 },
  { name: 'Jacob Jones', text: 'Clear structure and supportive mentors. Lessons are crisp & effective and explanations are thorough without fluff.', rating: 5 },
];

export default function Home() {
  const [openCourse, setOpenCourse] = useState(null);

  const handleOpenCourse = (course) => {
    if (course?.id === 1) setOpenCourse(course);
  };

  const handleClose = () => setOpenCourse(null);

  // Close on ESC and lock scroll when modal open
  useEffect(() => {
    if (!openCourse) return;
    const onKey = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = originalOverflow;
    };
  }, [openCourse]);

  // Trailer video (placeholder) specifically for course id=1
  const trailerSrc = 'https://www.youtube-nocookie.com/embed/2LhoCfjm8R4?rel=0&modestbranding=1';

  return (
    <main className="bg-white flex flex-col">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-gradient-to-r from-indigo-900 to-purple-700">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage:'radial-gradient(circle at 30% 40%,rgba(255,255,255,0.3),transparent 60%)'}} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 pt-10 md:pt-14 pb-10">
          <div className="flex-1 text-white max-w-xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Unlock Your <br /> Potential with <span className="text-orange-300">MasteryHub</span>
            </h1>
            <p className="mt-5 text-white/90 text-base sm:text-lg leading-relaxed max-w-md">
              Learn in-demand skills, follow structured paths, and build real portfolio projects guided by experts.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <Link to="/courses" className="rounded-full bg-orange-400 hover:bg-orange-500 text-indigo-950 font-semibold px-8 py-3 text-sm shadow">
                Browse Courses
              </Link>
              <Link to="/contact" className="rounded-full border border-white/40 hover:bg-white/10 text-white px-8 py-3 text-sm font-medium backdrop-blur">
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            <img src={heroGirl} alt="Study" className="w-full max-w-xl drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-lg mx-auto mb-12">
            <h2 className="text-lg font-semibold tracking-wide text-indigo-700 uppercase">Featured Course</h2>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam.
            </p>
          </div>
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map(c => (
              <div
                key={c.id}
                className={`group rounded-2xl border border-gray-200 hover:border-indigo-300 bg-white shadow-sm hover:shadow-lg transition overflow-hidden ${c.id === 1 ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400' : ''}`}
                onClick={c.id === 1 ? () => handleOpenCourse(c) : undefined}
                role={c.id === 1 ? 'button' : undefined}
                tabIndex={c.id === 1 ? 0 : undefined}
                onKeyDown={c.id === 1 ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleOpenCourse(c);} } : undefined}
              >
                <div className="relative h-40 w-full overflow-hidden">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full uppercase tracking-wide">{c.tag}</span>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="text-xs text-gray-500 flex justify-between">
                    <span>{c.author}</span>
                    <span>{c.duration}</span>
                  </div>
                  <h3 className="text-base font-semibold leading-snug line-clamp-2 min-h-[44px]">{c.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-base font-bold text-indigo-700">${c.price}</span>
                    <div className="flex items-center gap-2">
                      <Link
                        to="/course_cart"
                        className="text-xs px-2.5 py-1 rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
                        aria-label="Add to cart"
                        onClick={c.id === 1 ? (e) => { e.stopPropagation(); } : undefined}
                      >
                        Add to Cart
                      </Link>
                      <button
                        className="text-sm text-indigo-600 hover:text-indigo-800"
                        aria-label="Add to wishlist"
                        onClick={c.id === 1 ? (e) => { e.stopPropagation(); } : undefined}
                      >
                        ♡
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/courses" className="text-sm rounded-full bg-indigo-600 text-white px-6 py-2 font-medium hover:bg-indigo-700">Explore courses</Link>
          </div>
        </div>
      </section>

      {/* PROCESS GRADIENT BAR */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <p className="max-w-xl mx-auto text-sm sm:text-base text-white/80 mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam.
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {process.map(step => (
              <div key={step.title} className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 ring-1 ring-white/20 backdrop-blur-sm">
                  <img src={step.icon} alt="" className="w-9 h-9 object-contain" />
                </div>
                <h3 className="text-base font-semibold mb-2 tracking-wide">{step.title}</h3>
                <p className="text-sm leading-relaxed text-white/80 max-w-[230px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES STRIP */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-base sm:text-lg font-semibold tracking-wide text-gray-900">Top Categories</h2>
            <p className="mt-2 text-sm text-gray-500">12,000+ unique online course list designs</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x" style={{scrollbarWidth:'none'}}>
            {categories.map(cat => (
              <div key={cat.name} className="shrink-0 snap-center w-44 rounded-xl bg-white border border-gray-200 hover:border-indigo-300 p-4 flex flex-col items-center text-center shadow-sm hover:shadow transition">
                <div className="w-12 h-12 rounded-full bg-indigo-50 mb-2 overflow-hidden flex items-center justify-center ring-1 ring-indigo-100">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-sm font-semibold text-indigo-700">
                      {cat.name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}
                    </span>
                  )}
                </div>
                <span className="text-sm font-medium text-gray-700 mb-1 leading-tight">{cat.name}</span>
                <span className="text-xs text-gray-500">{cat.count} Courses</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION SPLIT */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-indigo-100 to-purple-50 rounded-3xl" />
            <img src={image03} alt="Learning" className="w-full rounded-2xl" />
          </div>
          <div className="max-w-md">
            <h3 className="text-xl font-semibold leading-snug mb-4">The number one factor in <span className="text-indigo-700">relevance drives out resistance.</span></h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-5">
              Data and clear value deliver sustainable motivation: we validate your work, unlock visible progress, and build intrinsic drive through practical context.
            </p>
            <Link to="/courses" className="rounded-md bg-indigo-600 text-white text-sm font-medium px-5 py-2 hover:bg-indigo-700">Learn More</Link>
          </div>
        </div>
      </section>

      {/* VIDEO / SHOWCASE */}
      <section className="py-24 bg-indigo-50/50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow border border-indigo-100">
            <img src={certificate} alt="Video section" className="w-full h-64 object-cover" />
            <button className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-indigo-600/90 text-white flex items-center justify-center shadow-lg hover:scale-105 transition">
              ▶
            </button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-b from-white to-indigo-50/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Testimonials</h2>
            <p className="text-sm text-gray-600 mt-1">What our student say about us</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md transition flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                    {t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800 leading-tight">{t.name}</p>
                    <div className="flex text-yellow-500 text-xs">
                      {'★★★★★'.slice(0,t.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE PREVIEW MODAL */}
      {openCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
          aria-labelledby="course-modal-title"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/70 via-purple-900/60 to-indigo-900/70 backdrop-blur-sm" />

          {/* Panel */}
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="absolute -inset-px rounded-3xl pointer-events-none" style={{boxShadow:'0 0 0 1px rgba(255,255,255,0.08) inset'}} />
            <div className="bg-white">
              {/* Header */}
              <div className="flex items-start justify-between px-6 pt-6">
                <div>
                  <p className="text-sm uppercase tracking-widest text-indigo-600 font-semibold">Featured Preview</p>
                  <h3 id="course-modal-title" className="mt-1 text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                    {openCourse.title}
                  </h3>
                  <div className="mt-1 flex items-center gap-3 text-sm text-gray-500">
                    <span>{openCourse.author}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{openCourse.duration}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300" />
                    <span>{openCourse.lessons} lessons</span>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  aria-label="Close"
                  className="-mr-2 -mt-2 inline-flex items-center justify-center rounded-full p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd"/></svg>
                </button>
              </div>

              {/* Body */}
              <div className="px-6 pb-6">
                <div className="mt-5 grid lg:grid-cols-2 gap-6">
                  {/* Video */}
                  <div className="relative rounded-2xl overflow-hidden ring-1 ring-indigo-100 bg-indigo-50 aspect-video">
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src={trailerSrc}
                      title="Course trailer"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                  {/* Details */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Learn to craft eye-catching kinetic typography animations using modern motion graphics techniques. Perfect for reels, ads, and brand teasers.
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2"><span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-indigo-500" /> Keyframing and easing for silky motion</li>
                        <li className="flex items-start gap-2"><span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-indigo-500" /> Type layout, rhythm, and timing principles</li>
                        <li className="flex items-start gap-2"><span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-indigo-500" /> Export best practices for crisp social posts</li>
                      </ul>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <span className="text-sm text-gray-500">Course price</span>
                        <div className="text-xl font-bold text-indigo-700">${openCourse.price}</div>
                      </div>
                      <div className="flex gap-3">
                        <button onClick={handleClose} className="px-4 py-2 text-sm font-semibold rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50">Maybe later</button>
                        <button className="px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow">Start Learning</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
