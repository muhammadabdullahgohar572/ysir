"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    file: null,
  });

  const handleSubmit = async () => {
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
      });
      return;
    }

    try {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }

      const res = await fetch("/api/patchOrder", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.message === "Order submitted") {
        toast.success("Order submitted successfully!", {
          position: "top-center",
        });
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
          file: null,
        });
      } else {
        toast.error(data.message, { position: "top-center" });
      }
    } catch (err) {
      toast.error(err.message, { position: "top-center" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-orange-50">
      <ToastContainer />
      <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl border border-orange-200">
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">
          Get Started
        </h2>
        <p className="mb-4 text-gray-600">
          Please note that our minimum to order is 10 pcs
        </p>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Width*"
            value={form.width}
            onChange={(e) => setForm({ ...form, width: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="Height*"
            value={form.height}
            onChange={(e) => setForm({ ...form, height: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <select
            value={form.backing}
            onChange={(e) => setForm({ ...form, backing: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          >
            <option value="">Select Backing*</option>
            <option value="Iron on / Heat Seal">Iron on / Heat Seal</option>
            <option value="Sew on">Sew on</option>
          </select>
          <input
            type="number"
            placeholder="Quantity*"
            value={form.quantity}
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="Name*"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="email"
            placeholder="Email*"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="Phone*"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <textarea
            placeholder="Instructions"
            value={form.instructions}
            onChange={(e) => setForm({ ...form, instructions: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="How did you hear about us?"
            value={form.source}
            onChange={(e) => setForm({ ...form, source: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="text"
            placeholder="Budget for the Patches"
            value={form.budget}
            onChange={(e) => setForm({ ...form, budget: e.target.value })}
            className="w-full p-3 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />
          <input
            type="file"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            className="w-full p-2 border rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300"
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-[1.02]"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatchOrderForm;
