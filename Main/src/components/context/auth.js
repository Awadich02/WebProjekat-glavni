// src/context/auth.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === "admin@gmail.com" && password === "admin123") {
      setUser({ email, role: 'admin' });
      return true;
    } else if (email === "user@gmail.com" && password === "user123") {
      setUser({ email, role: 'user' });
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
