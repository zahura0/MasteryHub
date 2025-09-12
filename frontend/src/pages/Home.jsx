import React from 'react';
import { Link } from 'react-router-dom';

// Simple data arrays for mapped UI sections
const features = [
  { title: 'Expert-Led Paths', desc: 'Structured curricula by industry mentors with real project focus.' },
  { title: 'Hands-On Projects', desc: 'Portfolio-ready builds and scenario-based challenges.' },
  { title: 'Progress Tracking', desc: 'Milestones, streaks, and adaptive recommendations.' },
  { title: 'Community Support', desc: 'Peer reviews, study groups, and mentor feedback loops.' },
];

const categories = [
  'Web Development', 'Data Science', 'AI & ML', 'UI / UX', 'Cloud & DevOps', 'Cybersecurity'
];

const testimonials = [
  { name: 'Amara S.', role: 'Frontend Developer', quote: 'MasteryHub turned scattered tutorials into a focused path. I landed an internship in 8 weeks.' },
  { name: 'Devon R.', role: 'Data Analyst', quote: 'The milestone system kept me consistent. The projects impressed recruiters instantly.' },
  { name: 'Lina K.', role: 'Product Designer', quote: 'Loved the blend of theory and critique. Community feedback leveled up my portfolio.' },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-200 via-white to-white" />
        <div className="mx-auto max-w-7xl px-4 pt-20 pb-24 sm:pt-28 sm:pb-32 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Learn. Build. <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Master.</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
            MasteryHub accelerates your journey from beginner to job‑ready with curated paths, guided projects, and a supportive community.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="rounded-full bg-gradient-to-r from-purple-600 to-orange-500 px-8 py-3 text-white font-semibold shadow hover:shadow-lg hover:brightness-105 transition">
              Start Learning
            </Link>
            <Link to="/help-support" className="rounded-full border border-purple-300 px-8 py-3 font-medium text-purple-700 hover:bg-purple-50">
              Need Help?
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-600">
            {[['50K+', 'Learners'], ['1K+', 'Projects'], ['120+', 'Mentors'], ['95%', 'Satisfaction']].map(([k, v]) => (
              <div key={k} className="flex flex-col items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Why MasteryHub?</h2>
            <p className="mt-4 text-gray-600">A platform built to keep you consistent, confident, and career-ready.</p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(f => (
              <div key={f.title} className="group relative rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-lg transition overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-purple-50 to-orange-50 transition" />
                <h3 className="relative font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="relative text-sm leading-relaxed text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Top Categories</h2>
              <p className="mt-2 text-gray-600 max-w-md">Pick a lane and follow a structured path packed with skill checkpoints.</p>
            </div>
            <Link to="/contact" className="self-start sm:self-auto rounded-full bg-purple-600 px-6 py-2 text-sm font-semibold text-white hover:bg-purple-700">View All Paths</Link>
          </div>
          <div className="grid gap-5 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {categories.map(c => (
              <div key={c} className="rounded-xl bg-white p-4 text-center shadow hover:shadow-md border border-purple-100 hover:border-purple-300 transition flex flex-col justify-center">
                <span className="font-medium text-gray-800 text-sm">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-gray-900">Learner Stories</h2>
          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">Real outcomes from motivated learners who stayed consistent with guided structure.</p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(t => (
              <figure key={t.name} className="relative flex flex-col rounded-2xl border border-purple-100 bg-white p-6 shadow-sm hover:shadow-lg transition">
                <blockquote className="text-gray-700 text-sm leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-4 pt-4 border-t border-purple-100 text-sm">
                  <span className="font-semibold text-gray-900">{t.name}</span>{' '}
                  <span className="text-gray-500">• {t.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-600 via-purple-700 to-orange-500" />
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">Ready to Accelerate Your Growth?</h2>
          <p className="mt-4 text-lg text-white/90">Join thousands building real skills through intentional practice and structured mastery paths.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="rounded-full bg-white px-8 py-3 font-semibold text-purple-700 shadow hover:shadow-lg hover:brightness-105">Join Now</Link>
            <Link to="/help-support" className="rounded-full bg-white/10 backdrop-blur px-8 py-3 font-medium text-white border border-white/30 hover:bg-white/20">Questions?</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
