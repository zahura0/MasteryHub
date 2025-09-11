import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const Chat_Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="w-72 sm:w-80 h-96 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#331DA8] to-[#865AEF] text-white p-3 flex justify-between items-center">
            <h2 className="font-semibold text-sm">Chat Support</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.length === 0 ? (
              <p className="text-gray-400 text-center mt-10">
                No messages yet. Start chatting!
              </p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] border ${
                    msg.sender === "user"
                      ? "text-black self-end ml-auto border-blue-900"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="p-2 border-t border-blue-900 flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-blue-900 rounded-lg px-2 py-1 text-sm focus:outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-gradient-to-r from-[#331DA8] to-[#865AEF] text-white font-bold px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}

      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="relative  text-blue-900 rounded-full "
        >
          {/* Chat Icon */}
          <MessageCircle size={28} />

          {/* Three Dots */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-1">
              <span className="w-0.5 h-0.5 bg-blue-900 rounded-full"></span>
              <span className="w-0.5 h-0.5 bg-blue-900 rounded-full"></span>
              <span className="w-0.5 h-0.5 bg-blue-900 rounded-full"></span>
            </div>
          </div>
        </button>
      )}
    </div>
  );
};

export default Chat_Widget;
