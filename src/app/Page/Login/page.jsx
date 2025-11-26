"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      if (!form.email || !form.password) {
        toast.error("Please enter email & password!", {
          position: "top-center",
        });
        return;
      }

      const apicall = await fetch("/api/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const res = await apicall.json();

      if (res.message == "Login SuccessFully") {
        toast.success("Welcome Back!", { position: "top-center" });
        alert("Welcome Back!")
        window.location.href = "/";
      } else if (
        res.message == "Email not Exit please created Account then Login"
      ) {
        toast.error("Email not Exit please created Account then Login", {
          position: "top-center",
        });
        alert("Email not Exit please created Account then Login")
      }
    } catch (error) {
      toast.error(error.message, {
        position: "top-center",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl p-8 border border-orange-200">
        <h1 className="text-3xl font-bold text-orange-600 text-center mb-6">
          Login to Your Account
        </h1>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          {/* Email */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-300 transition"
            />
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg transition transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        {/* Create Account Link */}
        <p className="mt-5 text-center text-gray-700 text-sm">
          Don't have an account?{" "}
          <Link
            href="../../Page/Signup"
            className="text-orange-600 font-semibold hover:underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
