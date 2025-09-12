import React, { useState } from "react";
import courseImage from "../../assets/images/course_image.png";
import CheckoutModal from "./CheckoutModal";

const CartBody = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Motion Graphics: Create a Nice Typography Animation", price: 33.99, selected: false },
    { id: 2, title: "Motion Graphics: Create a Nice Typography Animation", price: 33.99, selected: true },
    { id: 3, title: "Motion Graphics: Create a Nice Typography Animation", price: 33.99, selected: true },
    { id: 4, title: "Motion Graphics: Create a Nice Typography Animation", price: 33.99, selected: false },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSelect = (id) => {
    setItems(items.map(item => item.id === id ? { ...item, selected: !item.selected } : item));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const toggleSelectAll = () => {
    const allSelected = items.every(item => item.selected);
    setItems(items.map(item => ({ ...item, selected: !allSelected })));
  };

  const emptyCart = () => {
    setItems([]);
  };

  const total = items.filter(item => item.selected).reduce((sum, item) => sum + item.price, 0);
  const allSelected = items.length > 0 && items.every(item => item.selected);

  return (
    <div className="flex flex-col items-center px-6 py-10 bg-gradient-to-b from-white to-blue-50 min-h-screen mt-24">
      <div className="flex w-full max-w-6xl gap-10">
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
            <p className="font-semibold text-gray-700">Select all Items</p>
            <button
              onClick={toggleSelectAll}
              className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                allSelected ? "bg-blue-600 border-blue-600 shadow-md" : "border-gray-400 hover:border-blue-400"
              }`}
            >
              {allSelected && <span className="w-3 h-3 bg-white rounded-full"></span>}
            </button>
          </div>

          {items.length === 0 ? (
            <p className="text-center text-gray-500 mt-12 text-lg">🛒 Your cart is empty</p>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="relative bg-white rounded-2xl p-5 shadow-lg mb-6 hover:shadow-2xl hover:scale-[1.02] border border-gray-200 transition-all duration-300"
              >
                <button
                  onClick={() => toggleSelect(item.id)}
                  className={`absolute top-3 right-3 w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    item.selected ? "bg-blue-600 border-blue-600 shadow" : "border-gray-400 hover:border-blue-400"
                  }`}
                >
                  {item.selected && <span className="w-3 h-3 bg-white rounded-full"></span>}
                </button>

                <div className="flex items-center gap-5">
                  <img
                    src={courseImage}
                    alt="Course Thumbnail"
                    className="w-32 h-24 rounded-xl object-cover shadow-sm"
                  />
                  <div>
                    <h2 className="font-semibold text-gray-800 text-lg leading-snug">{item.title}</h2>
                    <p className="text-gray-600 font-medium mt-1">${item.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="px-4 py-2 border border-[#050472] text-[#050472] text-sm font-medium rounded-lg hover:bg-[#03035a] hover:text-white transition"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-80">
          <div className="p-7 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-xl border border-blue-200">
            <h2 className="font-bold text-xl border-b border-gray-300 pb-4 mb-6 text-center text-gray-800">
              CART SUMMARY
            </h2>

            <div className="flex justify-between mb-3 text-gray-700">
              <span>Items Total</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-6 text-gray-700">
              <span>Items Discount</span>
              <span className="font-medium text-green-600">$0</span>
            </div>

            <div className="flex items-center mb-6">
              <input
                type="text"
                placeholder="🎟 Enter Voucher Code"
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gray-700 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800 transition">
                APPLY
              </button>
            </div>

            <div className="flex justify-between mb-3 font-semibold text-gray-800">
              <span>Sub Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-8 font-bold text-xl text-gray-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-6">
              <button className="bg-[#050472] text-white px-4 py-2 rounded-lg shadow hover:bg-[#03035a] transition">
                Add Courses +
              </button>
              <button
                onClick={emptyCart}
                className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition"
              >
                Empty Cart
              </button>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full bg-white text-[#050472] border border-[#050472] font-semibold px-5 py-3 rounded-full shadow hover:bg-[#f0f0ff] transition"
            >
              Check Out
            </button>
          </div>
        </div>
      </div>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default CartBody;
