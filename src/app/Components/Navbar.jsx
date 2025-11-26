"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Menu, X, Search, User, LogOut, ChevronDown } from "lucide-react";
import { Data } from "../context/contextfile";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const router = useRouter();

  const { data, setdata } = useContext(Data);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Products",
      href: "/products",
      dropdown: [
        "Custom Patches",
        "Embroidery Patches",
        "Woven Patches",
        "Leather Patches",
        "3D Puff Patches",
      ],
    },
    {
      name: "Resources",
      href: "/resources",
    },
    {
      name: "Our Company",
      href: "/Page/Campany",
    },
    { name: "Blog", href: "/Page/Blogs" },
    { name: "Contact", href: "/Page/Contact" },
    // Order और OrderDetails केवल login होने पर दिखेंगे
    ...(data
      ? [
          { name: "Order", href: "/Page/Order" },
          { name: "OrderDetails", href: "/Page/OrderDetails" },
        ]
      : []),
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/Logout", { method: "POST" });
      await res.json();
      setdata(null);
      setOpen(false); // Mobile menu close करें
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide ">
          QUALITY PATCHES<span className="text-orange-500">.</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center ">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-1  hover:text-gray-600  px-2 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      activeDropdown === item.name ? "rotate-180" : ""
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="0 hover:text-gray-600 px-2 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute left-0 mt-1 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg py-2 z-50">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors duration-200"
                    >
                      {dropdownItem}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Section - Search & Auth */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Auth Buttons */}
          <div className="flex items-center gap-3">
            {data ? (
              // User logged in होने पर
              <div className="flex items-center gap-3">
                <span className="text-sm ml-[5px] text-gray-700">
                  Welcome 🖐, {data.username || "User"}
                </span>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              // User logged out होने पर
              <Link
                href="/Page/Login"
                className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors duration-200"
              >
                <User size={16} />
                Login / Signup
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-1" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-800 px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.dropdown ? (
                <div className="space-y-2">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full text-gray-300 hover:text-white px-2 py-2 text-base font-medium transition-colors duration-200"
                  >
                    {item.name}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="ml-4 space-y-1 border-l border-gray-700 pl-3">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem}
                          href="#"
                          className="block px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200"
                          onClick={() => setOpen(false)}
                        >
                          {dropdownItem}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block text-gray-300 hover:text-white px-2 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Auth Buttons */}
          <div className="pt-3 border-t border-gray-800 space-y-2">
            {data ? (
              // Mobile - User logged in होने पर
              <div className="space-y-2">
                <div className="text-center text-gray-300 text-sm py-2">
                  Welcome, {data.username || "User"}
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200 w-full"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              // Mobile - User logged out होने पर
              <Link
                href="/Page/Login"
                className="flex items-center justify-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                <User size={16} />
                Login / Signup
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Overlay for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40 lg:block hidden"
          onClick={() => setActiveDropdown(null)}
        ></div>
      )}
    </nav>
  );
}