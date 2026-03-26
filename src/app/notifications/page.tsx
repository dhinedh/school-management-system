"use client";

import { useState } from "react";
import { 
  Bell, 
  CheckCircle2, 
  AlertTriangle, 
  Info, 
  MoreVertical, 
  Filter,
  Inbox,
  Clock,
  Trash2
} from "lucide-react";
import styles from "./notifications.module.css";

export default function NotificationsPage() {
  const [filter, setFilter] = useState("All");

  const notifications = [
    { 
      id: 1, 
      title: "Urgent: System Maintenance", 
      message: "Planned server sync for Grade 12 students tonight at 10 PM. Prepare your offline cache.", 
      time: "10 mins ago", 
      type: "Urgent", 
      icon: AlertTriangle, 
      color: "#ef4444" 
    },
    { 
      id: 2, 
      title: "Academic Update: Grade 10 Results", 
      message: "The final performance matrix for Grade 10 is now available for review and sync.", 
      time: "2 hours ago", 
      type: "Academic", 
      icon: CheckCircle2, 
      color: "var(--primary-color)" 
    },
    { 
      id: 3, 
      title: "New Admission Inquiry", 
      message: "A new student inquiry has been received for the Rural Excellence Program.", 
      time: "5 hours ago", 
      type: "Admissions", 
      icon: Info, 
      color: "#3b82f6" 
    },
    { 
      id: 4, 
      title: "Fee Reminder Sent", 
      message: "Automated IVR calls have been routed to 24 parents regarding overdue installments.", 
      time: "1 day ago", 
      type: "Finance", 
      icon: Clock, 
      color: "#10b981" 
    }
  ];

  const categories = ["All", "Urgent", "Academic", "Finance"];

  const filteredNotifications = filter === "All" 
    ? notifications 
    : notifications.filter(n => n.type === filter);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.titleArea}>
           <h1>Institutional Pulse</h1>
           <p>Manage all school-wide alerts and strategic updates.</p>
        </div>
        <button className={styles.markAllBtn}>
          <CheckCircle2 size={18} />
          <span>Mark All Read</span>
        </button>
      </header>

      <div className={styles.filterBar}>
        <div className={styles.categories}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`${styles.catBtn} ${filter === cat ? styles.activeCat : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <button className={styles.iconBtn}>
          <Filter size={18} />
        </button>
      </div>

      <div className={styles.pulseArea}>
        {filteredNotifications.length > 0 ? (
          <div className={styles.notificationList}>
            {filteredNotifications.map((note) => (
              <div key={note.id} className={`${styles.noteCard} card`}>
                <div className={styles.noteIcon} style={{ background: `${note.color}15`, color: note.color }}>
                   <note.icon size={20} />
                </div>
                <div className={styles.noteBody}>
                  <div className={styles.noteHeader}>
                    <span className={styles.noteType} style={{ color: note.color }}>{note.type}</span>
                    <span className={styles.noteTime}>{note.time}</span>
                  </div>
                  <h3 className={styles.noteTitle}>{note.title}</h3>
                  <p className={styles.noteText}>{note.message}</p>
                  <div className={styles.noteActions}>
                    <button className={styles.actionBtn}>Mark as resolved</button>
                    <button className={styles.actionBtn}>Archive</button>
                  </div>
                </div>
                <button className={styles.moreBtn}>
                  <MoreVertical size={16} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
             <div className={styles.emptyIcon}><Inbox size={48} /></div>
             <h3>No notifications here</h3>
             <p>Select a different category or wait for institutional pulses.</p>
          </div>
        )}
      </div>

      <div className={styles.cleanupArea}>
         <button className={styles.deleteBtn}>
            <Trash2 size={16} />
            <span>Delete Read Notifications</span>
         </button>
      </div>
    </div>
  );
}
