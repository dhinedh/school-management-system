import { 
  Users, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  MessageSquare, 
  MoreVertical, 
  Search,
  Filter,
  UserCheck,
  Smartphone
} from "lucide-react";
import styles from "./parents.module.css";

export default function ParentsPage() {
  const parents = [
    { name: "Robert & Mary Johnson", student: "Alex Johnson", contact: "+1 555-0101", ptmParticipation: "100%", appUsage: "High", risk: "Low" },
    { name: "Vikram & Priya Patel", student: "Maya Patel", contact: "+1 555-0102", ptmParticipation: "80%", appUsage: "Medium", risk: "Low" },
    { name: "John & Sarah Doe", student: "Chris Evans", contact: "+1 555-0103", ptmParticipation: "20%", appUsage: "Low", risk: "High" },
    { name: "Elena Rodriguez", student: "Sofia Rodriguez", contact: "+1 555-0104", ptmParticipation: "100%", appUsage: "High", risk: "Low" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Parent Engagement Tracker</h1>
          <p className={styles.subtitle}>Monitor parent involvement, app engagement, and PTM attendance.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Calendar size={18} />
             <span>PTM Schedule</span>
           </button>
           <button className="btn btn-primary">
             <MessageSquare size={18} />
             <span>Broadcast Message</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Parents</p>
           <p className={styles.statsValue}>482</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Avg. PTM Attendance</p>
           <p className={styles.statsValue}>84%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>App Adoption Rate</p>
           <p className={styles.statsValue}>92%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Low Engagement Flag</p>
           <p className={`${styles.statsValue} ${styles.warning}`}>32</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.parentsSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Parent Directory</h2>
              <div className={styles.tableActions}>
                 <div className={styles.search}>
                    <Search size={16} />
                    <input type="text" placeholder="Search parents or students..." />
                 </div>
                 <button className={styles.filterBtn}><Filter size={18} /></button>
              </div>
           </div>
           
           <table className={styles.table}>
             <thead>
               <tr>
                 <th>Parent Guardians</th>
                 <th>Student Info</th>
                 <th>PTM Participation</th>
                 <th>Digital Activity</th>
                 <th>Risk Level</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               {parents.map((parent, i) => (
                 <tr key={i}>
                   <td>
                      <p className={styles.parentNames}>{parent.name}</p>
                      <p className={styles.contact}>{parent.contact}</p>
                   </td>
                   <td>{parent.student}</td>
                   <td>
                      <div className={styles.participationBar}>
                         <div className={styles.barFill} style={{ width: parent.ptmParticipation }}></div>
                      </div>
                      <span className={styles.participationText}>{parent.ptmParticipation}</span>
                   </td>
                   <td>
                      <div className={styles.appStatus}>
                         <Smartphone size={14} className={parent.appUsage === 'High' ? styles.active : styles.idle} />
                         <span>{parent.appUsage}</span>
                      </div>
                   </td>
                   <td>
                      <span className={`${styles.riskBadge} ${styles[parent.risk.toLowerCase()]}`}>
                         {parent.risk}
                      </span>
                   </td>
                   <td><button className={styles.moreBtn}><MoreVertical size={18} /></button></td>
                 </tr>
               ))}
             </tbody>
           </table>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.insightsCard} glass`}>
               <h3>AI Engagement Insight</h3>
               <div className={styles.insightAlert}>
                  <AlertCircle size={20} color="#f59e0b" />
                  <p>32 parents have not logged into the app in the last 14 days. This correlates with a 15% drop in student homework submission.</p>
               </div>
               <button className={styles.actionBtn}>Auto-send Engagement Reminders</button>
            </div>

            <div className={`${styles.ptmAnalysis} card`}>
               <h3>PTM Trend</h3>
               <div className={styles.trendRow}>
                  <span>Term 1 Attendance</span>
                  <strong>88%</strong>
               </div>
               <div className={styles.trendRow}>
                  <span>Term 2 Attendance</span>
                  <strong>82%</strong>
               </div>
               <div className={styles.chartPlaceholder}>
                  <TrendingUp size={24} color="var(--primary-color)" />
                  <span>Interactive Graph Coming Soon</span>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
