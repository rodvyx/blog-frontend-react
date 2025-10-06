import React from "react";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

export default function Profile() {
  const { user, logout } = useAuth();

  const initials = user ? user.name.split(" ").map(n => n[0]).slice(0,2).join("") : "?";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl">BlogSphere</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/blog" className="hover:text-gray-200">Blogs</Link>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-white dark:bg-gray-800 rounded shadow p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-2xl font-bold">{initials}</div>
            <div>
              <h2 className="text-2xl font-bold">{user ? user.name : "Guest"}</h2>
              <p className="text-sm text-gray-500">{user ? user.email : "Not logged in"}</p>
              <div className="mt-3">
                {user ? <button onClick={logout} className="px-3 py-1 bg-red-500 text-white rounded">Logout</button> : <Link to="/login" className="px-3 py-1 bg-indigo-600 text-white rounded">Login</Link>}
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold mb-3">My Activity</h3>
          <p className="text-gray-600">Recent posts, comments and subscriptions will appear here.</p>
        </section>

        <aside>
          <Sidebar />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
