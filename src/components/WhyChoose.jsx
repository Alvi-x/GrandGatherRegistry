// components/WhyChoose.jsx
import React from "react";
import { FaRegLightbulb, FaGift, FaHandshake } from "react-icons/fa";

// Add your background images (these should be in your /public folder or imported directly)
const features = [
  {
    title: "All-in-one Platform",
    desc: "Seamlessly manage your event planning, guest list, and gift registry in one convenient place.",
    icon: <FaRegLightbulb className="text-indigo-600 text-3xl" />,
    bgImage: "/Urban Photographer in Action.png", // Update this path to your actual image
  },
  {
    title: "Easy Gift Registry",
    desc: "Create and manage your gift registry with ease, allowing guests to contribute individually or as a group.",
    icon: <FaGift className="text-pink-500 text-3xl" />,
    bgImage: "/Festive Gift Arrangement.png",
  },
  {
    title: "Vendor Marketplace",
    desc: "Connect with trusted vendors and service providers tailored to your event’s unique needs and budget.",
    icon: <FaHandshake className="text-green-500 text-3xl" />,
    bgImage: "/Chef.png",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="text-center max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Why Choose <span className="text-indigo-600">Grant Gather</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Everything you need to plan, celebrate, and connect—beautifully brought together.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="relative border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition duration-300 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${item.bgImage}')`,
              }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-md rounded-xl z-0"></div>

              {/* Card content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold text-black-800 mb-2">{item.title}</h3>
                <p className="text-black-600 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
