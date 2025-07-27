// components/WhyChoose.jsx
import React from "react";

const features = [
  {
    title: "All-in-one Platform",
    desc: "Seamlessly manage your event planning, guest list, and gift registry in one convenient place.",
  },
  {
    title: "Easy Gift Registry",
    desc: "Create and manage your gift registry with ease, allowing guests to contribute individually or as a group.",
  },
  {
    title: "Vendor Marketplace",
    desc: "Connect with trusted vendors and service providers tailored to your event’s unique needs and budget.",
  },
];

export default function WhyChoose() {
  return (
    <div className="text-center max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-8">Why Choose Grant Gather</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, idx) => (
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