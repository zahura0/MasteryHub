import React from "react";
import Logo from "../../assets/images/Logo.png";

const Certificate_Body = () => {
  return (
    <div className="relative border-4 border-yellow-500 p-6 sm:p-10">
      {/* Logo */}
      <div className="absolute top-4 right-4">
        <img src={Logo} alt="Logo" className="w-20" />
      </div>

      {/* Certificate Content */}
      <div className="relative z-10 items-center text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
          CERTIFICATE
        </h1>
        <p className="text-blue-900 text-sm sm:text-base">OF COMPLETION.</p>

        <p className="mt-6 text-blue-900 text-sm sm:text-base font-semibold">
          THIS CERTIFICATE IS PRESENTED TO
        </p>
        <h2
          className="text-2xl sm:text-4xl text-yellow-600 mt-2"
          style={{ fontFamily: "'Great Vibes', cursive", fontWeight: "400" }}
        >
          Olivia Wilson
        </h2>

        <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-lg items-center mx-auto">
          In recognition of outstanding contributions in Web Development and
          innovative digital solutions benefiting Muster Hub, dated October 6,
          2025.
        </p>

        {/* Signature */}
        <div className="mt-8">
          <p className="text-3xl"></p>
          <p className="text-sm sm:text-base font-semibold text-blue-800">
            DANIEL GALLEGO
          </p>
          <p className="text-xs sm:text-sm text-gray-500">CEO of Master Hub</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate_Body;
