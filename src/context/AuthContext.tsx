"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

interface AuthContextType {
  role: UserRole;
  setRole: (role: UserRole) => void;
  isLoggedIn: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  user: {
    name: string;
    email: string;
    avatar?: string;
  };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<UserRole>('admin');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedRole = localStorage.getItem('sms_role') as UserRole;
    const savedLogin = localStorage.getItem('sms_isLoggedIn') === 'true';
    if (savedRole) setRole(savedRole);
    if (savedLogin) setIsLoggedIn(savedLogin);
    setIsLoading(false);
  }, []);

  const login = (email: string, pass: string) => {
    const credentials: Record<string, { role: UserRole, pass: string }> = {
      'admin@school.com': { role: 'admin', pass: 'admin123' },
      'teacher@school.com': { role: 'teacher', pass: 'teacher123' },
      'student@school.com': { role: 'student', pass: 'student123' },
      'parent@school.com': { role: 'parent', pass: 'parent123' },
    };

    if (credentials[email] && credentials[email].pass === pass) {
      const newRole = credentials[email].role;
      setRole(newRole);
      setIsLoggedIn(true);
      localStorage.setItem('sms_role', newRole);
      localStorage.setItem('sms_isLoggedIn', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('sms_isLoggedIn');
    localStorage.removeItem('sms_role');
  };

  const currentRole = role;
  const user = {
    name: currentRole.charAt(0).toUpperCase() + currentRole.slice(1) + " User",
    email: `${currentRole}@school.com`,
  };

  return (
    <AuthContext.Provider value={{ role, setRole: (r) => { 
      setRole(r); 
      localStorage.setItem('sms_role', r);
    }, isLoggedIn, isLoading, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
