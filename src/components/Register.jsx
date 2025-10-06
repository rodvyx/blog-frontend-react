import Footer from "./Footer.jsx";

export default function Register() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow mt-10">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Register</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded border dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 dark:text-indigo-400">
            Login here
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
