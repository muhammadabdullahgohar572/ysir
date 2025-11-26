"use client";

import { motion } from "framer-motion";

export default function CustomProducts() {
  const products = [
    {
      id: 1,
      title: "Embroidered Patches",
      subtitle: "Transform designs into textured masterpieces",
      description:
        "From basic embroidery to puff, sequin, and new floating patches, we offer the full line of embroidered patches. Decades of crafting experience woven into every stitch.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: [
        "Custom Shapes",
        "3D Puff Option",
        "Sequins Available",
        "Floating Designs",
      ],
    },
    {
      id: 2,
      title: "Chenille Patches",
      subtitle: "Classic varsity look with plush texture",
      description:
        "The soft, fuzzy threads create a plush effect that is perfect for capturing a classic varsity look or for adding a playful dimension to your designs.",
      image:
        "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=400&fit=crop",
      features: [
        "Soft Texture",
        "Varsity Style",
        "Fuzzy Finish",
        "Colorful Options",
      ],
    },
    {
      id: 3,
      title: "PVC Patches",
      subtitle: "Maximum detail and durability",
      description:
        "Maximize design detail and achieve a thicker, more substantial feel with custom PVC patches. Their resilient material ensures your artwork stands out with vibrant colors and lasting wear.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: [
        "High Detail",
        "Durable Material",
        "Vibrant Colors",
        "Weather Resistant",
      ],
    },
    {
      id: 4,
      title: "Silicone Patches",
      subtitle: "Soft, supple feel with easy application",
      description:
        "Experience the soft, supple feel of custom silicone patches. While thinner than PVC, they are ideal for floating transfer designs. Enjoy easy, front-side heat sealing for convenient application.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: ["Soft Feel", "Heat Seal", "Flexible", "Modern Look"],
    },
    {
      id: 5,
      title: "Woven Patches",
      subtitle: "Fine detail and smooth finish",
      description:
        "Achieve intricate designs with our custom woven patches. Perfect for detailed logos and text, these patches offer a smooth, flat surface with excellent color reproduction.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: ["Fine Detail", "Smooth Surface", "Sharp Text", "Flat Profile"],
    },
    {
      id: 6,
      title: "Leather Patches",
      subtitle: "Premium quality with authentic look",
      description:
        "Craft sophisticated patches with genuine or synthetic leather. Perfect for brands wanting a premium, rugged appearance with timeless appeal and durability.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: ["Premium Material", "Laser Engraving", "Aged Look", "Durable"],
    },
    {
      id: 7,
      title: "Printed Patches",
      subtitle: "Full-color photographic quality",
      description:
        "Capture complex artwork and photographs with our printed patches. Using advanced printing technology, we reproduce your designs with stunning color accuracy and detail.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: [
        "Full Color",
        "Photo Quality",
        "Complex Artwork",
        "Smooth Finish",
      ],
    },
    {
      id: 8,
      title: "Glow in Dark Patches",
      subtitle: "Illuminate your designs",
      description:
        "Make your patches stand out day and night with glow-in-the-dark technology. Perfect for safety applications or creating eye-catching designs that capture attention.",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop",
      features: [
        "Night Visibility",
        "Safety Use",
        "Unique Effect",
        "Long Lasting",
      ],
    },
    {
      id: 9,
      title: "Reflective Patches",
      subtitle: "Safety meets style",
      description:
        "Combine visibility with style using our reflective patches. Ideal for safety gear, outdoor apparel, or adding a functional yet fashionable element to your designs.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      features: [
        "High Visibility",
        "Safety Compliant",
        "Durable",
        "Weather Proof",
      ],
    },
    {
      id: 10,
      title: "Velcro Backed Patches",
      subtitle: "Easy attachment and removal",
      description:
        "Perfect for tactical gear, uniforms, and bags. Our Velcro-backed patches offer secure attachment with the flexibility of easy removal and interchangeability.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
      features: [
        "Easy Removal",
        "Interchangeable",
        "Secure Hold",
        "Tactical Use",
      ],
    },
    {
      id: 11,
      title: "Iron-On Patches",
      subtitle: "Quick and easy application",
      description:
        "Apply patches instantly with heat-activated adhesive backing. Perfect for DIY projects and quick customization of clothing, bags, and accessories.",
      image:
        "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=600&h=400&fit=crop",
      features: [
        "Easy Application",
        "No Sewing",
        "Permanent Bond",
        "DIY Friendly",
      ],
    },
    {
      id: 12,
      title: "Sequined Patches",
      subtitle: "Sparkle and shine",
      description:
        "Add glamour and sparkle to your designs with sequined patches. Perfect for fashion, costumes, and creating eye-catching decorative elements.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      features: ["Sparkle Effect", "Fashion Use", "Colorful", "Eye-catching"],
    },
    {
      id: 13,
      title: "Biker Patches",
      subtitle: "Traditional motorcycle style",
      description:
        "Authentic biker patches with traditional styling. Perfect for motorcycle clubs, riding gear, and creating that classic rugged biker look.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      features: ["Traditional Style", "Durable", "Club Use", "Rugged Look"],
    },
    {
      id: 14,
      title: "Military Patches",
      subtitle: "Official and custom designs",
      description:
        "Professional military-grade patches made to exacting standards. Perfect for armed forces, security personnel, and military enthusiasts.",
      image:
        "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=600&h=400&fit=crop",
      features: ["Military Grade", "Official Use", "Durable", "Professional"],
    },
    {
      id: 15,
      title: "Corporate Patches",
      subtitle: "Professional brand representation",
      description:
        "Elevate your corporate identity with professional patches for uniforms, promotional items, and brand merchandise. Perfect for employee recognition and brand building.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      features: [
        "Professional",
        "Brand Building",
        "Uniform Use",
        "Recognition",
      ],
    },
    {
      id: 16,
      title: "Event Patches",
      subtitle: "Commemorate special occasions",
      description:
        "Create lasting memories with custom event patches. Perfect for concerts, festivals, conferences, weddings, and special celebrations.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      features: ["Commemorative", "Event Specific", "Souvenir", "Collectible"],
    },
    {
      id: 17,
      title: "Scout Patches",
      subtitle: "Traditional scouting style",
      description:
        "Authentic scout patches for troops, achievements, and events. Made with the quality and tradition that scouting organizations expect.",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop",
      features: ["Traditional", "Achievement", "Troop Use", "Durable"],
    },
    {
      id: 18,
      title: "Name Patches",
      subtitle: "Personal identification",
      description:
        "Professional name patches for uniforms, security personnel, and corporate use. Clear, readable text with durable construction.",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
      features: ["Personalized", "Professional", "Clear Text", "Uniform Use"],
    },
    {
      id: 19,
      title: "Flag Patches",
      subtitle: "National pride and representation",
      description:
        "Show your national pride with high-quality flag patches. Perfect for travelers, military personnel, and patriotic displays.",
      image:
        "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&h=400&fit=crop",
      features: [
        "National Pride",
        "Accurate Colors",
        "Durable",
        "Versatile Use",
      ],
    },
    {
      id: 20,
      title: "Custom Shape Patches",
      subtitle: "Unique designs without limits",
      description:
        "Break free from traditional shapes with our custom die-cut patches. Create any shape imaginable to perfectly match your unique design vision.",
      image:
        "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&h=400&fit=crop",
      features: ["Any Shape", "Die Cut", "Unique Designs", "Creative Freedom"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold "
          >
            Our Custom Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl300 max-w-3xl mx-auto leading-relaxed"
          >
            Decades of crafting experience woven into every stitch.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-32 h-1 bg-orange-500 mx-auto mt-8 rounded-full"
          ></motion.div>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className=" rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:shadow-2xl hover:border-orange-500 transition-all duration-300 group"
            >
              {/* Product Image - Fixed img tag */}
              <div className="h-48 bg-gray-800 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Content */}
              <div className="p-6">
                {/* Title */}
                <h2 className="text-2xl font-bold  mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  {product.title}
                </h2>

                {/* Subtitle */}
                <h3 className="text-lg font-semibold  mb-4">
                  {product.subtitle}
                </h3>

                {/* Divider */}
                <div className="w-16 h-0.5 bg-gray-700 mb-4"></div>

                {/* Description */}
                <p className=" leading-relaxed mb-6">{product.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center ">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full mt-6 bg-orange-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-200">
                  Get Custom Quote
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
