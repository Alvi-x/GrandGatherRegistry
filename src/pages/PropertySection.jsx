import React from 'react';

const PropertySection = () => {
  return (
    <section className="section-property-map py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8 mt-5">

          {/* Sidebar with Filters */}
          <div className="lg:col-span-4 col-span-1">
            <div className="tf-sidebar sticky top-20" id="filterbar">
              <form className="form-advanced-search mb-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-semibold">Filter</h4>
                  <span
                    className="text-blue-500 text-sm cursor-pointer"
                    id="clearallfilter"
                  >
                    Clear all
                  </span>
                </div>
                <hr />

                {/* Project Type */}
                <div className="mb-6">
                  <h5 className="text-blue-600 text-sm font-medium mb-2">Project Type</h5>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="projectType"
                        value="Residential"
                      />
                      <span className="ml-2">Residential</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="projectType"
                        value="Commercial"
                      />
                      <span className="ml-2">Commercial</span>
                    </label>
                  </div>
                </div>

                <hr />

                {/* Listing Type */}
                <div className="mb-6">
                  <h5 className="text-blue-600 text-sm font-medium mb-2">Listing Type</h5>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="listingType"
                        value="Sale"
                      />
                      <span className="ml-2">For Sale</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="listingType"
                        value="Rent"
                      />
                      <span className="ml-2">For Rent</span>
                    </label>
                  </div>
                </div>

                <hr />

                {/* Property Type */}
                <div className="mb-6">
                  <h5 className="text-blue-600 text-sm font-medium mb-2">Property Type</h5>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="propertyType"
                        value="Apartment"
                      />
                      <span className="ml-2">Apartment</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-indigo-600"
                        name="propertyType"
                        value="Duplex"
                      />
                      <span className="ml-2">Duplex</span>
                    </label>
                    {/* Add more property types here */}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Property Listings */}
          <div className="lg:col-span-8 col-span-1">
            <div className="content-right">
              <div className="box-title mb-6">
                <h2 className="text-3xl text-end font-semibold text-gray-900">Ready Projects | Buy Properties in Dubai</h2>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                {/* Property 1 */}
                <div className="fl-item rounded-lg shadow-lg overflow-hidden">
                  <div className="image-wrap">
                    <a href="https://www.homeloungeuae.com/property/the-solo-in-east-village">
                      <img
                        className="w-full h-64 object-cover"
                        src="https://ik.imagekit.io/homeloungeuae//property/gallery/1_JWxchsfRk.png"
                        alt="The Solo in East Village"
                      />
                    </a>
                  </div>
                  <div className="content p-4">
                    <h5 className="text-lg font-medium">
                      <a href="https://www.homeloungeuae.com/property/the-solo-in-east-village" className="hover:text-blue-600">
                        The Solo in East Village
                      </a>
                    </h5>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <i className="icon-location text-gray-500"></i> Aljada
                    </p>
                    <p className="text-sm text-gray-600">
                      <b>Developer:</b> Arada Property Developer
                    </p>
                    <p className="text-sm text-red-600">
                      <b>Handover:</b> 2020
                    </p>
                    <div className="flex gap-4 mt-4">
                      <a
                        href="https://www.homeloungeuae.com/property/the-solo-in-east-village"
                        className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                      >
                        Details
                      </a>
                      <a
                        href="https://wa.me/971507851492?text=Hi%20There,%20I'm%20interested.%20Kindly%20send%20me%20more%20information.%20Thank%20you!%20https://www.homeloungeuae.com/property/the-solo-in-east-village"
                        target="_blank"
                        className="inline-block px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>

                {/* Property 2 */}
                <div className="fl-item rounded-lg shadow-lg overflow-hidden">
                  <div className="image-wrap">
                    <a href="https://www.homeloungeuae.com/property/the-source-2">
                      <img
                        className="w-full h-64 object-cover"
                        src="https://ik.imagekit.io/homeloungeuae//property/gallery/The_Source_2-1_yM8x0_pAXy.webp"
                        alt="The Source 2"
                      />
                    </a>
                  </div>
                  <div className="content p-4">
                    <h5 className="text-lg font-medium">
                      <a href="https://www.homeloungeuae.com/property/the-source-2" className="hover:text-blue-600">
                        The Source 2
                      </a>
                    </h5>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <i className="icon-location text-gray-500"></i> Saadiyat Island
                    </p>
                    <p className="text-sm text-gray-600">
                      <b>Developer:</b> Aldar Properties
                    </p>
                    <p className="text-sm text-red-600">
                      <b>Handover:</b> Update Soon
                    </p>
                    <div className="flex gap-4 mt-4">
                      <a
                        href="https://www.homeloungeuae.com/property/the-source-2"
                        className="inline-block px-4 py-2 text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                      >
                        Details
                      </a>
                      <a
                        href="https://wa.me/971507851492?text=Hi%20There,%20I'm%20interested.%20Kindly%20send%20me%20more%20information.%20Thank%20you!%20https://www.homeloungeuae.com/property/the-source-2"
                        target="_blank"
                        className="inline-block px-4 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <button className="tf-btn style-border px-6 py-3 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700">
                  Load More
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertySection;
