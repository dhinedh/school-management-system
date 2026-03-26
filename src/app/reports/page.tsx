import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  FileText, 
  Download, 
  Filter, 
  Search, 
  Calendar,
  Share2,
  ChevronRight,
  Plus
} from "lucide-react";
import styles from "./reports.module.css";

export default function ReportsPage() {
  const reports = [
    { title: "Academic Performance Summary", category: "Academic", lastGen: "Mar 15, 2024", format: "PDF, CSV" },
    { title: "Financial Monthly Statement", category: "Finance", lastGen: "Mar 01, 2024", format: "PDF, XLSX" },
    { title: "Attendance Trends - Q1", category: "Attendance", lastGen: "Mar 10, 2024", format: "PDF" },
    { title: "Inventory Audit Report", category: "Logistics", lastGen: "Feb 28, 2024", format: "CSV" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Analytics & Reporting</h1>
          <p className={styles.subtitle}>Generate comprehensive reports and visualize school performance data.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Share2 size={18} />
             <span>Schedule Auto-Report</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Create Custom Report</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <div className={styles.iconBox} style={{ background: '#e0e7ff', color: '#4338ca' }}>
              <BarChart3 size={24} />
           </div>
           <div>
              <p className={styles.statsLabel}>Academic Score</p>
              <p className={styles.statsValue}>78.4%</p>
           </div>
        </div>
        <div className={`${styles.statsCard} card`}>
           <div className={styles.iconBox} style={{ background: '#ecfdf5', color: '#059669' }}>
              <TrendingUp size={24} />
           </div>
           <div>
              <p className={styles.statsLabel}>Revenue Growth</p>
              <p className={styles.statsValue}>+12.5%</p>
           </div>
        </div>
        <div className={`${styles.statsCard} card`}>
           <div className={styles.iconBox} style={{ background: '#fff7ed', color: '#ea580c' }}>
              <PieChart size={24} />
           </div>
           <div>
              <p className={styles.statsLabel}>Retention Rate</p>
              <p className={styles.statsValue}>94.2%</p>
           </div>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.reportListSection} card`}>
          <div className={styles.tableHeader}>
            <h2>Available Reports</h2>
            <div className={styles.search}>
               <Search size={16} />
               <input type="text" placeholder="Search reports..." />
            </div>
          </div>
          <div className={styles.reportList}>
            {reports.map((report, i) => (
              <div key={i} className={styles.reportItem}>
                 <div className={styles.reportInfo}>
                    <div className={styles.reportIcon}><FileText size={20} /></div>
                    <div>
                       <p className={styles.reportTitle}>{report.title}</p>
                       <p className={styles.reportMeta}>{report.category} • Generated: {report.lastGen}</p>
                    </div>
                 </div>
                 <div className={styles.formatInfo}>
                    <span className={styles.formats}>{report.format}</span>
                 </div>
                 <button className={styles.downloadBtn}><Download size={18} /></button>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sidebarSection}>
            <div className={`${styles.builderCard} glass`}>
               <h3>Smart Report Builder</h3>
               <p className={styles.builderDesc}>Drag and drop fields to create instant visualizations.</p>
               <div className={styles.fieldList}>
                  <div className={styles.fieldItem}><span>Student Grades</span> <Plus size={14} /></div>
                  <div className={styles.fieldItem}><span>Fee Status</span> <Plus size={14} /></div>
                  <div className={styles.fieldItem}><span>Teacher Load</span> <Plus size={14} /></div>
               </div>
               <button className={styles.generateBtn}>Preview Live Board</button>
            </div>
        </section>
      </div>
    </div>
  );
}
