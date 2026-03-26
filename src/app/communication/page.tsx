import { 
  MessageSquare, 
  Megaphone, 
  Send, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Bell,
  CheckCheck,
  ChevronRight
} from "lucide-react";
import styles from "./communication.module.css";

export default function CommunicationPage() {
  const announcements = [
    { title: "Annual Sports Day 2024", date: "Mar 15, 2024", target: "All Students", priority: "High" },
    { title: "Mid-Term Results Published", date: "Mar 10, 2024", target: "Parents", priority: "Medium" },
    { title: "Staff Meeting: New Curriculum", date: "Mar 08, 2024", target: "Teachers", priority: "Low" },
  ];

  const chats = [
    { name: "Robert Smith", lastMsg: "Please review the reports.", time: "10:30 AM", unread: 2 },
    { name: "Sarah Williams", lastMsg: "The student will be late today.", time: "Yesterday", unread: 0 },
    { name: "Parent Group 10A", lastMsg: "Thank you for the update.", time: "Mon", unread: 5 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Communication Module</h1>
          <p className={styles.subtitle}>Broadcast announcements and engage in threaded conversations.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Bell size={18} />
             <span>Notifications</span>
           </button>
           <button className="btn btn-primary">
             <Megaphone size={18} />
             <span>New Announcement</span>
           </button>
        </div>
      </header>

      <div className={styles.mainGrid}>
        <section className={`${styles.announcementBoard} card`}>
          <div className={styles.sectionHeader}>
            <h2>Announcements</h2>
            <button className={styles.viewAll}>View All</button>
          </div>
          <div className={styles.announcementList}>
            {announcements.map((ann, i) => (
              <div key={i} className={styles.announcementItem}>
                <div className={styles.annContent}>
                  <div className={styles.annHeader}>
                    <p className={styles.annTitle}>{ann.title}</p>
                    <span className={`${styles.priorityBadge} ${styles[ann.priority.toLowerCase()]}`}>
                      {ann.priority}
                    </span>
                  </div>
                  <p className={styles.annMeta}>To: {ann.target} • {ann.date}</p>
                </div>
                <ChevronRight size={18} color="#ccc" />
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.messagingSection} card`}>
          <div className={styles.messagingHeader}>
            <h2>Internal Messaging</h2>
            <button className={styles.newChatBtn}><Plus size={18} /></button>
          </div>
          <div className={styles.chatList}>
            <div className={styles.chatSearch}>
               <Search size={16} />
               <input type="text" placeholder="Search chats..." />
            </div>
            {chats.map((chat, i) => (
              <div key={i} className={`${styles.chatItem} ${i === 0 ? styles.activeChat : ''}`}>
                <div className={styles.chatAvatar}>{chat.name[0]}</div>
                <div className={styles.chatInfo}>
                   <div className={styles.chatHeader}>
                      <p className={styles.chatName}>{chat.name}</p>
                      <span className={styles.chatTime}>{chat.time}</span>
                   </div>
                   <div className={styles.chatFooter}>
                      <p className={styles.chatLastMsg}>{chat.lastMsg}</p>
                      {chat.unread > 0 && <span className={styles.unreadCount}>{chat.unread}</span>}
                      {chat.unread === 0 && <CheckCheck size={14} color="#10b981" />}
                   </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className={`${styles.broadcastSection} glass`}>
         <div className={styles.broadcastContent}>
            <div>
               <h3>SMS Gateway Integration</h3>
               <p>Send critical alerts via SMS directly to parents' mobile numbers.</p>
            </div>
            <div className={styles.broadcastStats}>
               <div className={styles.bStat}>
                  <span>Credits Left</span>
                  <strong>4,850</strong>
               </div>
               <button className={styles.rechargeBtn}>Recharge</button>
            </div>
         </div>
      </section>
    </div>
  );
}
