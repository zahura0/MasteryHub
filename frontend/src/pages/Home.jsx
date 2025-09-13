import React from 'react';
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
            <p className="mt-5 text-white/90 text-sm sm:text-base leading-relaxed max-w-md">
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
              <div key={c.id} className="group rounded-2xl border border-gray-200 hover:border-indigo-300 bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
                <div className="relative h-40 w-full overflow-hidden">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-[1.04] transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-indigo-600 text-white text-[10px] font-medium px-2 py-1 rounded-full uppercase tracking-wide">{c.tag}</span>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  <div className="text-[10px] text-gray-500 flex justify-between">
                    <span>{c.author}</span>
                    <span>{c.duration}</span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug line-clamp-2 min-h-[38px]">{c.title}</h3>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-bold text-indigo-700">${c.price}</span>
                    <button className="text-xs text-indigo-600 hover:text-indigo-800">♡</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link to="/courses" className="text-xs rounded-full bg-indigo-600 text-white px-6 py-2 font-medium hover:bg-indigo-700">Explore courses</Link>
          </div>
        </div>
      </section>

      {/* PROCESS GRADIENT BAR */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 text-center">
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-white/80 mb-14">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam.
          </p>
          <div className="grid gap-10 md:grid-cols-3">
            {process.map(step => (
              <div key={step.title} className="flex flex-col items-center text-center px-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 ring-1 ring-white/20 backdrop-blur-sm">
                  <img src={step.icon} alt="" className="w-9 h-9 object-contain" />
                </div>
                <h3 className="text-sm font-semibold mb-2 tracking-wide">{step.title}</h3>
                <p className="text-[11px] leading-relaxed text-white/80 max-w-[230px]">{step.desc}</p>
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
            <p className="mt-2 text-[11px] text-gray-500">12,000+ unique online course list designs</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 snap-x" style={{scrollbarWidth:'none'}}>
            {categories.map(cat => (
              <div key={cat.name} className="shrink-0 snap-center w-44 rounded-xl bg-white border border-gray-200 hover:border-indigo-300 p-4 flex flex-col items-center text-center shadow-sm hover:shadow transition">
                <div className="w-12 h-12 rounded-full bg-indigo-50 mb-2 overflow-hidden flex items-center justify-center ring-1 ring-indigo-100">
                  {cat.image ? (
                    <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[10px] font-semibold text-indigo-700">
                      {cat.name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-medium text-gray-700 mb-1 leading-tight">{cat.name}</span>
                <span className="text-[9px] text-gray-500">{cat.count} Courses</span>
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
            <h3 className="text-lg font-semibold leading-snug mb-4">The number one factor in <span className="text-indigo-700">relevance drives out resistance.</span></h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-5">
              Data and clear value deliver sustainable motivation: we validate your work, unlock visible progress, and build intrinsic drive through practical context.
            </p>
            <Link to="/courses" className="rounded-md bg-indigo-600 text-white text-xs font-medium px-5 py-2 hover:bg-indigo-700">Learn More</Link>
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
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">Testimonials</h2>
            <p className="text-[11px] text-gray-600 mt-1">What our student say about us</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm hover:shadow-md transition flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-semibold">
                    {t.name.split(' ').map(n=>n[0]).slice(0,2).join('')}
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-gray-800 leading-tight">{t.name}</p>
                    <div className="flex text-yellow-500 text-[10px]">
                      {'★★★★★'.slice(0,t.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-[10px] text-gray-600 leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
