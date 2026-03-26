import { 
  ShieldCheck, 
  Smartphone, 
  Phone, 
  Printer, 
  MessageSquare, 
  Activity, 
  Clock, 
  CheckCircle,
  AlertCircle,
  FileText,
  Search,
  Filter
} from "lucide-react";
import styles from "./communication.module.css";
import { comms } from "@/lib/communication-service";

export default function CommunicationHub() {
  const parents = comms.getParentProfiles();
  const logs = [
    { id: "LOG-001", parent: "Velmurugan", method: "IVR Call", status: "Success", time: "10:15 AM", msg: "Absence Alert (Tamil)" },
    { id: "LOG-002", parent: "John Doe", method: "WhatsApp", status: "Read", time: "09:45 AM", msg: "Fee Reminder (English)" },
    { id: "LOG-003", parent: "Arjun Singh", method: "Print", status: "Pending", time: "08:30 AM", msg: "Monthly Newsletter" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Hybrid Communication Hub</h1>
          <p className={styles.subtitle}>No Parent Left Behind: Cross-channel delivery (WhatsApp / IVR / SMS / Print).</p>
        </div>
        <div className={styles.stats}>
           <div className={styles.statItem}>
              <strong>98%</strong>
              <span>Coverage</span>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
        <section className={`${styles.profilesSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Parent Preferences</h2>
              <button className="btn btn-secondary"><Filter size={16} /> Filter</button>
           </div>
           <div className={styles.profileList}>
              {parents.map(p => (
                <div key={p.id} className={styles.profileItem}>
                  <div className={styles.profileInfo}>
                    <strong>{p.name}</strong>
                    <span>{p.phone} • {p.language.toUpperCase()}</span>
                  </div>
                  <div className={styles.typeBadge}>
                    {p.type === 'smartphone' && <Smartphone size={16} />}
                    {p.type === 'basic' && <Phone size={16} />}
                    {p.type === 'none' && <Printer size={16} />}
                    <span>{p.type.replace(/^\w/, c => c.toUpperCase())}</span>
                  </div>
                </div>
              ))}
           </div>
        </section>

        <section className={`${styles.logsSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Master Dispatch Log</h2>
              <div className={`${styles.liveTag}`}>LIVE AUDIT</div>
           </div>
           <table className={styles.logTable}>
              <thead>
                <tr>
                  <th>Recipient</th>
                  <th>Method</th>
                  <th>Status</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log, i) => (
                  <tr key={i}>
                    <td><strong>{log.parent}</strong></td>
                    <td>
                      <div className={styles.methodCell}>
                        {log.method === 'WhatsApp' ? <MessageSquare size={14} /> : <Activity size={14} />}
                        {log.method}
                      </div>
                    </td>
                    <td>
                      <span className={log.status === 'Success' || log.status === 'Read' ? styles.statusOk : styles.statusWait}>
                        {log.status}
                      </span>
                    </td>
                    <td>{log.time}</td>
                  </tr>
                ))}
              </tbody>
           </table>
        </section>
      </div>

      <section className={styles.ivrSim}>
         <div className={`${styles.ivrCard} glass`}>
            <div className={styles.ivrHeader}>
               <div className={styles.ivrIcon}><Phone /></div>
               <div>
                  <h3>IVR Voice Trigger: Attendance Alert</h3>
                  <p>Parent Profile: <strong>Velmurugan (Basic Phone)</strong></p>
               </div>
            </div>
            <div className={styles.audioWave}>
               {[...Array(20)].map((_, i) => <div key={i} className={styles.waveBar} style={{ height: `${Math.random() * 30 + 10}px` }}></div>)}
            </div>
            <p className={styles.ivrScript}>
               "Vanakkam, your child was absent today. Ungal pillai inniku school-ku varala."
            </p>
            <div className={styles.ivrActions}>
               <span className={styles.ivrStatus}>CALLING IN PROGRESS...</span>
            </div>
         </div>
      </section>
    </div>
  );
}
