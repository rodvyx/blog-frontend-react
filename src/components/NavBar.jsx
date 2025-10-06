import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function NavBar() {
  const { user } = useAuth();

  const avatar = user ? user.name.split(" ").map(n => n[0]).slice(0,2).join("") : "👤";

  return (
    <nav className="bg-white dark:bg-gray-900 shadow">
      <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">📝 BlogSphere</Link>

        <div className="flex-1 px-4 hidden md:block">
          <input
            type="search"
            placeholder="Search posts..."
            className="w-full px-3 py-2 border rounded-lg focus:outline-none"
            onChange={() => {}}
          />
        </div>

        <div className="flex items-center gap-4">
          <Link to="/blog" className="hidden sm:inline hover:text-indigo-600">Blog</Link>
          <Link to="/dashboard" className="hidden sm:inline hover:text-indigo-600">Dashboard</Link>
          {user ? (
            <Link to="/profile" className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm">
              {avatar}
            </Link>
          ) : (
            <Link to="/login" className="px-3 py-1 bg-indigo-600 text-white rounded">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
