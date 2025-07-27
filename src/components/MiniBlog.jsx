// MiniBlog.js
import React from 'react';

const posts = [
    { 
        title: 'How to Choose Your First Home', 
        image: '/Vibrant Metropolis Nocturne.png', 
        excerpt: 'A step-by-step guide to help you make an informed decision when purchasing your first home.' 
    },
    { 
        title: 'Real Estate Market Trends in 2025', 
        image: '/Twilight in the City.png', 
        excerpt: 'Explore the key trends shaping the real estate market in 2025 and what buyers and investors should know.' 
    },
    { 
        title: 'Top 10 Luxury Properties in Dubai', 
        image: '/Twilight Reflections_ Urban Serenity.png', 
        excerpt: 'Discover the most exclusive luxury properties in Dubai, from modern penthouses to sprawling villas.' 
    },
    { 
        title: 'How to Finance Your Property Purchase', 
        image: '/Fashionable Woman in City.png', 
        excerpt: 'Learn about different financing options for property purchases, including mortgages, loans, and down payments.' 
    },
];

const MiniBlog = () => {
    return (
        <section className="bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Latest from Our Blog</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {posts.map((post, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">{post.title}</h3>
                                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                                <a 
                                    href="#" 
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MiniBlog;
