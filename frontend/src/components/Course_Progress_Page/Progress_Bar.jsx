import React from "react";

const Progress_Bar = ({ percentage }) => {
  return (
    <div
      className="w-full rounded-full h-5"
      style={{ backgroundColor: "#E9E9E9" }}
    >
      <div
        className="h-5 rounded-full text-xs text-white flex items-center justify-end pr-2"
        style={{
          width: `${percentage}%`,
          backgroundColor: "#7F56D9",
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default Progress_Bar;
