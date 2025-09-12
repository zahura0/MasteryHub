import React from "react";
import CartHeader from "./Cart_Header";
import CartBody from "./Cart_Body"; // ✅ Import the Cart_Body component

const CourseCart = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Header section */}
      <CartHeader />

      {/* Body section */}
      <CartBody />
    </div>
  );
};

export default CourseCart;
