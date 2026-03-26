import { 
  Scan, 
  UserCheck, 
  Clock, 
  AlertCircle, 
  Camera,
  History,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import styles from "./facial.module.css";

export default function FacialAttendancePage() {
  const logs = [
    { time: "08:12 AM", student: "Alex Johnson", id: "ST-001", status: "Verified", confidence: "99.8%" },
    { time: "08:14 AM", student: "Maya Patel", id: "ST-002", status: "Verified", confidence: "98.5%" },
    { time: "08:15 AM", student: "Chris Evans", id: "ST-003", status: "Manual Override", confidence: "62.0%" },
    { time: "08:18 AM", student: "Sofia Rodriguez", id: "ST-004", status: "Verified", confidence: "99.9%" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Camera size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Facial Recognition Attendance</h1>
              <p className={styles.subtitle}>Contactless auto-attendance via synchronized camera feeds at school entry points.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.liveFeed} card`}>
            <div className={styles.feedHeader}>
               <div className={styles.pulse}></div>
               <span>Main Entrance - Stream 01</span>
            </div>
            <div className={styles.cameraView}>
               <div className={styles.overlay}>
                  <div className={styles.scanner}></div>
                  <div className={styles.faceBox}>
                     <p>Identifying...</p>
                  </div>
               </div>
            </div>
            <div className={styles.feedActions}>
               <button className={styles.controlBtn}>Restart Feed</button>
               <button className={styles.controlBtn}>Switch Camera</button>
            </div>
         </section>

         <section className={`${styles.logSection} card`}>
            <h3>Real-time Verification Log</h3>
            <div className={styles.logList}>
               {logs.map((log, i) => (
                 <div key={i} className={styles.logItem}>
                    <div className={styles.logTime}>{log.time}</div>
                    <div className={styles.logMain}>
                       <strong>{log.student}</strong>
                       <span>{log.id}</span>
                    </div>
                    <div className={styles.logMeta}>
                       <span className={`${styles.status} ${log.status === 'Verified' ? styles.success : styles.warning}`}>
                          {log.status === 'Verified' ? <CheckCircle2 size={12} /> : <AlertCircle size={12} />}
                          {log.status}
                       </span>
                       <span className={styles.confidence}>{log.confidence} Match</span>
                    </div>
                 </div>
               ))}
            </div>
         </section>
      </div>

      <section className={`${styles.analytics} glass`}>
         <div className={styles.stat}>
            <strong>942</strong>
            <span>Verified Today</span>
         </div>
         <div className={styles.stat}>
            <strong>0s</strong>
            <span>Avg. Latency</span>
         </div>
         <div className={styles.stat}>
            <strong>99.4%</strong>
            <span>System Confidence</span>
         </div>
      </section>
    </div>
  );
}
