import { 
  Heart, 
  Wind, 
  Brain, 
  Smile, 
  Zap, 
  CheckCircle2,
  Calendar,
  MessageCircle,
  Play
} from "lucide-react";
import styles from "./wellness.module.css";

export default function WellnessCenter() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Student Wellness Center</h1>
        <p className={styles.subtitle}>Prioritize your mental health with AI-powered insights and relaxation tools.</p>
      </header>

      <section className={styles.aiStatus}>
         <div className={`${styles.statusCard} glass`}>
            <div className={styles.statusHeader}>
               <Brain size={24} color="#ec4899" />
               <h2>AI Wellbeing Pulse</h2>
            </div>
            <div className={styles.metricGrid}>
               <div className={styles.metric}>
                  <span>Stress Level</span>
                  <strong>Low (Optimal)</strong>
               </div>
               <div className={styles.metric}>
                  <span>Focus Score</span>
                  <strong>85%</strong>
               </div>
               <div className={styles.metric}>
                  <span>Mood Trend</span>
                  <strong>Stable</strong>
               </div>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.toolsSection}>
            <h3 className={styles.sectionTitle}>Mindfulness Tools</h3>
            <div className={styles.toolGrid}>
               <div className={`${styles.toolCard} card`}>
                  <Wind size={32} color="#06b6d4" />
                  <h4>Guided Breathing</h4>
                  <p>A 2-minute session to reset your nervous system.</p>
                  <button className={styles.playBtn}><Play size={16} fill="white" /></button>
               </div>
               <div className={`${styles.toolCard} card`}>
                  <Smile size={32} color="#f59e0b" />
                  <h4>Gratitude Journal</h4>
                  <p>Note down 3 things you are grateful for today.</p>
                  <button className={styles.actionBtn}>Open Journal</button>
               </div>
               <div className={`${styles.toolCard} card`}>
                  <Zap size={32} color="var(--primary-color)" />
                  <h4>Focus Music</h4>
                  <p>AI-generated lo-fi beats for intense study.</p>
                  <button className={styles.playBtn}><Play size={16} fill="white" /></button>
               </div>
            </div>
         </section>

         <aside className={styles.supportSection}>
            <div className="card">
               <h3 className={styles.sideTitle}><Heart size={18} /> Counseling</h3>
               <p className={styles.sideDesc}>Anonymous chat with a certified school counselor.</p>
               <div className={styles.onlineBadge}>
                  <div className={styles.dot}></div>
                  <span>2 Counselors Online</span>
               </div>
               <button className={styles.chatBtn}><MessageCircle size={18} /> Start Chat</button>
            </div>

            <div className={`${styles.dailyTask} glass`}>
               <h3>Daily Wellbeing Task</h3>
               <div className={styles.taskCard}>
                  <CheckCircle2 size={24} color="#10b981" />
                  <p>Take a 15-minute walk today between classes.</p>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
