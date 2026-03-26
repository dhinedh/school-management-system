import { 
  Cpu, 
  TrendingUp, 
  Users, 
  Target, 
  Zap, 
  BarChart3, 
  Activity,
  FileText,
  AlertCircle
} from "lucide-react";
import styles from "./assistant.module.css";

export default function TeacherAIAssistant() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>AI Teaching Assistant</h1>
        <p className={styles.subtitle}>Real-time classroom insights and personalized pedagogy suggestions.</p>
      </header>

      <section className={styles.livePulse}>
         <div className={`${styles.pulseCard} glass`}>
            <div className={styles.pulseHeader}>
               <Activity size={24} color="var(--primary-color)" />
               <h2>In-Session Classroom Pulse</h2>
            </div>
            <div className={styles.metricGrid}>
               <div className={styles.metric}>
                  <span>Engagement Level</span>
                  <strong>84%</strong>
                  <div className={styles.barWrap}><div className={styles.bar} style={{ width: '84%', background: '#10b981' }}></div></div>
               </div>
               <div className={styles.metric}>
                  <span>Concept Mastery</span>
                  <strong>Optimal</strong>
                  <div className={styles.barWrap}><div className={styles.bar} style={{ width: '92%', background: '#3b82f6' }}></div></div>
               </div>
               <div className={styles.metric}>
                  <span>Pace vs. Syllabus</span>
                  <strong>+2 Days Ahead</strong>
                  <div className={styles.barWrap}><div className={styles.bar} style={{ width: '75%', background: '#f59e0b' }}></div></div>
               </div>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.insightsSection}>
            <h3 className={styles.sectionTitle}>Smart Classroom Insights</h3>
            <div className={styles.insightList}>
               <div className="card">
                  <div className={styles.insightHeader}>
                     <Target size={20} color="#3b82f6" />
                     <h4>Focus Optimization Required</h4>
                  </div>
                  <p>Students in Group C are struggling with 'Derivatives'. AI suggests a 10-minute visual breakdown session tomorrow.</p>
                  <button className={styles.actionBtn}>Generate Visual Aid</button>
               </div>
               <div className="card">
                  <div className={styles.insightHeader}>
                     <Zap size={20} color="#10b981" />
                     <h4>High Participation Flag</h4>
                  </div>
                  <p>Grade 10A showed 25% higher engagement during the 'Space Physics' discussion. Peer-led learning recommended for next module.</p>
               </div>
            </div>
         </section>

         <aside className={styles.prepSection}>
            <div className={`${styles.genCard} glass`}>
               <div className={styles.genHeader}>
                  <FileText size={20} color="var(--primary-color)" />
                  <h3>Automated Prep</h3>
               </div>
               <p>I've prepared a draft lesson plan for 'Thermodynamics' based on current class progress.</p>
               <button className={styles.viewPlanBtn}>Review Lesson Plan</button>
            </div>

            <div className="card">
               <h3 className={styles.sideTitle}><AlertCircle size={18} /> Behavior Alerts</h3>
               <div className={styles.alertItem}>
                  <strong>Alex Johnson</strong>
                  <p>Unusual quietness during group activity detected.</p>
               </div>
               <div className={styles.alertItem}>
                  <strong>Chris Evans</strong>
                  <p>Mastery of 'Calculus' is 2 weeks ahead of average.</p>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
