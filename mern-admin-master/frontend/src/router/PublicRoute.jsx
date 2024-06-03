import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import * as authService from "@/auth";

const PublicRoute = () => {
  return authService.token.get() ? (
    <Navigate to="/" />
  ) : (
    <motion.div initial={{ x: 200 }} animate={{ x: 0 }} exit={{ scale: 0 }}>
      <Outlet />
    </motion.div>
  );
};

export default PublicRoute;
