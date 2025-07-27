import React, { useState } from 'react';

const SearchBar = () => {
    const [filters, setFilters] = useState({
        listingType: 'Sale', // Default is 'Buy'
        projectType: 'Residential',
        propertyType: '',
        locationId: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilters((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic here (for now, we're just logging the filters)
        console.log(filters);
    };

    return (
        <div className="container py-4 mx-3 px-4 w-full md:w-10/12 lg:w-full sm:rounded-lg md:rounded-full backdrop-blur-md bg-white/20 bg-opacity-50 shadow-lg">
            <div className="flex justify-center">
                <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
                    {/* Listing Type */}
                    <div className="w-full md:w-1/5">
                        <select
                            name="listingType"
                            id="listingType"
                            className="form-select w-full px-4 py-2 border border-gray-300 bg-white/70 rounded-full text-black focus:outline-none"
                            value={filters.listingType}
                            onChange={handleInputChange}
                        >
                            <option value="Sale">Buy</option>
                            <option value="Rent">Rent</option>
                        </select>
                    </div>

                    {/* Project Type */}
                    <div className="w-full md:w-1/5">
                        <select
                            name="projectType"
                            id="projectType"
                            className="form-select w-full px-4 py-2 border border-gray-300 bg-white/70 rounded-full text-black focus:outline-none"
                            value={filters.projectType}
                            onChange={handleInputChange}
                        >
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>
                        </select>
                    </div>

                    {/* Property Type */}
                    <div className="w-full md:w-1/5">
                        <select
                            name="propertyType"
                            id="propertyType"
                            className="form-select w-full px-4 py-2 border border-gray-300 bg-white/70 rounded-full text-black focus:outline-none"
                            value={filters.propertyType}
                            onChange={handleInputChange}
                        >
                            <option value="">All Property Type</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Duplex">Duplex</option>
                            <option value="Land">Land</option>
                            <option value="Office">Office</option>
                            <option value="Mansion">Mansion</option>
                            <option value="Penthouse">Penthouse</option>
                            <option value="Plot">Plot</option>
                            <option value="SkyMansion">SkyMansion</option>
                            <option value="SkyVilla">SkyVilla</option>
                            <option value="TownHouse">TownHouse</option>
                            <option value="Villa">Villa</option>
                            <option value="Suit">Suit</option>
                        </select>
                    </div>

                    {/* Location */}
                    <div className="w-full md:w-1/5">
                        <select
                            name="locationId"
                            id="locationId"
                            className="form-select w-full px-4 py-2 border border-gray-300 bg-white/70 rounded-full text-black focus:outline-none"
                            value={filters.locationId}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Location</option>
                            <option value="62">Akoya Oxygen</option>
                            <option value="6">Al Furjan</option>
                            <option value="26">Al Jaddaf</option>
                            <option value="28">Al Jazeera</option>
                            <option value="21">Al Marjan Island</option>
                            <option value="20">Al Raha Beach</option>
                            <option value="18">Al Reem Island</option>
                            <option value="82">Al Satwa</option>
                            {/* Add other locations here */}
                        </select>
                    </div>

                    {/* Submit Button */}
                    <div className="w-full md:w-1/5">
                        <button type="submit" className="bg-blue-600 border border-blue-600 text-black px-8 py-3 rounded-full hover:bg-blue-500 transition duration-300 w-full backdrop-blur-md bg-white/30 bg-opacity-50">
                            Search <i className="icon-MagnifyingGlass fw-6 ml-2"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;
