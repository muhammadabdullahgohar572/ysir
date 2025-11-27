"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Upload,
  User,
  Mail,
  Phone,
  Ruler,
  Package,
  DollarSign,
  MessageSquare,
  Award,
  Calendar,
  ArrowRight,
  CheckCircle,
  FileText,
  Users,
  Target,
  X,
  Image as ImageIcon,
} from "lucide-react";

const PatchOrderForm = () => {
  const [form, setForm] = useState({
    width: "",
    height: "",
    product: "Embroidered Patches",
    backing: "",
    quantity: "",
    name: "",
    email: "",
    phone: "",
    instructions: "",
    source: "",
    budget: "",
    files: [],
    urgency: "",
    colors: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle multiple file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    const newFiles = selectedFiles.map((file) => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: (file.size / (1024 * 1024)).toFixed(2),
      type: file.type,
    }));

    setForm((prev) => ({
      ...prev,
      files: [...prev.files, ...newFiles],
    }));

    toast.success(`${selectedFiles.length} file(s) selected successfully!`, {
      position: "top-center",
      theme: "colored",
      autoClose: 3000,
    });
  };

  // Remove individual file
  const removeFile = (fileId) => {
    setForm((prev) => ({
      ...prev,
      files: prev.files.filter((f) => f.id !== fileId),
    }));
  };

  // Clear all files
  const clearAllFiles = () => {
    setForm((prev) => ({
      ...prev,
      files: [],
    }));
    const fileInput = document.getElementById("file-input");
    if (fileInput) fileInput.value = "";
  };

  const handleSubmit = async () => {
    // Validation
    if (
      !form.width ||
      !form.height ||
      !form.backing ||
      !form.quantity ||
      !form.name ||
      !form.email ||
      !form.phone
    ) {
      toast.error("Please fill all required fields!", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    if (parseInt(form.quantity) < 10) {
      toast.error("Minimum order quantity is 10 pieces!", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    if (form.files.length === 0) {
      toast.error("Please upload at least one design file!", {
        position: "top-center",
        theme: "colored",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();

      // Append all form fields
      Object.keys(form).forEach(key => {
        if (key !== 'files' && form[key] !== null && form[key] !== undefined) {
          formData.append(key, form[key]);
        }
      });

      // Append files with proper naming
      form.files.forEach((fileObj) => {
        formData.append("files", fileObj.file);
      });

      const res = await fetch("/api/order", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      
      if (res.ok) {
        toast.success("🎉 Order submitted successfully! We'll contact you soon.", {
          position: "top-center",
          theme: "colored",
          autoClose: 5000,
        });
        
        // Reset form
        setForm({
          width: "",
          height: "",
          product: "Embroidered Patches",
          backing: "",
          quantity: "",
          name: "",
          email: "",
          phone: "",
          instructions: "",
          source: "",
          budget: "",
          files: [],
          urgency: "",
          colors: "",
        });
        
        // Reset file input
        const fileInput = document.getElementById("file-input");
        if (fileInput) fileInput.value = "";
      } else {
        toast.error(`❌ ${data.message || "Failed to submit order"}`, {
          position: "top-center",
          theme: "colored",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("❌ Failed to submit order. Please try again.", {
        position: "top-center",
        theme: "colored",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field, value) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const features = [
    { icon: <CheckCircle size={18} />, text: "Free Design Review" },
    { icon: <Award size={18} />, text: "Premium Quality" },
    { icon: <Calendar size={18} />, text: "Fast Turnaround" },
    { icon: <Users size={18} />, text: "Expert Support" },
  ];

  const supportedFormats = [
    ".jpg",
    ".jpeg",
    ".png",
    ".pdf",
    ".ai",
    ".eps",
    ".svg",
    ".psd",
    ".cdr",
    ".tiff",
    ".bmp",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-orange-50 to-amber-50 py-12">
      <ToastContainer />
      <div className="w-full max-w-4xl bg-white p-8 rounded-3xl shadow-2xl border border-orange-200">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-orange-100 p-3 rounded-full">
              <Target className="text-orange-600" size={32} />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-orange-600 mb-3">
            Custom Patch Order
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            Create your perfect custom patches with our premium service
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span className="text-green-500">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 inline-block">
            <p className="text-orange-700 font-semibold flex items-center gap-2">
              <Package size={18} />
              Minimum order: 10 pieces
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column - Basic Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <Ruler className="text-orange-500" />
              Patch Specifications
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Width*"
                  value={form.width}
                  onChange={(e) => handleInputChange("width", e.target.value)}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
                />
                <Ruler
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={18}
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Height*"
                  value={form.height}
                  onChange={(e) => handleInputChange("height", e.target.value)}
                  className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
                />
                <Ruler
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={18}
                />
              </div>
            </div>

            <div className="relative">
              <select
                value={form.backing}
                onChange={(e) => handleInputChange("backing", e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 appearance-none bg-white"
              >
                <option value="">Select Backing*</option>
                <option value="Iron on / Heat Seal">Iron on / Heat Seal</option>
                <option value="Sew on">Sew on</option>
                <option value="Velcro">Velcro</option>
                <option value="Adhesive">Adhesive</option>
              </select>
              <Package
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>

            <div className="relative">
              <input
                type="number"
                placeholder="Quantity* (Minimum 10)"
                value={form.quantity}
                onChange={(e) => handleInputChange("quantity", e.target.value)}
                min="10"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
              />
              <Users
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Number of Colors"
                value={form.colors}
                onChange={(e) => handleInputChange("colors", e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
              />
              <Award
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>
          </div>

          {/* Right Column - Personal Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
              <User className="text-orange-500" />
              Your Information
            </h3>

            <div className="relative">
              <input
                type="text"
                placeholder="Full Name*"
                value={form.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
              />
              <User
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>

            <div className="relative">
              <input
                type="email"
                placeholder="Email Address*"
                value={form.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
              />
              <Mail
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Phone Number*"
                value={form.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
              />
              <Phone
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Budget for the Patches"
                value={form.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
              />
              <DollarSign
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 border-b pb-2 flex items-center gap-2">
            <MessageSquare className="text-orange-500" />
            Additional Details
          </h3>

          <div className="relative">
            <textarea
              placeholder="Special Instructions, Design Details, or Requirements..."
              value={form.instructions}
              onChange={(e) =>
                handleInputChange("instructions", e.target.value)
              }
              rows="3"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all resize-none"
            />
            <FileText
              className="absolute left-3 top-3 text-gray-400"
              size={18}
            />
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="How did you hear about us?"
              value={form.source}
              onChange={(e) => handleInputChange("source", e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all"
            />
            <Users
              className="absolute left-3 top-3.5 text-gray-400"
              size={18}
            />
          </div>

          <div className="relative">
            <select
              value={form.urgency}
              onChange={(e) => handleInputChange("urgency", e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 appearance-none bg-white"
            >
              <option value="">Urgency of Order</option>
              <option value="Standard (2-3 weeks)">Standard (2-3 weeks)</option>
              <option value="Rush (1-2 weeks)">Rush (1-2 weeks)</option>
              <option value="Express (3-7 days)">Express (3-7 days)</option>
            </select>
            <Calendar
              className="absolute left-3 top-3.5 text-gray-400"
              size={18}
            />
          </div>

          {/* Enhanced File Upload Section */}
          <div className="space-y-3">
            <div className="relative">
              <input
                id="file-input"
                type="file"
                onChange={handleFileChange}
                multiple
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                accept={supportedFormats.join(",")}
              />
              <Upload
                className="absolute left-3 top-3.5 text-gray-400"
                size={18}
              />
            </div>

            {/* File Info */}
            <div className="flex flex-wrap gap-2 text-sm text-gray-600">
              <span className="font-semibold">Supported formats:</span>
              {supportedFormats.map((format, index) => (
                <span key={index}>{format}</span>
              ))}
            </div>

            {/* Selected Files Preview */}
            {form.files.length > 0 && (
              <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-700 flex items-center gap-2">
                    <ImageIcon size={16} />
                    Selected Files ({form.files.length})
                  </h4>
                  <button
                    onClick={clearAllFiles}
                    className="text-red-500 hover:text-red-700 text-sm flex items-center gap-1"
                  >
                    <X size={14} />
                    Clear All
                  </button>
                </div>

                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {form.files.map((fileObj) => (
                    <div
                      key={fileObj.id}
                      className="flex items-center justify-between p-2 bg-white rounded border border-gray-200"
                    >
                      <div className="flex items-center gap-2 flex-1 min-w-0">
                        <ImageIcon
                          size={14}
                          className="text-blue-500 flex-shrink-0"
                        />
                        <span className="text-sm truncate">{fileObj.name}</span>
                        <span className="text-xs text-gray-500 flex-shrink-0">
                          ({fileObj.size} MB)
                        </span>
                      </div>
                      <button
                        onClick={() => removeFile(fileObj.id)}
                        className="text-red-400 hover:text-red-600 flex-shrink-0 ml-2"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg shadow-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-[1.02]"
            } text-white`}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              <>
                Submit Order
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </div>

        {/* Footer Note */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            By submitting this form, you agree to our terms of service. We'll
            contact you within 24 hours with a quote.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatchOrderForm;