import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Search, 
  BrainCircuit, 
  Bell, 
  User,
  Menu
} from 'lucide-react';
import { useSidebar } from '@/context/SidebarContext';
import styles from './MobileBottomNav.module.css';

const MobileBottomNav = () => {
  const pathname = usePathname();
  const { toggle } = useSidebar();

  const navItems = [
    { name: 'Home', href: '/', icon: LayoutDashboard },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'AI Hub', href: '/ai', icon: BrainCircuit, isFAB: true },
    { name: 'Alerts', href: '/notifications', icon: Bell },
  ];

  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          if (item.isFAB) {
            return (
              <div key={item.name} className={styles.fabWrapper}>
                <Link href={item.href} className={`${styles.fab} touch-active`}>
                  <Icon size={28} />
                </Link>
                <span className={styles.fabLabel}>{item.name}</span>
              </div>
            );
          }

          return (
            <Link 
              key={item.name} 
              href={item.href} 
              className={`${styles.navItem} ${isActive ? styles.active : ''} touch-active`}
            >
              <Icon size={22} />
              <span className={styles.label}>{item.name}</span>
            </Link>
          );
        })}
        
        <button onClick={toggle} className={`${styles.navItem} touch-active`}>
          <Menu size={22} />
          <span className={styles.label}>Menu</span>
        </button>
      </nav>
    </div>
  );
};

export default MobileBottomNav;
