import { 
  MessageSquare, 
  Search, 
  Send, 
  Bot, 
  User, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Filter, 
  MoreVertical,
  Zap,
  Smartphone,
  Globe
} from "lucide-react";
import styles from "./helpdesk.module.css";

export default function HelpdeskProPage() {
  const activeQueries = [
    { parent: "Mr. Raj", query: "Bus epdi varudhu? (Where is the bus?)", student: "Akash (Grade 5)", status: "Resolved by AI", time: "2m ago" },
    { parent: "Mrs. Priya", query: "Fee evlo pending? (Fee dues?)", student: "Sneha (Grade 10)", status: "Resolved by AI", time: "5m ago" },
    { parent: "Mr. Khan", query: "When is the next PTM?", student: "Zaid (Grade 8)", status: "Escalated", time: "15m ago" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>AI Helpdesk 2.0</h1>
          <p className={styles.subtitle}>Natural language query resolution with direct database integration for parent support.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><Globe size={18} /> Multilingual Settings</button>
           <button className="btn btn-primary"><Bot size={18} /> Train AI Model</button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Queries Resolved (AI)</p>
           <p className={styles.statsValue}>94%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Avg. Response Time</p>
           <p className={styles.statsValue}>1.2s</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Human Intervention</p>
           <p className={styles.statsValue}>6%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Parent Satisfaction</p>
           <p className={styles.statsValue}>4.8/5</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.chatSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Live Resolved Stream</h2>
              <div className={styles.tagGroup}>
                 <span className={styles.tagActive}>All</span>
                 <span>AI Resolved</span>
                 <span>Human Needed</span>
              </div>
           </div>
           
           <div className={styles.queryList}>
              {activeQueries.map((q, i) => (
                <div key={i} className={styles.qItem}>
                   <div className={styles.qAvatar}><User size={18} /></div>
                   <div className={styles.qContent}>
                      <div className={styles.qHeader}>
                         <p className={styles.qParent}>{q.parent} <span className={styles.qStudent}>({q.student})</span></p>
                         <span className={styles.qTime}>{q.time}</span>
                      </div>
                      <p className={styles.qText}>"{q.query}"</p>
                      <div className={styles.qFooter}>
                         <div className={`${styles.status} ${q.status === 'Escalated' ? styles.warning : styles.success}`}>
                            {q.status === 'Escalated' ? <AlertCircle size={14} /> : <CheckCircle size={14} />}
                            {q.status}
                         </div>
                         <button className={styles.chatBtn}>View Transcript</button>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.simulatorCard} glass`}>
               <h3>AI Query Simulator</h3>
               <p className={styles.simNote}>Test how AI handles regional language queries.</p>
               <div className={styles.simInput}>
                  <input type="text" placeholder="Type: 'Bus enga iruku?'" />
                  <button><Send size={16} /></button>
               </div>
               <div className={styles.simResult}>
                  <p className={styles.label}>AI Prediction:</p>
                  <p className={styles.res}>"Mapping to Transport Module... Fetching GPS for Route #4... Returning: 'Bus is at Electronic City, 10 mins away.'"</p>
               </div>
            </div>

            <div className={`${styles.integrationCard} card`}>
               <Smartphone size={24} color="var(--primary-color)" />
               <h3>App Integration</h3>
               <p>AI Helpdesk is active on Parent Mobile App (Android/iOS) and WhatsApp.</p>
               <div className={styles.statusRow}>
                  <span>WhatsApp Bot</span>
                  <div className={styles.activeDot}></div>
               </div>
               <div className={styles.statusRow}>
                  <span>Mobile SDK</span>
                  <div className={styles.activeDot}></div>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
