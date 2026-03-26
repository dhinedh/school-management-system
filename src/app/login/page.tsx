"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { 
  LogIn, 
  User, 
  Key, 
  Zap, 
  Layout, 
  Globe, 
  ShieldCheck, 
  WifiOff,
  AlertCircle
} from "lucide-react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [lang, setLang] = useState("EN");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push("/");
    } else {
      setError("Invalid credentials. Please select a demo role below.");
    }
  };

  const quickLogin = (e: string, p: string) => {
    setEmail(e);
    setPassword(p);
  };

  return (
    <div className={styles.container}>
      {/* Background Animated Meshes */}
      <div className={styles.background}>
         <div className={styles.circle1}></div>
         <div className={styles.circle2}></div>
         <div className={styles.circle3}></div>
      </div>

      {/* Left Panel: Branding & Value Prop */}
      <div className={styles.leftPanel}>
        <div className={styles.logoBox}>
           <div className={styles.logoIcon}>
              <Layout size={36} />
           </div>
        </div>
        
        <h1 className={styles.heroTitle}>
          SmartOS Pro. <br/>
          <span style={{ color: 'var(--primary-color)' }}>Institutional Engine</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          The comprehensive strategic platform designed for resilient operation, 
          offline readiness, and seamless hybrid communication.
        </p>

        <div className={styles.featureList}>
           <div className={styles.featureItem}>
              <div className={styles.featureIcon}><ShieldCheck size={20} /></div>
              <div className={styles.featureText}>
                 <h4>Enterprise Security</h4>
                 <p>Military-grade AES-256 encryption</p>
              </div>
           </div>
           
           <div className={styles.featureItem}>
              <div className={styles.featureIcon}><WifiOff size={20} /></div>
              <div className={styles.featureText}>
                 <h4>Offline-First Resilience</h4>
                 <p>Operational even in low-bandwidth rural areas</p>
              </div>
           </div>
           
           <div className={styles.featureItem}>
              <div className={styles.featureIcon}><Globe size={20} /></div>
              <div className={styles.featureText}>
                 <h4>Hybrid Communication</h4>
                 <p>WhatsApp, IVR, SMS, and Print Routing</p>
              </div>
           </div>
        </div>
      </div>

      {/* Right Panel: Authentication */}
      <div className={styles.rightPanel}>
        
        <div className={styles.topNav}>
           <div className={styles.statusBadge} title="System is operating normally">
              <div className={styles.statusDot}></div>
              Global Sync Active
           </div>
           <div className={styles.langToggle}>
              <span className={lang === 'EN' ? styles.langActive : ''} onClick={() => setLang('EN')}>EN</span>
              <span>/</span>
              <span className={lang === 'TA' ? styles.langActive : ''} onClick={() => setLang('TA')}>TA</span>
           </div>
        </div>

        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
             <h2>Welcome Back</h2>
             <p>Sign in to your centralized dashboard</p>
          </div>

          <form className={styles.form} onSubmit={handleLogin}>
             <div className={styles.inputGroup}>
                <User size={18} className={styles.inputIcon} />
                <input 
                  type="email" 
                  placeholder="Corporate Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
             </div>
             
             <div className={styles.inputGroup}>
                <Key size={18} className={styles.inputIcon} />
                <input 
                  type="password" 
                  placeholder="Security Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
             </div>

             {error && (
               <div className={styles.error}>
                 <AlertCircle size={16} />
                 <span>{error}</span>
               </div>
             )}

             <button type="submit" className={styles.loginBtn}>
                <LogIn size={18} /> Authenticate Session
             </button>
          </form>

          <div className={styles.credentialsGuide}>
             <div className={styles.guideHeader}>
                <h3>Quick Connect Demo</h3>
             </div>
             <div className={styles.rolesGrid}>
                <div className={styles.rolePill} onClick={() => quickLogin('admin@school.com', 'admin123')}>
                   <ShieldCheck size={14} className={styles.roleIcon} /> Admin
                </div>
                <div className={styles.rolePill} onClick={() => quickLogin('teacher@school.com', 'teacher123')}>
                   <User size={14} className={styles.roleIcon} /> Teacher
                </div>
                <div className={styles.rolePill} onClick={() => quickLogin('student@school.com', 'student123')}>
                   <Layout size={14} className={styles.roleIcon} /> Student
                </div>
                <div className={styles.rolePill} onClick={() => quickLogin('parent@school.com', 'parent123')}>
                   <Globe size={14} className={styles.roleIcon} /> Parent
                </div>
             </div>
             <p className={styles.hint}><Zap size={12} color="var(--primary-color)" /> Tap a role pill to auto-fill credentials</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
