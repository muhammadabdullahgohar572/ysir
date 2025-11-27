"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import googleLogo from "../image/Toyota-logo-icon-on-transparent-background-PNG.png";
// Images manually import
import slider1 from "../image/custom-path-group-homepage.webp";
import slider2 from "../image/custom-pins-home.webp";
import slider3 from "../image/Socks-homepage.webp";

export const Hero = () => {
  const logos = [
    { name: "Google", image: googleLogo },
    // { name: "Toyota", image: toyotaLogo },
    // { name: "DLL", image: dllLogo },
    // { name: "SEON", image: seonLogo },
    // { name: "R&HA", image: rhaLogo },
    // { name: "ALLCORNHOLE", image: allcornholeLogo },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const sliderImages = [slider1, slider2, slider3];

  // Auto slide every 5 seconds for testing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000); // 5 seconds for testing

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  // Arrow navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  // Touch navigation for mobile
  const [touchStart, setTouchStart] = useState(0);
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
  };

  return (
    <>
      <div className="min-h-[400px] flex items-center justify-center p-4 bg-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Text */}
          <div className="space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl font-bold">
              Custom <br /> emblems - done <br /> right, done fast.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              We're your one-stop shop for turning ideas into reality, with
              personalized service and quality you'll love.
            </p>
            <button className="bg-black border-2 border-red-800 hover:text-red-800 hover:border-white rounded-2xl text-white font-semibold py-4 px-12 text-lg transition-transform duration-300 hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Right Slider */}
          <div
            ref={sliderRef}
            className="relative h-[400px] lg:h-[500px] w-full rounded-2xl overflow-hidden cursor-pointer group"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Slides */}
            {sliderImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 flex items-center justify-center p-4">
        <div className="text-black w-full max-w-5xl mx-auto">
          <ul className="list-disc pl-5 flex flex-wrap justify-center gap-x-20 gap-y-4 text-xl">
            <li>Low Minimums</li>
            <li>Great Prices</li>
            <li>Fast Turnaround</li>
            <li>Guaranteed Quality</li>
          </ul>
        </div>
      </div>


<>
  {/* First Section - 3 Main Logos */}
  <div className="w-full flex justify-center py-8 px-4 bg-gray-50">
    <div className="flex flex-wrap justify-center items-center w-full max-w-4xl gap-8 sm:gap-3 ">
      {[googleLogo,googleLogo,googleLogo].map((logo, index) => (
        <Image 
          key={index}
          src={logo} 
          alt={`Partner Logo ${index + 1}`} 
          className="w-28 h-14 sm:w-32 sm:h-16 md:w-36 md:h-18 lg:w-40 lg:h-20 object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
        />
      ))}
    </div>
  </div>

  {/* Second Section - 5 Supporting Logos */}
  <div className="w-full flex justify-center py-6 px-4">
    <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 md:gap-8 w-full max-w-5xl justify-items-center items-center">
      {[googleLogo,googleLogo,googleLogo,googleLogo,googleLogo].map((logo, index) => (
        <Image 
          key={index}
          src={logo} 
          alt={`Partner Logo ${index + 1}`} 
          className="w-20 h-10 xs:w-22 xs:h-11 sm:w-24 sm:h-12 md:w-26 md:h-13 lg:w-28 lg:h-14 object-contain filter grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
        />
      ))}
    </div>
  </div>
</>



    </>
  );
};
