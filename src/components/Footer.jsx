import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 bg-gray-800 text-gray-300 mt-12">
      © {new Date().getFullYear()} BlogSphere — Built by Rodrick, Victor & Daniel.
    </footer>
  );
}
