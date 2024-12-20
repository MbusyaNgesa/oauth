import { motion } from "framer-motion";
import { Input } from "../components";
import { Loader, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const isLoading = false; //Becomes null when we introduce isLoading below

  const { login, isLoading, error } = useAuthStore();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50
     backdrop-blur-xl rounded-2xl shadow-xl  overflow-hidden"
    >
      <div className="p-8">
        <h1
          className="text-3xl font-bold mb-6 text-center 
    bg-gradient-to-r from-blue-400 to-blue-500 text-transparent
    bg-clip-text"
        >
          Login
        </h1>
        <form onSubmit={handleLogin}>
          <Input
            icon={Mail}
            placeholder="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot Password
            </Link>
          </div>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="
						w-full py-3 px-4 bg-gradient-to-r
             from-blue-400 to-indigo-600 text-white
              font-bold rounded-lg shadow-lg hover:from-indigo-600 
               focus:outline-none focus:ring-2  focus:ring-offset-gray-900
                transition duration-200"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader className="w-6 h-6 animate-spin mx-auto" />
            ) : (
              "Login"
            )}
          </motion.button>
        </form>
      </div>

      <div
        className="px-8 py-4 bg-indigp-500 bg-opacity-50
      flex justify-center"
      >
        <p className="text-sm text-gray-900 mt-0">
          Don't have an account? {""}
          <Link to="/signup" className="hover:underline text-blue-500">
            Signup
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export { LoginPage };
