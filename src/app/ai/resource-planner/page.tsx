import { 
  BarChart3, 
  Users, 
  Home, 
  Bus, 
  AlertTriangle, 
  TrendingUp, 
  Calendar, 
  Zap, 
  Settings,
  MoreVertical,
  ArrowUpRight
} from "lucide-react";
import styles from "./planner.module.css";

export default function ResourcePlannerPage() {
  const predictions = [
    { resource: "Teacher Capacity", demand: "High", shortage: "2 Math Teachers", timeframe: "Next Month" },
    { resource: "Classroom Usage", demand: "Peak", shortage: "3 Labs", timeframe: "Exam Season" },
    { resource: "Transport Demand", demand: "Increasing", shortage: "1 Bus (Route 4)", timeframe: "Term 3" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Predictive Resource Planner</h1>
          <p className={styles.subtitle}>AI-driven forecasting for teacher staffing, facility utilization, and transport logistics.</p>
        </div>
        <button className="btn btn-primary"><Calendar size={18} /> Run New Simulation</button>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Forecasting Accuracy</p>
           <p className={styles.statsValue}>94.8%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Teacher-Student Ratio</p>
           <p className={styles.statsValue}>1:22</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Facility Efficiency</p>
           <p className={styles.statsValue}>88%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Budget Optimization</p>
           <p className={styles.statsValue}>+12.5%</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.predictionSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Demand Forecasts</h2>
              <div className={styles.iconBox}><Zap size={18} color="#f59e0b" /></div>
           </div>
           
           <div className={styles.predictionList}>
              {predictions.map((p, i) => (
                <div key={i} className={styles.pItem}>
                   <div className={styles.pInfo}>
                      <div className={styles.pHeader}>
                         <p className={styles.pResource}>{p.resource}</p>
                         <span className={`${styles.demandBadge} ${styles[p.demand.toLowerCase()]}`}>{p.demand} Demand</span>
                      </div>
                      <p className={styles.pShortage}>Predicted Shortage: <strong>{p.shortage}</strong></p>
                      <p className={styles.pTime}>{p.timeframe}</p>
                   </div>
                   <button className={styles.actionBtn}>Plan Hiring/Allocation</button>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.insightCard} glass`}>
               <h3>Smart Recommendation</h3>
               <div className={styles.recommendContent}>
                  <AlertTriangle size={24} color="#ef4444" />
                  <p>"Next Term, Grade 9 enrollment is projected to increase by 15%. Recommend splitting Section C or hiring an additional Social Studies teacher."</p>
               </div>
               <button className={styles.simulateBtn}>Simulate Classroom Re-allocation</button>
            </div>

            <div className={`${styles.resourceTrends} card`}>
               <h3>Facility Trends</h3>
               <div className={styles.trendRow}>
                  <span>Auditorium Usage</span>
                  <div className={styles.trendValue}><ArrowUpRight size={14} /> 12%</div>
               </div>
               <div className={styles.trendRow}>
                  <span>Lab Supplies</span>
                  <div className={styles.trendValue}><ArrowUpRight size={14} /> 8%</div>
               </div>
               <div className={styles.chartPlaceholder}>
                  <BarChart3 size={24} color="var(--primary-color)" />
                  <span>Real-time Capacity Graph</span>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
