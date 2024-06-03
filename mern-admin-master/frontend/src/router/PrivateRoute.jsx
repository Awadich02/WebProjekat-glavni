import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import * as authService from "@/auth";

const PrivateRoute = () => {
  const config = {
    type: "spring",
    damping: 20,
    stiffness: 100,
  };

  return authService.token.get() ? (
    <motion.div
      transition={config}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
    >
      <Outlet />
    </motion.div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
