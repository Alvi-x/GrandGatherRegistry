// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-4 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold mb-2">Grand Gather</h3>
          <p className="mb-2">Making special moments unforgettable through seamless event planning and gifting.</p>
          <p>Email: support@grandgather.co.za</p>
          <p>Phone: +27 123 4567</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">Partners</h3>
          <p>Carrol Boyes</p>
          <p>mrphome</p>
          <p>Yuppiechef</p>
        </div>

        <div>
          <h3 className="font-bold mb-2">For Vendors</h3>
          <p>Join as a Vendor</p>
          <p>Vendor Login</p>
          <p>Vendor Support</p>
        </div>
      </div>

      <div className="mt-8 text-center border-t pt-4">
        <p>© 2025 Grand Gather. All rights reserved</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-x"></i></a>
        </div>
      </div>
    </footer>
  );
}