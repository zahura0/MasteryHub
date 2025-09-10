import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
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
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="w-72 sm:w-80 h-96 bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h2 className="font-semibold text-sm">Chat Support</h2>
            <button onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto text-sm space-y-2">
            {messages.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">
                No messages yet. Start chatting!
              </p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              ))
            )}
          </div>

          {/* Input */}
          <div className="p-2 border-t flex items-center space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded-lg px-2 py-1 text-sm focus:outline-none"
              placeholder="Type a message..."
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-700"
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
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
