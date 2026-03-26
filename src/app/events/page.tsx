import { 
  Calendar as CalendarIcon, 
  MapPin, 
  Plus, 
  Search, 
  Users, 
  Trophy, 
  Music, 
  Palette, 
  ChevronRight,
  Clock
} from "lucide-react";
import styles from "./events.module.css";

export default function EventsPage() {
  const upcomingEvents = [
    { title: "Annual Science Fair", date: "Mar 25, 2024", time: "09:00 AM", location: "School Auditorium", type: "Academic" },
    { title: "Inter-School Soccer", date: "Mar 28, 2024", time: "03:30 PM", location: "Main Field", type: "Sports" },
    { title: "Spring Music Concert", date: "Apr 05, 2024", time: "06:00 PM", location: "Music Hall", type: "Cultural" },
  ];

  const clubs = [
    { name: "Robotics Club", members: 24, lead: "Sarah Williams", day: "Tuesday" },
    { name: "Drama Society", members: 18, lead: "James Brown", day: "Thursday" },
    { name: "Art & Design", members: 32, lead: "Emily Davis", day: "Monday" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Events & Activities</h1>
          <p className={styles.subtitle}>Coordinate school events, manage student clubs, and track sports results.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <CalendarIcon size={18} />
             <span>Calendar View</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Create Event</span>
           </button>
        </div>
      </header>

      <div className={styles.mainGrid}>
        <section className={`${styles.eventsSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Upcoming Events</h2>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search events..." />
              </div>
           </div>
           <div className={styles.eventList}>
              {upcomingEvents.map((event, i) => (
                <div key={i} className={styles.eventItem}>
                   <div className={`${styles.dateBox} ${styles[event.type.toLowerCase()]}`}>
                      <span className={styles.dateDay}>{event.date.split(' ')[1].replace(',', '')}</span>
                      <span className={styles.dateMonth}>{event.date.split(' ')[0]}</span>
                   </div>
                   <div className={styles.eventMain}>
                      <p className={styles.eventTitle}>{event.title}</p>
                      <div className={styles.eventMeta}>
                         <span className={styles.metaItem}><Clock size={14} /> {event.time}</span>
                         <span className={styles.metaItem}><MapPin size={14} /> {event.location}</span>
                      </div>
                   </div>
                   <span className={`${styles.typeBadge} ${styles[event.type.toLowerCase()]}`}>
                      {event.type}
                   </span>
                   <ChevronRight size={20} color="#ccc" />
                </div>
              ))}
           </div>
        </section>

        <section className={styles.sidebarSection}>
            <div className={`${styles.clubCard} card`}>
                <div className={styles.sectionHeader}>
                   <h3>Student Clubs</h3>
                   <button className={styles.manageBtn}>Manage</button>
                </div>
                <div className={styles.clubList}>
                   {clubs.map((club, i) => (
                     <div key={i} className={styles.clubItem}>
                        <div className={styles.clubIcon}>
                           {club.name.includes('Robotics') && <Settings size={20} />}
                           {club.name.includes('Drama') && <Music size={20} />}
                           {club.name.includes('Art') && <Palette size={20} />}
                        </div>
                        <div className={styles.clubInfo}>
                           <p className={styles.clubName}>{club.name}</p>
                           <p className={styles.clubMeta}>{club.members} Members • {club.day}</p>
                        </div>
                     </div>
                   ))}
                </div>
            </div>

            <div className={`${styles.sportsCard} glass`}>
                <div className={styles.insightHeader}>
                   <Trophy size={18} color="#f59e0b" />
                   <span>Recent Victory</span>
                </div>
                <p className={styles.insightText}>
                   Junior Basketball team won 42-38 against West High! Medal tally updated.
                </p>
                <button className={styles.insightBtn}>View Standings</button>
            </div>
        </section>
      </div>
    </div>
  );
}
