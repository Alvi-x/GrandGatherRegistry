import React, { useEffect, useState } from 'react';

const Stats = () => {
  // Function to animate the counter
  const animateCounter = (target, delay) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = target;
      const duration = 2000; // 2 seconds for animation
      const increment = end / (duration / 100);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setCount(end);
        } else {
          setCount(Math.floor(start));
        }
      }, 100);

      return () => clearInterval(interval); // Clean up the interval
    }, [target]);

    return <h4 className="text-4xl font-semibold text-white">{count}</h4>; // Make the counter text white
  };

  return (
    <section className="bg-gray-800 rounded-lg py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat Cards */}
          {[
            { target: 4000, label: 'Properties' },
            { target: 100, label: 'Real Estate Companies' },
            { target: 3000, label: 'Clients' },
            { target: 10, label: 'Expert Team' },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-8 bg-white/30 backdrop-blur-md rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            >
              {/* Animated Counter */}
              {animateCounter(stat.target)}

              {/* Label */}
              <p className="text-lg text-white mt-4">{stat.label}</p> {/* Make label text white */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
