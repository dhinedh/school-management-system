import { 
  LifeBuoy, 
  MessageSquare, 
  Flag, 
  User, 
  Shield, 
  Clock, 
  CheckCircle,
  MoreVertical,
  Plus,
  Search,
  Filter,
  ArrowRight
} from "lucide-react";
import styles from "./complaints.module.css";

export default function ComplaintsPage() {
  const tickets = [
    { id: "TKT-1024", subject: "Classroom AC Not Working", sender: "Grade 10B Student", type: "Student", date: "2 Hours ago", priority: "High", status: "Open" },
    { id: "TKT-1025", subject: "Transport Route Delayed", sender: "Maya Patel's Parent", type: "Parent", date: "5 Hours ago", priority: "Medium", status: "In Progress" },
    { id: "TKT-1026", subject: "Resource Request: Lab Bibs", sender: "Anonymous Staff", type: "Staff", date: "Yesterday", priority: "Low", status: "Resolved" },
    { id: "TKT-1027", subject: "Canteen Food Quality", sender: "Anonymous", type: "Anonymous", date: "2 Days ago", priority: "Medium", status: "Open" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Unified Complaints Hub</h1>
          <p className={styles.subtitle}>Manage feedback and grievances from students, parents, and staff.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Shield size={18} />
             <span>Redressal Rules</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>New Ticket</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Open Tickets</p>
           <p className={styles.statsValue}>12</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Avg. Resolution Time</p>
           <p className={styles.statsValue}>4.5h</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Staff Satisfaction</p>
           <p className={styles.statsValue}>92%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Escalated</p>
           <p className={`${styles.statsValue} ${styles.warning}`}>3</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.ticketsSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Active Grievances</h2>
              <div className={styles.tableActions}>
                 <div className={styles.search}>
                    <Search size={16} />
                    <input type="text" placeholder="Search by ID or subject..." />
                 </div>
                 <button className={styles.filterBtn}><Filter size={18} /></button>
              </div>
           </div>
           
           <table className={styles.table}>
             <thead>
               <tr>
                 <th>Ticket ID & Subject</th>
                 <th>Raised By</th>
                 <th>Date</th>
                 <th>Priority</th>
                 <th>Status</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               {tickets.map((t, i) => (
                 <tr key={i}>
                   <td>
                      <p className={styles.ticketId}>{t.id}</p>
                      <p className={styles.subject}>{t.subject}</p>
                   </td>
                   <td>
                      <div className={styles.senderInfo}>
                         {t.type === 'Anonymous' ? <Shield size={14} /> : <User size={14} />}
                         <span>{t.sender}</span>
                      </div>
                   </td>
                   <td>{t.date}</td>
                   <td>
                      <span className={`${styles.priorityBadge} ${styles[t.priority.toLowerCase()]}`}>
                         {t.priority}
                      </span>
                   </td>
                   <td>
                      <span className={`${styles.statusBadge} ${styles[t.status.replace(' ', '').toLowerCase()]}`}>
                         {t.status}
                      </span>
                   </td>
                   <td><button className={styles.moreBtn}><ArrowRight size={18} /></button></td>
                 </tr>
               ))}
             </tbody>
           </table>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.escalationCard} glass`}>
               <h3>Escalation Levels</h3>
               <div className={styles.levelsList}>
                  <div className={styles.levelItem}>
                     <div className={styles.levelDot}>L1</div>
                     <span>Department Head</span>
                  </div>
                  <div className={styles.levelItem}>
                     <div className={styles.levelDot}>L2</div>
                     <span>Principal Office</span>
                  </div>
                  <div className={styles.levelItem}>
                     <div className={`${styles.levelDot} ${styles.active}`}>L3</div>
                     <span>Management Board</span>
                  </div>
               </div>
               <p className={styles.levelNote}>3 tickets are currently at Level 3 escalation.</p>
            </div>

            <div className={`${styles.anonymousConfig} card`}>
               <h3>Anonymity Mode</h3>
               <p>Students and Staff can submit grievances with full encryption of identity.</p>
               <div className={styles.toggleRow}>
                  <span>Strict Confidentiality</span>
                  <div className={styles.toggleActive}>ON</div>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
