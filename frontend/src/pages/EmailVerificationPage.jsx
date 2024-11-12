import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EmailVerificationPage = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (index, value) => {
    const newCode = [...code];

    //Handle pasted content
    if (value.length > 1) {
      const pastedCode = value.slice(0, 6).split("");
      for (let i = 0; i < 6; i++) {
        newCode[i] = pastedCode[i] || "";
      }
      setCode(newCode);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };
  const isLoading = false;

  return (
    <div
      className="max-w-md w-full bg-gray-800 bg-opacity-50 
      backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl 
      overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-800 bg-opacity-50 backdrop-filter 
        backdrop-blur-xl rounded-2xl shadow-2xl p-8 w-full 
        max-w-md"
      >
        <h2
          className="text-3xl font-bold mb-6 text-center 
        bg-gradient-to-r from-blue-400 to-emerald-500 
        text-transparent bg-clip-text"
        >
          Verify your email
        </h2>
        <p className="text-center text-gray-300 mb-6">
          Enter the 6-digit code sent to your email address
        </p>
        <form className="space-y-6">
          <div className="flex justify-between">
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                maxLength="6"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center text-2xl font-bold
                 bg-gray-700 text-white border-2
                 border-gray-600 rounded-lg focus:border-blue-500
                  focus:outline-none"
              />
            ))}
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isLoading || code.some((digit) => !digit)}
            className="w-full bg-gradient-to-r from-blue-400 to-indigo-600  text-white font-bold py-3 px-4 
          rounded-lg shadow-lg  hover:from-indigo-600 focus:outline-none focus:ring-2
            focus:ring-blue-500 focus:ring-opacity-50 disabled:opacity-50"
          >
            {isLoading ? "Verifying..." : "Verify Email"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export { EmailVerificationPage };