import { 
  Calendar, 
  RefreshCw, 
  Settings, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  UserCheck, 
  Layout, 
  Plus,
  Zap,
  ChevronRight
} from "lucide-react";
import styles from "./timetable.module.css";

export default function TimetableGenPage() {
  const constraints = [
    { type: "Teacher Availability", status: "Verified", count: "100%" },
    { type: "Room Capacity", status: "Verified", count: "48 Rooms" },
    { type: "Subject Priority", status: "Conflict Found", count: "2 Labs" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Zap size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Smart Timetable Generator</h1>
              <p className={styles.subtitle}>Genetic algorithms optimizing 10,000+ possible schedule combinations.</p>
           </div>
        </div>
        <button className="btn btn-primary">Generate New Draft</button>
      </header>

      <section className={styles.statsRow}>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Efficiency Score</p>
            <p className={styles.statsValue}>98.5%</p>
         </div>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Conflict Resolution</p>
            <p className={styles.statsValue}>Auto</p>
         </div>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Processing Time</p>
            <p className={styles.statsValue}>4.2s</p>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={`${styles.genSection} card`}>
            <div className={styles.sectionHeader}>
               <h2>Constraint Checklist</h2>
               <button className={styles.syncBtn}><RefreshCw size={16} /> Re-sync Data</button>
            </div>
            <div className={styles.constraintList}>
               {constraints.map((c, i) => (
                 <div key={i} className={styles.cItem}>
                    <div className={styles.cInfo}>
                       {c.status === 'Verified' ? <CheckCircle size={20} color="#10b981" /> : <AlertTriangle size={20} color="#f59e0b" />}
                       <span className={styles.cType}>{c.type}</span>
                    </div>
                    <span className={styles.cCount}>{c.count}</span>
                 </div>
               ))}
            </div>
         </section>

         <aside className={styles.sidebarSection}>
            <div className={`${styles.draftCard} glass`}>
               <h3>Current Draft: V2.4</h3>
               <p className={styles.draftDesc}>Generated 2 hours ago. Optimized for Teacher Work-Life Balance.</p>
               <div className={styles.scoreBox}>
                  <strong>9.2</strong>
                  <span>Teacher Satisfaction</span>
               </div>
               <div className={styles.draftActions}>
                  <button className={styles.diffBtn}>Diff with Current</button>
                  <button className={styles.publishBtn}>Publish to Portal</button>
               </div>
            </div>

            <div className={`${styles.preferenceCard} card`}>
                <h3>Advanced Preferences</h3>
                <div className={styles.prefList}>
                   <div className={styles.prefItem}>
                      <Settings size={16} />
                      <span>Maximize Lab Utilization</span>
                   </div>
                   <div className={styles.prefItem}>
                      <Layout size={16} />
                      <span>Group Grades by Wing</span>
                   </div>
                </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
