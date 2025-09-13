import React from "react";

const CheckoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-out"
      onClick={onClose} 
    >
      <div
        onClick={(e) => e.stopPropagation()} 
        className="relative bg-white rounded-xl shadow-2xl shadow-black/20 p-6 sm:p-8 w-full max-w-md transform transition-all duration-300 ease-out ring-1 ring-gray-200"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-lg font-bold"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          Pay via Credit / Debit Card
        </h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Card Holder's Name</label>
            <input
              type="text"
              placeholder="Card Holder's Name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Card Number</label>
            <input
              type="text"
              placeholder="Card Number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">Expire Date</label>
              <input
                type="text"
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">CVV</label>
              <input
                type="text"
                placeholder="CVV"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input type="checkbox" id="terms" className="w-4 h-4" />
            <label htmlFor="terms" className="text-gray-600 text-sm">
              I accept the <span className="text-red-600 underline">Terms and Conditions</span>*
            </label>
          </div>

          <button className="w-full bg-indigo-700 text-white font-semibold px-4 py-3 rounded-lg mt-4 hover:bg-indigo-800 transition">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
