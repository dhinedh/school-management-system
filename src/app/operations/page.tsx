import { 
  Zap, 
  RefreshCw, 
  ArrowRight, 
  ShieldCheck, 
  Play, 
  Plus, 
  History, 
  CheckCircle,
  AlertTriangle,
  Settings2,
  Calendar
} from "lucide-react";
import styles from "./operations.module.css";

export default function AutoOperationsPage() {
  const automations = [
    { title: "Student Grade Promotion", trigger: "End of Term 3", impact: "Moves 1,200 students to next grade", status: "Ready" },
    { title: "Annual Fee Structure", trigger: "April 1st", impact: "Generates invoices for all students", status: "Active" },
    { title: "AI Timetable Generation", trigger: "Term Start", impact: "Assigns subjects to 50+ teachers", status: "Ready" },
    { title: "Report Card Archival", trigger: "Post Result Publish", impact: "Moves reports to permanent storage", status: "Active" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Smart Auto-Operations Engine</h1>
          <p className={styles.subtitle}>Autonomous background tasks handling 70% of routine institutional administration.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><History size={18} /> Logs</button>
           <button className="btn btn-primary"><Play size={18} /> Execute End-of-Year Cycle</button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Manual Hours Saved</p>
           <p className={styles.statsValue}>840h / Yr</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Automation Health</p>
           <p className={styles.statsValue}>99.9%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Tasks Handled</p>
           <p className={styles.statsValue}>2,450</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Human Oversight Rate</p>
           <p className={styles.statsValue}>2%</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.automationSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Autonomous Task Clusters</h2>
              <button className={styles.addBtn}><Plus size={18} /> Add Hook</button>
           </div>
           
           <div className={styles.taskList}>
              {automations.map((a, i) => (
                <div key={i} className={styles.aItem}>
                   <div className={styles.aIcon}><Zap size={20} color="var(--primary-color)" /></div>
                   <div className={styles.aInfo}>
                      <div className={styles.aHeader}>
                         <p className={styles.aTitle}>{a.title}</p>
                         <span className={`${styles.statusBadge} ${styles[a.status.toLowerCase()]}`}>{a.status}</span>
                      </div>
                      <p className={styles.aImpact}>{a.impact}</p>
                      <p className={styles.aTrigger}>Scheduled: {a.trigger}</p>
                   </div>
                   <button className={styles.settingsBtn}><Settings2 size={18} /></button>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.promotionCard} glass`}>
               <h3>End-of-Year Workflow</h3>
               <div className={styles.workflowSteps}>
                  <div className={`${styles.step} ${styles.done}`}>
                     <CheckCircle size={16} />
                     <span>Final Grades Audit</span>
                  </div>
                  <div className={`${styles.step} ${styles.active}`}>
                     <RefreshCw size={16} className={styles.spin} />
                     <span>Student Migration</span>
                  </div>
                  <div className={styles.step}>
                     <span></span>
                     <span>Fee Structure Sync</span>
                  </div>
               </div>
               <div className={styles.migrationAlert}>
                  <AlertTriangle size={16} color="#f59e0b" />
                  <span>2 Students flagged for detention. Manual review required.</span>
               </div>
            </div>

            <div className={`${styles.configCard} card`}>
               <Calendar size={24} color="var(--primary-color)" />
               <h3>Autonomous Calendar</h3>
               <p>The system is set to transition to Academic Year <strong>25-26</strong> on <strong>June 1st</strong>.</p>
               <button className={styles.editBtn}>Modify Transition Schedule</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
