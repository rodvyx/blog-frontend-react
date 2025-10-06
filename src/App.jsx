import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import { Link } from "react-router-dom";
import { useBlog } from "./context/BlogContext.jsx";
import { useAuth } from "./context/AuthContext.jsx";

export default function App() {
  const { posts } = useBlog();
  const { user } = useAuth();
  const [q, setQ] = useState("");

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(q.toLowerCase()) ||
    p.content.toLowerCase().includes(q.toLowerCase())
  );

  const featured = posts[0];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <NavBar />

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Featured */}
        {featured && (
          <section className="bg-indigo-600 text-white rounded-lg p-8 mb-8 shadow-lg">
            <h1 className="text-3xl font-bold mb-2">🚀 {featured.title}</h1>
            <p className="mb-4 max-w-2xl">{featured.content.slice(0, 180)}...</p>
            <div className="flex gap-4">
              <Link to="/blog" className="bg-white text-indigo-600 px-4 py-2 rounded">Read Featured</Link>
              <Link to="/dashboard" className="bg-indigo-500 bg-opacity-30 px-4 py-2 rounded">Create Post</Link>
            </div>
          </section>
        )}

        {/* Layout grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feed */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex gap-4 items-center">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search posts..."
                className="flex-1 p-3 rounded border dark:border-gray-700 dark:bg-gray-900"
              />
              <Link to={user ? "/dashboard" : "/login"} className="px-4 py-2 bg-indigo-600 text-white rounded">Create</Link>
            </div>

            {filtered.length === 0 ? (
              <div className="p-6 bg-white dark:bg-gray-800 rounded shadow">No posts found.</div>
            ) : filtered.map(p => (
              <article key={p.id} className="p-6 bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-indigo-600">{p.title}</h2>
                <p className="text-sm text-gray-500 mb-3">By {p.author} · {p.date}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-3">{p.content.slice(0, 140)}...</p>
                <Link to={`/blog?id=${p.id}`} className="text-indigo-600 font-semibold">Read more →</Link>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </main>

      <Footer />
    </div>
  );
}
