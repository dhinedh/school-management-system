import { 
  ShieldCheck, 
  FileText, 
  AlertTriangle, 
  CheckCircle2, 
  Download, 
  Eye, 
  Clock, 
  Settings, 
  ChevronRight,
  Zap,
  Globe
} from "lucide-react";
import styles from "./compliance.module.css";

export default function ComplianceEngine() {
  const complianceItems = [
    { title: "CBSE Annual Affiliation", status: "Audit Ready", score: "98%", due: "Oct 15" },
    { title: "Fire & Safety Inspection", status: "Action Required", score: "72%", due: "Sep 30" },
    { title: "Staff Qualification Audit", status: "Compliant", score: "100%", due: "Nov 12" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Automated Compliance Engine</h1>
        <p className={styles.subtitle}>Board-ready reporting and institutional audit automation center.</p>
      </header>

      <section className={styles.globalStatus}>
         <div className={`${styles.statusCard} glass`}>
            <div className={styles.statusHeader}>
               <ShieldCheck size={28} color="#10b981" />
               <h2>Group Compliance Score: 94.2%</h2>
            </div>
            <div className={styles.metricGrid}>
               <div className={styles.metric}>
                  <span>Legal Status</span>
                  <strong>Active (Healthy)</strong>
               </div>
               <div className={styles.metric}>
                  <span>Documentation</span>
                  <strong>92% Digitized</strong>
               </div>
               <div className={styles.metric}>
                  <span>Next Audit</span>
                  <strong>Oct 15 (CBSE)</strong>
               </div>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.listSection}>
            <h3 className={styles.sectionTitle}>Mandatory Filings & Audits</h3>
            <div className={styles.auditList}>
               {complianceItems.map((item, i) => (
                  <div key={i} className={`${styles.auditItem} card`}>
                     <div className={styles.auditInfo}>
                        <div className={styles.auditTitle}>
                           {item.score === '100%' ? <CheckCircle2 size={18} color="#10b981" /> : <AlertTriangle size={18} color="#f59e0b" />}
                           <strong>{item.title}</strong>
                        </div>
                        <p>Score: {item.score} • Next Review: {item.due}</p>
                     </div>
                     <div className={styles.auditStatus}>{item.status}</div>
                     <div className={styles.auditActions}>
                        <button title="View Report"><Eye size={16} /></button>
                        <button title="Generate PDF"><Download size={16} /></button>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.rightCol}>
            <div className={`${styles.aiAdvisor} glass`}>
               <div className={styles.asstHeader}>
                  <Zap size={20} color="var(--primary-color)" />
                  <h3>AI Compliance Advisor</h3>
               </div>
               <p>I've noticed the <strong>Building Safety Certificate</strong> is due for renewal. I've prepared the application form with auto-filled school data.</p>
               <button className={styles.prepBtn}>Review Application</button>
            </div>

            <div className="card">
               <h3 className={styles.sideTitle}><Globe size={18} /> Board Connectors</h3>
               <div className={styles.boardList}>
                  <div className={styles.boardItem}>
                     <strong>CBSE (New Delhi)</strong>
                     <span>API: Active</span>
                  </div>
                  <div className={styles.boardItem}>
                     <strong>State Board (US)</strong>
                     <span>API: Connected</span>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
