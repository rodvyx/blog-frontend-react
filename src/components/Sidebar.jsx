import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="space-y-6">
      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h3 className="text-lg font-bold mb-3">📌 Categories</h3>
        <ul className="space-y-2 text-gray-600">
          <li><Link to="/blog?cat=AI" className="hover:text-indigo-600"># AI</Link></li>
          <li><Link to="/blog?cat=React" className="hover:text-indigo-600"># React</Link></li>
          <li><Link to="/blog?cat=Tailwind" className="hover:text-indigo-600"># Tailwind</Link></li>
          <li><Link to="/blog?cat=ASP.NET" className="hover:text-indigo-600"># ASP.NET</Link></li>
        </ul>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h3 className="text-lg font-bold mb-3">🔥 Trending</h3>
        <ul className="space-y-2">
          <li><Link to="/blog" className="text-indigo-600 hover:underline">Top 5 Blogging Mistakes</Link></li>
          <li><Link to="/blog" className="text-indigo-600 hover:underline">Why TailwindCSS Rocks</Link></li>
          <li><Link to="/blog" className="text-indigo-600 hover:underline">ASP.NET Core + React</Link></li>
        </ul>
      </div>

      <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
        <h3 className="text-lg font-bold mb-3">🕓 Recent Posts</h3>
        <ul className="space-y-2 text-gray-700">
          <li><Link to="/blog">How AI is Revolutionizing Content</Link><div className="text-sm text-gray-500">Oct 5, 2025</div></li>
          <li><Link to="/blog">The Rise of Developer Blogs</Link><div className="text-sm text-gray-500">Oct 3, 2025</div></li>
        </ul>
      </div>
    </aside>
  );
}
