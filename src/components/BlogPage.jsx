import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useBlog } from "../context/BlogContext.jsx";
import { useComments } from "../context/CommentContext.jsx";
import Sidebar from "./Sidebar.jsx";
import Footer from "./Footer.jsx";

export default function BlogPage() {
  const { posts } = useBlog();
  const { comments, addComment, deleteComment } = useComments();
  const query = new URLSearchParams(useLocation().search);
  const id = parseInt(query.get("id")) || posts[0]?.id;
  const post = posts.find(p => p.id === id) || posts[0];

  const [newComment, setNewComment] = useState("");

  if (!post) return <div className="min-h-screen flex items-center justify-center">No post found.</div>;

  const commentsFor = comments.filter(c => c.postId === post.id);

  const submitComment = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    addComment(post.id, "Guest", newComment);
    setNewComment("");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <nav className="bg-indigo-600 p-4 text-white flex justify-between items-center">
        <h1 className="font-bold text-2xl">BlogSphere</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/dashboard" className="hover:text-gray-200">Dashboard</Link>
          <Link to="/profile" className="hover:text-gray-200">Profile</Link>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6">
        <article className="md:col-span-2 bg-white dark:bg-gray-800 rounded shadow p-6">
          <h2 className="text-3xl font-bold text-indigo-600 mb-2">{post.title}</h2>
          <p className="text-sm text-gray-500 mb-6">By {post.author} · {post.date}</p>
          <div className="prose dark:prose-invert whitespace-pre-line text-gray-700 dark:text-gray-300">{post.content}</div>

          <section className="mt-8">
            <h3 className="text-xl font-semibold mb-3">Comments ({commentsFor.length})</h3>

            {commentsFor.length === 0 ? <p className="text-gray-500 mb-4">No comments yet.</p> : (
              <ul className="space-y-3 mb-4">
                {commentsFor.map(c => (
                  <li key={c.id} className="p-3 bg-gray-100 dark:bg-gray-700 rounded flex justify-between">
                    <div><strong>{c.author}</strong>: {c.text}</div>
                    <button onClick={()=>deleteComment(c.id)} className="text-red-500">Delete</button>
                  </li>
                ))}
              </ul>
            )}

            <form onSubmit={submitComment} className="flex gap-3">
              <input value={newComment} onChange={e=>setNewComment(e.target.value)} placeholder="Write a comment..." className="flex-1 p-2 rounded border dark:border-gray-700 dark:bg-gray-900 dark:text-white" />
              <button className="bg-indigo-600 text-white px-4 py-2 rounded">Post</button>
            </form>
          </section>
        </article>

        <aside>
          <Sidebar />
        </aside>
      </main>

      <Footer />
    </div>
  );
}
