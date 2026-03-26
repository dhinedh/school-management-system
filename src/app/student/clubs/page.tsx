import { 
  Coffee, 
  Calendar, 
  Users, 
  Plus, 
  Search, 
  MapPin, 
  Ticket, 
  CheckCircle2,
  Clock,
  Music,
  Camera,
  Heart
} from "lucide-react";
import styles from "./clubs.module.css";

export default function ClubsHub() {
  const clubs = [
    { title: "Photography Club", icon: <Camera />, members: 42, active: true },
    { title: "Eco-Warriors", icon: <Heart />, members: 28, active: true },
    { title: "Coding Ninjas", icon: <Users />, members: 110, active: true },
    { title: "Music Ensemble", icon: <Music />, members: 15, active: true },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Clubs & Extracurriculars</h1>
        <p className={styles.subtitle}>Explore interests, join communities, and lead institutional events.</p>
      </header>

      <div className={styles.searchBar}>
         <Search size={20} className={styles.searchIcon} />
         <input type="text" placeholder="Search for clubs or events..." />
         <button className={styles.registerBtn}><Plus size={18} /> New Event</button>
      </div>

      <div className={styles.mainGrid}>
         <section className={styles.clubsSection}>
            <h3 className={styles.sectionTitle}>Official School Clubs</h3>
            <div className={styles.clubGrid}>
               {clubs.map((c, i) => (
                  <div key={i} className={`${styles.clubCard} card`}>
                     <div className={styles.clubIcon}>{c.icon}</div>
                     <div className={styles.clubInfo}>
                        <h4>{c.title}</h4>
                        <div className={styles.meta}>
                           <Users size={14} />
                           <span>{c.members} Active Members</span>
                        </div>
                     </div>
                     <button className={styles.joinBtn}>View Club</button>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.eventsSection}>
            <div className={`${styles.upcomingEvents} glass`}>
               <h3 className={styles.sideTitle}><Calendar size={18} /> Upcoming Events</h3>
               <div className={styles.eventItem}>
                  <div className={styles.eventDate}>
                     <strong>12</strong>
                     <span>OCT</span>
                  </div>
                  <div className={styles.eventDetails}>
                     <p>Annual Science Fair</p>
                     <div className={styles.eMeta}>
                        <MapPin size={12} />
                        <span>Main Auditorium</span>
                     </div>
                  </div>
               </div>
               <div className={styles.eventItem}>
                  <div className={styles.eventDate}>
                     <strong>15</strong>
                     <span>OCT</span>
                  </div>
                  <div className={styles.eventDetails}>
                     <p>Inter-School Debating</p>
                     <div className={styles.eMeta}>
                        <Clock size={12} />
                        <span>09:00 AM</span>
                     </div>
                  </div>
               </div>
               <button className={styles.viewAllBtn}>Register for Events</button>
            </div>

            <div className="card">
               <h3>My Registrations</h3>
               <div className={styles.registrationList}>
                  <div className={styles.regItem}>
                     <CheckCircle2 size={16} color="#10b981" />
                     <p>Photography Workshop</p>
                  </div>
                  <div className={styles.regItem}>
                     <CheckCircle2 size={16} color="#10b981" />
                     <p>Coding Ninja Meetup</p>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
