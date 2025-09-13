import React, { useState } from "react";

const ContactFAQ = () => {
  const allMessages = [
    { id: 1, user: "Student 1", question: "How do I reset my password?", reply: "" },
    { id: 2, user: "Student 2", question: "Where can I find my certificates?", reply: "" },
    { id: 3, user: "Student 3", question: "How do I update my profile?", reply: "" },
    { id: 4, user: "Student 4", question: "Where is my payment receipt?", reply: "" },
    { id: 5, user: "Student 5", question: "How to enroll in a new course?", reply: "" },
    { id: 6, user: "Student 6", question: "How to contact support?", reply: "" },
    { id: 7, user: "Student 7", question: "Can I change my username?", reply: "" },
    { id: 8, user: "Student 8", question: "How to download certificates?", reply: "" },
    { id: 9, user: "Student 9", question: "What is the refund policy?", reply: "" },
    { id: 10, user: "Student 10", question: "How to reset 2FA?", reply: "" },
  ];

  const [messages, setMessages] = useState(allMessages);
  const [currentPage, setCurrentPage] = useState(1);
  const messagesPerPage = 3;

  const indexOfLast = currentPage * messagesPerPage;
  const indexOfFirst = indexOfLast - messagesPerPage;
  const currentMessages = messages.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(messages.length / messagesPerPage);

  const handleReplyChange = (id, value) => {
    setMessages(messages.map(msg => msg.id === id ? { ...msg, reply: value } : msg));
  };

  const handleSendReply = (id) => {
    const msg = messages.find((m) => m.id === id);
    if (msg.reply.trim() !== "") {
      alert(`Reply sent to ${msg.user}: ${msg.reply}`);
    } else {
      alert("Reply cannot be empty!");
    }
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact / FAQs</h2>

      {currentMessages.map((msg) => (
        <div
          key={msg.id}
          className="mb-6 p-6 bg-gray-50 rounded-xl shadow-sm border border-gray-200"
        >
          <p className="font-semibold text-gray-700 mb-1">{msg.user} asks:</p>
          <p className="mb-3 text-gray-600">{msg.question}</p>

          <textarea
            value={msg.reply}
            onChange={(e) => handleReplyChange(msg.id, e.target.value)}
            placeholder="Type your reply..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-3 resize-none"
            rows={3}
          ></textarea>

          <button
            onClick={() => handleSendReply(msg.id)}
            className="px-5 py-2 bg-gradient-to-r from-[#331DA8] to-[#8E65EF] text-white rounded-lg hover:opacity-90 transition-all duration-200"
          >
            Send Reply
          </button>

          {msg.reply && (
            <p className="mt-3 text-green-700 font-medium">
              Last reply: {msg.reply}
            </p>
          )}
        </div>
      ))}

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {/* Prev */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded-full bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-200"
        >
          Prev
        </button>

        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded-full border transition-all duration-150 ${
              currentPage === i + 1
                ? "bg-gradient-to-r from-[#8E65EF] to-[#331DA8] text-white"
                : "bg-transparent border-gray-300 text-gray-700 hover:bg-gradient-to-r hover:from-[#8E65EF] hover:to-[#331DA8] hover:text-white"
            }`}
          >
            {i + 1}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 rounded-full bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ContactFAQ;
