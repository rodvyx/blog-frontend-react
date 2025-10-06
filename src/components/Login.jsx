import Footer from "./Footer.jsx";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow mt-10">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Login</h1>
        <form className="space-y-4">
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
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Remember me</span>
            </label>
            <a href="#" className="text-sm text-indigo-600 dark:text-indigo-400">
              Forgot password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 dark:text-indigo-400">
            Register here
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
}
