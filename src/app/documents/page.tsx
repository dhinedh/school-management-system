import { 
  FileText, 
  Upload, 
  Search, 
  Filter, 
  AlertCircle, 
  Calendar, 
  Tag, 
  FolderPlus, 
  CheckCircle,
  Clock,
  Archive,
  MoreVertical,
  FileArchive
} from "lucide-react";
import styles from "./documents.module.css";

export default function DocumentManagementPage() {
  const documents = [
    { name: "John_Doe_Transfer_Certificate.pdf", type: "TC", student: "John Doe", size: "1.2 MB", uploaded: "2h ago", tags: ["Academic", "Verified"], expiry: "N/A" },
    { name: "Medical_Report_2024.pdf", type: "Medical", student: "Alice Smith", size: "850 KB", uploaded: "Yesterday", tags: ["Health"], expiry: "Oct 2025" },
    { name: "Birth_Certificate.pdf", type: "ID", student: "Bob Wilson", size: "2.1 MB", uploaded: "3 Days ago", tags: ["Identity"], expiry: "N/A" },
    { name: "Transport_Fitness_Cert.pdf", type: "Transport", student: "Vehicle #4", size: "5.4 MB", uploaded: "1 week ago", tags: ["Vehicle", "Urgent"], expiry: "In 4 Days" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Smart Document Management</h1>
          <p className={styles.subtitle}>AI-tagged student dossiers with automated expiry tracking and bulk processing.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><FileArchive size={18} /> Bulk ZIP Upload</button>
           <button className="btn btn-primary"><Upload size={18} /> Upload Individual</button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Documents</p>
           <p className={styles.statsValue}>8,420</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Storage Used</p>
           <p className={styles.statsValue}>42.6 GB</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Auto-Tagged (Last 24h)</p>
           <p className={styles.statsValue}>156</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Expiring Soon</p>
           <p className={`${styles.statsValue} ${styles.warning}`}>12</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.docSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Digital Archive</h2>
              <div className={styles.tableActions}>
                 <div className={styles.search}>
                    <Search size={16} />
                    <input type="text" placeholder="Search by student, type or content..." />
                 </div>
                 <button className={styles.filterBtn}><Filter size={18} /></button>
              </div>
           </div>
           
           <div className={styles.docList}>
              {documents.map((doc, i) => (
                <div key={i} className={styles.docItem}>
                   <div className={styles.docIcon}><FileText size={20} color="var(--primary-color)" /></div>
                   <div className={styles.docMainInfo}>
                      <p className={styles.docName}>{doc.name}</p>
                      <p className={styles.docMeta}>{doc.student} • {doc.size} • {doc.uploaded}</p>
                   </div>
                   <div className={styles.docTags}>
                      {doc.tags.map((tag, j) => (
                        <span key={j} className={styles.tagBadge}><Tag size={10} /> {tag}</span>
                      ))}
                      <span className={styles.aiTag}>AI Tagged</span>
                   </div>
                   <div className={styles.docExpiry}>
                      {doc.expiry !== 'N/A' && (
                        <span className={`${styles.expiryBadge} ${doc.expiry.includes('Days') ? styles.urgent : ''}`}>
                           <Clock size={12} /> {doc.expiry}
                        </span>
                      )}
                   </div>
                   <button className={styles.moreBtn}><MoreVertical size={18} /></button>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.automationCard} glass`}>
               <h3>Smart Auto-Tagging</h3>
               <p className={styles.aiNote}>AI is currently identifying document types based on optical character recognition (OCR).</p>
               <div className={styles.configToggle}>
                  <span>Enable Auto-Classification</span>
                  <div className={styles.toggleActive}>ON</div>
               </div>
            </div>

            <div className={`${styles.bulkSection} card`}>
               <FolderPlus size={24} color="var(--primary-color)" />
               <h3>Quick Archive</h3>
               <p>Archive entire class folders for previous academic years.</p>
               <button className={styles.archiveBtn}>Grade 12 (2023-24) Archive</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
