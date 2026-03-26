import { 
  Heart, 
  Activity, 
  AlertTriangle, 
  User, 
  TrendingDown,
  ChevronRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import styles from "./wellbeing.module.css";

export default function StudentWellbeingPage() {
  const flags = [
    { name: "Robert Smith", grade: "11B", issue: "Sudden Drop in Engagement", risk: "Medium", signal: "LMS Activity -60%" },
    { name: "Sarah Williams", grade: "10A", issue: "Consistent Absence Patterns", risk: "High", signal: "3 Consecutive Days" },
    { name: "Michael Chen", grade: "12C", issue: "Social Withdrawal Signal", risk: "Low", signal: "Club Attendance" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Heart size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Student Wellbeing Monitor</h1>
              <p className={styles.subtitle}>Analyzing behavioral patterns and engagement signals to flag students needing counselor intervention.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.riskSection} card`}>
            <h3>Active Behavioral Flags</h3>
            <div className={styles.flagList}>
               {flags.map((f, i) => (
                 <div key={i} className={styles.flagItem}>
                    <div className={styles.fHead}>
                       <div className={styles.avatar}>{f.name[0]}</div>
                       <div>
                          <strong>{f.name}</strong>
                          <span>Grade {f.grade}</span>
                       </div>
                    </div>
                    <div className={styles.fIssue}>
                       <p>{f.issue}</p>
                       <span>Signal: {f.signal}</span>
                    </div>
                    <div className={styles.fRisk}>
                       <span className={`${styles.riskBadge} ${styles[f.risk.toLowerCase()]}`}>{f.risk} Risk</span>
                    </div>
                    <button className={styles.actionBtn}>Intervene</button>
                 </div>
               ))}
            </div>
         </section>

         <section className={`${styles.insightsSection} card`}>
            <h3>Global Wellbeing Insights</h3>
            <div className={styles.chartPlaceholder}>
               <Activity size={48} color="rgba(0,0,0,0.1)" />
               <p>Engagement Trends Over Time</p>
            </div>
            <div className={styles.statsRow}>
               <div className={styles.stat}>
                  <strong>92%</strong>
                  <span>Positive Engagement</span>
               </div>
               <div className={styles.stat}>
                  <strong>8</strong>
                  <span>Active Interventions</span>
               </div>
            </div>
         </section>
      </div>

      <section className={`${styles.protectionArea} glass`}>
         <div className={styles.pHeader}>
            <ShieldCheck size={24} />
            <h3>Proactive Care Protocol</h3>
         </div>
         <p>Our AI analyzes 50+ signals including attendance, assignment timing, and lunch period participation to ensure no student is left behind.</p>
      </section>
    </div>
  );
}
