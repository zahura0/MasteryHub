import React from "react";

const Terms_And_Conditions_Details = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 min-h-screen justify-center">
        {/* Terms of Service Content */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h2 className="text-2xl font-bold mb-2 md:mb-0">Terms of Service</h2>
          <p className="text-sm text-gray-500">Last Updated: 30/08/2025</p>
        </div>

        <div className="border rounded-md p-4 md:p-6 mb-8 bg-white shadow-sm space-y-4">
          <p id="intro">
            <strong>Introduction</strong>
            <br />
            Welcome to MasteryHub. By using our website and services, you agree
            to these Terms of Service. Please read them carefully.
          </p>
          <p id="eligibility">
            <strong>Eligibility</strong>
            <br />
            You must be at least 13 years old to use our platform. If you are
            under 18, parental consent is required.
          </p>
          <p id="account">
            <strong>Account Responsibilities</strong>
            <br />
            You are responsible for keeping your login details safe. Provide
            accurate information during registration.
          </p>
          <p id="payments">
            <strong>Course Access & Payments</strong>
            <br />
            Once enrolled, you will have access according to the course terms.
            Refunds, if applicable, follow our refund policy.
          </p>
          <p id="instructor">
            <strong>Instructor Terms</strong>
            <br />
            Instructors own their course content but grant us the right to host
            it on our platform. Earnings will be paid according to our payout
            schedule.
          </p>
          <p id="prohibited">
            <strong>Prohibited Activities</strong>
            <br />
            Do not share illegal or harmful content. Do not attempt to hack or
            misuse the platform.
          </p>
          <p id="intellectual">
            <strong>Intellectual Property</strong>
            <br />
            All website content, except user-created courses, belongs to
            MasteryHub.
          </p>
          <p id="termination">
            <strong>Termination</strong>
            <br />
            We may suspend accounts violating our terms without notice.
          </p>
          <p id="liability">
            <strong>Limitation of Liability</strong>
            <br />
            We are not liable for any loss due to misuse or third-party actions.
          </p>
          <p id="changes">
            <strong>Changes to Terms</strong>
            <br />
            We may update terms anytime; changes will be posted on this page.
          </p>
        </div>

        {/* Privacy Policy Content */}
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <h2 className="text-2xl font-bold mb-2 md:mb-0">Privacy Policy</h2>
          <p className="text-sm text-gray-500">Last Updated: 30/08/2025</p>
        </div>

        <div className="border rounded-md p-4 md:p-6 mb-8 bg-white shadow-sm space-y-4">
          <p id="collect">
            <strong>Information We Collect</strong>
            <br />
            Name, email, payment details when you register or purchase courses.
            Usage data like course progress, interactions.
          </p>
          <p id="usage">
            <strong>How We Use Your Data</strong>
            <br />
            To provide access to courses and improve services. For customer
            support and payment processing.
          </p>
          <p id="cookies">
            <strong>Cookies & Tracking</strong>
            <br />
            We use cookies for analytics and to remember your preferences.
          </p>
          <p id="sharing">
            <strong>Data Sharing</strong>
            <br />
            We do not sell your data. We may share information with payment
            processors or legal authorities if required.
          </p>
          <p id="security">
            <strong>Data Security</strong>
            <br />
            Data is protected using encryption and regular backups.
          </p>
          <p id="rights">
            <strong>Your Rights</strong>
            <br />
            You can request data correction or deletion by contacting us.
          </p>
          <p id="integrations">
            <strong>Third-party Integrations</strong>
            <br />
            Payments and emails may use third-party services under strict
            security measures.
          </p>
          <p id="contact">
            <strong>Contact Us</strong>
            <br />
            For privacy concerns, email us at: MasteryHub@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms_And_Conditions_Details;
