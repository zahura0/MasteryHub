import React, { useState, useRef } from "react";
import Side_Bar from "./Side_Bar";
import Header from "./Header";
import UserDetails from "./UserDetails";
import CertificateDetails from "./CertificateDetails";
import PaymentDashboard from "./PaymentDashboard";
import InstructorDetails from "./InstructorDetails"; 
import CourseDetails from "./CourseDetails"; 
import ContactFAQ from "./ContactFAQ";
import AdminSettings from "./AdminSettings"; // <-- import AdminSettings

const Admin_Body = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Refs for scrolling
  const userDetailsRef = useRef(null);
  const certificateRef = useRef(null);
  const paymentDashboardRef = useRef(null);
  const instructorDetailsRef = useRef(null);
  const courseDetailsRef = useRef(null);
  const contactFAQRef = useRef(null);
  const adminSettingsRef = useRef(null); // <-- new ref for settings

  const scrollToSection = (section) => {
    if (section === "user") userDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "instructor") instructorDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "certificate") certificateRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "paymentDashboard") paymentDashboardRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "CourseDetails") courseDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "ContactFAQ") contactFAQRef.current.scrollIntoView({ behavior: "smooth" });
    else if (section === "AdminSettings") adminSettingsRef.current.scrollIntoView({ behavior: "smooth" }); // <-- settings scroll
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <Side_Bar isOpen={isOpen} scrollToSection={scrollToSection} />

      {/* Main Content */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isOpen ? 'ml-60' : 'ml-0'}`}>
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="flex-1 p-6">
          {/* Sections */}
          <div ref={userDetailsRef}>
            <UserDetails />
          </div>

          <div ref={instructorDetailsRef} className="mt-10">
            <InstructorDetails />
          </div>

          <div ref={certificateRef} className="mt-10">
            <CertificateDetails />
          </div>

          <div ref={paymentDashboardRef} className="mt-10">
            <PaymentDashboard />
          </div>

          <div ref={courseDetailsRef} className="mt-10">
            <CourseDetails />
          </div>

          <div ref={contactFAQRef} className="mt-10">
            <ContactFAQ />
          </div>

          <div ref={adminSettingsRef} className="mt-10">
            <AdminSettings />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin_Body;
