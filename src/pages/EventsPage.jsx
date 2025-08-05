// EventsPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import HowItWorks from '../components/HowItWorks';

const recommendedVendors = [
  { name: 'Kgatso Funerals', service: 'Funeral Parlour' },
  { name: 'Decor by Nandi', service: 'Wedding Decor' },
  { name: 'DJ Sbu', service: 'Entertainment' },
  { name: 'Chef Tumi Catering', service: 'Catering Services' },
];

const EventsPage = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Plan Your Perfect Event</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Whether you're organizing a wedding, birthday, or corporate event, Grand Gather helps you plan with ease. Use our intuitive dashboard to create your event, calculate budgets, build a guest list, design custom invitations, and share your personalized gift registry.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-12">
          {/* Cards... */}
        </div>

        {/* Recommended Vendors Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">🌟 Recommended Vendors for Your Next Event</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 12000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {recommendedVendors.map((vendor, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-6 border rounded-xl shadow hover:shadow-lg transition text-left"> 
                  <div className="mb-4">
                    {vendor.name === 'Kgatso Funerals' ? (
                      <>
                        <img
                          src="/Kgatso Funerals website Logo.png"
                          alt="Kgatso Funerals Logo"
                          className="rounded-lg h-8 object-contain mb-2"
                        />
                        <Swiper
                          modules={[Autoplay, Pagination]}
                          autoplay={{ delay: 4000, disableOnInteraction: false }}
                          pagination={{ clickable: true }}
                          loop={true}
                          spaceBetween={10}
                          slidesPerView={1}
                        >
                          {['entry.mp4', 'Special.mp4', 'Box.mp4'].map((video, i) => (
                            <SwiperSlide key={i}>
                              <video
                                src={`/${video}`}
                                autoPlay
                                muted
                                loop
                                className="rounded-lg w-full h-40 object-cover"
                                preload="metadata"
                              />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </>
                    ) : (
                      <>
                        <img
                          src="/logo.png"
                          alt={`${vendor.name} Logo`}
                          className="rounded-lg h-8 object-contain mb-2"
                        />
                        <img
                          src={
                            vendor.name === 'Decor by Nandi'
                              ? '/decor.jpg'
                              : vendor.name === 'Chef Tumi Catering'
                              ? '/Chef.png'
                              : vendor.name === 'DJ Sbu'
                              ? '/dj.jpg'
                              : `https://via.placeholder.com/300x180?text=${encodeURIComponent(vendor.name)}`
                          }
                          alt={vendor.name}
                          className="rounded-lg w-full h-40 object-cover"
                        />
                      </>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">{vendor.name}</h4>
                  <p className="text-sm text-gray-600">{vendor.service}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Buttons */}
        <div className="mt-12 space-x-4">
          <Link
            to="/EventPlanner"
            className="inline-block bg-pink-500 text-white py-3 px-6 rounded-xl text-lg font-medium hover:bg-pink-700 transition"
          >
            Start Planning as a Host
          </Link>
          <Link
            to="/HostDashboard"
            className="inline-block border border-gray-800 text-gray-800 py-3 px-6 rounded-xl text-lg font-medium hover:bg-gray-200 transition"
          >
            Go to Host Dashboard
          </Link>
        </div>

        <div className="mt-12 space-x-4">
          <Link
            to="/VendorRegister"
            className="inline-block bg-blue-500 text-white py-3 px-6 rounded-xl text-lg font-medium hover:bg-blue-800 transition"
          >
            Register as a Vendor
          </Link>
        </div>

        {/* How It Works */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <HowItWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsPage;
