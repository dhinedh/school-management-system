import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  AlertTriangle, 
  BarChart3, 
  Calendar, 
  PieChart, 
  ArrowUpRight, 
  ArrowDownRight,
  Zap,
  Bell,
  Settings
} from "lucide-react";
import styles from "./optimizer.module.css";

export default function FeeOptimizerPage() {
  const risks = [
    { student: "Jack Sparrow", grade: "10A", dues: "$1,200", probability: "High", factor: "Historical Pattern", status: "Notification Sent" },
    { student: "Tony Stark", grade: "12C", dues: "$4,500", probability: "Low", factor: "Late Payment Record", status: "Upcoming" },
    { student: "Peter Parker", grade: "9B", dues: "$600", probability: "Moderate", factor: "Engagement Drop", status: "Pending Manual Call" },
    { student: "Wanda Maximoff", grade: "11A", dues: "$2,200", probability: "High", factor: "Multiple Overdue Tags", status: "Restricted" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Fee Prediction & Collection Optimizer</h1>
          <p className={styles.subtitle}>AI-driven cashflow forecasting and automated payment recovery intelligence.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><Bell size={18} /> Reminder Rules</button>
           <button className="btn btn-primary"><TrendingUp size={18} /> Run Forecast</button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Projected Revenue (Term 3)</p>
           <p className={styles.statsValue}>$1.85M</p>
           <div className={styles.trend}><ArrowUpRight size={14} /> 4.2% vs Preview</div>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Probable Default Risk</p>
           <p className={`${styles.statsValue} ${styles.warning}`}>$42,600</p>
           <div className={`${styles.trend} ${styles.down}`}><ArrowDownRight size={14} /> 1.5% Improv.</div>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Collection Efficiency</p>
           <p className={styles.statsValue}>92.4%</p>
           <div className={styles.trend}>Target: 95%</div>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>AI Recovery Rate</p>
           <p className={styles.statsValue}>78%</p>
           <div className={styles.trend}>Automated Saves</div>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.riskSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Collection Risk Analysis</h2>
              <div className={styles.iconBox}><Zap size={18} color="#f59e0b" /></div>
           </div>
           
           <div className={styles.riskList}>
              {risks.map((r, i) => (
                <div key={i} className={styles.rItem}>
                   <div className={styles.rInfo}>
                      <div className={styles.rHeader}>
                         <p className={styles.rName}>{r.student}</p>
                         <span className={styles.rGrade}>{r.grade}</span>
                      </div>
                      <p className={styles.rFactor}>Primary Driver: {r.factor}</p>
                   </div>
                   <div className={styles.rDues}>
                      <p className={styles.duesLabel}>Dues</p>
                      <p className={styles.duesValue}>{r.dues}</p>
                   </div>
                   <div className={styles.rProb}>
                      <span className={`${styles.probBadge} ${styles[r.probability.toLowerCase()]}`}>
                         {r.probability} Prob. of Default
                      </span>
                   </div>
                   <div className={styles.rStatus}>
                      <button className={styles.actionBtn}>{r.status}</button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.insightCard} glass`}>
               <h3>Smart Recommendation</h3>
               <div className={styles.recommendContent}>
                  <Zap size={24} color="#f59e0b" />
                  <p>"Next month shows a projected $20k dip in collections. Recommend triggering 'Early Bird' discount for Term 4 by Monday."</p>
               </div>
               <button className={styles.triggerBtn}>Preview Discount Campaign</button>
            </div>

            <div className={`${styles.forecastCard} card`}>
               <BarChart3 size={24} color="var(--primary-color)" />
               <h3>Cashflow Forecast</h3>
               <div className={styles.forecastItem}>
                  <span>Expected Arrival (Next 15d)</span>
                  <p>$124,500</p>
               </div>
               <div className={styles.forecastItem}>
                  <span>Expected Recovery (AI)</span>
                  <p>$18,200</p>
               </div>
               <div className={styles.chartPlaceholder}>
                  <TrendingUp size={24} color="var(--text-tertiary)" opacity="0.3" />
                  <span>Real-time Financial Graph</span>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
