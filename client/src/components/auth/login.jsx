import React from "react";

function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/maxresdefault.jpg')" }}
    >
      <div className="relative bg-white/10 backdrop-blur-md rounded-2xl max-w-md w-full p-8 shadow-2xl border border-cyan-400/50">
        {/* Glowing border with breathing animation */}
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400 animate-glow"></div>

        {/* Actual content */}
        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center text-white mb-6 drop-shadow-lg">
            Admin Login
          </h1>
          <form className="space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-1 drop-shadow-md">
                Username
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-medium mb-1 drop-shadow-md">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-500 text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
