import { 
  Globe, 
  Building2, 
  Users, 
  DollarSign, 
  Activity, 
  ExternalLink, 
  Search,
  Filter,
  BarChart,
  PieChart,
  LayoutGrid
} from "lucide-react";
import styles from "./franchise.module.css";

export default function FranchisePage() {
  const schools = [
    { name: "Greenwood International", city: "Bangalore", students: 1250, revenue: "$450K", health: "98%", status: "Active" },
    { name: "Riverside Academy", city: "Chennai", students: 840, revenue: "$280K", health: "95%", status: "Active" },
    { name: "Oakwood High", city: "Mumbai", students: 1100, revenue: "$390K", health: "82%", status: "Requires Audit" },
    { name: "Springfield Prep", city: "Delhi", students: 560, revenue: "$150K", health: "92%", status: "Active" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Multi-School Central Dashboard</h1>
          <p className={styles.subtitle}>Unified control panel for franchise management and group operations.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Globe size={18} />
             <span>Network Map</span>
           </button>
           <button className="btn btn-primary">
             <Building2 size={18} />
             <span>Add New School</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Schools</p>
           <p className={styles.statsValue}>12</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Group Enrollment</p>
           <p className={styles.statsValue}>8,420</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Consolidated Revenue</p>
           <p className={styles.statsValue}>$3.2M</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Network Stability</p>
           <p className={styles.statsValue}>96%</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.schoolsSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Franchise Network</h2>
              <div className={styles.tableActions}>
                 <div className={styles.search}>
                    <Search size={16} />
                    <input type="text" placeholder="Search school or city..." />
                 </div>
                 <button className={styles.filterBtn}><Filter size={18} /></button>
              </div>
           </div>
           
           <table className={styles.table}>
             <thead>
               <tr>
                 <th>School Name & City</th>
                 <th>Student Count</th>
                 <th>YTD Revenue</th>
                 <th>System Health</th>
                 <th>Status</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               {schools.map((school, i) => (
                 <tr key={i}>
                   <td>
                      <p className={styles.schoolName}>{school.name}</p>
                      <p className={styles.city}>{school.city}</p>
                   </td>
                   <td>{school.students}</td>
                   <td>{school.revenue}</td>
                   <td>
                      <div className={styles.healthBar}>
                         <div className={styles.healthFill} style={{ width: school.health }}></div>
                      </div>
                      <span className={styles.healthText}>{school.health}</span>
                   </td>
                   <td>
                      <span className={`${styles.statusBadge} ${styles[school.status.replace(' ', '').toLowerCase()]}`}>
                         {school.status}
                      </span>
                   </td>
                   <td><button className={styles.viewBtn}><ExternalLink size={18} /></button></td>
                 </tr>
               ))}
             </tbody>
           </table>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.groupAnalytics} glass`}>
               <h3>Consolidated Insights</h3>
               <div className={styles.insightBlock}>
                  <PieChart size={24} color="var(--primary-color)" />
                  <div>
                     <p className={styles.insightTitle}>Regional Lead</p>
                     <p className={styles.insightText}>South Sector contributes 45% of total group revenue.</p>
                  </div>
               </div>
               <div className={styles.insightBlock}>
                  <BarChart size={24} color="#10b981" />
                  <div>
                     <p className={styles.insightTitle}>Growth Prediction</p>
                     <p className={styles.insightText}>Estimated 12% increase in admissions across 8 schools.</p>
                  </div>
               </div>
            </div>

            <div className={`${styles.adminConfig} card`}>
               <LayoutGrid size={24} color="var(--text-tertiary)" />
               <h3>Central Admin Panel</h3>
               <p>Global configuration for roles, fees, and brand identity.</p>
               <button className={styles.adminBtn}>Access Master Settings</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
