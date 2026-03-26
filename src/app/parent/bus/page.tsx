import { 
  Bus, 
  MapPin, 
  Navigation, 
  Clock, 
  Bell, 
  ShieldCheck, 
  User,
  Phone,
  ArrowRight,
  Maximize2
} from "lucide-react";
import styles from "./bus.module.css";

export default function LiveBusTracker() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Live Bus Tracker</h1>
        <p className={styles.subtitle}>Real-time GPS tracking for Bus Route #4 (Alex's Route).</p>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.mapSection} card`}>
            <div className={styles.mapHeader}>
               <div className={styles.statusBadge}>
                  <div className={styles.dot}></div>
                  <span>LIVE TRACKING ACTIVE</span>
               </div>
               <button className={styles.expandBtn}><Maximize2 size={16} /></button>
            </div>
            <div className={styles.mapArea}>
               <div className={styles.mapOverlay}>
                  <div className={styles.busMarker} style={{ left: '60%', top: '40%' }}>
                     <Bus size={20} color="white" />
                     <div className={styles.markerPulse}></div>
                  </div>
                  <div className={styles.stopMarker} style={{ left: '85%', top: '30%' }}>
                     <MapPin size={16} color="#ef4444" />
                     <span>Alex's Stop</span>
                  </div>
               </div>
               <div className={styles.blueprintEffect}></div>
               <p className={styles.mapLabel}>Satellite GPS Render Engine Active</p>
            </div>
         </section>

         <aside className={styles.transitInfo}>
            <div className={`${styles.statusCard} glass`}>
               <div className={styles.infoRow}>
                  <Clock size={18} color="var(--primary-color)" />
                  <div>
                     <span>ETA to Stop</span>
                     <strong>12 Minutes</strong>
                  </div>
               </div>
               <div className={styles.infoRow}>
                  <Navigation size={18} color="var(--primary-color)" />
                  <div>
                     <span>Current Speed</span>
                     <strong>24 km/h</strong>
                  </div>
               </div>
            </div>

            <div className="card">
               <h3 className={styles.sideTitle}><Bell size={18} /> Proximity Alerts</h3>
               <div className={styles.alertOption}>
                  <p>Notify when 1km away</p>
                  <div className={styles.toggleActive}></div>
               </div>
               <div className={styles.alertOption}>
                  <p>Notify when delay &gt; 5 mins</p>
                  <div className={styles.toggleActive}></div>
               </div>
            </div>

            <div className={`${styles.staffCard} card`}>
               <div className={styles.staffHeader}>
                  <User size={16} />
                  <span>Bus Crew</span>
               </div>
               <div className={styles.crewList}>
                  <div className={styles.crewItem}>
                     <strong>Robert M. (Driver)</strong>
                     <button className={styles.callBtn}><Phone size={14} /></button>
                  </div>
                  <div className={styles.crewItem}>
                     <strong>Sarah L. (Attendant)</strong>
                     <button className={styles.callBtn}><Phone size={14} /></button>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
