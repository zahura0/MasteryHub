import React, { useState } from "react";
import MainImage from "../assets/images/Register-illustration.jpg"; // Ensure you have an appropriate image in this path

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePhoto: null,
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Account Created Successfully!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center bg-white">
        <div className="flex flex-col md:flex-row items-center gap-10 p-8 w-full max-w-4xl">
          {/* Illustration */}
          <div className="hidden md:block w-1/2">
            <img src={MainImage} alt="Illustration" className="w-full" />
          </div>

          {/* Form */}
          <div className="w-full md:w-1/2 bg-white p-6  ">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Create an Account
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
                required
              />
              <input
                type="file"
                name="profilePhoto"
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
              />

              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mr-2"
                  required
                />
                <label>
                  <b>I agree to the Terms & Conditions</b>
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-md"
              >
                Create Account
              </button>

              <div className="text-center my-2">OR</div>

              <button
                type="button"
                className="w-full flex items-center justify-center border p-3 rounded-md mb-2"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Continue with Google
              </button>
              <button
                type="button"
                className="w-full flex items-center justify-center border p-3 rounded-md"
              >
                <img
                  src="https://www.svgrepo.com/show/349557/facebook.svg"
                  alt="Facebook"
                  className="w-5 h-5 mr-2"
                />
                Continue with Facebook
              </button>
            </form>

            <p className="text-center mt-4">
              <b>Already have an account?</b>{" "}
              <a
                href="/login"
                className="text-purple-600 font-semibold underline"
              >
                Log in
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
