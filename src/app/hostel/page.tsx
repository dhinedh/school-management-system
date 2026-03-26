import { 
  Home, 
  Building2, 
  Plus, 
  Search, 
  Users, 
  AlertCircle, 
  Settings, 
  Bed, 
  UserCheck,
  ChevronRight
} from "lucide-react";
import styles from "./hostel.module.css";

export default function HostelPage() {
  const blocks = [
    { name: "Boys Hostel - Block A", floors: 4, rooms: 48, occupancy: "92%", warden: "David Miller" },
    { name: "Girls Hostel - Block B", floors: 3, rooms: 36, occupancy: "85%", warden: "Linda Wilson" },
  ];

  const recentRequests = [
    { student: "Chris Evans", request: "Room Change", date: "Mar 16, 2024", status: "Pending" },
    { student: "Sofia Rodriguez", request: "Maintenance: AC", date: "Mar 14, 2024", status: "Resolved" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Hostel & Dormitory</h1>
          <p className={styles.subtitle}>Manage student housing, room allotments, and residential staff.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <UserCheck size={18} />
             <span>Visitor Logs</span>
           </button>
           <button className="btn btn-secondary">
             <Settings size={18} />
             <span>Room Rules</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>New Allotment</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Capacity</p>
           <p className={styles.statsValue}>240 Beds</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Available Beds</p>
           <p className={styles.statsValue}>32</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Occupancy Rate</p>
           <p className={styles.statsValue}>86.5%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Open Complaints</p>
           <p className={styles.statsValue}>4</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.blocksSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Housing Blocks</h2>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search blocks..." />
              </div>
           </div>
           <div className={styles.blockList}>
              {blocks.map((block, i) => (
                <div key={i} className={styles.blockItem}>
                   <div className={styles.blockIcon}>
                      <Home size={24} color="var(--primary-color)" />
                   </div>
                   <div className={styles.blockMain}>
                      <p className={styles.blockName}>{block.name}</p>
                      <p className={styles.blockMeta}>{block.floors} Floors • {block.rooms} Rooms • Warden: {block.warden}</p>
                   </div>
                   <div className={styles.blockStats}>
                      <p className={styles.occupancyLabel}>Occupancy</p>
                      <p className={styles.occupancyValue}>{block.occupancy}</p>
                   </div>
                   <ChevronRight size={20} color="#ccc" />
                </div>
              ))}
           </div>
        </section>

        <section className={styles.sidebarSection}>
            <div className={`${styles.requestCard} card`}>
                <h3>Service Requests</h3>
                <div className={styles.requestList}>
                   {recentRequests.map((req, i) => (
                     <div key={i} className={styles.requestItem}>
                        <div className={styles.reqInfo}>
                           <p className={styles.reqTitle}>{req.request}</p>
                           <p className={styles.reqStudent}>{req.student} • {req.date}</p>
                        </div>
                        <span className={`${styles.statusBadge} ${styles[req.status.toLowerCase()]}`}>
                           {req.status}
                        </span>
                     </div>
                   ))}
                </div>
                <button className={styles.viewAllBtn}>View All Requests</button>
            </div>

            <div className={`${styles.messCard} glass`}>
                <div className={styles.insightHeader}>
                   <Bed size={18} color="var(--primary-color)" />
                   <span>Mess Menu - Today</span>
                </div>
                <div className={styles.menuItem}>
                    <p className={styles.mealType}>Lunch</p>
                    <p className={styles.mealDesc}>Steamed Rice, Dal Tadka, Seasonal Veg, Curd</p>
                </div>
                <button className={styles.insightBtn}>Manage Mess Menu</button>
            </div>
        </section>
      </div>
    </div>
  );
}
