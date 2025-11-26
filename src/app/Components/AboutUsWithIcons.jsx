import Image from "next/image";
import React from "react";
import image1 from "../image/About-us-1-r4vqgmsttqwvarxcqa4biz6eswxps3qe8gcenel1xw (1).webp";

const AboutUsWithIcons = () => {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold  mb-6  transition-colors duration-300">
          About us
        </h1>
      </div>

      {/* Our Vision Section */}
      <div className="max-w-7xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-around gap-12 flex-row-reverse">
          {/* Image Side */}
          <div className="sm:w-1/2 mb-8 sm:mb-0">
            <div className="rounded-2xl overflow-hidden  transition-all duration-300 transform hover:-translate-y-2">
              <Image
                src={image1}
                alt="Our Vision"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="sm:w-1/2">
            <div className="rounded-2xl p-8  transition-all duration-300">
              <h1 className="text-3xl font-bold  mb-6  transition-colors duration-300">
                About us
              </h1>
              <div className="space-y-4">
                <p className="leading-relaxed  p-3 rounded-lg transition-all duration-300">
                  At Quality Patches, we believe patches are more than just
                  accessories–they’re symbols of your passions, achievements,
                  and unique style. That’s why we’ve been crafting top-quality
                  custom patches since 2004, helping individuals, teams, and
                  organizations worldwide tell their stories with pride.
                </p>
                <h1 className="text-3xl font-bold  mb-6  transition-colors duration-300">
                  The Power of In-House Production
                </h1>
                <p className="leading-relaxed  p-3 rounded-lg transition-all duration-300">
                  We take great pride in having our very own production house in
                  USA and Pakistan. This allows us to maintain complete control
                  over the manufacturing process, ensuring that every patch that
                  leaves our facility meets our high standards of quality. By
                  overseeing every step, we can minimize delays and streamline
                  operations, resulting in faster delivery times for our
                  customers. Our in-house team of skilled professionals is
                  dedicated to transforming your ideas into wearable art with
                  meticulous care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsWithIcons;
