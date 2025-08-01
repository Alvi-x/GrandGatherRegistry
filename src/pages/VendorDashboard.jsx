import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VendorDashboard = () => {
  const [services, setServices] = useState([
    { name: "Premium Wedding Catering", category: "Catering", status: "Active" },
    { name: "Gold Decor Package", category: "Decor", status: "Active" }
  ]);

  const [eventRequests, setEventRequests] = useState([
    {
      host: "Lerato M.",
      event: "Traditional Wedding",
      date: "2025-09-14",
      location: "Polokwane",
      status: "Pending"
    },
    {
      host: "James K.",
      event: "Corporate Year-End",
      date: "2025-11-30",
      location: "Cape Town",
      status: "Accepted"
    }
  ]);

  const [notifications] = useState([
    "New booking request from Lerato.",
    "Payment processed for James K.",
    "Profile views increased by 32%."
  ]);

  const handleEventResponse = (index, response) => {
    const updated = [...eventRequests];
    updated[index].status = response;
    setEventRequests(updated);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
      <h1 className="text-3xl font-bold text-gray-900">🧰 Vendor Dashboard</h1>

      {/* Services Section */}
      <section className="bg-white shadow rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Services</h2>
          <Link to="/edit-services" className="text-sm text-blue-600 hover:underline">
            ✏️ Edit Services
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service, idx) => (
            <div key={idx} className="border rounded p-4">
              <h3 className="font-semibold text-gray-800">{service.name}</h3>
              <p className="text-sm text-gray-600">{service.category}</p>
              <span className={`text-xs font-medium mt-1 inline-block px-2 py-1 rounded bg-${service.status === "Active" ? "green" : "gray"}-100 text-${service.status === "Active" ? "green" : "gray"}-700`}>
                {service.status}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Event Requests */}
      <section className="bg-gray-50 shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📅 Event Requests</h2>
        <div className="space-y-4">
          {eventRequests.map((req, idx) => (
            <div key={idx} className="border p-4 rounded bg-white flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-semibold text-gray-800">{req.event}</h3>
                <p className="text-sm text-gray-600">Host: {req.host}</p>
                <p className="text-sm text-gray-600">Date: {req.date}</p>
                <p className="text-sm text-gray-600">Location: {req.location}</p>
              </div>
              <div className="flex items-center gap-3">
                {req.status === "Pending" ? (
                  <>
                    <button onClick={() => handleEventResponse(idx, "Accepted")} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                      Accept
                    </button>
                    <button onClick={() => handleEventResponse(idx, "Declined")} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                      Decline
                    </button>
                  </>
                ) : (
                  <span className={`px-3 py-1 text-sm rounded bg-${req.status === "Accepted" ? "green" : "red"}-100 text-${req.status === "Accepted" ? "green" : "red"}-700`}>
                    {req.status}
                  </span>
                )}
                <Link to={`/chat/${req.host.toLowerCase().replace(" ", "-")}`} className="text-blue-600 underline text-sm">
                  💬 Chat
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Notifications */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">🔔 Notifications</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
          {notifications.map((note, idx) => (
            <li key={idx}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Support & Settings */}
      <section className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">🛟 Help & Support</h2>
          <p className="text-sm text-gray-600 mb-2">
            Need help? Visit our <Link to="/faq" className="text-blue-600 underline">FAQ</Link> or
            <Link to="/contact" className="text-blue-600 underline ml-1">contact us</Link>.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">⚙️ Settings</h2>
          <p className="text-sm text-gray-600 mb-2">Update your profile, contact info, or payment settings.</p>
          <Link
            to="/vendor-settings"
            className="inline-block mt-2 text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
          >
            Go to Settings
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VendorDashboard;
