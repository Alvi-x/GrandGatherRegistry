// components/HowItWorks.jsx
import React from "react";

const steps = [
  {
    title: "Create Event",
    desc: "Setup your special event in minutes with the important details.",
  },
  {
    title: "Customize Registry",
    desc: "Add gifts and experiences to your personalized registry.",
  },
  {
    title: "Share with Guests",
    desc: "Invite your guests to view and contribute to your event.",
  },
];

export default function HowItWorks() {
  return (
    <div className="text-center max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">How it works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="border rounded-xl p-6 hover:shadow-md transition"
          >
            <div className="w-8 h-8 mx-auto mb-4 border rounded-full" />
            <h3 className="font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}