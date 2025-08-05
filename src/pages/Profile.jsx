import React, { useState } from "react";
import { useUser } from "../UserContext"; // Adjust path as needed

export default function Profile() {
  const [role, setRole] = useState("host");
  const [portfolioFiles, setPortfolioFiles] = useState([]);
  const { profileImage, setProfileImage } = useUser(); // Context state

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    paymentMethod: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    bio: "",
    location: "",
    services: "",
    portfolioURL: ""
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // Update global context
    }
  };

  const handlePortfolioUpload = (e) => {
    const files = Array.from(e.target.files);
    setPortfolioFiles(files);
  };

  const handleSaveProfile = () => {
    console.log("Saving profile data:");
    console.log("Form Data:", formData);
    console.log("Role:", role);
    console.log("Portfolio Files:", portfolioFiles);
    alert("Profile saved! (Check console for output)");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 font-sans">
      <h1 className="text-3xl font-bold text-gray-800 my-4">Profile Settings</h1>
      <p className="text-gray-600 mb-8">Manage your account settings and preferences</p>

      {/* Profile Card */}
      <div className="flex items-center gap-4 mb-6">
        <div className="relative group">
          <img
            src={profileImage || "/Profile.png"}
            alt="User"
            className="w-16 h-16 rounded-full border object-cover"
          />
          <input
            type="file"
            accept="image/*"
            id="profileImageUpload"
            onChange={handleProfileImageChange}
            className="hidden"
          />
          <label
            htmlFor="profileImageUpload"
            className="absolute inset-0 rounded-full bg-black/40 text-white flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition cursor-pointer"
          >
            Change
          </label>
        </div>
        <div>
          <h2 className="font-semibold text-lg">{formData.fullName || "Guest"}</h2>
          <p className="text-sm text-gray-500 capitalize">{role}</p>
        </div>
      </div>

      {/* Account Details */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="input"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="input"
            value={formData.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
        </div>

        {/* Role Selector */}
        <div>
          <label className="block font-medium mb-2">Select Role</label>
          <div className="flex space-x-2">
            {["host", "vendor", "both"].map((type) => (
              <button
                key={type}
                className={`px-4 py-2 rounded-full border ${role === type ? "bg-black text-white" : "bg-gray-100 text-black"}`}
                onClick={() => setRole(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Host Section */}
      {(role === "host" || role === "both") && (
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Host Preferences</h2>
          <div className="flex items-center justify-between">
            <span>Share Profile with Friends</span>
            <button className="btn">Share</button>
          </div>
          <div className="flex items-center justify-between">
            <span>Unlock Premium</span>
            <button className="btn-outline">Upgrade</button>
          </div>
          <div className="flex items-center justify-between">
            <span>Show Gift Shops (Woolworths, Mr Price)</span>
            <input type="checkbox" />
          </div>
          <div className="flex items-center justify-between">
            <span>Enable Notifications</span>
            <input type="checkbox" />
          </div>
          <div>
            <h3 className="font-medium">Recommended Vendors</h3>
            <p className="text-sm text-gray-600">Based on your interests</p>
          </div>
        </div>
      )}

      {/* Vendor Section */}
      {(role === "vendor" || role === "both") && (
        <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h2 className="text-xl font-semibold">Vendor Details</h2>
          <textarea
            placeholder="Bio / Overview"
            className="textarea"
            value={formData.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
          />
          <input
            type="text"
            placeholder="Business Location"
            className="input"
            value={formData.location}
            onChange={(e) => handleChange("location", e.target.value)}
          />
          <div>
            <label className="block font-medium mb-1">Services Offered</label>
            <input
              placeholder="Add service (e.g. Wedding Planning)"
              className="input"
              value={formData.services}
              onChange={(e) => handleChange("services", e.target.value)}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Portfolio URL</label>
            <input
              type="url"
              placeholder="https://yourportfolio.com"
              className="input"
              value={formData.portfolioURL}
              onChange={(e) => handleChange("portfolioURL", e.target.value)}
            />
          </div>
          <div className="border rounded p-4 bg-gray-50">
            <h4 className="font-semibold mb-2">Upload Event Photos / Reels / Testimonials</h4>
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handlePortfolioUpload}
              className="block"
            />
            {portfolioFiles.length > 0 && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                {portfolioFiles.map((file, index) => {
                  const url = URL.createObjectURL(file);
                  const isImage = file.type.startsWith("image/");
                  const isVideo = file.type.startsWith("video/");

                  return (
                    <div key={index} className="relative border rounded overflow-hidden">
                      {isImage && <img src={url} alt="preview" className="w-full h-32 object-cover" />}
                      {isVideo && (
                        <video controls className="w-full h-32 object-cover">
                          <source src={url} type={file.type} />
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          <div className="border rounded p-4 bg-gray-50">
            <h4 className="font-semibold mb-2">Ratings & Reviews</h4>
            <p className="text-sm text-gray-600">⭐ 4.5 / 5 (27 reviews)</p>
            <button className="text-sm text-blue-600 underline">View All</button>
          </div>
        </div>
      )}

      {/* Payment Info */}
      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold">Payment Information</h3>
        <input
          type="text"
          placeholder="Payment Method"
          className="input"
          value={formData.paymentMethod}
          onChange={(e) => handleChange("paymentMethod", e.target.value)}
        />
        <input
          type="text"
          placeholder="Card Number"
          className="input"
          value={formData.cardNumber}
          onChange={(e) => handleChange("cardNumber", e.target.value)}
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Expiry Date"
            className="input"
            value={formData.expiry}
            onChange={(e) => handleChange("expiry", e.target.value)}
          />
          <input
            type="text"
            placeholder="CVV"
            className="input"
            value={formData.cvv}
            onChange={(e) => handleChange("cvv", e.target.value)}
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="text-right">
        <button className="btn mt-4" onClick={handleSaveProfile}>
          Save Profile
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
        }
        .textarea {
          width: 100%;
          min-height: 100px;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 0.5rem;
        }
        .btn {
          padding: 0.5rem 1rem;
          background-color: black;
          color: white;
          border-radius: 0.5rem;
        }
        .btn-outline {
          padding: 0.5rem 1rem;
          border: 1px solid black;
          color: black;
          background: white;
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  );
}
