import React from 'react';
import WhyChoose from "../components/WhyChoose";
import HowItWorks from "../components/HowItWorks";
import Reviews from "../components/Reviews";
import Slider from "react-slick"; // Import react-slick

export default function Home() {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000, // Change images every 3 seconds
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  // No navigation arrows
    dots: false,    // No dots navigation
  };

  return (
    <>
      {/* Main Content */}
      <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-brand-white text-brand-black">
        
        {/* Carousel with full viewport height */}
        <div className="container-fluid w-full h-screen absolute top-0 left-0 z-10">
          <Slider {...settings}>
            {/* Slide 1 */}
            <div className="relative w-full h-full">
              <img
                src="/Wedding Ceremony Intimacy.png"
                alt="carousel-image-1"
                className="w-screen h-screen object-cover img-fluid" // Ensures full width and height
              />
            </div>

            {/* Slide 2 */}
            <div className="relative w-full h-full">
              <img
                src="/Outdoor Banquet Gathering.png"
                alt="carousel-image-2"
                className="w-screen h-screen object-cover img-fluid" // Ensures full width and height
              />
            </div>

            {/* Slide 3 */}
            <div className="relative w-full h-full">
              <img
                src="/Festive Gift Arrangement.png"
                alt="carousel-image-3"
                className="w-screen h-screen object-cover img-fluid" // Ensures full width and height
                style={{ objectPosition: 'center' }} // or use percentages like '50% 100%' for finer control
              />
            </div>

            {/* Slide 4 */}
            <div className="relative w-full h-full">
              <img
                src="/Joyful Gift Exchange.png"
                alt="carousel-image-4"
                className="w-screen h-screen object-cover img-fluid" // Ensures full width and height
                style={{ objectPosition: 'center bottom' }} // or use percentages like '50% 100%' for finer control
              />
            </div>
          </Slider>

          {/* Semi-transparent Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-15"></div> {/* Semi-transparent overlay */}

          {/* Text Content Overlays on Carousel */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-20 sm:mx-0 sm:px-0 md:px-0">
            <img className='mx-auto' src="/logo1.png" alt="" />
            <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Seamless Event, Thoughtful Gifting</h3>
          </div>
        </div>
        
      </div>

      {/* Other Content Below Carousel */}
      <div className="relative z-30 text-center"> {/* Ensures content starts below carousel */}        
          <section className="py-16">
            <WhyChoose />
          </section>
          <section className="py-16 bg-gray-50">
            <HowItWorks />
          </section>
          <section className="py-16">
            <Reviews />
          </section>
      </div>
    </>
  );
}
