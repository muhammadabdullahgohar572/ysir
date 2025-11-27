"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import patches from "../../image/Embroidery-green-patch-768x768.webp"

import company from "../../image/Resources-Main-768x307.webp";
const Resources=()=>{
    

  
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
    return(
        <>
              <div className="bg-black text-white py-8 px-6">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-around">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8 md:mb-0"
          >
            <h1 className="text-2xl md:text-4xl font-bold mb-3">Emblem Resource Centre</h1>
            <p className="text-gray-300 max-w-lg text-sm">
              <br />
             Experiment with endless possibilities.<br/> Our in-depth guides on threads,<br/>heat-sealing, and design provide the <br/>tools you need to realize your vision.
            </p>
          </motion.div>

          {/* ========  SIDE IMAGE ========= */}

          <div>
            <Image
            src={company}
            alt="Resources"
            className="w-full rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </div>





   








     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

      {/* 1 — Embroidered */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[150px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
          <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Embroidered</h1>
          <p className="text-[10px] opacity-60 whitespace-pre-line mt-1">
            Standard thread chart  
            Metallic aur neon thread colors  
            Sequins spangles options  
            Twill fabric colors  
            Glow in dark thread available  
            Iron-on instructions included
          </p>
        </div>
      </motion.div>

      {/* 2 — Chenille */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
         <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Chenille</h1>
          <p className="text-[10px] opacity-60 whitespace-pre-line mt-1">
            Standard thread chart  
            Felt fabric colors  
            Iron-on instructions included
          </p>
        </div>
      </motion.div>

      {/* 3 — PVC */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
          <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">PVC</h1>
          <p className="text-[10px] opacity-60 mt-1">Iron-on instructions available</p>
        </div>
      </motion.div>

      {/* 4 — Silicone */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
         <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Silicone</h1>
          <p className="text-[10px] opacity-60 mt-1">Soft flexible silicone patches</p>
        </div>
      </motion.div>

      {/* 5 — Original Leather */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
       <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Original Leather</h1>
          <p className="text-[10px] opacity-60 mt-1">Premium genuine leather texture</p>
        </div>
      </motion.div>

      {/* 6 — Faux Leather */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
          <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Faux Leather</h1>
          <p className="text-[10px] opacity-60 mt-1">High-quality artificial leather</p>
        </div>
      </motion.div>

      {/* 7 — Sublimated */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
         <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Sublimated</h1>
          <p className="text-[10px] opacity-60 mt-1">Full-color printed sublimation</p>
        </div>
      </motion.div>

      {/* 8 — Woven */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
          <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Woven</h1>
          <p className="text-[10px] opacity-60 mt-1">Fine detailed woven finish</p>
        </div>
      </motion.div>

      {/* 9 — Metflex */}
      <motion.div
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
                   hover:shadow-xl hover:border-indigo-500 duration-200
                   flex gap-4 items-start min-h-[180px]"
      >
        <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
         <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
        </div>

        <div className="duration-200 hover:text-indigo-600">
          <h1 className="text-xl font-semibold">Metflex</h1>
          <p className="text-[10px] opacity-60 mt-1">Metallic reflective patch</p>
        </div>
      </motion.div>


 {/* 10 — socks */}
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ type: "spring", stiffness: 180, damping: 14 }}
  className="rounded-2xl shadow-md p-5 bg-white cursor-pointer border 
             hover:shadow-xl hover:border-indigo-500 duration-200
             flex flex-col-2 items-center justify-center text-center min-h-[200px]
             sm:col-start-1 sm:col-end-3 lg:col-start-2 lg:col-end-3"
>
  <div className="relative w-32 h-32 rounded-xl overflow-hidden shrink-0">
    <Image src={patches}
          alt="patches"
           className="w-full h-full object-cover" />
  </div>

  <div className="duration-200 hover:text-indigo-600">
    <h1 className="text-xl font-semibold">Socks</h1>
    <p className="text-[10px] opacity-60 mt-1">Custom socks styles & colors</p>
  </div>
</motion.div>
    </div>





  
        </>
    )
}

export default Resources
