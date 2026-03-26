"use client";

import {
  Search,
  Bell,
  Mic,
  Wifi,
  Menu,
  X
} from "lucide-react";
import { useAuth, UserRole } from "@/context/AuthContext";
import { useSidebar } from "@/context/SidebarContext";
import styles from "./Header.module.css";

export default function Header() {
  const { role, setRole, user } = useAuth();
  const { toggle, isOpen } = useSidebar();
  const roles: UserRole[] = ['admin', 'teacher', 'student', 'parent'];

  return (
    <header className={styles.header}>
      <button className={styles.mobileMenuBtn} onClick={toggle}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`${styles.searchArea} hide-mobile`}>
        <div className={styles.searchBox}>
          <Search size={18} color="var(--text-tertiary)" />
          <input type="text" placeholder="Global search for students, modules or AI actions..." />
          <kbd className="glass">⌘K</kbd>
        </div>
      </div>
      
      <div className={styles.actions}>
        <button className={`${styles.iconBtn} ${styles.aiVoiceShortcut}`} title="AI Voice Assistant">
          <Mic size={20} />
        </button>

        <div className={styles.utilityIcons}>
          <button className={styles.iconBtn} title="Low Internet Sync">
            <Wifi size={20} color="#ef4444" />
          </button>
          <button className={styles.iconBtn} title="Notifications">
            <Bell size={20} />
            <span className={styles.badge}>12</span>
          </button>
        </div>

        <div className={styles.userProfile}>
        <div className={`${styles.userInfo} hide-mobile`}>
            <span className={styles.userName}>{user.name}</span>
            <span className={styles.userRole}>{role}</span>
          </div>
          <div className={styles.avatar}>
            {user.name.charAt(0)}
          </div>
          
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value as UserRole)}
            className="glass"
            style={{ 
              opacity: 0, 
              position: 'absolute', 
              width: '100px', 
              right: 0, 
              cursor: 'pointer' 
            }}
          >
            {roles.map(r => (
              <option key={r} value={r}>{r.toUpperCase()}</option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
