import React from "react";

// Assets
import bulb from "../assets/instructor-reg-bulb.png";
import girl from "../assets/instructor-reg-girl.png";
import boy from "../assets/instructor-reg-boy.png";

const Field = ({ label, children }) => (
  <label className="block w-full">
    <span className="text-sm font-semibold text-gray-800">{label}</span>
    <div className="mt-1">{children}</div>
  </label>
);

const Input = (props) => (
  <input
    {...props}
    className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200 ${props.className || ""}`.trim()}
  />
);

const Select = ({ children, ...props }) => (
  <select
    {...props}
    className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200 ${props.className || ""}`.trim()}
  >
    {children}
  </select>
);

const Textarea = (props) => (
  <textarea
    {...props}
    className={`w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-200 ${props.className || ""}`.trim()}
  />
);

export default function InstructorRegistration() {
  return (
    <div className="w-full">
      {/* Hero banner (exactly like Courses hero) */}
      <section className="relative h-64 md:h-120 bg-[url('/src/assets/course-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-indigo-900/60" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold max-w-xl leading-tight">
            Unlock Your Potential with MasteryHub
          </h1>
          <p className="text-white/90 text-sm sm:text-base mt-3 max-w-md">
            Join MasteryHub today to access a wide range of courses designed to enhance your skills.
          </p>
        </div>
      </section>

      {/* Registration section with decorative images */}
      <section className="relative mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-10 md:py-14">
        {/* Decorations */}
        <img
          src={bulb}
          alt=""
          className="pointer-events-none select-none absolute -top-1 left-260 w-20 md:w-24 lg:w-48"
        />
        <img
          src={girl}
          alt=""
          className="pointer-events-none select-none absolute bottom-12 -left-30 w-28 md:w-36 lg:w-54"
        />
        <img
          src={boy}
          alt=""
          className="pointer-events-none select-none absolute bottom-2 -right-24 w-28 md:w-36 lg:w-54"
        />

        {/* Form card */}
        <div
          className="relative z-10 rounded-xl border border-amber-200 shadow-md"
          style={{ backgroundColor: "#FFFAE4" }}
        >
          <div className="p-5 md:p-8 lg:p-10">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900">
              Instructor Registration
            </h2>
            <p className="mt-1 text-xs md:text-sm text-gray-600">
              Fields with an asterisk (*) are required. Please provide accurate details to help us review your application.
            </p>

            <form className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="First Name*">
                <Input type="text" placeholder="Jane" required />
              </Field>
              <Field label="Last Name*">
                <Input type="text" placeholder="Doe" required />
              </Field>

              <Field label="Birth Date*">
                <Input type="date" required />
              </Field>
              <Field label="Gender*">
                <Select required>
                  <option value="">Select an option</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Non-binary</option>
                  <option>Prefer not to say</option>
                </Select>
              </Field>

              <Field label="Nationality*">
                <Input type="text" placeholder="Sri Lankan" required />
              </Field>
              <Field label="Address Line 1*">
                <Input type="text" placeholder="Street address" required />
              </Field>

              <Field label="Address Line 2">
                <Input type="text" placeholder="Apartment, suite, etc." />
              </Field>
              <Field label="Country*">
                <Select required>
                  <option value="">Select an option</option>
                  <option>Sri Lanka</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                </Select>
              </Field>

              <Field label="City*">
                <Input type="text" placeholder="Colombo" required />
              </Field>
              <Field label="Postal / ZIP Code*">
                <Input type="text" placeholder="10000" required />
              </Field>

              <Field label="Focused Area*">
                <Input type="text" placeholder="E.g., Web Development" required />
              </Field>
              <Field label="Phone*">
                <Input type="tel" placeholder="(+94) 7X XXX XXXX" required />
              </Field>

              <Field label="Begin Studies*">
                <Input type="date" required />
              </Field>
              <Field label="Highest Degree*">
                <Select required>
                  <option value="">Select an option</option>
                  <option>Diploma</option>
                  <option>Bachelor's</option>
                  <option>Master's</option>
                  <option>PhD</option>
                </Select>
              </Field>

              <Field label="Previous Work Field*">
                <Select required>
                  <option value="">Select an option</option>
                  <option>IT & Software</option>
                  <option>Business</option>
                  <option>Marketing</option>
                  <option>Design</option>
                  <option>Education</option>
                </Select>
              </Field>
              <Field label="Languages Taught*">
                <Input type="text" placeholder="E.g., English, Sinhala" required />
              </Field>

              <div className="md:col-span-2">
                <Field label="Short Bio">
                  <Textarea rows={4} placeholder="Tell us about your teaching experience..." />
                </Field>
              </div>

              <div className="md:col-span-2">
                <Field label="Upload Resume/CV">
                  <Input type="file" />
                </Field>
              </div>

              <div className="md:col-span-2 flex items-start gap-2 pt-2">
                <input id="agree" type="checkbox" className="mt-1" required />
                <label htmlFor="agree" className="text-xs md:text-sm text-gray-700">
                  I confirm that the information provided is accurate and I agree to the terms and privacy policy.
                </label>
              </div>

              <div className="md:col-span-2 mt-2 flex gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-black px-5 py-2 text-sm font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black/30"
                >
                  Submit Now
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-transparent px-5 py-2 text-sm font-semibold text-gray-800 ring-1 ring-gray-300 hover:bg-white/60 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
