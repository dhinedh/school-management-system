import { 
  UserPlus, 
  Calendar, 
  Clock, 
  FileText, 
  Settings, 
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Users
} from "lucide-react";
import styles from "./substitute.module.css";

export default function SubstituteRequest() {
  const recentRequests = [
    { type: "Sick Leave", duration: "1 Day", date: "Sep 28", status: "Approved", sub: "Mr. David Smith" },
    { type: "Personal", duration: "0.5 Day", date: "Sep 15", status: "Completed", sub: "Auto-Matched (AI)" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Leave & Substitute Hub</h1>
        <p className={styles.subtitle}>Apply for leave and get AI-matched substitutes for your classes.</p>
      </header>

      <div className={styles.mainGrid}>
         <section className={styles.requestSection}>
            <div className={`${styles.requestCard} card`}>
               <h3>New Request</h3>
               <div className={styles.formGrid}>
                  <div className={styles.field}>
                     <label>Leave Type</label>
                     <select><option>Casual Leave</option></select>
                  </div>
                  <div className={styles.field}>
                     <label>Select Date</label>
                     <input type="date" />
                  </div>
               </div>
               <div className={`${styles.aiMatching} glass`}>
                  <div className={styles.matchHeader}>
                     <Settings size={18} className={styles.spin} />
                     <strong>AI Substitute Recommender</strong>
                  </div>
                  <p>I suggest matching with <strong>Prof. Alex Carter</strong>. He has no lectures during your 10:00 AM slot and specializes in Mathematics.</p>
               </div>
               <button className={styles.submitBtn}>Submit Request & Auto-Assign</button>
            </div>

            <section className={styles.historySection}>
               <h3 className={styles.sectionTitle}>Request History</h3>
               <div className={styles.requestGrid}>
                  {recentRequests.map((r, i) => (
                     <div key={i} className={`${styles.reqItem} card`}>
                        <div className={styles.reqInfo}>
                           <strong>{r.type}</strong>
                           <p>{r.date} • {r.duration}</p>
                        </div>
                        <div className={styles.reqSub}>
                           <Users size={14} />
                           <span>Sub: {r.sub}</span>
                        </div>
                        <span className={styles.reqStatus}>{r.status}</span>
                     </div>
                  ))}
               </div>
            </section>
         </section>

         <aside className={styles.quotaSection}>
            <div className={`${styles.quotaCard} glass`}>
               <h3>Leave Quota</h3>
               <div className={styles.quotaGrid}>
                  <div className={styles.qItem}>
                     <span>Casual</span>
                     <strong>08 / 12</strong>
                  </div>
                  <div className={styles.qItem}>
                     <span>Sick</span>
                     <strong>04 / 06</strong>
                  </div>
                  <div className={styles.qItem}>
                     <span>Annual</span>
                     <strong>10 / 15</strong>
                  </div>
               </div>
            </div>

            <div className="card">
               <h3 className={styles.sideTitle}><AlertCircle size={18} /> Faculty Guidelines</h3>
               <p className={styles.guideText}>Please submit requests at least 48 hours in advance for non-emergency leave to allow the AI to optimize scheduling.</p>
            </div>
         </aside>
      </div>
    </div>
  );
}
