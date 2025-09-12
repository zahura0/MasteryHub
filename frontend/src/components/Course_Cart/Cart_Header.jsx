import React from "react";
import CartImage from "../../assets/images/girlstudent1.png";
import "@fontsource/rowdies/400.css";
import "@fontsource/rowdies/700.css";

const CartHeader = () => {
  return (
    <div className="w-screen bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-between px-10 py-20 rounded-lg relative overflow-visible">
      {/* Left text section */}
      <div className="ml-20 z-10 relative">
        <h1
          className="text-6xl font-bold text-white leading-tight"
          style={{ fontFamily: "Rowdies, cursive" }}
        >
          Course cart
        </h1>
        <p
          className="text-white text-lg mt-4 leading-relaxed"
          style={{ fontFamily: "Rowdies, cursive", fontWeight: 400 }}
        >
          Review your courses before checkout.
        </p>
      </div>

      {/* Right image section - full banner with right margin */}
      <div
        className="absolute w-80"
        style={{ top: "10px", right: "20px" }} // added right margin
      >
        <img
          src={CartImage}
          alt="Student with books"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default CartHeader;
