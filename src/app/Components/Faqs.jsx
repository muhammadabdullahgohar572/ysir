"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Why choose Quality Patches?",
      answer:
        "We are a top-quality custom patch supplier with over 10 years of experience. We pride ourselves on providing custom products with love woven into every stitch at reasonable prices. Our award-winning team delivers efficient, high-quality work with a money-back guarantee.",
    },
    {
      question: "Can I iron on your patches?",
      answer:
        "Yes! All our patches come with iron-on backing as a standard option. We use high-quality heat-activated adhesive that provides a strong bond to most fabrics. For best results, we recommend following our detailed application guide.",
    },
    {
      question: "Can I see a sample of my product before you make it?",
      answer:
        "Absolutely! We provide digital mockups of your design before production begins. For larger orders, we can also create physical samples (sample fees may apply). We want to ensure you're completely satisfied with the design before full production.",
    },
    {
      question: "What if I'm not satisfied with my order?",
      answer:
        "Your satisfaction is guaranteed. If you're not happy with your order, we offer a 100% money-back guarantee. Contact us within 30 days of receiving your order, and we'll either remake your patches or provide a full refund.",
    },
    {
      question: "How long does it take to receive my order?",
      answer:
        "Production time is typically 7-10 business days, plus shipping. Rush production options are available for urgent orders. International shipping usually takes 5-7 business days. You'll receive tracking information as soon as your order ships.",
    },
    {
      question: "What file formats do you accept for designs?",
      answer:
        "We accept AI, EPS, PDF, PSD, and high-resolution PNG files. Vector files are preferred for the best quality. Our design team can also help create or optimize your design if needed.",
    },
    {
      question: "Do you offer custom shapes and sizes?",
      answer:
        "Yes! We can create patches in any shape or size. From small 1-inch patches to large 8-inch designs, we have the capability to bring your vision to life. Custom shapes require no additional setup fees.",
    },
    {
      question: "What's the minimum order quantity?",
      answer:
        "Our minimum order is just 10 patches for most types. This allows small businesses and individuals to access high-quality custom patches without large upfront commitments.",
    },
    {
      question: "Are your patches durable and washable?",
      answer:
        "Yes, our patches are extremely durable and machine washable. They maintain their color and shape through repeated washing. We recommend washing in cold water and air drying for maximum longevity.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide! We have partnerships with reliable international carriers to ensure your patches reach you safely and on time. Shipping costs vary by location and order size.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our custom patches, ordering
            process, and quality guarantees. Can't find what you're looking for?
            Contact our support team.
          </p>
          <div className="w-32 h-1 bg-blue-500 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-2xl"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 pr-4">
                    {item.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-gray-500" />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className="px-8 pb-6">
                  <div className="pl-10 border-l-2 border-blue-200">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
