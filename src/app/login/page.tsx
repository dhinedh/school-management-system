"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { LogIn, Shield, User, Key, Info, Zap, Layout } from "lucide-react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push("/");
    } else {
      setError("Invalid credentials. Please check the guide below.");
    }
  };

  const quickLogin = (e: string, p: string) => {
    setEmail(e);
    setPassword(p);
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginCard}>
        <div className={styles.logoBox}>
           <div className={styles.logoIcon}>
              <Layout size={32} />
           </div>
           <h1>SmartOS Pro</h1>
           <p>Institutional Strategic Operating System</p>
        </div>

        <form className={styles.form} onSubmit={handleLogin}>
           <div className={styles.inputGroup}>
              <User size={18} className={styles.inputIcon} />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
           </div>
           <div className={styles.inputGroup}>
              <Key size={18} className={styles.inputIcon} />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
           </div>

           {error && <p className={styles.error}>{error}</p>}

           <button type="submit" className={styles.loginBtn}>
              <LogIn size={18} /> Sign In
           </button>
        </form>

        <div className={styles.credentialsGuide}>
           <div className={styles.guideHeader}>
              <Info size={16} />
              <h3>Demo Credentials</h3>
           </div>
           <div className={styles.rolesGrid}>
              <div className={styles.roleItem} onClick={() => quickLogin('admin@school.com', 'admin123')}>
                 <p className={styles.roleName}>Admin</p>
                 <p className={styles.cred}>admin@school.com / admin123</p>
              </div>
              <div className={styles.roleItem} onClick={() => quickLogin('teacher@school.com', 'teacher123')}>
                 <p className={styles.roleName}>Teacher</p>
                 <p className={styles.cred}>teacher@school.com / teacher123</p>
              </div>
              <div className={styles.roleItem} onClick={() => quickLogin('student@school.com', 'student123')}>
                 <p className={styles.roleName}>Student</p>
                 <p className={styles.cred}>student@school.com / student123</p>
              </div>
              <div className={styles.roleItem} onClick={() => quickLogin('parent@school.com', 'parent123')}>
                 <p className={styles.roleName}>Parent</p>
                 <p className={styles.cred}>parent@school.com / parent123</p>
              </div>
           </div>
           <p className={styles.hint}><Zap size={12} /> Click a role to auto-fill credentials</p>
        </div>
      </div>
      
      <div className={styles.background}>
         <div className={styles.circle1}></div>
         <div className={styles.circle2}></div>
      </div>
    </div>
  );
}
