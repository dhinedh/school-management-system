"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationByRole } from "@/lib/navigation";
import { useAuth } from "@/context/AuthContext";
import { useSidebar } from "@/context/SidebarContext";
import { LogOut, Layout, X } from "lucide-react";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  const { role, logout } = useAuth();
  const { isOpen, close } = useSidebar();
  const pathname = usePathname();
  const menu = navigationByRole[role] || [];

  return (
    <>
      {isOpen && <div className={styles.overlay} onClick={close}></div>}
      <aside className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.logoArea}>
          <div className={styles.logoIcon}>
            <Layout size={24} color="var(--primary-color)" />
          </div>
          <span className={styles.logoTitle}>SmartOS Pro</span>
          <button className={styles.closeBtn} onClick={close}>
            <X size={24} />
          </button>
        </div>
      
      <nav className={styles.navSection}>
        {menu.map((group: any, index: number) => (
          <div key={index}>
            <h3 className={styles.sectionTitle}>{group.title}</h3>
            {group.items.map((item: any, itemIndex: number) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link 
                  key={itemIndex} 
                  href={item.href || '#'} 
                  className={`${styles.navItem} ${isActive ? styles.activeItem : ''}`}
                >
                  <div className={styles.iconWrapper}>
                    <Icon size={20} />
                  </div>
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
      
      <div className={styles.footer}>
        <button onClick={logout} className={styles.logoutBtn}>
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
      </aside>
    </>
  );
}
