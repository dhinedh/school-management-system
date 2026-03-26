import { 
  Target, 
  Users, 
  TrendingUp, 
  Mail, 
  Phone, 
  Calendar, 
  ChevronRight, 
  Plus, 
  LayoutGrid,
  Zap,
  Filter,
  BarChart3
} from "lucide-react";
import styles from "./admissions.module.css";

export default function AdmissionFunnel() {
  const funnelStages = [
    { name: "Total Leads", count: 842, icon: Mail, color: "#4f46e1" },
    { name: "Initial Visit", count: 320, icon: Users, color: "#3b82f6" },
    { name: "Assessments", count: 184, icon: BarChart3, color: "#f59e0b" },
    { name: "Converted", count: 92, icon: Zap, color: "#10b981" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>AI Admission Funnel</h1>
        <p className={styles.subtitle}>Institutional growth tracking and conversion intelligence hub.</p>
      </header>

      <section className={styles.funnelGrid}>
         {funnelStages.map((stage, i) => (
            <div key={i} className={`${styles.stageCard} card`}>
               <div className={styles.stageHeader}>
                  <div className={styles.iconBox} style={{ background: `${stage.color}15`, color: stage.color }}>
                     <stage.icon size={20} />
                  </div>
                  <span className={styles.count}>{stage.count}</span>
               </div>
               <strong>{stage.name}</strong>
               <div className={styles.barWrap}><div className={styles.bar} style={{ width: `${(stage.count/842)*100}%`, background: stage.color }}></div></div>
            </div>
         ))}
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.listSection}>
            <div className={styles.sectionHeader}>
               <h3>Recent High-Quality Leads</h3>
               <div className={styles.actions}>
                  <button className={styles.filterBtn}><Filter size={16} /> Filter</button>
                  <button className={styles.addBtn}><Plus size={16} /> Add Lead</button>
               </div>
            </div>
            <div className={styles.leadList}>
               <div className={`${styles.leadItem} card`}>
                  <div className={styles.leadInfo}>
                     <strong>James Anderson</strong>
                     <p>Applying for Grade 8 • Academic Scholarship focus</p>
                  </div>
                  <div className={styles.leadSource}>Social Media</div>
                  <div className={styles.leadStatus} style={{ background: '#dbeafe', color: '#1e40af' }}>INTERVIEW SCHEDULED</div>
                  <button className={styles.viewBtn}><ChevronRight size={18} /></button>
               </div>
               <div className={`${styles.leadItem} card`}>
                  <div className={styles.leadInfo}>
                     <strong>Sophia Williams</strong>
                     <p>Applying for KG • Sibling Discount candidate</p>
                  </div>
                  <div className={styles.leadSource}>Referral</div>
                  <div className={styles.leadStatus} style={{ background: '#fef3c7', color: '#92400e' }}>PAPERWORK PENDING</div>
                  <button className={styles.viewBtn}><ChevronRight size={18} /></button>
               </div>
            </div>
         </section>

         <aside className={styles.rightCol}>
            <div className={`${styles.aiInsights} glass`}>
               <div className={styles.asstHeader}>
                  <Zap size={20} color="var(--primary-color)" />
                  <h3>AI Growth Forecast</h3>
               </div>
               <p>Funnel velocity has increased by <strong>18%</strong> since the new digital campaign started. Current projection: <strong>112 net new enrollments</strong>.</p>
               <button className={styles.fullStatsBtn}>Full Analytics</button>
            </div>

            <div className="card">
               <h3 className={styles.sideTitle}><Calendar size={18} /> Today's Interviews</h3>
               <div className={styles.eventList}>
                  <div className={styles.eventItem}>
                     <strong>10:30 AM</strong>
                     <p>Anderson Family</p>
                  </div>
                  <div className={styles.eventItem}>
                     <strong>11:45 AM</strong>
                     <p>Miller Family</p>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
