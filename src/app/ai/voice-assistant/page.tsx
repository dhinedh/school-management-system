import { 
  Mic, 
  Settings, 
  Volume2, 
  Globe, 
  Play, 
  Square, 
  MessageSquare, 
  Zap,
  CheckCircle,
  Command
} from "lucide-react";
import styles from "./voice.module.css";

export default function VoiceAssistantPage() {
  const history = [
    { command: "Mark attendance for Class 10A", language: "English", status: "Executed", result: "124/124 Present" },
    { command: "10A vaara attendancai kaatu", language: "Tamil", status: "Executed", result: "Attendance report shown" },
    { command: "Send fee reminder to Grade 12", language: "English", status: "Pending Approval", result: "156 messages queued" },
    { command: "Library book fine list edukka", language: "Tamil", status: "Executed", result: "Fine report generated" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>AI Voice-Based School Assistant</h1>
          <p className={styles.subtitle}>Execute complex administrative actions using natural voice commands in Tamil and English.</p>
        </div>
        <button className="btn btn-secondary"><Settings size={18} /> Voice Settings</button>
      </header>

      <div className={styles.mainInterface}>
         <div className={`${styles.voiceCircle} glass`}>
            <div className={styles.micBox}>
               <Mic size={48} className={styles.pulse} />
            </div>
            <p className={styles.statusText}>Click to Speak</p>
            <p className={styles.hint}>"Show me students with pending fees"</p>
         </div>

         <div className={styles.controls}>
            <div className={styles.langToggle}>
               <button className={`${styles.langBtn} ${styles.active}`}>English</button>
               <button className={styles.langBtn}>தமிழ்</button>
            </div>
            <div className={styles.playback}>
               <Volume2 size={24} color="var(--primary-color)" />
               <span>Voice Feedback: ON</span>
            </div>
         </div>
      </div>

      <div className={styles.bottomGrid}>
        <section className={`${styles.historySection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Command History</h2>
              <Command size={20} color="var(--text-tertiary)" />
           </div>
           <div className={styles.historyList}>
              {history.map((h, i) => (
                <div key={i} className={styles.hItem}>
                   <div className={styles.hInfo}>
                      <p className={styles.hCommand}>"{h.command}"</p>
                      <p className={styles.hMeta}>{h.language} • {h.status}</p>
                   </div>
                   <div className={styles.hResult}>
                      <CheckCircle size={16} />
                      <span>{h.result}</span>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.capabilityCard} glass`}>
               <h3>Smart Keywords</h3>
               <div className={styles.tagGroup}>
                  <span>Attendance</span>
                  <span>Fees</span>
                  <span>Reports</span>
                  <span>Library</span>
                  <span>Transport</span>
                  <span>Messages</span>
               </div>
               <p className={styles.nlpNote}>AI automatically maps synonyms like "dues", "pending", and "arrears" to the Finance module.</p>
            </div>

            <div className={`${styles.quickAction} card`}>
               <Zap size={24} color="#f59e0b" />
               <h3>Hands-Free Mode</h3>
               <p>Say "Hey SMS" to wake the assistant anytime.</p>
               <button className={styles.activateBtn}>Enable Wake Word</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
