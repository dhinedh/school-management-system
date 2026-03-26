import { 
  ShieldPlus, 
  Eye, 
  Lock, 
  UserCheck, 
  Camera, 
  AlertSquare, 
  Clock, 
  Search, 
  Maximize2,
  Bell,
  Fingerprint
} from "lucide-react";
import styles from "./security.module.css";

export default function CampusSecurityHub() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Campus Security AI Hub</h1>
        <p className={styles.subtitle}>Unified real-time monitoring of campus safety, visitors, and facial logs.</p>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.surveillanceSection} card`}>
            <div className={styles.camHeader}>
               <div className={styles.statusBadge}>
                  <div className={styles.dot}></div>
                  <span>LIVE SURVEILLANCE ACTIVE</span>
               </div>
               <div className={styles.camGrid}>
                  <button className={styles.camBtn}>CAM 01 - MAIN GATE</button>
                  <button className={styles.camBtn}>CAM 04 - LAB WING</button>
               </div>
            </div>
            <div className={styles.monitorArea}>
               <div className={styles.gridOverlay}></div>
               <div className={styles.idBox} style={{ left: '60%', top: '40%', width: '100px', height: '140px' }}>
                  <div className={styles.idLabel}>STUDENT #842</div>
               </div>
               <p className={styles.scanLabel}>Facial Recognition Sync: 99.8% Match</p>
            </div>
         </section>

         <aside className={styles.securitySidebar}>
            <div className={`${styles.alertCard} glass`}>
               <div className={styles.alertHeader}>
                  <AlertSquare size={20} color="#ef4444" />
                  <h3>Security Alerts</h3>
               </div>
               <div className={styles.alertItem}>
                  <strong>Unauthorized Access Attempt</strong>
                  <p>Back Gate 2 • 09:42 AM</p>
               </div>
            </div>

            <div className="card">
               <h3 className={styles.sideTitle}><UserCheck size={18} /> Visitor Log</h3>
               <div className={styles.visitorList}>
                  <div className={styles.visitorItem}>
                     <strong>Mark Stevens</strong>
                     <span>Checking Out...</span>
                  </div>
                  <div className={styles.visitorItem}>
                     <strong>Sarah Jenkins</strong>
                     <span>08:15 AM Entry</span>
                  </div>
               </div>
            </div>

            <div className={`${styles.authCard} card`}>
               <div className={styles.authHeader}>
                  <Fingerprint size={18} />
                  <span>Bio-Metrics Status</span>
               </div>
               <p>All nodes online. Last sync 2 mins ago.</p>
            </div>
         </aside>
      </div>
    </div>
  );
}
