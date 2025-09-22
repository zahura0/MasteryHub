import React from "react";
import { CloudArrowDownIcon } from "@heroicons/react/24/solid";

const Completed_Course_Card = ({
  image,
  title,
  details,
  description,
  buttonText,
}) => {
  return (
    <div className="bg-gray-100 rounded-l p-2 overflow-hidden w-64 flex-shrink-0">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col items-center">
        <h4 className="font-bold text-center">{title}</h4>
        <p className="text-sm text-gray-500 text-center">{details}</p>
        {description && (
          <p className="text-sm text-gray-900 text-center mt-2">
            {description}
          </p>
        )}
        <button className="mt-4 flex items-center gap-2 bg-blue-900 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-800">
          {buttonText}
          <CloudArrowDownIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Completed_Course_Card;
