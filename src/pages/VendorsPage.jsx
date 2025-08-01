// VendorsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';

const suggestedServices = [
  'Photography & Videography',
  'Decor & Floral Setup',
  'Live Entertainment',
  'Catering & Bartending',
  'Venue Hosting',
];

const standoutEvents = [
  'Weddings',
  'Baby Showers',
  'Birthday Celebrations',
  'Corporate Functions',
  'Cultural Ceremonies',
];

const VendorsPage = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Connect with the Right Clients</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Grand Gather makes it easy for local service providers — from photographers to caterers — to showcase their services to the right audience. Create a vendor profile, list your services, and get matched with hosts based on event type, location, and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-gray-800">💼 Vendor Profiles</h3>
            <p className="text-gray-600">
              Showcase your services, packages, and images to potential clients. Get rated and reviewed.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-gray-800">🤝 Smart Matching</h3>
            <p className="text-gray-600">
              Our system recommends you to event hosts based on your category, pricing, and availability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <h3 className="font-semibold text-xl mb-2 text-gray-800">💳 Secure Payments</h3>
            <p className="text-gray-600">
              Receive payments directly via our secure system powered by PayFast.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 text-left">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Services You Can Offer</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {suggestedServices.map((service, idx) => (
                <li key={idx}>{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Stand Out At These Event Types</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {standoutEvents.map((event, idx) => (
                <li key={idx}>{event}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 space-x-4">
          <Link
            to="/VendorRegister"
            className="inline-block bg-black text-white py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Register as a Vendor
          </Link>
          <Link
            to="/VendorDashboard"
            className="inline-block border border-gray-800 text-gray-800 py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-50 transition"
          >
            Go to Vendor Dashboard
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

export default VendorsPage;
