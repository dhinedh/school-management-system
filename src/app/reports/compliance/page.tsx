import { 
  FileText, 
  ShieldCheck, 
  Download, 
  AlertCircle, 
  CheckCircle, 
  Calendar, 
  Search,
  Filter,
  ArrowRight,
  ClipboardCheck,
  Zap
} from "lucide-react";
import styles from "./compliance.module.css";

export default function CompliancePage() {
  const reports = [
    { name: "CBSE Annual Academic Quality Cell", type: "Board", status: "Ready", lastGenerated: "2 Days ago" },
    { name: "State Education Dept. Staff Audit", type: "Government", status: "Action Required", lastGenerated: "1 Month ago" },
    { name: "Student Health & Safety Compliance", type: "Regulatory", status: "Ready", lastGenerated: "Today" },
    { name: "Infrastructure Validation (Fire/Building)", type: "Government", status: "Ready", lastGenerated: "Last Week" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Automated Compliance Generator</h1>
          <p className={styles.subtitle}>Surgical data extraction for government and board-mandated reports.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><ShieldCheck size={18} /> Audit Log</button>
           <button className="btn btn-primary"><Zap size={18} /> Run Compliance Check</button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Compliance Score</p>
           <p className={styles.statsValue}>98.2%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Pending Artifacts</p>
           <p className={`${styles.statsValue} ${styles.warning}`}>2</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Last Board Audit</p>
           <p className={styles.statsValue}>Passed</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Auto-sync Health</p>
           <p className={styles.statsValue}>Optimal</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.reportSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Compliance Artifacts</h2>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search report name..." />
              </div>
           </div>
           
           <div className={styles.reportList}>
              {reports.map((r, i) => (
                <div key={i} className={styles.rItem}>
                   <div className={styles.rIcon}><FileText size={20} /></div>
                   <div className={styles.rInfo}>
                      <p className={styles.rName}>{r.name}</p>
                      <p className={styles.rMeta}>{r.type} • Generated {r.lastGenerated}</p>
                   </div>
                   <div className={styles.rStatus}>
                      <span className={`${styles.statusBadge} ${styles[r.status.replace(' ', '').toLowerCase()]}`}>
                         {r.status === 'Action Required' ? <AlertCircle size={14} /> : <CheckCircle size={14} />}
                         {r.status}
                      </span>
                   </div>
                   <button className={styles.downloadBtn} title="Download Report"><Download size={18} /></button>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.alertCard} glass`}>
               <h3>Mandatory Submission</h3>
               <div className={styles.alertContent}>
                  <AlertCircle size={20} color="#f59e0b" />
                  <div>
                     <p className={styles.alertTitle}>State Audit Deadline</p>
                     <p className={styles.alertText}>Submission for Staff Qualification Registry is due in 4 days.</p>
                  </div>
               </div>
               <button className={styles.completeBtn}>Finalize & Submit</button>
            </div>

            <div className={`${styles.configCard} card`}>
               <ClipboardCheck size={24} color="var(--primary-color)" />
               <h3>Board Configuration</h3>
               <p>Active: <strong>CBSE Affiliation #123456</strong></p>
               <div className={styles.configProgress}>
                  <div className={styles.progHeader}>
                     <span>Report Auto-Extraction</span>
                     <span>90%</span>
                  </div>
                  <div className={styles.pBar}><div className={styles.pFill} style={{ width: '90%' }}></div></div>
               </div>
               <button className={styles.settingsBtn}>Update Schema</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
