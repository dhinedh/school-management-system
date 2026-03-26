import { 
  FileDigit, 
  Search, 
  Download, 
  Eye, 
  ShieldCheck, 
  Clock, 
  FileText,
  Lock,
  Plus
} from "lucide-react";
import styles from "./vault.module.css";

export default function DocumentVault() {
  const documents = [
    { title: "Academic Transcript - Year 9", type: "PDF", size: "2.4 MB", date: "Jul 12, 2024" },
    { title: "Annual Physical Fitness Certificate", type: "PDF", size: "1.1 MB", date: "Sep 05, 2024" },
    { title: "Inter-School Sports Recognition", type: "PDF", size: "0.8 MB", date: "Sep 20, 2024" },
    { title: "National Science Olympiad Rank", type: "PDF", size: "4.5 MB", date: "Aug 15, 2024" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Secure Document Vault</h1>
        <p className={styles.subtitle}>Unified repository for Alex's institutional records and certificates.</p>
      </header>

      <section className={styles.vaultProtection}>
         <div className={`${styles.statusCard} glass`}>
            <div className={styles.statusInfo}>
               <ShieldCheck size={28} color="#10b981" />
               <div>
                  <h3>End-to-End Encrypted</h3>
                  <p>All documents are secured with AES-256 institutional encryption.</p>
               </div>
            </div>
         </div>
      </section>

      <div className={styles.searchBar}>
         <Search size={20} className={styles.searchIcon} />
         <input type="text" placeholder="Search by name, date or type..." />
         <button className={styles.uploadBtn}><Plus size={18} /> Request Document</button>
      </div>

      <section className={styles.documentList}>
         <div className="card">
            <div className={styles.tableHead}>
               <span>Document Name</span>
               <span>Type</span>
               <span>Size</span>
               <span>Modified</span>
               <span>Actions</span>
            </div>

            {documents.map((doc, i) => (
               <div key={i} className={styles.row}>
                  <div className={styles.titleCol}>
                     <FileText size={18} color="var(--primary-color)" />
                     <strong>{doc.title}</strong>
                  </div>
                  <div className={styles.typeCol}>{doc.type}</div>
                  <div className={styles.sizeCol}>{doc.size}</div>
                  <div className={styles.dateCol}>{doc.date}</div>
                  <div className={styles.actionCol}>
                     <button title="View"><Eye size={16} /></button>
                     <button title="Download"><Download size={16} /></button>
                     <button title="Secure Link"><Lock size={16} /></button>
                  </div>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}
