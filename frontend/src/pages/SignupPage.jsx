import { motion } from "framer-motion";
import { Input, PasswordStrengthMeter } from "../components/index";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
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
        <h2
          className="text-3xl font-bold mb-6 text-center 
    bg-gradient-to-r from-blue-400 to-blue-500 text-transparent
    bg-clip-text
    
    "
        >
          Create Account
        </h2>

        <form onSubmit={handleSignup}>
          <Input
            icon={User}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            icon={Mail}
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>

        <PasswordStrengthMeter password={password} />
        <motion.button
          className="mt-5 w-full py-3 px-4 
        bg-gradient-to-r from-blue-400 to-indigo-600 text-white
        font-bold rounded-lg shadow-lg hover:from-indigo-600
        focus:ring-offset-gray-600 transition duration-200
        "
          whileHover={{ scale: 1.02 }}
          whileTop={{ scale: 0.98 }}
          type="submit"
        >
          Sign Up
        </motion.button>
      </div>
      <div
        className="px-8 py-4 bg-indigp-500 bg-opacity-50
      flex justify-center"
      >
        <p className="text-sm text-gray-900">
          Already have an account? {""}
          <Link to={"/login"} className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </motion.div>
  );
};

export { SignupPage };
