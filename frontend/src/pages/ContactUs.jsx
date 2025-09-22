import React from 'react'
import { useState } from 'react';
import heroBg from '../assets/contact-hero-bg.png';
import logo from '../assets/logo.png';
import Img01 from '../assets/image_01.png';
import Img02 from '../assets/image_02.png';
import Img03 from '../assets/image_03.png';
import Img04 from '../assets/image_04.png';


export default function ContactUs () {
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    phone:"",
    country:"",
    company:"",
    interest:"",
    message:"",
  });

const handleChange = (e) => {
  setFormData({...formData, [e.target.name]: e.target.value});
};  

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formData);   //we can replace with API call
  alert("Form Submitted!");
};

return (
    <div className="flex flex-col">

    {/* Hero Section     */}
    <section
  className="relative text-white h-screen py-35 px-6 text-center bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(4,1,108,0.4), rgba(74,22,189,0.4)), url(${heroBg})` }}
>
   <div className="container mx-auto flex flex-col items-start px-6 md:px-0">
  {/* Logo */}
  <div className="mb-4">
    <img src={logo} alt="MasteryHub Logo" className="w-80 md:w-100" />
  </div>

  {/* Paragraph below logo */}
 <div>
  <p className="text-[80px] max-w-full text-left leading-none">
    Unlock Your <br/> Potential with <br/>Mastery<span className="text-[#E87A00]">Hub</span>
  </p>
</div>
</div>


</section>
    {/* Discover Us Section */}
    <section className="py-16 px-6 md:px-16 grid md:grid-cols-2 gap-8 items-center">
       <div>
  <h2 className="text-2xl font-semibold mb-4">DISCOVER US</h2>
  <p className="mb-4 text-gray-600">
    MasteryHub is here to help you. Our experts are available to answer any
    questions you might have. We’ve got the answers.
  </p>

  <h2 className="text-2xl font-semibold mb-4 text-600">EMAIL US</h2>
  <p className="text-gray-600">
    EMAIL US: <a href="mailto:masteryhub@masteryhub.com" className="text-gray-600 hover:text-purple-600">
      masteryhub@masteryhub.com
    </a>
  </p>
</div>

<div className="relative w-[500px] h-[500px] mx-auto">
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative w-[400px] h-[400px]">
      <img
        src={Img01}
        alt="Founder"
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-50 h-50 shadow-md object-cover"
      />
      <img
        src={Img02}
        alt="Course Promo"
        className="absolute top-20 left-3/4 transform -translate-x-1/2 w-50 h-50 shadow-md object-cover"
      />
      <img
        src={Img03}
        alt="Student"
        className="absolute bottom-20 left-1/4 transform -translate-x-1/2 w-50 h-50 shadow-md object-cover"
      />
      <img
        src={Img04}
        alt="Student"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-50 h-50  shadow-md object-cover"
      />
    </div>
  </div>
</div>




      </section>
{/* Contact Form Section */}
<section className="bg-gradient-to-r from-[#331DA8] to-[#865AEF] text-white py-16 px-6 md:px-16">
  <div className="grid md:grid-cols-2 gap-12 items-start">
    {/* Left text */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Thank you for getting in touch!</h3>
      <p className="mb-2">Kindly fill the form, have a great day!</p>
    </div>

    {/* Form */}
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        className="p-3 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:bg-white/30 focus:border-white focus:outline-none transition"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        className="p-3 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:bg-white/30 focus:border-white focus:outline-none transition"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        className="p-3 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:bg-white/30 focus:border-white focus:outline-none transition"
        value={formData.phone}
        onChange={handleChange}
      />
      {/* Country Dropdown */}
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
        className="p-3 rounded-md bg-white/20 text-white border border-white/30 focus:bg-white/30 focus:border-white focus:outline-none transition"
      >
        <option value="" className="text-black">Select Country</option>
        <option value="Sri Lanka" className="text-black">Sri Lanka</option>
        <option value="India" className="text-black">India</option>
        <option value="USA" className="text-black">USA</option>
        <option value="UK" className="text-black">UK</option>
      </select>

      <input
        type="text"
        name="company"
        placeholder="Company Name"
        className="p-3 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:bg-white/30 focus:border-white focus:outline-none transition"
        value={formData.company}
        onChange={handleChange}
      />

      {/* Interest Dropdown */}
      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        className="p-3 rounded-md bg-white/20 text-white border border-white/30 focus:bg-white/30 focus:border-white focus:outline-none transition"
      >
        <option value="" className="text-black">Select Interest</option>
        <option value="Web Development" className="text-black">Web Development</option>
        <option value="Data Science" className="text-black">Data Science</option>
        <option value="AI / ML" className="text-black">AI / ML</option>
        <option value="UI/UX Design" className="text-black">UI/UX Design</option>
      </select>

      <textarea
        name="message"
        placeholder="Message"
        rows="4"
        className="p-3 rounded-md bg-white/20 placeholder-white text-white border border-white/30 focus:bg-white/30 focus:border-white focus:outline-none md:col-span-2 transition"
        value={formData.message}
        onChange={handleChange}
      />

      {/* Submit Button */}
      <div className="md:col-span-2 flex justify-center">
        <button
          type="submit"
          className="bg-[#3D24A3] hover:bg-[#512AC0] text-white font-semibold py-2 px-8 rounded-md shadow-lg transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</section>
</div>

  );
}