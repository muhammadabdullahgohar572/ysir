"use client";

import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaYoutube } from "react-icons/fa";
import { GoTriangleRight } from "react-icons/go";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo */}
        <div>
          <h2 className="text-xl font-bold mb-4">QUALITY PATCHES</h2>

          <div className="flex space-x-2 text-xl mt-6">
            <FaFacebook className="cursor-pointer hover:text-green-400" />
            <FaInstagram className="cursor-pointer hover:text-green-400" />
            <FaLinkedin className="cursor-pointer hover:text-green-400" />
            <FaPinterest className="cursor-pointer hover:text-green-400" />
            <FaTiktok className="cursor-pointer hover:text-green-400" />
            <FaYoutube className="cursor-pointer hover:text-green-400" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
              <GoTriangleRight size={10} />
              <span>Home</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
              <GoTriangleRight size={10} />
              <span>Resources</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
              <GoTriangleRight size={10} />
              <span>Blog</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
              <GoTriangleRight size={10} />
              <span>Contact</span>
            </li>
          </ul>
        </div>

        {/* Site Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Site Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
              <GoTriangleRight size={10} />
              <span>Privacy Policy</span>
            </li>
            <li className="flex items-center space-x-2 hover:text-green-400 cursor-pointer">
              <GoTriangleRight size={10} />
              <span>Terms & Conditions</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Tuned With Us</h3>
          <p className="text-gray-300 hover:text-green-400 cursor-pointer">438 Amapola Ave, St# 235</p>
          <p className="text-gray-300 hover:text-green-400 cursor-pointer">Torrance, CA 90501</p>
          <p className="mt-3 text-gray-300 hover:text-green-400 cursor-pointer">sales@qualitypatches.com</p>
          <p className="text-gray-300 hover:text-green-400 cursor-pointer">(310) 896-8564</p>
        </div>
      </div>

      <p className="text-center mt-10 text-gray-400 text-xs">
        © {new Date().getFullYear()} Quality Patches. All Rights Reserved.
      </p>
    </footer>
  );
}
