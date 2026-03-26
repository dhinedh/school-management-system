import { 
  ShieldAlert, 
  Search, 
  FileText, 
  Percent, 
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Sparkles
} from "lucide-react";
import styles from "./plagiarism.module.css";

export default function PlagiarismCheckerPage() {
  const scans = [
    { student: "Alex Johnson", assignment: "History Essay - Industrial Revolution", similarity: "42%", aiContent: "High Probability", status: "Flagged" },
    { student: "Maya Patel", assignment: "Physics Lab Report", similarity: "8%", aiContent: "Low Probability", status: "Clean" },
    { student: "Chris Evans", assignment: "Chemistry Research Paper", similarity: "28%", aiContent: "Medium Probability", status: "Review" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><ShieldAlert size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Plagiarism & Integrity Checker</h1>
              <p className={styles.subtitle}>Scan submissions against global databases and detect AI-generated content patterns.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.statsSection} card`}>
            <h3>Global Integrity Stats</h3>
            <div className={styles.statsGrid}>
               <div className={styles.statItem}>
                  <strong>1,420</strong>
                  <span>Scans Performed</span>
               </div>
               <div className={styles.statItem}>
                  <strong>12%</strong>
                  <span>Highlight/Flag Rate</span>
               </div>
               <div className={styles.statItem}>
                  <strong>AI</strong>
                  <span>Enhanced Patterns</span>
               </div>
            </div>
         </section>

         <section className={`${styles.scanListSection} card`}>
            <div className={styles.tableHeader}>
               <h3>Recent Scans</h3>
               <div className={styles.search}>
                  <Search size={16} />
                  <input type="text" placeholder="Search students..." />
               </div>
            </div>
            <div className={styles.scanList}>
               <table className={styles.table}>
                  <thead>
                     <tr>
                        <th>Student</th>
                        <th>Assignment</th>
                        <th>Similarity</th>
                        <th>AI Probability</th>
                        <th>Status</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {scans.map((scan, i) => (
                       <tr key={i}>
                          <td><strong>{scan.student}</strong></td>
                          <td>{scan.assignment}</td>
                          <td>
                             <span className={`${styles.badge} ${parseInt(scan.similarity) > 30 ? styles.high : styles.low}`}>
                                {scan.similarity}
                             </span>
                          </td>
                          <td>{scan.aiContent}</td>
                          <td>{scan.status}</td>
                          <td><button className={styles.viewBtn}>View Report</button></td>
                       </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </section>
      </div>

      <section className={`${styles.manualScan} glass`}>
         <div className={styles.manualHeader}>
            <Sparkles size={24} />
            <h3>Manual Text Integrity Scan</h3>
         </div>
         <div className={styles.manualContent}>
            <textarea placeholder="Paste text here to check for plagiarism and AI probability..."></textarea>
            <button className={styles.scanBtn}>Scan Content</button>
         </div>
      </section>
    </div>
  );
}
