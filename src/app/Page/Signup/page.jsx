"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const [form, setForm] = useState({
    username: "",
    user_email: "",
    phone: "",
    password: "",
  });

  const Handle = async () => {
    try {
      if (!form.username || !form.email || !form.password || !form.phone) {
        toast.error("Please fill all fields!", {
          position: "top-center",
        });
        return;
      }

      const apicall = await fetch("/api/Signup", {
        method: "POST",

        headers: { "Content-Type": "application/json" },

        body: JSON.stringify(form),
      });
      const res = await apicall.json();

      if (res.message == "Account created successFully") {
        toast.success("Signup Successful!", { position: "top-center" });
        window.location.href = "/";
      } else if (res.message == "Email is Aleardy Exit please Login") {
        toast.error("Email is Aleardy Exit please Login", {
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-8 border border-orange-200">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
          Create Your Account
        </h1>

        <form className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="user_name"
              value={form.username}
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              value={form.user_email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="user_password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Enter password"
            />
          </div>
          {/* Phone Number */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full p-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
              placeholder="Enter phone number"
            />
          </div>

          <button
            type="button"
            onClick={Handle}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-[1.02]"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-5 text-center text-gray-700 text-sm">
          have an account?{" "}
          <Link
            href="/Page/Login"
            className="text-orange-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
