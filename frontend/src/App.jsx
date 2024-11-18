import React from "react";
import { FloatingShape } from "./components";
import { Route, Routes } from "react-router-dom";
import { SignupPage, LoginPage, EmailVerificationPage } from "./pages";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div
      className="min-h-screen bg-gradient-to-br 
    from-blue-950 via-cyan-700 to-blue-600 flex 
    items-center justify-center relative overflow-hidden "
    >
      <FloatingShape
        color="bg-blue-300"
        size="w-64 h-64"
        top="-5%"
        left="10%"
        delay={0}
      />
      <FloatingShape
        color="bg-orange-200"
        size="w-48 h-48"
        top="70%"
        left="80%"
        delay={5}
      />
      <FloatingShape
        color="bg-indigo-400"
        size="w-32 h-32"
        top="40%"
        g
        left="-10%"
        delay={2}
      />

      <Routes>
        <Route path="/" element={"Home"} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
