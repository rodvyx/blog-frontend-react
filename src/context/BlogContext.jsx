import { createContext, useContext, useState } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "The Future of Blogging",
      author: "Victor Shunevych",
      date: "Oct 5, 2025",
      content:
        "Blogging is evolving with AI, immersive storytelling, and community-driven platforms. This article explores the major trends.",
      category: "Tech",
    },
    {
      id: 2,
      title: "ASP.NET Core + React",
      author: "Daniel Pasatyuk",
      date: "Oct 4, 2025",
      content: "How to connect ASP.NET Core APIs with a React frontend effectively.",
      category: "Fullstack",
    },
    {
      id: 3,
      title: "Why TailwindCSS Rocks",
      author: "Rodrick Dick",
      date: "Oct 1, 2025",
      content: "Tailwind simplifies responsive UI building with utility classes.",
      category: "Frontend",
    },
  ]);

  const addPost = (post) =>
    setPosts((p) => [{ ...post, id: Date.now(), date: new Date().toDateString() }, ...p]);

  const editPost = (id, updated) =>
    setPosts((p) => p.map((x) => (x.id === id ? { ...x, ...updated } : x)));

  const deletePost = (id) => setPosts((p) => p.filter((x) => x.id !== id));

  return (
    <BlogContext.Provider value={{ posts, addPost, editPost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => useContext(BlogContext);
