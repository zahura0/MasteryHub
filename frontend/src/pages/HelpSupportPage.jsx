import React from 'react';
import heroGirlImage from '../assets/girl-stu-hero.png';
import faqIcon from '../assets/payment.png';
import chatIcon from '../assets/certificate-of-origin.png';
import videoIcon from '../assets/login.png';
import tutorialIcon from '../assets/service.png';
import supportIcon from '../assets/webinar.png';

const HelpSupportPage = () => {
  const cards = [
    {
      title: 'Payments & Billing',
      description: 'Get help with subscriptions, billing issues, and refunds.',
      icon: faqIcon,
    },
    {
      title: 'Account & Login',
      description: 'Troubleshoot login problems, account access, and settings.',
      icon: chatIcon,
    },
    {
      title: 'Courses & Content',
      description: 'Learn how to access, navigate, and complete courses.',
      icon: videoIcon,
    },
    {
      title: 'Technical Issues',
      description: 'Fix technical errors, bugs, and compatibility problems.',
      icon: tutorialIcon,
    },
    {
      title: 'Certificates',
      description: 'Download, verify, or request course completion certificates.',
      icon: supportIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section
        className="relative flex items-center px-6 md:px-16"
        style={{
          height: '55vh',
          background: 'linear-gradient(135deg, #331DA8, #865AEF)',
        }}
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center relative z-10">
          
          {/* Left Side - Text + Search */}
          <div className="md:w-1/2 flex flex-col items-start">
            <h1 className="text-[50px] md:text-[60px] font-bold leading-tight text-white">
              Support <br /> and Help
            </h1>
            <p className="mt-4 text-xl text-gray-200">How can we help?</p>
            
            {/* Search Bar */}
            <div className="mt-6 w-full max-w-md flex">
              <input
                type="text"
                placeholder="Search for topics..."
                className="flex-grow p-4 rounded-l-full focus:outline-none shadow-lg text-white bg-white/20 placeholder-gray-200"
              />
              <button className="bg-[#E87A00] text-white px-6 rounded-r-full font-semibold shadow-lg hover:opacity-90 transition">
                Search
              </button>
            </div>
          </div>

          {/* Right Side - Girl Image */}
          <div className="md:w-1/2 relative z-0 flex justify-end">
            <img
              src={heroGirlImage}
              alt="3D Help Illustration"
              className="object-contain md:w-[420px] w-[300px] transform translate-y-10"
            />
          </div>
        </div>
      </section>

     {/* Content Section with Cards */}
<section className="py-20 px-6 md:px-16 bg-white">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#331DA8]">
      Need help? <br /> We've got your back
    </h2>

    {/* Sub Section Text */}
    <p className="mt-6 mb-12 text-center text-gray-600 max-w-3xl mx-auto text-lg">
      From account settings to course access, find support for everything on <span className="font-semibold text-[#331DA8]">MasteryHub</span>.
      If you’re new here and looking for tips, check out our <span className="font-semibold">Beginner’s Guide</span> to get started.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-[#865AEF] text-white p-8 rounded-2xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-300 flex flex-col items-center text-center h-full max-w-sm"
        >
          <img src={card.icon} alt={card.title} className="w-20 h-20 mb-6" />
          <h3 className="text-2xl font-semibold mb-3">{card.title}</h3>
          <p className="text-gray-100">{card.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


    </div>
  );
};

export default HelpSupportPage;
