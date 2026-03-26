import { 
  GanttChart, 
  TrendingUp, 
  Target, 
  Users, 
  Globe, 
  Zap, 
  ChevronRight, 
  BarChart3, 
  Calendar,
  Layers,
  Rocket
} from "lucide-react";
import styles from "./strategy.module.css";

export default function GrowthStrategy() {
  const objectives = [
    { title: "Expand to London Campus", progress: 65, status: "On Track" },
    { title: "Digital 1:1 Device Rollout", progress: 92, status: "Near Completion" },
    { title: "CBSE International Accreditation", progress: 40, status: "Delayed" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Strategic Growth Hub</h1>
        <p className={styles.subtitle}>Long-term institutional roadmap, expansion tracking, and vision alignment center.</p>
      </header>

      <section className={styles.visionSection}>
         <div className={`${styles.visionCard} glass`}>
            <div className={styles.vHeader}>
               <Rocket size={24} color="var(--primary-color)" />
               <h2>Vision 2030: Global Excellence</h2>
            </div>
            <p>Our strategic goal is to become the leading digital-first educational group across 5 continents, serving 50,000+ students with AI-first pedagogy.</p>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.roadmapSection}>
            <h3 className={styles.sectionTitle}>Institutional Roadmap</h3>
            <div className={styles.objList}>
               {objectives.map((obj, i) => (
                  <div key={i} className={`${styles.objItem} card`}>
                     <div className={styles.objInfo}>
                        <strong>{obj.title}</strong>
                        <p>Current Phase: Implementation</p>
                        <div className={styles.progressRow}>
                           <div className={styles.barWrap}><div className={styles.bar} style={{ width: `${obj.progress}%` }}></div></div>
                           <span>{obj.progress}%</span>
                        </div>
                     </div>
                     <span className={styles.statusLabel} style={{ background: obj.status === 'Delayed' ? '#fef2f2' : '#f0f9ff', color: obj.status === 'Delayed' ? '#ef4444' : '#0369a1' }}>{obj.status}</span>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.metricsSection}>
            <div className="card">
               <h3 className={styles.sideTitle}><BarChart3 size={18} /> CAGR Forecast</h3>
               <div className={styles.forecastItem}>
                  <span>Student Growth</span>
                  <strong>+18.5% YoY</strong>
               </div>
               <div className={styles.forecastItem}>
                  <span>Revenue CAGR</span>
                  <strong>+14.2%</strong>
               </div>
               <button className={styles.simulateBtn}>Run Expansion Simulator</button>
            </div>

            <div className={`${styles.riskCard} glass`}>
               <div className={styles.riskHeader}>
                  <Target size={18} color="#ec4899" />
                  <span>Strategic Risk Audit</span>
               </div>
               <p>Regulatory shift in UK Tier 4 visas may impact London Campus enrollment by 5%.</p>
            </div>
         </aside>
      </div>
    </div>
  );
}
