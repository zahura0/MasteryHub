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
    <section className="bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Items */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6 bg-white/90 backdrop-blur rounded-xl shadow border border-gray-200/70 px-4 py-3">
              <p className="font-semibold text-gray-800">Select all Items</p>
              <button
                onClick={toggleSelectAll}
                aria-pressed={allSelected}
                aria-label={allSelected ? "Unselect all items" : "Select all items"}
                className={`w-8 h-8 rounded-full border-2 inline-flex items-center justify-center transition-all duration-300 ${
                  allSelected ? "bg-indigo-600 border-indigo-600 shadow-md" : "border-gray-400 hover:border-indigo-400"
                }`}
              >
                {allSelected && <span className="w-3 h-3 bg-white rounded-full" />}
              </button>
            </div>

            {items.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-10 text-center">
                <div className="text-5xl mb-3">🛒</div>
                <p className="text-gray-600 text-lg">Your cart is empty</p>
                <p className="text-gray-500 text-sm mt-1">Browse courses and add them to your cart.</p>
                <div className="mt-6">
                  <a href="/courses" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
                    Explore courses
                  </a>
                </div>
              </div>
            ) : (
              <ul className="space-y-6">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="relative bg-white rounded-2xl p-5 shadow border border-gray-200/70 transition-all duration-300 hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleSelect(item.id)}
                      aria-pressed={item.selected}
                      aria-label={item.selected ? `Unselect ${item.title}` : `Select ${item.title}`}
                      className={`absolute top-3 right-3 w-8 h-8 rounded-full border-2 inline-flex items-center justify-center transition-all duration-300 ${
                        item.selected ? "bg-indigo-600 border-indigo-600 shadow" : "border-gray-400 hover:border-indigo-400"
                      }`}
                    >
                      {item.selected && <span className="w-3 h-3 bg-white rounded-full" />}
                    </button>

                    <div className="flex items-start gap-5">
                      <img
                        src={courseImage}
                        alt="Course Thumbnail"
                        className="w-32 h-24 rounded-xl object-cover shadow-sm"
                      />
                      <div className="flex-1">
                        <h2 className="font-semibold text-gray-900 text-lg leading-snug">{item.title}</h2>
                        <p className="text-gray-700 font-medium mt-1">${item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="flex justify-end mt-4">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-4 py-2 border border-indigo-700 text-indigo-700 text-sm font-medium rounded-lg hover:bg-indigo-700 hover:text-white transition"
                      >
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Summary */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-6 p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-2xl shadow border border-blue-200/70">
              <h2 className="font-bold text-xl border-b border-gray-300 pb-4 mb-6 text-center text-gray-900">
                CART SUMMARY
              </h2>

              <div className="flex justify-between mb-3 text-gray-800">
                <span>Items Total</span>
                <span className="font-medium">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-6 text-gray-800">
                <span>Items Discount</span>
                <span className="font-medium text-green-600">$0</span>
              </div>

              <div className="flex items-stretch mb-6">
                <label htmlFor="voucher" className="sr-only">Voucher code</label>
                <input
                  id="voucher"
                  type="text"
                  placeholder="🎟 Enter Voucher Code"
                  className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button className="bg-gray-800 text-white px-4 py-2 rounded-r-lg hover:bg-gray-900 transition">
                  APPLY
                </button>
              </div>

              <div className="flex justify-between mb-3 font-semibold text-gray-900">
                <span>Sub Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-8 font-bold text-xl text-gray-900">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between gap-3 mb-6">
                <a href="/courses" className="inline-flex justify-center items-center bg-indigo-700 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-800 transition">
                  Add Courses +
                </a>
                <button
                  onClick={emptyCart}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition"
                >
                  Empty Cart
                </button>
              </div>

              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-white text-indigo-700 border border-indigo-700 font-semibold px-5 py-3 rounded-full shadow hover:bg-indigo-50 transition"
              >
                Check Out
              </button>
            </div>
          </aside>
        </div>
      </div>

      <CheckoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};

export default CartBody;
