import { 
  Users, 
  GraduationCap, 
  Calendar, 
  Award, 
  TrendingUp, 
  AlertTriangle,
  Clock,
  BookOpen,
  ChevronRight,
  Zap,
  LayoutDashboard,
  BarChart3,
  Cpu
} from "lucide-react";
import styles from "./teacher.module.css";

export default function TeacherDashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
           <div className={styles.teacherBadge}>FACULTY PORTAL • GRADE 10 SUPERVISOR</div>
           <h1 className={styles.title}>Faculty Dashboard</h1>
           <p className={styles.subtitle}>Welcome back, Prof. Sarah White. Here is your class performance overview.</p>
        </div>
        <div className={styles.systemVitals}>
           <div className={styles.vitalItem}>
              <span>Today's Load</span>
              <strong>4 Lectures</strong>
           </div>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Class Attendance</p>
              <Users size={16} color="var(--primary-color)" />
           </div>
           <p className={styles.value}>94.2%</p>
           <span className={styles.caption}>Average for Grade 10A</span>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Syllabus Progress</p>
              <BarChart3 size={16} color="#3b82f6" />
           </div>
           <p className={styles.value}>68%</p>
           <div className={styles.miniProgress}><div className={styles.fill} style={{ width: '68%' }}></div></div>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Pending Grading</p>
              <Award size={16} color="#f59e0b" />
           </div>
           <p className={styles.value}>12 <span className={styles.unit}>Scripts</span></p>
           <span className={styles.caption}>Physics Midterm Lab</span>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>AI Teacher Score</p>
              <Cpu size={16} color="#10b981" />
           </div>
           <p className={styles.value}>98.5</p>
           <span className={styles.caption}>Efficiency Rating</span>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Upcoming Schedule</h3>
                 <button className={styles.linkAction}>View Calendar</button>
              </div>
              <div className={styles.scheduleList}>
                 <div className={styles.scheduleItem}>
                    <div className={styles.timeBox}>10:00<br/>AM</div>
                    <div className={styles.subjectInfo}>
                       <strong>Mathematics (Calculus)</strong>
                       <p>Grade 10A • Room 402</p>
                    </div>
                    <button className={styles.startBtn}>Start Session</button>
                 </div>
                 <div className={styles.scheduleItem}>
                    <div className={styles.timeBox}>11:30<br/>AM</div>
                    <div className={styles.subjectInfo}>
                       <strong>Physics (Kinematics)</strong>
                       <p>Grade 10B • Lab 2</p>
                    </div>
                    <button className={styles.prepBtn}>View Prep</button>
                 </div>
              </div>
           </section>

           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Urgent Student Interventions</h3>
                 <span className={styles.badgeCount}>2 Flags</span>
              </div>
              <div className={styles.flagList}>
                 <div className={styles.flagItem}>
                    <AlertTriangle size={18} color="#ef4444" />
                    <div className={styles.flagInfo}>
                       <strong>Alex Johnson</strong>
                       <p>Attendance dropped &gt;75% this week (AI Prediction)</p>
                    </div>
                    <button className={styles.actionBtn}>Call Parent</button>
                 </div>
                 <div className={styles.flagItem}>
                    <Zap size={18} color="#f59e0b" />
                    <div className={styles.flagInfo}>
                       <strong>Maya Patel</strong>
                       <p>Sudden drop in Quiz performance (Sentiment AI alert)</p>
                    </div>
                    <button className={styles.actionBtn}>Assign Focus</button>
                 </div>
              </div>
           </section>
        </div>

        <aside className={styles.rightCol}>
           <section className={`${styles.assistantCard} glass`}>
              <div className={styles.asstHeader}>
                 <Cpu size={20} color="var(--primary-color)" />
                 <h3>AI Assistant Activity</h3>
              </div>
              <p>I've pre-generated the quiz for 10A Mathematics based on yesterday's lesson. Want to review?</p>
              <button className={styles.reviewBtn}>Review Quiz</button>
           </section>

           <section className="card">
              <h3>Professional Growth</h3>
              <div className={styles.growthList}>
                 <div className={styles.growthItem}>
                    <p>Advanced Pedagogy Course</p>
                    <span>80% Completed</span>
                 </div>
                 <div className={styles.growthItem}>
                    <p>Annual Appraisal</p>
                    <span>Due in 14 days</span>
                 </div>
              </div>
              <button className={styles.fullDevBtn}>Growth Hub</button>
           </section>

           <section className={`${styles.emergencyCard} glass`}>
              <h3>Quick Faculty Actions</h3>
              <button className={styles.quickAction}>Request Substitute</button>
              <button className={styles.quickAction}>Submit Monthly Report</button>
           </section>
        </aside>
      </div>
    </div>
  );
}
