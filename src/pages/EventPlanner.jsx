import React, { useState } from 'react';

const eventTypes = [
  "Wedding", "Birthday", "Corporate", "Graduation",
  "Baby Shower", "Funeral", "Traditional Ceremony"
];

const vendorServices = [
  "Catering", "Decor", "Photography", "DJ/Sound", "Venue", "Transport", "MC", "Makeup Artist"
];

const EventPlanner = () => {
  const [formData, setFormData] = useState({
    hostName: "",
    eventName: "",
    eventType: "",
    servicesRequired: [],
    serviceCategory: "",
    relatedEvents: [],
    description: "",
    budget: 15000,
    location: "",
    eventDate: "",
    contact: ""
  });

  const [vendorSearch, setVendorSearch] = useState("");
  const [selectedVendor, setSelectedVendor] = useState(null);

  const mockVendors = [
    {
      id: 1,
      name: "Delicious Catering",
      service: "Catering",
      price: 5000,
      location: "Cape Town",
      images: ["/img/catering1.jpg", "/img/catering2.jpg"]
    },
    {
      id: 2,
      name: "Elegant Decor Co.",
      service: "Decor",
      price: 3500,
      location: "Johannesburg",
      images: ["/img/decor1.jpg", "/img/decor2.jpg"]
    },
    {
      id: 3,
      name: "SnapShots Photography",
      service: "Photography",
      price: 4200,
      location: "Durban",
      images: ["/img/photo1.jpg", "/img/photo2.jpg"]
    },
    {
      id: 4,
      name: "Snaps Photography",
      service: "Photography",
      price: 5200,
      location: "Durban",
      images: ["/img/photo1.jpg", "/img/photo2.jpg", "/img/photo2.jpg"]
    },
    {
      id: 5,
      name: "Mpho Cam",
      service: "Photography",
      price: 2200,
      location: "Durban",
      images: ["/img/photo1.jpg", "/img/photo2.jpg", "/img/photo2.jpg", "/img/photo2.jpg"]
    }
  ];

  const toggleRelatedEvent = (event) => {
    const current = formData.relatedEvents;
    const updated = current.includes(event)
      ? current.filter(e => e !== event)
      : [...current, event];
    setFormData({ ...formData, relatedEvents: updated });
  };

  const toggleService = (service) => {
    const current = formData.servicesRequired;
    const updated = current.includes(service)
      ? current.filter(s => s !== service)
      : [...current, service];
    setFormData({ ...formData, servicesRequired: updated });
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedVendor) {
      alert("Please select a vendor before submitting.");
      return;
    }

    const completeData = {
      ...formData,
      selectedVendor
    };

    console.log(completeData);
    alert("Event Planned! Check console for data.");
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Plan Your Event</h1>

      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Host Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Host Name"
            className="border p-3 rounded"
            required
            value={formData.hostName}
            onChange={(e) => handleChange("hostName", e.target.value)}
          />
          <input
            type="text"
            placeholder="Event Name"
            className="border p-3 rounded"
            required
            value={formData.eventName}
            onChange={(e) => handleChange("eventName", e.target.value)}
          />
        </div>

        {/* Event Type & Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select
            className="border p-3 rounded"
            required
            value={formData.eventType}
            onChange={(e) => handleChange("eventType", e.target.value)}
          >
            <option value="">Select Event Type</option>
            {eventTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Contact Info"
            className="border p-3 rounded"
            required
            value={formData.contact}
            onChange={(e) => handleChange("contact", e.target.value)}
          />
        </div>

        {/* Location & Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Event Location"
            className="border p-3 rounded"
            required
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
          <input
            type="date"
            className="border p-3 rounded"
            required
            value={formData.eventDate}
            onChange={(e) => handleChange("eventDate", e.target.value)}
          />
        </div>

        {/* Description */}
        <textarea
          className="w-full border p-3 rounded"
          placeholder="Event Description"
          rows={4}
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />

        {/* Services Required (checkbox) */}
        <div>
          <label className="font-medium block mb-2 text-gray-700">Select Services You Need:</label>
          <div className="flex flex-wrap gap-4">
            {vendorServices.map(service => (
              <label key={service} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.servicesRequired.includes(service)}
                  onChange={() => toggleService(service)}
                />
                <span className="text-sm text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Related Event Types (checkbox) */}
        <div>
          <label className="font-medium block mb-2 text-gray-700">Other Related Event Types:</label>
          <div className="flex flex-wrap gap-4">
            {eventTypes.map(type => (
              <label key={type} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.relatedEvents.includes(type)}
                  onChange={() => toggleRelatedEvent(type)}
                />
                <span className="text-sm text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Budget */}
        <div>
          <label className="font-medium block mb-2 text-gray-700">
            Estimated Budget: R{formData.budget}
          </label>
          <input
            type="range"
            min={1000}
            max={100000}
            step={500}
            value={formData.budget}
            onChange={(e) => handleChange("budget", parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Vendor Search */}
        <div>
          <label className="block font-medium mb-2 text-gray-700">Search & Select Vendor:</label>
          <input
            type="text"
            placeholder="Search for vendors by name, service or location..."
            className="border p-3 rounded w-full mb-4"
            value={vendorSearch}
            onChange={(e) => setVendorSearch(e.target.value)}
          />

          {/* Vendor Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mockVendors
              .filter(v =>
                v.name.toLowerCase().includes(vendorSearch.toLowerCase()) ||
                v.service.toLowerCase().includes(vendorSearch.toLowerCase()) ||
                v.location.toLowerCase().includes(vendorSearch.toLowerCase())
              )
              .map(vendor => (
                <div
                  key={vendor.id}
                  className={`border p-4 rounded shadow transition cursor-pointer ${
                    selectedVendor?.id === vendor.id ? "border-blue-500 ring-2 ring-blue-300" : ""
                  }`}
                  onClick={() => setSelectedVendor(vendor)}
                >
                  <h3 className="text-lg font-bold">{vendor.name}</h3>
                  <p className="text-sm text-gray-600">Service: {vendor.service}</p>
                  <p className="text-sm text-gray-600">Location: {vendor.location}</p>
                  <p className="text-sm text-gray-800 font-semibold">Price: R{vendor.price}</p>

                  {/* Portfolio slideshow */}
                  <div className="mt-2 flex overflow-x-auto gap-2">
                    {vendor.images.map((img, idx) => (
                      <img
                        key={idx}
                        src={img}
                        alt={`Portfolio ${idx}`}
                        className="w-24 h-16 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className={`px-6 py-3 rounded transition ${
            selectedVendor
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-400 text-gray-700 cursor-not-allowed"
          }`}
          disabled={!selectedVendor}
        >
          Submit Event Plan
        </button>
      </form>
    </div>
  );
};

export default EventPlanner;
