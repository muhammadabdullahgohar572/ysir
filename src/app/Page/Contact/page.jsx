"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle, AtSign } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import imagelogo from "../../image/Contact-us-Image.webp";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Something went wrong!");
        return;
      }

      toast.success("Message Sent Successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Server error, please try again later.");
    }
  };

  return (
    <>
      <div className="w-full">
        {/* ======================= TOP BLACK HERO ======================= */}
        <div className="bg-black text-white py-8 px-6">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-around">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="mb-8 md:mb-0"
            >
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Contact</h1>
              <p className="text-gray-300 max-w-lg text-sm">
                We are here to serve your emblem needs. <br /> Feel free to get
                in touch with us using
                <br /> these options.
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

        {/* ======================= GET IN TOUCH SECTION ======================= */}
        <div className="py-12 md:py-16 px-6">
          <motion.div
            className="text-center mb-10 md:mb-12 cursor-pointer group"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold inline-flex items-center gap-2"
              whileHover={{
                y: -5,
                color: "#3b82f6",
                transition: {
                  type: "spring",
                  stiffness: 400,
                },
              }}
            >
              Get in touch
            </motion.h2>

            {/* Subtle underline */}
            <motion.div
              className="h-0.5 bg-blue-500 mt-2 mx-auto max-w-xs"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {/* Card 1 */}
            <motion.div
              className="border rounded-2xl shadow-lg p-6 md:p-8 text-center bg-white cursor-pointer group"
              variants={zoomIn}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <MapPin
                  size={35}
                  className="mx-auto mb-3 text-black group-hover:text-blue-600 transition-colors"
                />
              </motion.div>
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-blue-600 transition-colors">
                Office Location
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                438 Amapola Ave, St# 235 <br />
                Torrance, CA 90501
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="border rounded-2xl shadow-lg p-6 md:p-8 text-center bg-white cursor-pointer group"
              variants={zoomIn}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Mail
                  size={35}
                  className="mx-auto mb-3 text-black group-hover:text-green-600 transition-colors"
                />
              </motion.div>
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-green-600 transition-colors">
                Email Us
              </h3>
              <p className="text-gray-600 text-sm">sales@qualitypatches.com</p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="border rounded-2xl shadow-lg p-6 md:p-8 text-center bg-white cursor-pointer group"
              variants={zoomIn}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Phone
                  size={35}
                  className="mx-auto mb-3 text-black group-hover:text-red-600 transition-colors"
                />
              </motion.div>
              <h3 className="font-bold text-lg md:text-xl mb-2 group-hover:text-red-600 transition-colors">
                Call Us
              </h3>
              <p className="text-gray-600 text-sm">(310) 896-8564</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="w-full py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Left Image with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              type: "spring",
              stiffness: 80,
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={imagelogo}
              alt="Contact"
              className="w-full rounded-2xl shadow-xl"
            />
          </motion.div>

          {/* Right: Form with staggered animations */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                color: "#3b82f6",
                transition: { duration: 0.2 },
              }}
            >
              Leave A Message
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-6 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              We welcome you to contact us for more information about any of our
              products or services.
            </motion.p>

            <motion.form
              className="space-y-4"
              onSubmit={handleSubmit}
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.8,
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {/* Name Input */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                  whileFocus={{
                    scale: 1.02,
                    y: -2,
                    borderColor: "#3b82f6",
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileHover={{
                    y: [0, -2, 0],
                    scale: [1, 1.02, 1],
                    borderColor: "#3b82f6",
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                  whileFocus={{
                    scale: 1.02,
                    y: -2,
                    borderColor: "#3b82f6",
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileHover={{
                    y: [0, -3, -1],
                    scale: [1, 1.03, 1.01],
                    borderColor: "#3b82f6",
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  }}
                  required
                />
              </motion.div>

              {/* Phone Input */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white text-sm"
                  whileFocus={{
                    scale: 1.02,
                    y: -2,
                    borderColor: "#3b82f6",
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileHover={{
                    y: [0, -4, 0],
                    scale: [1, 1.04, 1.01],
                    borderColor: "#3b82f6",
                    transition: {
                      duration: 0.7,
                      times: [0, 0.3, 1],
                    },
                  }}
                />
              </motion.div>

              {/* Message Textarea */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white resize-none text-sm"
                  whileFocus={{
                    scale: 1.02,
                    y: -2,
                    borderColor: "#3b82f6",
                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)",
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  whileHover={{
                    y: [0, -2, -1],
                    scale: [1, 1.02, 1.01],
                    borderColor: "#3b82f6",
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.button
                  type="submit"
                  className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg"
                  whileHover={{
                    scale: [1, 1.05, 1.03],
                    y: [0, -5, -2],
                    backgroundColor: "#111",
                    boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.3)",
                    transition: {
                      duration: 0.6,
                      times: [0, 0.4, 1],
                    },
                  }}
                  whileTap={{
                    scale: 0.95,
                    y: 0,
                  }}
                >
                  Submit Message
                </motion.button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
