import React, { useState, useRef } from "react";
import Side_Bar from "./Side_Bar";
import Header from "./Header";
import UserDetails from "./UserDetails";
import CertificateDetails from "./CertificateDetails";
import PaymentDashboard from "./PaymentDashboard";
import InstructorDetails from "./InstructorDetails";
import PaymentDetails from "./PaymentDetails"; // ✅ Import PaymentDetails

const Admin_Body = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Refs for scrolling
  const userDetailsRef = useRef(null);
  const certificateRef = useRef(null);
  const paymentDashboardRef = useRef(null);
  const instructorDetailsRef = useRef(null);
  const paymentDetailsRef = useRef(null); // ✅ New ref for PaymentDetails

  const scrollToSection = (section) => {
    if (section === "user") {
      userDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "certificate") {
      certificateRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "paymentDashboard") {
      paymentDashboardRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "instructor") {
      instructorDetailsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "payment") {
      paymentDetailsRef.current.scrollIntoView({ behavior: "smooth" }); // ✅ Scroll to PaymentDetails
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Side_Bar isOpen={isOpen} scrollToSection={scrollToSection} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsOpen(!isOpen)} />
        <main className="flex-1 p-6" style={{ background: "white" }}>
          {/* User Details Section */}
          <div ref={userDetailsRef}>
            <UserDetails />
          </div>

          {/* Instructor Details Section */}
          <div ref={instructorDetailsRef} className="mt-10">
            <InstructorDetails />
          </div>

          {/* Certificate Details Section */}
          <div ref={certificateRef} className="mt-10">
            <CertificateDetails />
          </div>

           {/* Payment Details Section ✅ */}
          <div ref={paymentDetailsRef} className="mt-10">
            <PaymentDetails />
          </div>

          {/* Payment Dashboard Section */}
          <div ref={paymentDashboardRef} className="mt-10">
            <PaymentDashboard />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Admin_Body;
