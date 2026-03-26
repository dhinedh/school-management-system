import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Settings, 
  CheckCircle2, 
  Clock, 
  Target, 
  ChevronRight,
  TrendingUp,
  Cpu,
  Trophy
} from "lucide-react";
import styles from "./training.module.css";

export default function ProfessionalDevelopment() {
  const courses = [
    { title: "Advanced Pedagogy (AI Integrated)", status: "In Progress", progress: 80, due: "Oct 15" },
    { title: "Student Psychology Fundamentals", status: "Completed", progress: 100, due: "Aug 20" },
    { title: "Classroom Conflict Resolution", status: "Upcoming", progress: 0, due: "Nov 05" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Professional Development Hub</h1>
        <p className={styles.subtitle}>Track certifications, training courses, and performance appraisals.</p>
      </header>

      <section className={styles.topVitals}>
         <div className={`${styles.statsGrid}`}>
            <div className="card">
               <div className={styles.statLine}>
                  <p className={styles.label}>Training Credits</p>
                  <Trophy size={16} color="#f59e0b" />
               </div>
               <p className={styles.value}>440 <span className={styles.unit}>XP</span></p>
               <span className={styles.caption}>Global Rank #12</span>
            </div>
            <div className="card">
               <div className={styles.statLine}>
                  <p className={styles.label}>Appraisal Status</p>
                  <CheckCircle2 size={16} color="#10b981" />
               </div>
               <p className={styles.value}>Due Sep 30</p>
               <span className={styles.caption}>Self-eval active</span>
            </div>
            <div className="card">
               <div className={styles.statLine}>
                  <p className={styles.label}>Certifications</p>
                  <Award size={16} color="var(--primary-color)" />
               </div>
               <p className={styles.value}>12 Active</p>
               <span className={styles.caption}>Next: Oct 15</span>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.courseSection}>
            <div className={styles.sectionHeader}>
               <h3 className={styles.sectionTitle}>Training Path</h3>
               <button className={styles.linkAction}>Browse Courses</button>
            </div>
            <div className={styles.courseList}>
               {courses.map((c, i) => (
                  <div key={i} className={`${styles.courseItem} card`}>
                     <div className={styles.courseInfo}>
                        <strong>{c.title}</strong>
                        <div className={styles.progressRow}>
                           <div className={styles.bar}><div className={styles.fill} style={{ width: `${c.progress}%` }}></div></div>
                           <span>{c.progress}%</span>
                        </div>
                     </div>
                     <div className={styles.courseStatus}>
                        <span className={styles.statusLabel}>{c.status}</span>
                        <ChevronRight size={18} />
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.appraisalSection}>
            <div className={`${styles.appraisalCard} glass`}>
               <div className={styles.asstHeader}>
                  <Cpu size={20} color="var(--primary-color)" />
                  <h3>AI Performance Summary</h3>
               </div>
               <p>Your "Concept Clarity" rating has increased by 12% in Grade 10A physics this month. Keep it up!</p>
               <button className={styles.viewSelfBtn}>Start Self-Evaluation</button>
            </div>

            <div className="card">
               <h3 className={styles.sideTitle}><Clock size={18} /> Learning Timeline</h3>
               <div className={styles.timeline}>
                  <div className={styles.tItem}>
                     <strong>Sep 05</strong>
                     <p>Certified in Virtual Labs 2.0</p>
                  </div>
                  <div className={styles.tItem}>
                     <strong>Aug 12</strong>
                     <p>Completed Ethics in Teaching</p>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
