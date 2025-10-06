import React, { useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";

export default function AuthPage() {
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");
    if (isLogin) {
      if (!form.email || !form.password) return setError("Please enter email and password.");
      login({ email: form.email, password: form.password });
    } else {
      if (!form.name || !form.email || !form.password) return setError("Please fill all fields.");
      register({ name: form.name, email: form.email, password: form.password });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded shadow">
        <h2 className="text-2xl font-bold text-center mb-4 text-indigo-600">{isLogin ? "Welcome back" : "Create account"}</h2>

        {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>}

        <form onSubmit={submit} className="space-y-3">
          {!isLogin && <input placeholder="Full name" className="w-full p-3 border rounded" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})} />}
          <input placeholder="Email" className="w-full p-3 border rounded" type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})} />
          <input placeholder="Password" className="w-full p-3 border rounded" type="password" value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})} />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">{isLogin ? "Login" : "Register"}</button>
        </form>

        <div className="text-center mt-4 text-sm">
          {isLogin ? (
            <>Don't have an account? <button onClick={()=>{setIsLogin(false); setError("");}} className="text-indigo-600">Register</button></>
          ) : (
            <>Already have an account? <button onClick={()=>{setIsLogin(true); setError("");}} className="text-indigo-600">Login</button></>
          )}
        </div>
      </div>
    </div>
  );
}
