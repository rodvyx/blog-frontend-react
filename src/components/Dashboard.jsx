import React, { useState } from "react";
import { useBlog } from "../context/BlogContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { posts, addPost, editPost, deletePost } = useBlog();
  const { user } = useAuth();

  const [form, setForm] = useState({ title: "", content: "", category: "" });
  const [editingId, setEditingId] = useState(null);

  const startEdit = (p) => {
    setEditingId(p.id);
    setForm({ title: p.title, content: p.content, category: p.category });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.title || !form.content) return;
    if (editingId) {
      editPost(editingId, form);
      setEditingId(null);
    } else {
      addPost({ ...form, author: user?.name || "Anonymous" });
    }
    setForm({ title: "", content: "", category: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl">BlogSphere Dashboard</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/blog" className="hover:text-gray-200">Blogs</Link>
          <Link to="/profile" className="hover:text-gray-200">Profile</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2 bg-white dark:bg-gray-800 rounded shadow p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Welcome back{user ? `, ${user.name.split(" ")[0]}` : ""} 👋</h2>
              <p className="text-sm text-gray-500">Manage your posts below</p>
            </div>
            <div className="text-sm text-gray-500">Latest activity • {posts.length} posts</div>
          </div>

          <form onSubmit={submit} className="space-y-4 mb-6">
            <input className="w-full p-3 border rounded" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} />
            <input className="w-full p-3 border rounded" placeholder="Category" value={form.category} onChange={e=>setForm({...form,category:e.target.value})} />
            <textarea className="w-full p-3 border rounded" rows="5" placeholder="Content" value={form.content} onChange={e=>setForm({...form,content:e.target.value})}></textarea>
            <div className="flex gap-3">
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">{editingId ? "Update Post" : "Add Post"}</button>
              {editingId && (<button type="button" onClick={()=>{setEditingId(null); setForm({title:"",content:"",category:""});}} className="px-4 py-2 bg-gray-200 rounded">Cancel</button>)}
            </div>
          </form>

          <h3 className="text-lg font-semibold mb-3">Your Posts</h3>
          <div className="space-y-4">
            {posts.map(p => (
              <article key={p.id} className="p-4 rounded bg-gray-50 dark:bg-gray-900 border">
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-indigo-600">{p.title}</h4>
                    <div className="text-sm text-gray-500">By {p.author} · {p.date}</div>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">{p.content.slice(0,160)}...</p>
                    <div className="text-sm text-gray-500 mt-2">Category: {p.category || "—"}</div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button onClick={()=>startEdit(p)} className="px-3 py-1 bg-yellow-500 text-white rounded">Edit</button>
                    <button onClick={()=>deletePost(p.id)} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <aside>
          <Sidebar />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
