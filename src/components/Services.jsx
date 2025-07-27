import React from 'react';

const services = [
    { title: 'Real Estate Consultation', description: 'Expert advice on buying and selling property. Our experienced consultants offer personalized guidance, helping you make informed decisions about your investments.', image: 'Woman in Office Setting.png' },
    { title: 'Property Management', description: 'Comprehensive management services for your property. We handle everything from tenant relations to maintenance, ensuring your property is well-kept and your tenants are happy.', image: 'Key Exchange Close-Up.png' },
    { title: 'Mortgage Assistance', description: 'Helping you navigate the mortgage process with ease. We guide you through every step, from finding the best rates to understanding the terms.', image: 'Cheerful Woman in Modern Office.png' },
];

const Services = () => {
    return (
        <section className="bg-white py-12">
            <div className="container mx-auto px-4 relative">
                {/* Background Text */}
                <div className="absolute top-1/280 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black opacity-20 z-10 text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold sm:block hidden">
                    Services
                </div>
                <h2 className="text-2xl font-semibold mb-8 text-center relative z-10">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className={`flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                            {/* Text Column */}
                            <div className="flex-1 p-2 md:p-6 lg:p-6 text-center md:text-left">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>

                            {/* Image Column */}
                            <div className="flex-1">
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    className="w-full h-auto object-cover rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
