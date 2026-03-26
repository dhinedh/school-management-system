import { 
  Calendar, 
  Clock, 
  User, 
  MapPin, 
  CheckCircle2, 
  Plus, 
  ArrowRight,
  Video,
  Users
} from "lucide-react";
import styles from "./ptm.module.css";

export default function PTMScheduler() {
  const upcomingMeetings = [
    { provider: "Mrs. Sarah White", subject: "Mathematics", date: "Oct 15, 2024", time: "10:00 AM", type: "In-Person", room: "Block A - 204" },
  ];

  const availableTeachers = [
    { name: "Mr. David Smith", subject: "Physics", availability: "Avail. Tomorrow" },
    { name: "Ms. Elena Rose", subject: "English", availability: "Avail. Friday" },
    { name: "Dr. Robert King", subject: "History", availability: "Avail. Monday" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>PTM Scheduler</h1>
        <p className={styles.subtitle}>Book and manage meetings with Alex's teachers.</p>
      </header>

      <section className={styles.upcomingSection}>
         <h3 className={styles.sectionTitle}>Confirmed Meetings</h3>
         <div className={styles.meetingGrid}>
            {upcomingMeetings.map((m, i) => (
               <div key={i} className={`${styles.meetingCard} card`}>
                  <div className={styles.mHeader}>
                     <div className={styles.mIcon}><User size={20} /></div>
                     <div className={styles.mInfo}>
                        <h4>{m.provider}</h4>
                        <span className={styles.subject}>{m.subject}</span>
                     </div>
                  </div>
                  <div className={styles.mDetails}>
                     <div className={styles.detailItem}>
                        <Calendar size={14} />
                        <span>{m.date}</span>
                     </div>
                     <div className={styles.detailItem}>
                        <Clock size={14} />
                        <span>{m.time}</span>
                     </div>
                     <div className={styles.detailItem}>
                        {m.type === 'In-Person' ? <MapPin size={14} /> : <Video size={14} />}
                        <span>{m.room}</span>
                     </div>
                  </div>
                  <div className={styles.mActions}>
                     <button className={styles.rescheduleBtn}>Reschedule</button>
                     <button className={styles.cancelBtn}>Cancel</button>
                  </div>
               </div>
            ))}
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.bookingSection}>
            <h3 className={styles.sectionTitle}>New Booking</h3>
            <div className={styles.teacherGrid}>
               {availableTeachers.map((t, i) => (
                  <div key={i} className={`${styles.teacherCard} card`}>
                     <div className={styles.tInfo}>
                        <strong>{t.name}</strong>
                        <p>{t.subject}</p>
                        <span className={styles.avail}>{t.availability}</span>
                     </div>
                     <button className={styles.bookBtn}>Select Slot <ArrowRight size={14} /></button>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.historySection}>
            <div className="card">
               <h3 className={styles.sideTitle}><Clock size={18} /> Past Meetings</h3>
               <div className={styles.historyList}>
                  <div className={styles.historyItem}>
                     <p>Physics Review (Sep 12)</p>
                     <span>Completed</span>
                  </div>
                  <div className={styles.historyItem}>
                     <p>Quarterly Progress (Aug 20)</p>
                     <span>Completed</span>
                  </div>
               </div>
            </div>

            <div className={`${styles.ptmPolicy} glass`}>
               <h3>PTM Guidelines</h3>
               <p>Meetings are strictly 15 minutes. Please be on time or notify via the App for delays.</p>
            </div>
         </aside>
      </div>
    </div>
  );
}
