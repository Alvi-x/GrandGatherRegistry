// components/Reviews.jsx
import React from "react";

const reviews = Array(4).fill({
  name: "Baby M.",
  comment: "Event planning has never been this easy!",
  rating: 4.5,
});

export default function Reviews() {
  return (
    <div className="text-center max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-semibold mb-6">Reviews</h2>
      <div className="grid md:grid-cols-4 gap-4">
        {reviews.map((review, idx) => (
          <div key={idx} className="border rounded-xl p-4">
            <div className="text-lg font-bold">⭐ {review.rating}</div>
            <p className="italic text-sm my-2">{review.comment}</p>
            <div className="text-sm font-semibold">- {review.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}