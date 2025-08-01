import React, { useState } from "react";
import { Link } from "react-router-dom";

const HostDashboard = () => {
  const [timeline, setTimeline] = useState([
    { time: "10:00 AM", activity: "Guest Arrival" },
    { time: "11:00 AM", activity: "Ceremony Starts" },
    { time: "1:00 PM", activity: "Lunch & Social" },
  ]);

  const [notifications] = useState([
    "Catering vendor confirmed.",
    "You have 5 RSVPs.",
    "Reminder: Event starts in 3 days.",
  ]);

  const handleTimelineUpdate = () => {
    const newItem = { time: "", activity: "" };
    setTimeline([...timeline, newItem]);
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-12">
      <h1 className="text-3xl font-bold text-gray-900">🎉 Welcome to Your Host Dashboard</h1>

      {/* Event Overview */}
      <section className="bg-white shadow rounded-xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Your Event: Mbali's Traditional Wedding</h2>
          <Link
            to="/edit-event"
            className="text-sm text-blue-600 hover:underline"
          >
            ✏️ Edit Event
          </Link>
        </div>
        <p><span className="font-semibold">Date:</span> 24 August 2025</p>
        <p><span className="font-semibold">Location:</span> Durban, KZN</p>
        <p><span className="font-semibold">Guests:</span> 150</p>
      </section>

      {/* Share / Invite */}
      <section className="bg-gray-50 shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📨 Share or Download Invitation</h2>
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">Your unique event invite link:</p>
            <input
              readOnly
              value="https://grandgather.co.za/event/mbali2025"
              className="w-full border p-2 rounded bg-white text-sm"
            />
          </div>
          <div className="flex gap-3">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
              📤 Share
            </button>
            <button className="bg-white border px-4 py-2 rounded hover:bg-gray-100">
              ⬇️ Download e-Invite
            </button>
          </div>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="bg-white shadow rounded-xl p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">📅 Event Timeline</h2>
        {timeline.map((item, idx) => (
            <div key={idx} className="mb-2 flex items-center gap-2">
            <input
                type="time"
                className="border p-2 rounded w-[120px]"
                value={item.time}
                onChange={(e) => {
                const copy = [...timeline];
                copy[idx].time = e.target.value;
                setTimeline(copy);
                }}
            />
            <input
                type="text"
                placeholder="Activity"
                className="border p-2 rounded flex-1"
                value={item.activity}
                onChange={(e) => {
                const copy = [...timeline];
                copy[idx].activity = e.target.value;
                setTimeline(copy);
                }}
            />
            <div className="flex gap-1">
                <button
                onClick={() => {
                    if (idx > 0) {
                    const copy = [...timeline];
                    [copy[idx - 1], copy[idx]] = [copy[idx], copy[idx - 1]];
                    setTimeline(copy);
                    }
                }}
                className="text-sm px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded"
                >
                ↑
                </button>
                <button
                onClick={() => {
                    if (idx < timeline.length - 1) {
                    const copy = [...timeline];
                    [copy[idx + 1], copy[idx]] = [copy[idx], copy[idx + 1]];
                    setTimeline(copy);
                    }
                }}
                className="text-sm px-2 py-1 bg-blue-100 hover:bg-blue-200 rounded"
                >
                ↓
                </button>
                <button
                onClick={() => {
                    const copy = [...timeline];
                    copy.splice(idx, 1);
                    setTimeline(copy);
                }}
                className="text-sm px-2 py-1 bg-red-100 hover:bg-red-200 rounded text-red-700"
                >
                ✕
                </button>
            </div>
            </div>
        ))}
        <button
            onClick={handleTimelineUpdate}
            className="mt-4 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200"
        >
            + Add Timeline Item
        </button>
        </section>


      {/* Notifications */}
      <section className="bg-gray-50 shadow rounded-xl p-6">
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
            Having issues? Visit our <Link to="/faq" className="text-blue-600 underline">FAQ</Link> or
            <Link to="/contact" className="text-blue-600 underline ml-1">Contact Support</Link>.
          </p>
        </div>

        <div className="bg-white shadow rounded-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">⚙️ Settings</h2>
          <p className="text-sm text-gray-600 mb-2">Manage your contact info, privacy preferences, and notifications.</p>
          <Link
            to="/settings"
            className="inline-block mt-2 text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
          >
            Go to Settings
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HostDashboard;
