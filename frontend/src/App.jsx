import React, { useEffect } from "react";
import { FloatingShape } from "./components";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  SignupPage,
  LoginPage,
  EmailVerificationPage,
  DashboardPage,
} from "./pages";
import { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore";

//protecting routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (!isAuthenticated) {
    return <Navigate to="login" replace />;
  }
  if (!user.isVerified) {
    return <Navigate to="verify-email" replace />;
  }
  return children;
};

//redirecting authenticated user to homepage
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();
  if (isAuthenticated && user.isVerified) {
    return <Navigate to="/" replace />;
  }
  return children;
};

const App = () => {
  const { checkAuth, isAuthenticated, isCheckingAuth, user } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(isAuthenticated);
  console.log(user);

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
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthenticatedUser>
              <SignupPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthenticatedUser>
              <LoginPage />
            </RedirectAuthenticatedUser>
          }
        />
        <Route path="/verify-email" element={<EmailVerificationPage />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
