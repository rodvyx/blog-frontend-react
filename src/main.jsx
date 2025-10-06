import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BlogPage from "./components/BlogPage.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Profile from "./components/Profile.jsx";
import AuthPage from "./components/AuthPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import { BlogProvider } from "./context/BlogContext.jsx";
import { CommentProvider } from "./context/CommentContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 👇 Important fix for GitHub Pages routing */}
    <BrowserRouter basename="/blog-frontend-react">
      <AuthProvider>
        <BlogProvider>
          <CommentProvider>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<AuthPage />} />
            </Routes>
          </CommentProvider>
        </BlogProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
