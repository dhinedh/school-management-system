import { 
  Stethoscope, 
  Plus, 
  Search, 
  Activity, 
  Heart, 
  Thermometer, 
  AlertCircle, 
  History,
  FileHeart,
  ChevronRight,
  ShieldCheck
} from "lucide-react";
import styles from "./health.module.css";
import { mockStudents } from "@/lib/mock-students";

export default function HealthPage() {
  const visits = [
    { student: "Alex Johnson", reason: "Headache", time: "10:15 AM", treatment: "Rest, Paracetamol", provider: "Nurse Ann" },
    { student: "Maya Patel", reason: "Scraped Knee", time: "11:30 AM", treatment: "Cleaning, Bandage", provider: "Nurse Ann" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Health & Medical</h1>
          <p className={styles.subtitle}>Maintain student health records, track clinic visits, and manage medical alerts.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <ShieldCheck size={18} />
             <span>Vaccinations</span>
           </button>
           <button className="btn btn-secondary">
             <AlertCircle size={18} />
             <span>Manage Alerts</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Log Visit</span>
           </button>
        </div>
      </header>

      <div className={styles.mainGrid}>
        <section className={`${styles.visitSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Today's Clinic Visits</h2>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search visits..." />
              </div>
           </div>
           <div className={styles.visitList}>
              {visits.map((visit, i) => (
                <div key={i} className={styles.visitItem}>
                   <div className={styles.visitIcon}>
                      <Stethoscope size={20} color="var(--primary-color)" />
                   </div>
                   <div className={styles.visitMain}>
                      <p className={styles.studentName}>{visit.student}</p>
                      <p className={styles.visitMeta}>{visit.reason} • {visit.time}</p>
                   </div>
                   <div className={styles.treatmentInfo}>
                      <p className={styles.treatment}>{visit.treatment}</p>
                      <p className={styles.provider}>{visit.provider}</p>
                   </div>
                   <ChevronRight size={18} color="#ccc" />
                </div>
              ))}
           </div>
        </section>

        <section className={styles.sidebarSection}>
            <div className={`${styles.alertsCard} card`}>
                <h3>Critical Medical Alerts</h3>
                <div className={styles.alertList}>
                   <div className={styles.medicalAlert}>
                      <AlertCircle size={18} color="#ef4444" />
                      <div>
                         <p className={styles.alertStudent}>Chris Evans</p>
                         <p className={styles.alertDesc}>Severe Peanut Allergy</p>
                      </div>
                   </div>
                   <div className={styles.medicalAlert}>
                      <AlertCircle size={18} color="#ef4444" />
                      <div>
                         <p className={styles.alertStudent}>Sofia Rodriguez</p>
                         <p className={styles.alertDesc}>Asthma - Inhaler in Bag</p>
                      </div>
                   </div>
                </div>
            </div>

            <div className={`${styles.healthStats} glass`}>
                <div className={styles.insightHeader}>
                   <Activity size={18} color="var(--primary-color)" />
                   <span>Clinic Analytics</span>
                </div>
                <div className={styles.statRow}>
                   <span>Visits this week</span>
                   <strong>24</strong>
                </div>
                <div className={styles.statRow}>
                   <span>Common reason</span>
                   <strong>Seasonal Flu</strong>
                </div>
                <button className={styles.insightBtn}>Full Health Report</button>
            </div>
        </section>
      </div>
    </div>
  );
}
