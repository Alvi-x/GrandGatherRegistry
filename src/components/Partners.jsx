import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WorkTogetherSection = () => {
  const partners = [
    {
      link: "https://www.homeloungeuae.com/offplan-projects/nshama",
      imgSrc: "https://ik.imagekit.io/homeloungeuae/developers/nshama_pkCeBhRs2K.png",
      alt: "Nshama"
    },
    {
      link: "https://www.homeloungeuae.com/offplan-projects/dubai-properties",
      imgSrc: "https://ik.imagekit.io/homeloungeuae/developers/dubai-properties_BhIt6N-7_.png",
      alt: "Dubai Properties"
    },
    {
      link: "https://www.homeloungeuae.com/offplan-projects/azizi-developments",
      imgSrc: "https://ik.imagekit.io/homeloungeuae/developers/azizi_rp-VLDqim.png",
      alt: "Azizi Developments"
    },
    {
      link: "https://www.homeloungeuae.com/offplan-projects/aldar-properties",
      imgSrc: "https://ik.imagekit.io/homeloungeuae/developers/aldar_n64i9HPuo.png",
      alt: "Aldar Properties"
    },
    {
      link: "https://www.homeloungeuae.com/offplan-projects/ellington-properties",
      imgSrc: "https://ik.imagekit.io/homeloungeuae/developers/ellington_m-NK5lbq4.png",
      alt: "Ellington Properties"
    },
    // Add the rest of the partners here...
  ];

  const settings = {
    infinite: true,
    speed: 50,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="section-work-together bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Browse Properties by Developers</h2>
          <p className="text-lg text-gray-500 mt-4">Explore luxury properties in Dubai.</p>
        </div>

        <Slider {...settings} className="partner-slider">
          {partners.map((partner, index) => (
            <div key={index} className="partner-item p-4">
              <a href={partner.link} target="_blank" rel="noopener noreferrer">
                <img
                  className="max-w-full h-auto object-contain mx-auto"
                  src={partner.imgSrc}
                  alt={partner.alt}
                />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkTogetherSection;
