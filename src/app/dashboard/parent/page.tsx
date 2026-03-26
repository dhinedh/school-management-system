import { 
  UserCheck, 
  MapPin, 
  DollarSign, 
  Calendar, 
  TrendingUp, 
  ShieldCheck,
  Heart,
  Wallet,
  Clock,
  ChevronRight,
  AlertCircle,
  FileText
} from "lucide-react";
import styles from "./parent.module.css";

export default function ParentDashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
           <div className={styles.parentBadge}>PARENT PORTAL • SECURED ACESS</div>
           <h1 className={styles.title}>Guardian Dashboard</h1>
           <p className={styles.subtitle}>Unified view for Alex Johnson (Grade 10A).</p>
        </div>
        <div className={styles.quickVitals}>
           <div className={styles.vitalItem}>
              <span>Next PTM</span>
              <strong>Oct 15, 10:00 AM</strong>
           </div>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Academic Perf.</p>
              <TrendingUp size={16} color="#10b981" />
           </div>
           <p className={styles.value}>88.4% <span className={styles.trend}>+2%</span></p>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Live Bus Status</p>
              <MapPin size={16} color="#3b82f6" />
           </div>
           <p className={styles.value}>In Transit</p>
           <span className={styles.caption}>ETA: 12 Mins</span>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Wallet Balance</p>
              <Wallet size={16} color="#f59e0b" />
           </div>
           <p className={styles.value}>$42.50</p>
           <span className={styles.caption}>Canteen & Store</span>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Fee Status</p>
              <ShieldCheck size={16} color="#10b981" />
           </div>
           <p className={styles.value}>Clear</p>
           <span className={styles.caption}>Next: Oct 25</span>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Real-time Activity Feed</h3>
                 <button className={styles.filterBtn}>Alerts Only</button>
              </div>
              <div className={styles.feedList}>
                 <div className={styles.feedItem}>
                    <div className={styles.feedIcon} style={{ background: '#d1fae5' }}><Clock size={16} color="#065f46" /></div>
                    <div className={styles.feedContent}>
                       <p>Alex checked into <strong>Campus</strong></p>
                       <span>Today, 08:32 AM</span>
                    </div>
                 </div>
                 <div className={styles.feedItem}>
                    <div className={styles.feedIcon} style={{ background: '#dbeafe' }}><FileText size={16} color="#1e40af" /></div>
                    <div className={styles.feedContent}>
                       <p>Physics Lab Report graded: <strong>A-</strong></p>
                       <span>Yesterday, 04:15 PM</span>
                    </div>
                 </div>
                 <div className={styles.feedItem}>
                    <div className={styles.feedIcon} style={{ background: '#fef3c7' }}><AlertCircle size={16} color="#92400e" /></div>
                    <div className={styles.feedContent}>
                       <p>Upcoming Math Quiz on Friday</p>
                       <span>2 days ago</span>
                    </div>
                 </div>
              </div>
           </section>

           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Upcoming Assessments</h3>
                 <span className={styles.badge}>Next 7 Days</span>
              </div>
              <div className={styles.examGrid}>
                 <div className={styles.examCard}>
                    <div className={styles.examDate}>12<br/>OCT</div>
                    <div className={styles.examInfo}>
                       <strong>Calculus Mid-Term</strong>
                       <p>Weightage: 20%</p>
                    </div>
                 </div>
                 <div className={styles.examCard}>
                    <div className={styles.examDate}>15<br/>OCT</div>
                    <div className={styles.examInfo}>
                       <strong>History Project</strong>
                       <p>Due Offline</p>
                    </div>
                 </div>
              </div>
           </section>
        </div>

        <aside className={styles.rightCol}>
           <section className={`${styles.wellbeingCard} glass`}>
              <div className={styles.wellHeader}>
                 <Heart size={20} color="#ec4899" />
                 <h3>AI Wellbeing Pulse</h3>
              </div>
              <div className={styles.wellContent}>
                 <p>Alex is showing <strong>High Engagement</strong> in STEM subjects lately.</p>
                 <div className={styles.pulseBar}>
                    <div className={styles.pulseFill} style={{ width: '92%' }}></div>
                 </div>
                 <span className={styles.wellMetric}>Score: 92/100</span>
              </div>
              <button className={styles.detailBtn}>View Growth Trends</button>
           </section>

           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Notice Board</h3>
              </div>
              <div className={styles.notices}>
                 <div className={styles.noticeLink}>
                    <p>Annual Sports Meet Registration</p>
                    <ChevronRight size={16} />
                 </div>
                 <div className={styles.noticeLink}>
                    <p>Winter Uniform Collection Dates</p>
                    <ChevronRight size={16} />
                 </div>
              </div>
              <button className={styles.archiveBtn}>View All Notices</button>
           </section>

           <section className={`${styles.actionCard} glass`}>
              <div className={styles.actionHeader}>
                 <ShieldCheck size={20} color="var(--primary-color)" />
                 <h3>Emergency Hub</h3>
              </div>
              <button className={styles.emergencyBtn}>Request Late Pick-up</button>
              <button className={styles.emergencyBtn}>Report Absence</button>
           </section>
        </aside>
      </div>
    </div>
  );
}
