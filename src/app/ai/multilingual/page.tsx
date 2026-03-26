import { 
  Globe, 
  Languages, 
  MessageSquare, 
  Megaphone, 
  UserCheck,
  Zap,
  ChevronRight,
  Sparkles
} from "lucide-react";
import styles from "./multilingual.module.css";

export default function MultilingualCommunicationPage() {
  const notices = [
    { title: "Parent-Teacher Meeting Schedule", original: "English", target: "Spanish, Arabic, French", status: "Auto-Translated" },
    { title: "Quarterly Financial Report", original: "English", target: "Hindi, Chinese", status: "Pending Review" },
    { title: "New Lab Policy Announcement", original: "English", target: "All Selected", status: "Broadcasted" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Languages size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Multilingual Communication</h1>
              <p className={styles.subtitle}>Auto-translate notices and reports into parents' preferred languages for inclusive engagement.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.configSection} card`}>
            <h3>Translation Engine Config</h3>
            <div className={styles.langList}>
               <div className={styles.langItem}>
                  <span>Spanish (LatAm)</span>
                  <div className={styles.toggle}></div>
               </div>
               <div className={styles.langItem}>
                  <span>Arabic (Modern Standard)</span>
                  <div className={styles.toggle}></div>
               </div>
               <div className={styles.langItem}>
                  <span>French (Standard)</span>
                  <div className={styles.toggle}></div>
               </div>
               <div className={styles.langItem}>
                  <span>Hindi</span>
                  <div className={styles.toggle}></div>
               </div>
            </div>
            <button className={styles.saveBtn}>Apply Translation Rules</button>
         </section>

         <section className={`${styles.broadcastSection} card`}>
            <div className={styles.sectionHeader}>
               <h3>Broadcast Status</h3>
               <button className={styles.newBtn}>New Notice</button>
            </div>
            <div className={styles.noticeList}>
               {notices.map((n, i) => (
                 <div key={i} className={styles.noticeItem}>
                    <div className={styles.nMain}>
                       <div className={styles.nTitle}>{n.title}</div>
                       <div className={styles.nMeta}>Original: {n.original} • Targets: {n.target}</div>
                    </div>
                    <div className={styles.nStatus}>
                       <span className={`${styles.badge} ${n.status === 'Broadcasted' ? styles.success : styles.info}`}>
                          {n.status}
                       </span>
                    </div>
                    <button className={styles.viewBtn}><ChevronRight size={18} /></button>
                 </div>
               ))}
            </div>
         </section>
      </div>

      <div className={`${styles.previewArea} glass`}>
         <div className={styles.previewHeader}>
            <Sparkles size={20} />
            <strong>Real-time Translation Preview</strong>
         </div>
         <div className={styles.previewGrid}>
            <div className={styles.previewCard}>
               <label>Original (English)</label>
               <p>"School will be closed tomorrow due to heavy rain."</p>
            </div>
            <div className={styles.previewCard}>
               <label>Spanish Translation</label>
               <p>"La escuela estará cerrada mañana debido a las fuertes lluvias."</p>
            </div>
         </div>
      </div>
    </div>
  );
}
