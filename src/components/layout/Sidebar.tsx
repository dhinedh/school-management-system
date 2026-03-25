import Link from "next/link";
import { navigationContent } from "@/lib/navigation";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className={styles.logo}>
        <div className={styles.icon}>S</div>
        <span className={styles.brand}>SMS Pro</span>
      </div>
      
      <nav className={styles.nav}>
        {navigationContent.map((group, index) => (
          <div key={index} className={styles.group}>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.list}>
              {group.items.map((item, itemIndex) => {
                const Icon = item.icon;
                return (
                  <li key={itemIndex}>
                    <Link href={item.href} className={styles.link}>
                      <Icon size={18} />
                      <span>{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      
      <div className={styles.footer}>
        <div className={styles.user}>
          <div className={styles.avatar}>A</div>
          <div className={styles.userInfo}>
            <p className={styles.userName}>Admin User</p>
            <p className={styles.userRole}>System Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
