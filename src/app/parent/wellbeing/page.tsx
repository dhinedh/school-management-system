import { 
  Heart, 
  TrendingUp, 
  Brain, 
  Smile, 
  Zap, 
  LineChart,
  Target,
  MessageCircle,
  AlertTriangle
} from "lucide-react";
import styles from "./wellbeing.module.css";

export default function ParentWellbeing() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Child Wellbeing Monitor</h1>
        <p className={styles.subtitle}>AI-powered insights into Alex's emotional and behavioral growth.</p>
      </header>

      <section className={styles.aiPulse}>
         <div className={`${styles.pulseCard} glass`}>
            <div className={styles.pulseHeader}>
               <Brain size={24} color="#ec4899" />
               <h2>Growth Sentiment Index</h2>
            </div>
            <div className={styles.metricGrid}>
               <div className={styles.metric}>
                  <span>Social Engagement</span>
                  <strong>High</strong>
                  <div className={styles.barWrap}><div className={styles.bar} style={{ width: '85%', background: '#10b981' }}></div></div>
               </div>
               <div className={styles.metric}>
                  <span>Focus Capacity</span>
                  <strong>Optimal</strong>
                  <div className={styles.barWrap}><div className={styles.bar} style={{ width: '92%', background: '#3b82f6' }}></div></div>
               </div>
               <div className={styles.metric}>
                  <span>Stress Resilience</span>
                  <strong>Strong</strong>
                  <div className={styles.barWrap}><div className={styles.bar} style={{ width: '78%', background: '#f59e0b' }}></div></div>
               </div>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.insightsSection}>
            <h3 className={styles.sectionTitle}>Key Growth Insights</h3>
            <div className={styles.insightList}>
               <div className="card">
                  <div className={styles.insightHeader}>
                     <TrendingUp size={20} color="#10b981" />
                     <h4>Increasing Scientific Curiosity</h4>
                  </div>
                  <p>Alex has been accessing AI learning modules for Physics 3x more than average this month. Consider encouraging more STEM extracurriculars.</p>
               </div>
               <div className="card">
                  <div className={styles.insightHeader}>
                     <Smile size={20} color="#3b82f6" />
                     <h4>Positive Social Sentiment</h4>
                     <span className={styles.aiBadge}>AI AUDIT</span>
                  </div>
                  <p>Communication patterns in peer-hub indicate a leadership role and supportive behavior towards classmates.</p>
               </div>
            </div>
         </section>

         <aside className={styles.interventionSection}>
            <div className={`${styles.alertCard} glass`}>
               <div className={styles.alertHeader}>
                  <AlertTriangle size={20} color="#f59e0b" />
                  <h3>Early Observation</h3>
               </div>
               <p>Slight dip in literature engagement over the last 3 days. Might be due to upcoming math midterm pressure.</p>
               <button className={styles.talkBtn}>Discuss with Counselor</button>
            </div>

            <div className="card">
               <h3>Wellbeing Timeline</h3>
               <div className={styles.timeline}>
                  <div className={styles.tItem}>
                     <strong>Sep 28</strong>
                     <p>Awarded 'Collaborative Peer' badge.</p>
                  </div>
                  <div className={styles.tItem}>
                     <strong>Sep 24</strong>
                     <p>Completed 3 focus sessions.</p>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
