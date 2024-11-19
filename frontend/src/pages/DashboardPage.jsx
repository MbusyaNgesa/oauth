import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";

const DashboardPage = () => {
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md w-full bg-gray-800 bg-opacity-50
   backdrop-blur-xl rounded-2xl shadow-xl  overflow-hidden"
    >
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="
        w-full py-3 px-4 bg-gradient-to-r
         from-blue-400 to-indigo-600 text-white
          font-bold rounded-lg shadow-lg hover:from-indigo-600 
           focus:outline-none focus:ring-2  focus:ring-offset-gray-900
            transition duration-200"
        onClick={handleLogout}
      >
        Logout
      </motion.button>
    </motion.div>
  );
};

export { DashboardPage };
