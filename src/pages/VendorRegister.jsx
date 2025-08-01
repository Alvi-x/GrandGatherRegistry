import React, { useState } from 'react';

const eventOptions = [
  "Weddings", "Birthdays", "Graduations", "Corporate Events", "Baby Showers", "Funerals", "Traditional Ceremonies"
];

const createEmptyService = () => ({
  name: "",
  category: "",
  events: [],
  description: "",
  price: "",
  media: null,
  preview: null,
  link: ""
});

const VendorRegister = () => {
  const [vendorName, setVendorName] = useState("");
  const [location, setLocation] = useState("");
  const [contact, setContact] = useState("");
  const [services, setServices] = useState([createEmptyService()]);

  const handleServiceChange = (index, field, value) => {
    const updated = [...services];
    updated[index][field] = value;
    setServices(updated);
  };

  const handleEventToggle = (index, event) => {
    const updated = [...services];
    const currentEvents = updated[index].events;
    if (currentEvents.includes(event)) {
      updated[index].events = currentEvents.filter(e => e !== event);
    } else {
      updated[index].events.push(event);
    }
    setServices(updated);
  };

  const handleFileChange = (index, file) => {
    const updated = [...services];
    updated[index].media = file;
    updated[index].preview = file ? URL.createObjectURL(file) : null;
    setServices(updated);
  };

  const addService = () => {
    setServices([...services, createEmptyService()]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      vendorName,
      location,
      contact,
      services
    });
    alert("Vendor Registered! Check console for data.");
  };

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Vendor Registration</h1>
      <form onSubmit={handleSubmit} className="space-y-8">

        {/* Vendor Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Vendor Name" required
            className="border p-3 rounded" value={vendorName}
            onChange={(e) => setVendorName(e.target.value)} />
          <input type="text" placeholder="Location" required
            className="border p-3 rounded" value={location}
            onChange={(e) => setLocation(e.target.value)} />
          <input type="text" placeholder="Contact Info (Phone/Email)" required
            className="border p-3 rounded md:col-span-2" value={contact}
            onChange={(e) => setContact(e.target.value)} />
        </div>

        {/* Services */}
        {services.map((service, index) => (
          <div key={index} className="border p-6 rounded bg-gray-50">
            <h2 className="font-semibold text-lg text-gray-700 mb-4">Service #{index + 1}</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Service Provided" required
                className="border p-3 rounded" value={service.name}
                onChange={(e) => handleServiceChange(index, "name", e.target.value)} />
              <input type="text" placeholder="Category (e.g. Catering, Decor)" required
                className="border p-3 rounded" value={service.category}
                onChange={(e) => handleServiceChange(index, "category", e.target.value)} />
            </div>

            <label className="block text-sm font-medium mb-2">Related Event Types:</label>
            <div className="flex flex-wrap gap-4 mb-4">
              {eventOptions.map((event) => (
                <label key={event} className="inline-flex items-center gap-2">
                  <input type="checkbox"
                    checked={service.events.includes(event)}
                    onChange={() => handleEventToggle(index, event)} />
                  <span className="text-sm text-gray-700">{event}</span>
                </label>
              ))}
            </div>

            <textarea
              placeholder="Service Description"
              className="w-full border p-3 rounded mb-4"
              rows={4}
              value={service.description}
              onChange={(e) => handleServiceChange(index, "description", e.target.value)}
            />

            <input type="text" placeholder="Price Range or Package Details"
              className="w-full border p-3 rounded mb-4"
              value={service.price}
              onChange={(e) => handleServiceChange(index, "price", e.target.value)} />

            <input type="text" placeholder="Optional External Link (Instagram, Portfolio, etc)"
              className="w-full border p-3 rounded mb-4"
              value={service.link}
              onChange={(e) => handleServiceChange(index, "link", e.target.value)} />

            <input type="file" accept="image/*,video/*"
              className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded file:bg-black file:text-white hover:file:bg-gray-800"
              onChange={(e) => handleFileChange(index, e.target.files[0])} />

            {/* Preview */}
            {service.preview && (
              <div className="mt-4">
                {service.media?.type?.startsWith("image") ? (
                  <img src={service.preview} alt="Preview" className="max-h-64 rounded" />
                ) : (
                  <video controls className="max-h-64 rounded">
                    <source src={service.preview} type={service.media.type} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-between items-center">
          <button type="button"
            onClick={addService}
            className="bg-gray-100 text-gray-800 border border-gray-300 px-4 py-2 rounded hover:bg-gray-200">
            + Add Another Service
          </button>

          <button type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
            Register Vendor
          </button>
        </div>
      </form>
    </div>
  );
};

export default VendorRegister;
