import React from "react";
import Certificate_Body from "../components/Certificate/Certificate_Body";

const Certificate = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#331DA8] to-[#865AEF] p-2">
      {/* Top Message */}
      <div className="text-center text-white mb-6">
        <h2 className="text-lg sm:text-xl font-semibold">
          You have successfully completed your course
        </h2>
        <p className="text-sm sm:text-base">
          Congratulations <span className="font-bold">&lt;USER NAME&gt;</span>
        </p>
      </div>

      {/* Certificate Box */}
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="flex-1 p-6 relative">
            <Certificate_Body />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
