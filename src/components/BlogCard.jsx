import { Link } from "react-router-dom";

export default function BlogCard({ title, author, date, excerpt, tags = [] }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition p-6">
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        By {author} • {date}
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Link
          to="/blog"
          className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Read More
        </Link>
        <button className="px-3 py-1 bg-gray-200 dark:bg-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600">
          Edit
        </button>
        <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
          Delete
        </button>
      </div>
    </div>
  );
}
