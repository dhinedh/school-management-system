import { 
  Settings, 
  User, 
  Shield, 
  Globe, 
  Bell, 
  Database, 
  Lock, 
  History, 
  Save,
  Plus,
  ChevronRight
} from "lucide-react";
import styles from "./settings.module.css";

export default function SettingsPage() {
  const roles = [
    { name: "Super Admin", users: 2, permissions: "Full Access" },
    { name: "School Admin", users: 5, permissions: "Limited Finance" },
    { name: "Teacher", users: 45, permissions: "Academic Only" },
    { name: "Registrar", users: 3, permissions: "Student Data" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>System Settings</h1>
          <p className={styles.subtitle}>Configure school profile, manage user access, and monitor system health.</p>
        </div>
        <button className="btn btn-primary">
           <Save size={18} />
           <span>Save All Changes</span>
        </button>
      </header>

      <div className={styles.settingsGrid}>
         <aside className={styles.sidebar}>
            <nav className={styles.nav}>
               <div className={`${styles.navItem} ${styles.active}`}>
                  <Globe size={18} />
                  <span>School Profile</span>
               </div>
               <div className={styles.navItem}>
                  <Shield size={18} />
                  <span>Roles & Permissions</span>
               </div>
               <div className={styles.navItem}>
                  <User size={18} />
                  <span>User Management</span>
               </div>
               <div className={styles.navItem}>
                  <Bell size={18} />
                  <span>Notifications</span>
               </div>
               <div className={styles.navItem}>
                  <Database size={18} />
                  <span>Backup & Restore</span>
               </div>
               <div className={styles.navItem}>
                  <Lock size={18} />
                  <span>Security</span>
               </div>
            </nav>
         </aside>

         <main className={styles.mainContent}>
            <section className={`${styles.contentCard} card`}>
               <h2>General School Profile</h2>
               <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                     <label>School Name</label>
                     <input type="text" defaultValue="Zech International School" />
                  </div>
                  <div className={styles.formGroup}>
                     <label>School Code</label>
                     <input type="text" defaultValue="ZIS-2024" />
                  </div>
                  <div className={styles.formGroup}>
                     <label>Founding Year</label>
                     <input type="text" defaultValue="1998" />
                  </div>
                  <div className={styles.formGroup}>
                     <label>Contact Email</label>
                     <input type="email" defaultValue="admin@zechschool.edu" />
                  </div>
               </div>
            </section>

            <section className={`${styles.contentCard} card`}>
               <div className={styles.cardHeader}>
                  <h2>Roles & Access Control</h2>
                  <button className={styles.addBtn}><Plus size={16} /> New Role</button>
               </div>
               <div className={styles.roleList}>
                  {roles.map((role, i) => (
                    <div key={i} className={styles.roleItem}>
                       <div className={styles.roleMain}>
                          <strong>{role.name}</strong>
                          <span>{role.users} Users assigned</span>
                       </div>
                       <div className={styles.permList}>
                          <span className={styles.permTag}>{role.permissions}</span>
                       </div>
                       <button className={styles.editBtn}>Edit</button>
                    </div>
                  ))}
               </div>
            </section>

            <section className={`${styles.auditCard} glass`}>
               <div className={styles.auditHeader}>
                  <History size={18} color="var(--primary-color)" />
                  <span>System Audit Log (Last 24h)</span>
               </div>
               <div className={styles.logList}>
                  <p className={styles.logItem}><span>10:45 AM</span> • Admin <strong>"mural"</strong> updated fee structure for Grade 12.</p>
                  <p className={styles.logItem}><span>09:12 AM</span> • System <strong>"Auto-Backup"</strong> completed successfully.</p>
               </div>
            </section>
         </main>
      </div>
    </div>
  );
}
