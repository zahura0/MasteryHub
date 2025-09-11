import React, { useState } from "react";

const AdminSettings = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      setMessage("All fields are required!");
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage("New password and confirm password do not match!");
      return;
    }
    // Here you would call an API to update the password
    setMessage("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="p-8 bg-white rounded-xl shadow-lg w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Settings</h2>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Current Password</label>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">New Password</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Confirm New Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      {message && <p className="mb-4 text-green-700 font-medium">{message}</p>}

      <button
        onClick={handleChangePassword}
        className="w-full px-5 py-3 bg-gradient-to-r from-[#331DA8] to-[#8E65EF] text-white rounded-lg hover:opacity-90 transition-all duration-200"
      >
        Change Password
      </button>
    </div>
  );
};

export default AdminSettings;
