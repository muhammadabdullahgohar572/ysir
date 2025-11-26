"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, MessageCircle, AtSign } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

 const Blogs = () => {
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
  
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  // New array data with different categories and content
  const blogCards = [
    {
      id: 1,
      category: "CUSTOM PATCHES",
      title: "Ultimate Guide to Custom Embroidery Patches",
      subtitle: "Create Unique Designs for Your Brand",
      description: "Learn how to design and create custom embroidery patches that perfectly represent your brand identity and stand out from the competition.",
      date: "November 12, 2024",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 2,
      category: "BRANDING",
      title: "Building Brand Identity with Custom Merch",
      subtitle: "Strategies for Small Businesses",
      description: "Discover effective strategies to build a strong brand identity using custom merchandise and patches that resonate with your target audience.",
      date: "November 10, 2024",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 3,
      category: "DESIGN TIPS",
      title: "Color Psychology in Patch Design",
      subtitle: "Choosing the Right Colors",
      description: "Understand how color psychology influences customer perception and learn to choose the perfect color palette for your custom patches.",
      date: "November 8, 2024",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 4,
      category: "PRODUCTION",
      title: "Quality Control in Patch Manufacturing",
      subtitle: "Ensuring Perfect Results",
      description: "Learn about our rigorous quality control processes that ensure every patch meets the highest standards of craftsmanship and durability.",
      date: "November 5, 2024",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 5,
      category: "MARKETING",
      title: "Using Patches in Marketing Campaigns",
      subtitle: "Creative Promotion Ideas",
      description: "Explore innovative ways to incorporate custom patches into your marketing campaigns and boost brand visibility effectively.",
      date: "November 3, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 6,
      category: "MATERIALS",
      title: "Choosing the Right Fabric for Patches",
      subtitle: "Material Guide 2024",
      description: "Comprehensive guide to different fabric options for custom patches and how to choose the best material for your specific needs.",
      date: "November 1, 2024",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 7,
      category: "TRENDS",
      title: "2024 Patch Design Trends",
      subtitle: "What's Hot This Year",
      description: "Stay ahead of the curve with the latest patch design trends and learn what styles are dominating the market this year.",
      date: "October 29, 2024",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 8,
      category: "TUTORIAL",
      title: "DIY Patch Application Methods",
      subtitle: "Step-by-Step Guide",
      description: "Learn different methods to apply custom patches including iron-on, sewing, and adhesive techniques with detailed instructions.",
      date: "October 26, 2024",
      image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 9,
      category: "BUSINESS",
      title: "Scaling Your Patch Business",
      subtitle: "Growth Strategies",
      description: "Proven strategies to scale your custom patch business and reach new markets while maintaining quality and customer satisfaction.",
      date: "October 24, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 10,
      category: "TECHNOLOGY",
      title: "Digital Printing vs Embroidery",
      subtitle: "Which is Better?",
      description: "Compare digital printing and embroidery techniques to determine which method is best suited for your custom patch requirements.",
      date: "October 22, 2024",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 11,
      category: "SUSTAINABILITY",
      title: "Eco-Friendly Patch Production",
      subtitle: "Green Manufacturing",
      description: "Learn about our commitment to sustainable practices and eco-friendly materials in custom patch production.",
      date: "October 20, 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 12,
      category: "CASE STUDY",
      title: "Successful Brand Transformation",
      subtitle: "Client Success Story",
      description: "Read how a small business transformed their brand identity using our custom patches and achieved remarkable growth.",
      date: "October 18, 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      readTime: "8 min read"
    },
    {
      id: 13,
      category: "DESIGN TIPS",
      title: "Vector vs Raster for Patch Design",
      subtitle: "Technical Guide",
      description: "Understand the difference between vector and raster graphics and why vector files are essential for high-quality patch production.",
      date: "October 16, 2024",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 14,
      category: "INDUSTRY",
      title: "Future of Custom Apparel",
      subtitle: "Market Insights 2025",
      description: "Expert analysis of the custom apparel industry and predictions for upcoming trends and market developments.",
      date: "October 14, 2024",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 15,
      category: "TUTORIAL",
      title: "Creating Patch Mockups",
      subtitle: "Design Presentation",
      description: "Learn how to create professional mockups of your custom patches to present designs to clients and stakeholders.",
      date: "October 12, 2024",
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 16,
      category: "QUALITY",
      title: "Thread Quality Standards",
      subtitle: "Material Excellence",
      description: "Discover the thread quality standards we maintain to ensure vibrant colors and long-lasting durability in every patch.",
      date: "October 10, 2024",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 17,
      category: "MARKETING",
      title: "Social Media Patch Campaigns",
      subtitle: "Digital Strategy",
      description: "Effective social media strategies to promote your custom patches and engage with your target audience online.",
      date: "October 8, 2024",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 18,
      category: "BUSINESS",
      title: "Pricing Strategies for Patches",
      subtitle: "Profit Maximization",
      description: "Learn how to price your custom patches competitively while maximizing profits and maintaining quality standards.",
      date: "October 6, 2024",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 19,
      category: "TECHNOLOGY",
      title: "Automation in Patch Production",
      subtitle: "Efficiency Boost",
      description: "How automation technology is revolutionizing custom patch production and improving efficiency and precision.",
      date: "October 4, 2024",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 20,
      category: "DESIGN TIPS",
      title: "Minimalist Patch Designs",
      subtitle: "Less is More",
      description: "Explore the art of minimalist patch design and learn how simplicity can create powerful brand statements.",
      date: "October 2, 2024",
      image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 21,
      category: "CUSTOM PATCHES",
      title: "Military Style Patches Guide",
      subtitle: "Traditional Craftsmanship",
      description: "Complete guide to designing and producing military-style patches with authentic details and premium quality.",
      date: "September 30, 2024",
      image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 22,
      category: "BRANDING",
      title: "Corporate Identity Packages",
      subtitle: "Complete Brand Solution",
      description: "How custom patches can be integrated into comprehensive corporate identity packages for consistent branding.",
      date: "September 28, 2024",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 23,
      category: "PRODUCTION",
      title: "Bulk Order Advantages",
      subtitle: "Cost Efficiency",
      description: "Understand the benefits of placing bulk orders for custom patches and how it can save costs while maintaining quality.",
      date: "September 26, 2024",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 24,
      category: "MATERIALS",
      title: "Leather Patches Guide",
      subtitle: "Premium Options",
      description: "Everything you need to know about leather patches - from material selection to design considerations and applications.",
      date: "September 24, 2024",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      readTime: "7 min read"
    },
    {
      id: 25,
      category: "TRENDS",
      title: "Vintage Patch Revival",
      subtitle: "Nostalgic Designs",
      description: "Explore the resurgence of vintage-style patches and learn how to incorporate retro elements into modern designs.",
      date: "September 22, 2024",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 26,
      category: "TUTORIAL",
      title: "Patch Care and Maintenance",
      subtitle: "Longevity Tips",
      description: "Essential tips for caring and maintaining your custom patches to ensure they look great for years to come.",
      date: "September 20, 2024",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 27,
      category: "BUSINESS",
      title: "International Shipping Guide",
      subtitle: "Global Reach",
      description: "Complete guide to international shipping for custom patches including regulations, costs, and delivery times.",
      date: "September 18, 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      readTime: "6 min read"
    },
    {
      id: 28,
      category: "TECHNOLOGY",
      title: "3D Puff Patches Explained",
      subtitle: "Dimensional Designs",
      description: "Learn about 3D puff patch technology and how it creates dimensional designs that stand out with texture and depth.",
      date: "September 16, 2024",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop",
      readTime: "5 min read"
    },
    {
      id: 29,
      category: "SUSTAINABILITY",
      title: "Recycled Materials in Patches",
      subtitle: "Eco Innovation",
      description: "How we're incorporating recycled materials into patch production without compromising on quality or durability.",
      date: "September 14, 2024",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&h=250&fit=crop",
      readTime: "4 min read"
    },
    {
      id: 30,
      category: "CASE STUDY",
      title: "Startup Success with Patches",
      subtitle: "From Zero to Hero",
      description: "Inspiring story of how a startup used custom patches to build brand recognition and achieve business success.",
      date: "September 12, 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      readTime: "8 min read"
    }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(blogCards.length / cardsPerPage);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = blogCards.slice(indexOfFirstCard, indexOfLastCard);

  // Pagination handler
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Header Section - White Background */}
     
      <div className="bg-black text-white py-8 px-6">
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto items-center justify-around">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="mb-8 md:mb-0"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Quality Patches Articles
            </h1>
            <p className="text-gray-300 max-w-lg text-sm">
              <br />
              Articles on designing your own custom <br />
              merch, growing your brand, and managing <br />
              manufacturing as a small business.
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

      {/* Main Content - White Background with Black Cards */}
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-black rounded-lg shadow-2xl overflow-hidden border border-gray-800 hover:shadow-2xl hover:border-orange-500 transition-all duration-300 group"
              >
                {/* Image */}
                <div className="h-48 bg-gray-900 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                      {card.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                    {card.title}
                  </h2>

                  {/* Subtitle */}
                  <h3 className="text-lg font-semibold text-gray-300 mb-3 line-clamp-2">
                    {card.subtitle}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Date and Read Time */}
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{card.date}</span>
                    <span>{card.readTime}</span>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full mt-4 bg-orange-600 text-white py-3 px-4 rounded-md hover:bg-orange-700 transition-colors duration-300 text-sm font-semibold">
                    Read More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination - Black Theme */}
          <div className="flex justify-center items-center space-x-2">
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                currentPage === 1
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700"
                  : "bg-black text-white border-gray-600 hover:bg-gray-900 hover:border-orange-500"
              }`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((page) => {
                if (
                  page <= 3 ||
                  page > totalPages - 3 ||
                  Math.abs(page - currentPage) <= 1
                ) {
                  return true;
                }
                return false;
              })
              .map((page, index, array) => {
                let showEllipsis = false;
                if (index > 0 && page - array[index - 1] > 1) {
                  showEllipsis = true;
                }

                return (
                  <div key={page} className="flex items-center">
                    {showEllipsis && (
                      <span className="px-2 text-gray-500">...</span>
                    )}
                    <button
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 rounded-md border text-sm font-medium ${
                        currentPage === page
                          ? "bg-orange-600 text-white border-orange-600"
                          : "bg-black text-white border-gray-600 hover:bg-gray-900 hover:border-orange-500"
                      }`}
                    >
                      {page}
                    </button>
                  </div>
                );
              })}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-md border text-sm font-medium ${
                currentPage === totalPages
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed border-gray-700"
                  : "bg-black text-white border-gray-600 hover:bg-gray-900 hover:border-orange-500"
              }`}
            >
              Next
            </button>
          </div>

          {/* Page Info */}
          <div className="text-center mt-4 text-sm text-gray-600">
            Showing {indexOfFirstCard + 1}-
            {Math.min(indexOfLastCard, blogCards.length)} of {blogCards.length}{" "}
            articles
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs