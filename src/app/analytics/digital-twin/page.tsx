import { 
  Zap, 
  Users, 
  Bus, 
  Activity, 
  Map, 
  Cpu, 
  Wind, 
  Thermometer, 
  Search,
  Maximize2,
  RefreshCw,
  LayoutGrid
} from "lucide-react";
import styles from "./digital-twin.module.css";

export default function DigitalTwinPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>School Digital Twin</h1>
          <p className={styles.subtitle}>Real-time virtual representation of campus operations, energy, and logistics.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><Map size={18} /> Campus Map</button>
           <button className="btn btn-primary"><RefreshCw size={18} /> Re-sync Live Data</button>
        </div>
      </header>

      <section className={styles.liveVitals}>
        <div className={styles.vitalCard}>
           <div className={styles.vitalHeader}>
              <Activity size={20} color="#10b981" />
              <span>Live Attendance</span>
           </div>
           <p className={styles.vitalValue}>1,142 / 1,250</p>
           <div className={styles.liveIndicator}>
              <div className={styles.dot}></div>
              <span>Updating Live</span>
           </div>
        </div>
        <div className={styles.vitalCard}>
           <div className={styles.vitalHeader}>
              <Bus size={20} color="#3b82f6" />
              <span>Buses in Transit</span>
           </div>
           <p className={styles.vitalValue}>8 / 12</p>
           <div className={styles.liveIndicator}>
              <div className={styles.dot}></div>
              <span>GPS Connected</span>
           </div>
        </div>
        <div className={styles.vitalCard}>
           <div className={styles.vitalHeader}>
              <Zap size={20} color="#f59e0b" />
              <span>Energy Load</span>
           </div>
           <p className={styles.vitalValue}>42 kW</p>
           <div className={styles.liveIndicator}>
              <div className={styles.dot}></div>
              <span>Normal Efficiency</span>
           </div>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.visualizerSection} card`}>
           <div className={styles.visualHeader}>
              <h2>3D Campus Visualization</h2>
              <div className={styles.visualControls}>
                 <button><LayoutGrid size={16} /></button>
                 <button><Maximize2 size={16} /></button>
              </div>
           </div>
           <div className={styles.renderArea}>
              <div className={styles.overlayInfo}>
                 <div className={styles.roomStatus}>
                    <div className={styles.statusDot}></div>
                    <span>Auditorium: PTM in Progress</span>
                 </div>
                 <div className={styles.roomStatus}>
                    <div className={styles.statusDot} style={{ background: '#f59e0b' }}></div>
                    <span>Lab 4: High Power Load</span>
                 </div>
              </div>
              <div className={styles.blueprintEffect}>
                 {/* Visual decoration for "digital twin" look */}
                 <div className={styles.gridLines}></div>
                 <div className={styles.buildingOutline}></div>
              </div>
              <p className={styles.renderLabel}>Interactive 3D Render Engine Active</p>
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.sensorCard} glass`}>
               <h3>IoT Sensor Network</h3>
               <div className={styles.sensorList}>
                  <div className={styles.sensorItem}>
                     <Thermometer size={16} />
                     <span>Main Hall Temp: 24°C</span>
                  </div>
                  <div className={styles.sensorItem}>
                     <Wind size={16} />
                     <span>Air Quality: Good (42 AQI)</span>
                  </div>
                  <div className={styles.sensorItem}>
                     <Cpu size={16} />
                     <span>Server Room: Optimal</span>
                  </div>
               </div>
            </div>

            <div className={`${styles.transitCard} card`}>
               <h3>Active Transit</h3>
               <div className={styles.busRoute}>
                  <div className={styles.routeHeader}>
                     <span>Bus #4 - Electronic City</span>
                     <span className={styles.eta}>ETA: 12 Mins</span>
                  </div>
                  <div className={styles.routeBar}>
                     <div className={styles.busIcon} style={{ left: '60%' }}><Bus size={12} /></div>
                  </div>
               </div>
               <div className={styles.busRoute}>
                  <div className={styles.routeHeader}>
                     <span>Bus #7 - Whitefield</span>
                     <span className={styles.eta}>Arrived</span>
                  </div>
                  <div className={styles.routeBar}>
                     <div className={styles.busIcon} style={{ left: '95%' }}><Bus size={12} /></div>
                  </div>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
