import React, { useState } from 'react';

const ContactForm = () => {
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [formData, setFormData] = useState({
    fname: '',
    phone: '',
    email: '',
    message: ''
  });

  const locations = [
  { id: 62, name: 'Akoya Oxygen' },
  { id: 6, name: 'Al Furjan' },
  { id: 26, name: 'Al Jaddaf' },
  { id: 28, name: 'Al Jazeera' },
  { id: 21, name: 'Al Marjan Island' },
  { id: 20, name: 'Al Raha Beach' },
  { id: 18, name: 'Al Reem Island' },
  { id: 82, name: 'Al Satwa' },
  { id: 19, name: 'Al Shamkha' },
  { id: 63, name: 'Al Sufouh' },
  { id: 85, name: 'Al Warsan' },
  { id: 14, name: 'Aljada' },
  { id: 52, name: 'Arabian Ranches III' },
  { id: 30, name: 'Arjan' },
  { id: 27, name: 'Business Bay' },
  { id: 65, name: 'City Walk' },
  { id: 59, name: 'Damac Hills 2' },
  { id: 58, name: 'Damac Lagoons' },
  { id: 60, name: 'Damac Riverside' },
  { id: 16, name: 'Danet Abu Dhabi' },
  { id: 38, name: 'Downtown Dubai' },
  { id: 45, name: 'Dubai Creek Harbour' },
  { id: 68, name: 'Dubai Design District (D3)' },
  { id: 36, name: 'Dubai Harbour' },
  { id: 8, name: 'Dubai Healthcare City' },
  { id: 42, name: 'Dubai Hills Estate' },
  { id: 54, name: 'Dubai International City' },
  { id: 47, name: 'Dubai Investment Park' },
  { id: 56, name: 'Dubai Islands' },
  { id: 39, name: 'Dubai Marina' },
  { id: 83, name: 'Dubai Production City (IMPZ)' },
  { id: 80, name: 'Dubai Science Park' },
  { id: 23, name: 'Dubai Silicon Oasis' },
  { id: 7, name: 'Dubai South' },
  { id: 9, name: 'Dubai Studio City' },
  { id: 64, name: 'Dubai Water Canal' },
  { id: 15, name: 'Dubailand' },
  { id: 49, name: 'Dubailand Oasis' },
  { id: 51, name: 'Emaar Beachfront' },
  { id: 44, name: 'Emaar South' },
  { id: 78, name: 'Expo City Dubai' },
  { id: 75, name: 'Falconcity' },
  { id: 86, name: 'Global Village' },
  { id: 29, name: 'Hayat Island' },
  { id: 67, name: 'Jumeirah Bay Island' },
  { id: 70, name: 'Jumeirah Beach Residence' },
  { id: 84, name: 'Jumeirah Garden City' },
  { id: 37, name: 'Jumeirah Golf Estates' },
  { id: 31, name: 'Jumeirah Lake Towers' },
  { id: 55, name: 'Jumeirah Park' },
  { id: 3, name: 'Jumeirah Village Circle' },
  { id: 25, name: 'Jumeirah Village Triangle' },
  { id: 46, name: 'Karachi' },
  { id: 17, name: 'Khalifa City' },
  { id: 66, name: 'Madinat Jumeirah Living' },
  { id: 77, name: 'Majan' },
  { id: 5, name: 'Marsa Al Arab' },
  { id: 33, name: 'Masaar' },
  { id: 24, name: 'Meydan' },
  { id: 48, name: 'Mina Rashid' },
  { id: 11, name: 'Mohammed Bin Rashid City' },
  { id: 73, name: 'Motor City' },
  { id: 4, name: 'Mudon' },
  { id: 57, name: 'Nad Al Sheba Gardens' },
  { id: 35, name: 'Nasma Residence' },
  { id: 53, name: 'Palm Jebel Ali' },
  { id: 34, name: 'Palm Jumeirah' },
  { id: 69, name: 'Port De La Mer' },
  { id: 41, name: 'Rashid Yatchs and Marina' },
  { id: 12, name: 'Saadiyat Island' },
  { id: 61, name: 'Safa Park' },
  { id: 32, name: 'Sharjah Corniche' },
  { id: 10, name: 'Sheikh Zayed Road' },
  { id: 74, name: 'Sobha Hartland' },
  { id: 72, name: 'Sobha Hartland II' },
  { id: 71, name: 'Sobha Siniya Island' },
  { id: 22, name: 'The Haven' },
  { id: 43, name: 'The Oasis' },
  { id: 40, name: 'The Valley' },
  { id: 1, name: 'Town Square Dubai' },
  { id: 2, name: 'Villanova' },
  { id: 76, name: 'Wadi Al Safa 5' },
  { id: 13, name: 'Yas Island' },
  { id: 81, name: "Za'abeel" },
  { id: 50, name: 'Zabeel' }
];


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <section className="section-featured tf-spacing-1 pt-0 pb-0">
      <div className="flex flex-wrap">
        {/* Image Section (Half screen) */}
        <div className="w-full sm:w-1/2">
          <div className="image-wrap img-animation2 wow animate__animated animated">
            <a href="https://www.homeloungeuae.com/contact">
              <img
                className="lazyloaded"
                src="Diverse Office Engagement.png"
                alt="Home Lounge Real Estate Brokers LLC"
                title="Home Lounge Real Estate Brokers LLC"
              />
            </a>
          </div>
        </div>

        {/* Form Section (Half screen) */}
        <div className="w-full sm:w-1/2">
          <div className="wrap-content p-6">
            <div className="content">
              <form
                id="contactform"
                onSubmit={handleSubmit}
                className="form-contact space-y-4"
              >
                <div className="heading-section text-center mb-4">
                  <h4 className="text-2xl font-semibold">We Would Love to Hear From You</h4>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      className="form-control p-3 border rounded-lg w-full"
                      placeholder="First name"
                      name="fname"
                      value={formData.fname}
                      onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control p-3 border rounded-lg w-full"
                      placeholder="Last Name"
                      name="lname"
                      value={formData.lname}
                      onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      className="form-control p-3 border rounded-lg w-full"
                      placeholder="Contact number"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control p-3 border rounded-lg w-full"
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                {/* Property Type Dropdown */}
                <div className="mb-6">
                  <select
                    className="form-control p-3 border rounded-lg w-full"
                    value={propertyType}
                    onChange={(e) => setPropertyType(e.target.value)}
                    required
                  >
                    <option value="">Select Property Type</option>
                    <option value="buy">Buy</option>
                    <option value="rent">Rent</option>
                    <option value="enquiry">Enquiry</option>
                  </select>
                </div>

                {/* Location Dropdown */}
                <div className="mb-6">
                  <select
                    className="form-control p-3 border rounded-lg w-full"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  >
                    <option value="">Select Location</option>
                    {locations.map((loc) => (
                      <option key={loc.id} value={loc.id}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-6">
                  <textarea
                    name="message"
                    className="form-control p-3 border rounded-lg w-full"
                    rows="4"
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-primary text-white py-3 px-6 rounded-lg font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
