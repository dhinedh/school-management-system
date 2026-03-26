import { 
  ShieldAlert, 
  TrendingDown, 
  DollarSign, 
  Search, 
  MoreVertical,
  CheckCircle2,
  AlertTriangle,
  Sparkles
} from "lucide-react";
import styles from "./anomaly.module.css";

export default function FinanceAnomalyDetectorPage() {
  const anomalies = [
    { title: "Duplicate Transaction Flagged", amount: "$1,200", date: "Mar 20, 2024", type: "Tuition Fee", risk: "High" },
    { title: "Irregular Discount Applied", amount: "-$500", date: "Mar 18, 2024", type: "Scholarship", risk: "Medium" },
    { title: "Unusual Bulk Payment Pattern", amount: "$14,000", date: "Mar 15, 2024", type: "Operational", risk: "High" },
    { title: "Spending Out of Trend", amount: "$2,850", date: "Mar 10, 2024", type: "Inventory", risk: "Low" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><ShieldAlert size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Finance Anomaly Detector</h1>
              <p className={styles.subtitle}>Continuous monitoring of fee collection and operational spending to flag duplicates and overruns.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.overviewCard} card`}>
            <h3>Anomaly Detection Engine</h3>
            <div className={styles.engineStatus}>
               <div className={styles.statusInfo}>
                  <Sparkles size={20} color="var(--primary-color)" />
                  <span>Real-time analysis active</span>
               </div>
               <div className={styles.statsRow}>
                  <div className={styles.statItem}>
                     <strong>12,450</strong>
                     <span>Transactions Audited</span>
                  </div>
                  <div className={styles.statItem}>
                     <strong>4</strong>
                     <span>Open Flags</span>
                  </div>
               </div>
            </div>
            <button className={styles.runAuditBtn}>Force System-Wide Audit</button>
         </section>

         <section className={`${styles.anomalyListSection} card`}>
            <h3>Active Audit Flags</h3>
            <div className={styles.anomalyList}>
               {anomalies.map((an, i) => (
                 <div key={i} className={styles.anomalyItem}>
                    <div className={styles.anIcon}>
                       <AlertTriangle size={20} color={an.risk === 'High' ? '#ef4444' : '#f59e0b'} />
                    </div>
                    <div className={styles.anMain}>
                       <strong>{an.title}</strong>
                       <span>{an.type} • {an.date}</span>
                    </div>
                    <div className={styles.anMeta}>
                       <span className={styles.amount}>{an.amount}</span>
                       <span className={`${styles.riskBadge} ${styles[an.risk.toLowerCase()]}`}>{an.risk} Risk</span>
                    </div>
                    <button className={styles.moreBtn}><MoreVertical size={18} /></button>
                 </div>
               ))}
            </div>
         </section>
      </div>

      <section className={`${styles.preventionSection} glass`}>
         <div className={styles.pHeader}>
            <CheckCircle2 size={24} />
            <h3>AI Prevention & Savings</h3>
         </div>
         <div className={styles.pGrid}>
            <div className={styles.pCard}>
               <strong>$4,200</strong>
               <span>Duplicates Prevented (YTD)</span>
            </div>
            <div className={styles.pCard}>
               <strong>8%</strong>
               <span>Budget Accuracy Improvement</span>
            </div>
            <div className={styles.pCard}>
               <strong>Auto</strong>
               <span>Policy Enforcement</span>
            </div>
         </div>
      </section>
    </div>
  );
}
