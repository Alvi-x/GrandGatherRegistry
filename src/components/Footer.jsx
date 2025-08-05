// components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom"; // if you're using React Router
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faXTwitter, // formerly Twitter
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 px-4 text-sm text-gray-700">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Grand Gather Info */}
        <div>
          <h3 className="font-bold mb-2">Grand Gather</h3>
          <p className="mb-2">
            Making special moments unforgettable through seamless event planning and gifting.
          </p>
          <p>Email: support@grandgather.co.za</p>
          <p>Phone: +27 123 4567</p>
        </div>

        {/* Partners */}
        <div>
          <h3 className="font-bold mb-2">Partners</h3>
          <p>
            <a href="https://www.carrolboyes.com" target="_blank" rel="noopener noreferrer">Carrol Boyes</a>
          </p>
          <p>
            <a href="https://www.mrphome.com" target="_blank" rel="noopener noreferrer">mrphome</a>
          </p>
          <p>
            <a href="https://www.yuppiechef.com" target="_blank" rel="noopener noreferrer">Yuppiechef</a>
          </p>
        </div>

        {/* For Vendors */}
        <div>
          <h3 className="font-bold mb-2">For Vendors</h3>
          <p><Link to="/VendorRegister">Join as a Vendor</Link></p>
          <p><Link to="/signup">Vendor Login</Link></p>
          <p><Link to="/">Vendor Support</Link></p>
        </div>
      </div>

      {/* Bottom Social & Copyright */}
      <div className="mt-8 text-center border-t pt-4">
        <p>© 2025 Grand Gather. All rights reserved</p>
        <div className="flex justify-center text-black gap-4 mt-2">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
