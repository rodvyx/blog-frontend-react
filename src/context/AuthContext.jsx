import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  // client-side demo auth with validation
  const login = ({ email, password }) => {
    // simple validation example
    if (!email || !password) {
      showNotification("⚠️ Please enter email and password.");
      return false;
    }
    // demo user
    const demo = { name: "Rodrick Dick", email };
    setUser(demo);
    showNotification("✅ Logged in successfully");
    navigate("/dashboard");
    return true;
  };

  const register = ({ name, email, password }) => {
    if (!name || !email || !password) {
      showNotification("⚠️ Please fill all fields to register.");
      return false;
    }
    const demo = { name, email };
    setUser(demo);
    showNotification("🎉 Registered successfully (demo)");
    navigate("/dashboard");
    return true;
  };

  const logout = () => {
    setUser(null);
    showNotification("⚠️ Logged out");
    navigate("/login");
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, showNotification }}>
      {children}
      {notification && (
        <div className="fixed bottom-6 right-6 bg-indigo-600 text-white px-5 py-3 rounded shadow animate-fade-in z-50">
          {notification}
        </div>
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
