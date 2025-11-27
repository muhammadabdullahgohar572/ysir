"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import slider from "../image/Embroidery-be-fearless.webp";
import patches from "../image/mac-tools-leather-patch.webp"
export const ReviewsSection = () => {
  const images = [slider, slider, slider, slider, slider, slider];
  const sliderRef = useRef(null);
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const goLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const goRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };



  const [activeFilter, setActiveFilter] = useState("latest");

  const reviews = [
    {
      id: 1,
      title: "Quality Patches are the Best in their...",
      content: "Quality Patches are the Best in their Business.",
      author: "Lesli Lewis",
      date: "September 4",
      rating: 5,
      category: "quality"
    },
    {
      id: 2,
      title: "PATCHES",
      content: "As always Quality Patches gives ABOVE Quality Patches. They are the BEST in the...",
      author: "Lesli Lewis",
      date: "August 29",
      rating: 5,
      category: "service"
    },
    {
      id: 3,
      title: "Quality Patches",
      content: "Quality Patches are of the Highest Quality. They are the Best in their Business.",
      author: "Lesli Lewis",
      date: "July 7",
      rating: 5,
      category: "quality"
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (activeFilter === "latest") return true;
    return review.category === activeFilter;
  });

  return (
    <>
    <div className="py-10 px-4">

      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Inspiration Gallery
        </h1>
        <p className="text-gray-600 text-lg">
          Unleash your creativity with our custom patches
        </p>
      </div>

      {/* Slider */}
      <div className="relative w-full max-w-6xl mx-auto flex items-center">

        {/* Left Arrow */}
        <button
          onClick={goLeft}
          className="absolute left-0 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
        >
          &#8592;
        </button>

        {/* Images Row */}
        <div
          ref={sliderRef}
          className="
            flex 
            gap-6 
            overflow-x-scroll 
            scroll-smooth 
            scrollbar-hide
          "
          style={{ overflowY: "hidden" }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="
                w-72 
                h-72 
                flex-shrink-0 
                rounded-xl 
                overflow-hidden 
                cursor-pointer 
                bg-gray-200
              "
              onClick={() => setFullScreenImage(img)}
            >
              <Image
                src={img}
                alt="Gallery Image"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goRight}
          className="absolute right-0 z-30 bg-black/50 text-white p-3 rounded-full hover:bg-black/70"
        >
          &#8594;
        </button>

      </div>

      {/* Fullscreen viewer */}
      {fullScreenImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setFullScreenImage(null)}
        >
          <Image
            src={fullScreenImage}
            alt="Full"
            width={900}
            height={900}
            className="object-contain"
          />
        </div>
      )}

    </div>







   <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section - Now in a row with Trustpilot */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Excellent
            </h1>
            <p className="text-lg text-gray-600">
              Based on 1,044 reviews
            </p>
          </div>

          {/* Trustpilot Badge */}
          <div className="text-center">
            <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
              Trustpilot
            </span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          <button
            onClick={() => setActiveFilter("latest")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "latest"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Latest Reviews
          </button>
          <button
            onClick={() => setActiveFilter("quality")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "quality"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Quality
          </button>
          <button
            onClick={() => setActiveFilter("service")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === "service"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Service
          </button>
        </div>

        {/* Reviews in Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review, index) => (
            <div
              key={review.id}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col"
            >
              {/* Review Header */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {review.title}
                </h3>
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <p className="text-gray-700 text-sm mb-4 leading-relaxed flex-grow">
                {review.content}
              </p>

              {/* Review Footer */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex flex-col space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-gray-900 text-sm">{review.author}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-500 text-sm">{review.date}</span>
                  </div>
                  {index === 0 && (
                    <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full self-start">
                      Showing our latest reviews
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>

</>
  );
};

export default ReviewsSection;
