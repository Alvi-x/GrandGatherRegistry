import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HowItWorks from '../components/HowItWorks';

// 🔧 Example vendors - expand or fetch from API later
const allVendors = [
  {
    id: 1,
    name: 'Decor by Nandi',
    service: 'Wedding Decor',
    price: 'R5,000+',
    location: 'Johannesburg',
    images: ['/vendors/decor1.jpg', '/vendors/decor2.jpg'],
  },
  {
    id: 2,
    name: 'DJ Sbu',
    service: 'Entertainment',
    price: 'R3,500',
    location: 'Cape Town',
    images: ['/vendors/dj1.jpg', '/vendors/dj2.jpg'],
  },
  {
    id: 3,
    name: 'Chef Tumi Catering',
    service: 'Catering Services',
    price: 'R8,000',
    location: 'Durban',
    images: ['/vendors/catering1.jpg', '/vendors/catering2.jpg'],
  },
];

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVendor, setSelectedVendor] = useState(null);

  const filteredVendors = allVendors.filter(v =>
    `${v.name} ${v.service} ${v.location}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Perfect Event</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Whether you're organizing a wedding, birthday, or corporate event, Grand Gather helps you plan with ease.
        </p>

        {/* Recommended Vendor Cards */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Vendors for Your Next Event</h2>

          <input
            type="text"
            placeholder="Search vendors by name, service, or location..."
            className="w-full md:w-1/2 mb-6 p-3 border rounded-xl shadow-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {filteredVendors.map((vendor) => (
              <div
                key={vendor.id}
                className={`border rounded-xl shadow p-4 hover:shadow-md transition cursor-pointer ${
                  selectedVendor?.id === vendor.id ? 'ring-2 ring-black' : ''
                }`}
                onClick={() => setSelectedVendor(vendor)}
              >
                <h4 className="text-lg font-semibold text-gray-900">{vendor.name}</h4>
                <p className="text-sm text-gray-600">{vendor.service}</p>
                <p className="text-sm text-gray-700">💰 {vendor.price}</p>
                <p className="text-sm text-gray-700">📍 {vendor.location}</p>

                <div className="mt-3">
                  <div className="overflow-hidden rounded-md h-40 relative">
                    <img
                      src={vendor.images[0]}
                      alt={vendor.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Slide show effect - basic example */}
                    <div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 text-xs rounded">
                      {vendor.images.length} images
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {selectedVendor && (
            <div className="mt-8">
              <p className="text-lg font-medium text-green-700">
                ✅ You have selected <strong>{selectedVendor.name}</strong> as your vendor.
              </p>
              <Link
                to={{
                  pathname: '/submit-event',
                  state: { selectedVendor },
                }}
                className="mt-4 inline-block bg-black text-white py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
              >
                Submit Event Plan
              </Link>
            </div>
          )}
        </div>

        {/* Host links */}
        <div className="mt-12 space-x-4">
          <Link
            to="/EventPlanner"
            className="inline-block bg-black text-white py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-800 transition"
          >
            Start Planning as a Host
          </Link>
          <Link
            to="/HostDashboard"
            className="inline-block border border-gray-800 text-gray-800 py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-50 transition"
          >
            Go to Host Dashboard
          </Link>
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 py-16 px-4 mt-20">
          <div className="max-w-5xl mx-auto text-center">
            <HowItWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
