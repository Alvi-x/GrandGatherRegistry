import React from 'react';

const AboutCompany = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="bg-white bg-opacity-60 backdrop-blur-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">About Grand Gather</h2>
          <p className="text-lg mb-4 text-gray-700">
            Grand Gather Registry is a powerful event planning platform designed to enhance the experience for both hosts and vendors. Whether you're planning a wedding, birthday, or corporate event, we offer the tools to make organizing seamless and culturally relevant.
          </p>
          <p className="text-lg text-gray-700">
            Built with a deep understanding of South African event culture, Grand Gather brings together local vendors, gift registries, QR-based invitations, and more — all in one intuitive application.
          </p>
        </div>

        <div className="relative z-0">
          <img
            src="Joyful Gift Exchange.png"
            alt="Event Planning"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};


const OurVision = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative z-0">
          <img
            src="Mysterious Gift Bearer.png"
            alt="Our Vision"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        <div className="bg-white bg-opacity-90 backdrop-blur-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h2>
          <p className="text-lg text-gray-700">
            Our vision is to create a culturally enriching, technologically advanced platform that simplifies and elevates event planning in South Africa. We aim to empower users to organize events with elegance, ease, and local flair.
          </p>
        </div>
      </div>
    </section>
  );
};

const OurMission = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="bg-white bg-opacity-60 backdrop-blur-xl rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Our mission is to streamline the planning process by connecting hosts with trusted local vendors, integrating secure payment systems, and offering customizable gift registries. We are committed to delivering a user-friendly experience that honors local traditions while embracing digital convenience.
          </p>
        </div>

        <div className="relative z-0">
          <img
            src="Opulent Church Wedding Ceremony.png"
            alt="Our Mission"
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <div>
      <AboutCompany />
      <OurVision />
      <OurMission />
    </div>
  );
};

export default App;
