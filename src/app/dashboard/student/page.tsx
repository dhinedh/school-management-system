import { 
  GraduationCap, 
  Target, 
  Award, 
  Trophy,
  ClipboardList,
  Heart,
  Users as UsersIcon,
  Clock,
  Zap,
  ChevronRight,
  TrendingUp,
  Flame,
  Star
} from "lucide-react";
import styles from "./student.module.css";

export default function StudentDashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
           <div className={styles.levelBadge}>LEVEL 14 • GOLD RANK</div>
           <h1 className={styles.title}>Student Portal</h1>
           <p className={styles.subtitle}>Holistic growth, academic excellence, and community engagement.</p>
        </div>
        <div className={styles.dailyQuote}>
           <Star size={18} color="#f59e0b" />
           <p>"Consistency is the key to mastery."</p>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>GPA / Grade</p>
              <TrendingUp size={16} color="#10b981" />
           </div>
           <p className={styles.value}>A- (3.8)</p>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Talent Points</p>
              <Flame size={16} color="#f59e0b" />
           </div>
           <p className={styles.value}>1,240 <span className={styles.unit}>XP</span></p>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Attendance</p>
              <Clock size={16} color="var(--primary-color)" />
           </div>
           <p className={styles.value}>96%</p>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Next Deadline</p>
              <ClipboardList size={16} color="#ef4444" />
           </div>
           <p className={styles.value}>Today <span className={styles.unit}>4PM</span></p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Current Learning Path</h3>
                 <button className={styles.linkAction}>View All</button>
              </div>
              <div className={styles.pathItem}>
                 <div className={styles.dot}></div>
                 <div className={styles.info}>
                    <p className={styles.subject}>Advanced Mathematics</p>
                    <p className={styles.detail}>Next: Calculus Integration (AI Suggested)</p>
                    <div className={styles.progressBar}>
                       <div className={styles.progressFill} style={{ width: '75%' }}></div>
                    </div>
                 </div>
                 <button className={styles.startBtn}>Resume</button>
              </div>
           </section>

           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Pending Homework</h3>
                 <span className={styles.badgeCount}>3 Items</span>
              </div>
              <div className={styles.homeworkList}>
                 <div className={styles.hwItem}>
                    <div className={styles.hwInfo}>
                       <p>Physics: Kinetic Motion Lab Report</p>
                       <span>Due in 4 hours • Priority: High</span>
                    </div>
                    <button className={styles.uploadBtn}>Upload</button>
                 </div>
                 <div className={styles.hwItem}>
                    <div className={styles.hwInfo}>
                       <p>Literature: Narrative Techniques Essay</p>
                       <span>Due Tomorrow • Priority: Medium</span>
                    </div>
                    <button className={styles.uploadBtn}>Upload</button>
                 </div>
              </div>
           </section>
        </div>
        
        <aside className={styles.rightCol}>
           <section className={`${styles.wellbeingCard} glass`}>
              <div className={styles.wellHeader}>
                 <Heart size={20} color="#ec4899" />
                 <h3>Mental Wellbeing</h3>
              </div>
              <div className={styles.stressMeter}>
                 <p>Stress Level: <span>Optimally Challenged</span></p>
                 <div className={styles.meterTrack}>
                    <div className={styles.meterFill} style={{ width: '40%' }}></div>
                 </div>
              </div>
              <button className={styles.wellnessBtn}>Quick Meditation</button>
           </section>

           <section className="card">
              <h3>Badges & Achievements</h3>
              <div className={styles.badgeGrid}>
                 <div className={styles.badgeIcon} title="Mathlete">🏆</div>
                 <div className={styles.badgeIcon} title="Perfect Attendance">📅</div>
                 <div className={styles.badgeIcon} title="AI Explorer">🤖</div>
                 <div className={styles.badgeIcon} title="Early Bird">🌅</div>
              </div>
              <button className={styles.viewRewardsBtn}>View Rewards Hub</button>
           </section>

           <section className={`${styles.communityCard} glass`}>
              <h3>Peer Hub Activity</h3>
              <div className={styles.peerActivity}>
                 <UsersIcon size={16} color="var(--primary-color)" />
                 <p>3 friends are currently studying 'Chemistry'.</p>
              </div>
              <button className={styles.joinBtn}>Join Group Study</button>
           </section>
        </aside>
      </div>
    </div>
  );
}
