"use client";
import { MapPin, Mail, Phone, MessageCircle, AtSign } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import image1 from "../../image/About-us-1-r4vqgmsttqwvarxcqa4biz6eswxps3qe8gcenel1xw (1).webp";
 const Company = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const zoomIn = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const values = [
    {
      icon: "⭐",
      title: "10 Years of Experience",
      description:
        "We have gained praise and recognition for supplying high-end custom products at competitive prices in the fashion industry.",
    },
    {
      icon: "🏆",
      title: "Awards Achievement",
      description:
        "We have a proven record of earning awards for manufacturing unique and visually appealing designs for 10 years.",
    },
    {
      icon: "⚡",
      title: "Efficient & High-Quality Work",
      description:
        "Our competent designers provide exceptional work in a fraction of the time, leaving a lasting impression.",
    },
    {
      icon: "👥",
      title: "Teamwork Driven by Passion",
      description:
        "Our dedicated team collaborates seamlessly to consistently deliver exceptional results, upholding the highest standards of quality and efficiency.",
    },
    {
      icon: "💬",
      title: "Top-Rated Client Reviews",
      description:
        "Our clients from around the world consistently praise our dedication to quality and thoughtful approach to custom work.",
    },
    {
      icon: "💰",
      title: "Money-Back Guarantee",
      description:
        "If you are not happy with the final product, rest assured, we have a money-back guarantee policy for your peace of mind.",
    },
  ];
  return (
    <>
      <div className="bg-black text-white py-8 px-6">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-around">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8 md:mb-0"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Our Company</h1>
            <p className="text-gray-300 max-w-lg text-sm">
              <br />
              Quality Patches is a trusted manufacturer and supplier of custom
              patches and products with years of experience in the industry. We
              offer a wide variety of options, including embroidered patches,
              chenille patches, and more, all crafted with expertise and
              passion. Let us help you create custom products that leave a
              lasting impression.
            </p>
          </motion.div>

          {/* ======== ICONS SIDE BY SIDE ========= */}
          <motion.div
            className="flex justify-center items-center gap-0 relative"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="bg-white p-4 rounded-full shadow-xl -mr-4 z-10"
              variants={zoomIn}
            >
              <MapPin size={35} className="text-orange-500" />
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-full shadow-xl -mr-4 z-20"
              variants={zoomIn}
            >
              <Mail size={35} className="text-yellow-500" />
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-full shadow-xl -mr-4 z-30 scale-[1.1]"
              variants={zoomIn}
            >
              <Phone size={40} className="text-blue-500" />
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-full shadow-xl -mr-4 z-20"
              variants={zoomIn}
            >
              <MessageCircle size={35} className="text-yellow-600" />
            </motion.div>

            <motion.div
              className="bg-white p-4 rounded-full shadow-xl z-10"
              variants={zoomIn}
            >
              <AtSign size={35} className="text-orange-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        {/* About QP Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="sm:flex sm:items-center sm:justify-around gap-12">
            {/* Image Side */}
            <div className="sm:w-1/2 mb-8 sm:mb-0">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src={image1}
                  alt="About Quality Patches"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="sm:w-1/2">
              <div className=" rounded-2xl p-8  hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">
                  About QP
                </h1>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed hover:text-gray-800 hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                    Quality Patches is a premier provider of custom patches,
                    dedicated to delivering exceptional products to our valued
                    customers worldwide. Our skilled artists and designers
                    expertly transform your ideas into reality, crafting
                    precision-quality custom patches that tell your unique
                    story.
                  </p>
                  <p className="text-gray-600 leading-relaxed hover:text-gray-800 hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                    We specialize in visually stunning custom embroidery patches
                    and custom chenille patches, perfect for your next event or
                    festival. Contact us today to create eye-catching designs
                    that will leave a lasting impression, all at competitive
                    prices.
                  </p>
                  <p className="text-gray-600 leading-relaxed hover:text-gray-800 hover:bg-blue-50 p-3 rounded-lg transition-all duration-300">
                    Our commitment to excellence has earned us numerous awards
                    as a top digitizing company, renowned for delivering
                    high-quality designs at wholesale prices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="max-w-7xl mx-auto">
          <div className="sm:flex sm:items-center sm:justify-around gap-12 flex-row-reverse">
            {/* Image Side */}
            <div className="sm:w-1/2 mb-8 sm:mb-0">
              <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <Image
                  src={image1}
                  alt="Our Vision"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Side */}
            <div className="sm:w-1/2">
              <div className="rounded-2xl p-8  hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300">
                <h1 className="text-3xl font-bold text-gray-900 mb-6 hover:text-green-600 transition-colors duration-300">
                  Our Vision
                </h1>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed hover:text-gray-800 hover:bg-green-50 p-3 rounded-lg transition-all duration-300">
                    At Quality Patches, we are all about you–our valued
                    customers. We understand your needs and preferences are
                    unique, and we take the time to work closely with you to
                    create a custom patch design that meets your specific
                    requirements.
                  </p>
                  <p className="text-gray-600 leading-relaxed hover:text-gray-800 hover:bg-green-50 p-3 rounded-lg transition-all duration-300">
                    Our philosophy is centered on open communication,
                    transparency, and flexibility, allowing us to stay connected
                    with you every step of the way. With every project, we pour
                    our heart and soul into creating something truly special.
                    When you choose Quality Patches, you can trust that you are
                    in good hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold  mb-4">Our Core Values</h1>
            <p className="text-base  max-w-2xl mx-auto leading-relaxed">
              As a top-quality custom patch supplier, we pride ourselves on
              providing custom products with love woven into every stitch at a
              reasonable price.
            </p>
            <div className="w-24 h-1 bg-gray-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700 hover:shadow-xl hover:border-gray-500 hover:transform hover:-translate-y-1 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="text-4xl mb-4 text-center group-hover:scale-105 transition-transform duration-300">
                  {value.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 text-center group-hover:text-gray-200 transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed text-center group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export  default Company