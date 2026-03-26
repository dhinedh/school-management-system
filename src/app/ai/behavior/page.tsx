import { 
  AlertCircle, 
  TrendingDown, 
  MessageSquare, 
  ShieldAlert, 
  Users, 
  Brain, 
  Search,
  Filter,
  BarChart,
  CheckCircle,
  HelpCircle
} from "lucide-react";
import styles from "./behavior.module.css";

export default function BehaviorAIPage() {
  const flags = [
    { student: "Ethan Hunt", grade: "10A", pattern: "Sudden Social Withdrawal", risk: "Moderate", recommendation: "Counselor Meeting" },
    { student: "Liam Neeson", grade: "12C", pattern: "Increased Aggression", risk: "High", recommendation: "Immediate Parent Meeting" },
    { student: "Emma Watson", grade: "11B", pattern: "Academic Performance Drop", risk: "Low", recommendation: "Peer Tutoring" },
    { student: "Bruce Wayne", grade: "9A", pattern: "Chronic Lateness", risk: "Moderate", recommendation: "Transport Audit" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Behavior & Discipline AI</h1>
          <p className={styles.subtitle}>Non-intrusive behavioral pattern analysis for early intervention and student wellbeing.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><Users size={18} /> Counselor Dashboard</button>
           <button className="btn btn-primary"><ShieldAlert size={18} /> Incident Log</button>
        </div>
      </header>

      <section className={styles.riskOverview}>
        <div className={`${styles.riskCard} ${styles.high}`}>
           <p className={styles.label}>High Risk Students</p>
           <p className={styles.value}>3</p>
           <span>Immediate attention needed</span>
        </div>
        <div className={`${styles.riskCard} ${styles.moderate}`}>
           <p className={styles.label}>Moderate Risk</p>
           <p className={styles.value}>12</p>
           <span>Monitor closely</span>
        </div>
        <div className={`${styles.riskCard} ${styles.stable}`}>
           <p className={styles.label}>Stable / Improved</p>
           <p className={styles.value}>1,235</p>
           <span>Positive trends</span>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.flagSection} card`}>
           <div className={styles.tableHeader}>
              <h2>AI Behavioral Flags</h2>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search student..." />
              </div>
           </div>
           
           <div className={styles.flagList}>
              {flags.map((f, i) => (
                <div key={i} className={styles.fItem}>
                   <div className={styles.fInfo}>
                      <div className={styles.fHeader}>
                         <p className={styles.fName}>{f.student}</p>
                         <span className={styles.fGrade}>{f.grade}</span>
                      </div>
                      <p className={styles.fPattern}>{f.pattern}</p>
                   </div>
                   <div className={styles.fRisk}>
                      <span className={`${styles.riskBadge} ${styles[f.risk.toLowerCase()]}`}>{f.risk} Risk</span>
                   </div>
                   <div className={styles.fAction}>
                      <p className={styles.recTitle}>Recommendation:</p>
                      <p className={styles.recText}>{f.recommendation}</p>
                   </div>
                   <button className={styles.resolveBtn}>Log Intervention</button>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.wellbeingCard} glass`}>
               <Brain size={24} color="var(--primary-color)" />
               <h3>Wellbeing Sentiment</h3>
               <p>Institutional morale is currently <strong>High (88%)</strong> based on attendance, participation, and feedback sentiment.</p>
               <div className={styles.sentimentBar}>
                  <div className={styles.sFill} style={{ width: '88%' }}></div>
               </div>
            </div>

            <div className={`${styles.reportCard} card`}>
               <h3>Incident Reports</h3>
               <div className={styles.incidentRow}>
                  <span>Verbal Dispute (10A)</span>
                  <span className={styles.time}>2h ago</span>
               </div>
               <div className={styles.incidentRow}>
                  <span>Property Damage (Lab)</span>
                  <span className={styles.time}>Yesterday</span>
               </div>
               <button className={styles.viewAllBtn}>View All Logs</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
