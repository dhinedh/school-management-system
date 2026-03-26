import { 
  Smartphone, 
  MessageSquare, 
  Send, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Plus, 
  BarChart, 
  Settings,
  MoreVertical,
  Zap
} from "lucide-react";
import styles from "./whatsapp.module.css";

export default function WhatsAppHubPage() {
  const campaigns = [
    { title: "Term 2 Fee Reminder", audience: "Grade 1-12 Parents", status: "Scheduled", stats: "450 Pending" },
    { title: "PTM Invites", audience: "All Guardians", status: "Completed", stats: "98% Delivered" },
    { title: "Attendance Alerts", audience: "Absentees Only", status: "Active", stats: "Daily Auto-trigger" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Smart WhatsApp Automation Hub</h1>
          <p className={styles.subtitle}>Unified platform for automated high-engagement messaging and parent alerts.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><Settings size={18} /> API Config</button>
           <button className="btn btn-primary"><Plus size={18} /> New Campaign</button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Messages Sent (MTD)</p>
           <p className={styles.statsValue}>12,450</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Avg. Open Rate</p>
           <p className={styles.statsValue}>92%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Cost Savings (vs SMS)</p>
           <p className={styles.statsValue}>$340.00</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Active Automations</p>
           <p className={styles.statsValue}>8</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.campaignSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Messaging Campaigns</h2>
              <div className={styles.tagGroup}>
                 <span className={styles.tagActive}>All</span>
                 <span>Broadcasts</span>
                 <span>Automations</span>
              </div>
           </div>
           
           <div className={styles.campaignList}>
              {campaigns.map((c, i) => (
                <div key={i} className={styles.cItem}>
                   <div className={styles.cIcon}><MessageSquare size={20} /></div>
                   <div className={styles.cInfo}>
                      <p className={styles.cTitle}>{c.title}</p>
                      <p className={styles.cMeta}>{c.audience} • {c.status}</p>
                   </div>
                   <div className={styles.cStats}>
                      <span className={styles.statsBadge}>{c.stats}</span>
                      <button className={styles.moreBtn}><MoreVertical size={18} /></button>
                   </div>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.templateCard} glass`}>
               <div className={styles.cardHeader}>
                  <h3>Approved Templates</h3>
                  <Zap size={16} color="#f59e0b" />
               </div>
               <div className={styles.templateList}>
                  <div className={styles.templateItem}>
                     <p><strong>Fee Reminder:</strong> "Dear Parent, fee for..."</p>
                     <span className={styles.meta}>Meta Verified</span>
                  </div>
                  <div className={styles.templateItem}>
                     <p><strong>Result Alert:</strong> "Hello [Name], Term 2..."</p>
                     <span className={styles.meta}>Meta Verified</span>
                  </div>
               </div>
               <button className={styles.manageBtn}>Manage Templates</button>
            </div>

            <div className={`${styles.automationCard} card`}>
               <h3>Smart Auto-Triggers</h3>
               <div className={styles.triggerRow}>
                  <p>Daily Attendance (9:30 AM)</p>
                  <div className={styles.toggleActive}>ON</div>
               </div>
               <div className={styles.triggerRow}>
                  <p>Grade Report (On Publish)</p>
                  <div className={styles.toggleActive}>ON</div>
               </div>
               <div className={styles.triggerRow}>
                  <p>Event Reminders (24h Before)</p>
                  <div className={styles.toggleActive}>ON</div>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
