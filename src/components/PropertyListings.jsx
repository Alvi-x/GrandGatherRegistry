import React from 'react';

const properties = [
    { image: 'Modern Minimalist House.png', name: 'Luxury Villa', price: 'AED 1,500,000', location: 'Dubai', link: '/details/luxury-villa' },
    { image: 'Modern Minimalist House (1).png', name: 'Modern Apartment', price: 'AED 800,000', location: 'Dubai', link: '/details/modern-apartment' },
    { image: 'Modern Desert Home.png', name: 'Beachfront Property', price: 'AED 3,000,000', location: 'Dubai', link: '/details/beachfront-property' },
    { image: 'Modern Waterfront House.png', name: 'SkyVilla Property', price: 'AED 3,500,000', location: 'Al Jaddaf', link: '/details/skyvilla-property' },
    { image: 'Contemporary Cliffside Architecture at Dusk.png', name: 'Penthouse Property', price: 'AED 4,000,000', location: 'Al Reem Island', link: '/details/penthouse-property' },
    { image: 'Sunset Coastline Modern Luxury Home.png', name: 'Modern Desert Home', price: 'AED 1,800,000', location: 'Dubai', link: '/details/modern-desert-home' },
    { image: 'Modern Minimalist House (2).png', name: 'Waterfront Mansion', price: 'AED 5,500,000', location: 'Dubai Marina', link: '/details/waterfront-mansion' },
    { image: 'Modern Architectural Marvel.png', name: 'City Center Apartment', price: 'AED 950,000', location: 'Downtown Dubai', link: '/details/city-center-apartment' },
    { image: 'Modern Minimalist House (3).png', name: 'Luxury High-rise', price: 'AED 3,200,000', location: 'Business Bay', link: '/details/luxury-high-rise' },
    { image: 'Twilight Serenity at Contemporary House.png', name: 'Contemporary Villa', price: 'AED 2,400,000', location: 'Jumeirah', link: '/details/contemporary-villa' },
];

const PropertyListings = () => {
    return (
        <section className="container-fluid py-12 bg-gray-50 rounded-md relative">
            <div className="mx-auto px-8">
                {/* Background Text - Hidden on mobile */}
                <div className="absolute top-1/50 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black opacity-20 z-10 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold sm:block hidden">
                    Properties
                </div>
                <h2 className="text-2xl font-semibold mb-8 text-center">Featured Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {properties.map((property, index) => (
                        <div
                            key={index}
                            className="bg-white/20 bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <img src={property.image} alt={property.name} className="w-full h-56 object-cover rounded-lg" />
                            <h3 className="text-xl font-semibold mt-4 text-black">{property.name}</h3>
                            <p className="text-gray-200">{property.location}</p>
                            <p className="text-blue-600 mt-2">{property.price}</p>
                            <div className="mt-4 flex justify-between">
                                {/* View Details Button */}
                                <a href={property.link}>
                                    <button className="outline-blue-600 text-black px-2 py-2 rounded-full hover:bg-blue-500 bg-opacity-100 backdrop-blur-md transition duration-300 border-1 border-blue-600">
                                        View Details
                                    </button>
                                </a>
                                {/* Contact Agent Button */}
                                <a href="https://wa.me/27846806678" target="_blank" rel="noopener noreferrer">
                                    <button className="outline-green-600 text-black px-2 py-2 rounded-full hover:bg-green-500 bg-opacity-100 backdrop-blur-md transition duration-300 border-1 border-green-600">
                                        Contact Agent
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyListings;
