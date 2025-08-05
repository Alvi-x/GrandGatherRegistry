import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to API or email)
    alert("Form Submitted!");
  };

  return (
    <section className="py-16 bg-gray-50" id="section-contact">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Left Column - Contact Info and Contact Form */}
          <div className="lg:w-1/2 w-full px-4">
            {/* Contact Info */}
            <div className="box-contact p-8 bg-white shadow-lg rounded-lg mb-8">
              <h3 className="text-3xl font-semibold mb-12 text-gray-900">How To Find Us</h3>
              <ul className="space-y-8">
                {/* Office Address */}
                <li className="flex items-start">
                  <div className="icon w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full mr-6">
                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Office address</div>
                    <p className="text-gray-700">2615 Churchill Tower 1, Business Bay, South Africa</p>
                  </div>
                </li>

                {/* Contact Numbers */}
                <li className="flex items-start">
                  <div className="icon w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full mr-6">
                    <FontAwesomeIcon icon={faPhoneAlt} className="text-gray-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Contact Number</div>
                    <p className="text-gray-700">+27 42 866 770</p>
                    <p className="text-gray-700">+27 50 785 1492</p>
                  </div>
                </li>

                {/* Email Address */}
                <li className="flex items-start">
                  <div className="icon w-12 h-12 flex justify-center items-center bg-gray-200 rounded-full mr-6">
                    <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 text-xl" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Email Address</div>
                    <a href="mailto:tumi@grandgather.co.za" className="text-gray-700">tumi@grandgather.co.za</a>
                  </div>
                </li>
              </ul>            
            {/* Google Map Embed */}
            <div className="w-full h-80 mt-5 bg-gray-300 rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d917891.6872366291!2d28.127379399999995!3d-26.01671995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9512955411779f%3A0x6d9ee7c7cb5438e2!2sGauteng!5e0!3m2!1sen!2sza!4v1754293986117!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:w-1/2 w-full px-4 mt-8 lg:mt-0">
          
            {/* Contact Form */}
            <div className="box-contact p-8 bg-white shadow-lg rounded-lg">
              <h3 className="text-3xl font-semibold mb-8 text-gray-900">Contact Us</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
                    rows="4"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
