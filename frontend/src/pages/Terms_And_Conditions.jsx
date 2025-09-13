// pages/Terms_And_Conditions.jsx
import React from "react";
import Sidebar from "../components/Terms_And_Conditions/Sidebar";
import Terms_And_Conditions_Details from "../components/Terms_And_Conditions/Terms_And_Conditions_Details";

const Terms_And_Conditions = () => {
  return (
    <div className="flex flex-col md:flex-row p-4 md:p-6 mb-8 mt-8 gap-6">
      {/* Sidebar */}
      <div className="w-full md:w-1/4">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4">
        <Terms_And_Conditions_Details />
      </div>
    </div>
  );
};

export default Terms_And_Conditions;
