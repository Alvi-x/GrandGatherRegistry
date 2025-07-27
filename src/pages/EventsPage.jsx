// EventsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';

const recommendedVendors = [
  { name: 'Decor by Nandi', service: 'Wedding Decor' },
  { name: 'DJ Sbu', service: 'Entertainment' },
  { name: 'Chef Tumi Catering', service: 'Catering Services' },
];

const EventsPage = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Perfect Event</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Whether you're organizing a wedding, birthday, or corporate event, Grand Gather helps you plan with ease. Use our intuitive dashboard to create your event, calculate budgets, build a guest list, design custom invitations, and share your personalized gift registry.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-gray-800">🎯 Create an Event</h3>
            <p className="text-gray-600">
              Start by selecting your event type and setting your budget. Our planner guides you step-by-step.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-gray-800">📋 Guest List & Invites</h3>
            <p className="text-gray-600">
              Add guests and generate QR-code-based invitations that are shareable on WhatsApp or email.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-gray-800">🎁 Build Your Registry</h3>
            <p className="text-gray-600">
              Create a smart, shareable gift registry with local retailers, allowing group contributions and cash gifts.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Vendors for Your Next Event</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {recommendedVendors.map((vendor, index) => (
              <div key={index} className="bg-white p-5 border rounded-xl shadow">
                <h4 className="text-lg font-semibold text-gray-900">{vendor.name}</h4>
                <p className="text-sm text-gray-600">{vendor.service}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 space-x-4">
          <Link
            to="/register/host"
            className="inline-block bg-black text-white py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Start Planning as a Host
          </Link>
          <Link
            to="/dashboard/host"
            className="inline-block border border-gray-800 text-gray-800 py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-50 transition"
          >
            Go to Host Dashboard
          </Link>
        </div>
            <div className="bg-gray-50 py-16 px-4">
                <div className="max-w-5xl mx-auto text-center">
                <HowItWorks />
                </div>
            </div>
      </div>
    </section>
  );
};

export default EventsPage;