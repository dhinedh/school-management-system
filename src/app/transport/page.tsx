import { 
  Bus, 
  MapPin, 
  Plus, 
  Navigation, 
  UserPlus, 
  Settings2, 
  Search, 
  ShieldCheck, 
  PhoneCall,
  ChevronRight,
  History as HistoryIcon
} from "lucide-react";
import styles from "./transport.module.css";

export default function TransportPage() {
  const routes = [
    { name: "North Springfield", stops: 12, vehicle: "Bus 01", driver: "John Doe", students: 42 },
    { name: "West Springfield", stops: 8, vehicle: "Bus 02", driver: "Jane Smith", students: 35 },
    { name: "Downtown Express", stops: 5, vehicle: "Bus 03", driver: "Robert Lee", students: 28 },
  ];

  const vehicles = [
    { id: "V-01", type: "Big Bus", plate: "XYZ-1234", status: "Active", capacity: 50 },
    { id: "V-02", type: "Minibus", plate: "ABC-5678", status: "Maintenance", capacity: 20 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Transport Management</h1>
          <p className={styles.subtitle}>Coordinate school bus routes, vehicle fleet, and student safety.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <HistoryIcon size={18} />
             <span>Maintenance Logs</span>
           </button>
           <button className="btn btn-secondary">
             <Navigation size={18} />
             <span>Live Tracking</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Add New Route</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Active Routes</p>
           <p className={styles.statsValue}>14</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Vehicles</p>
           <p className={styles.statsValue}>18</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Assigned Students</p>
           <p className={styles.statsValue}>482</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Avg. Trip Duration</p>
           <p className={styles.statsValue}>45m</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.routesSection} card`}>
          <div className={styles.tableHeader}>
            <h2>Bus Routes</h2>
            <div className={styles.search}>
               <Search size={16} />
               <input type="text" placeholder="Search routes or areas..." />
            </div>
          </div>
          <div className={styles.routeList}>
            {routes.map((route, i) => (
              <div key={i} className={styles.routeItem}>
                 <div className={styles.routeIcon}>
                    <Bus size={24} color="var(--primary-color)" />
                 </div>
                 <div className={styles.routeMain}>
                    <p className={styles.routeName}>{route.name}</p>
                    <p className={styles.routeMeta}>{route.stops} Stops • Driver: {route.driver}</p>
                 </div>
                 <div className={styles.routeStats}>
                    <p className={styles.routeStudents}>{route.students} Students</p>
                    <p className={styles.routeVehicle}>{route.vehicle}</p>
                 </div>
                 <ChevronRight size={20} color="#ccc" />
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sidebarSection}>
          <div className={`${styles.vehicleCard} card`}>
             <h3>Vehicle Fleet</h3>
             <div className={styles.vehicleList}>
                {vehicles.map((v, i) => (
                  <div key={i} className={styles.vehicleItem}>
                     <div className={styles.vehicleInfo}>
                        <p className={styles.vehicleId}>{v.id} - {v.plate}</p>
                        <p className={styles.vehicleType}>{v.type} • Cap: {v.capacity}</p>
                     </div>
                     <span className={`${styles.statusBadge} ${styles[v.status.toLowerCase()]}`}>
                        {v.status}
                     </span>
                  </div>
                ))}
             </div>
          </div>

          <div className={`${styles.safetyCard} glass`}>
             <div className={styles.insightHeader}>
                <ShieldCheck size={18} color="#10b981" />
                <span>Safety Compliance</span>
             </div>
             <p className={styles.insightText}>
                All 14 active routes are within safe speed limits. Drivers have logged 100% attendance today.
             </p>
             <button className={styles.insightBtn}>View Safety Logs</button>
          </div>
        </section>
      </div>
    </div>
  );
}
