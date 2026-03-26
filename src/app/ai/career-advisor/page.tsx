import { 
  Compass, 
  GraduationCap, 
  Map, 
  CheckCircle2, 
  ChevronRight,
  ClipboardList,
  Target,
  Sparkles
} from "lucide-react";
import styles from "./advisor.module.css";

export default function CareerAdvisorPage() {
  const recommendations = [
    { title: "Software Engineering", fit: "95%", match: "High Grade in Math & Physics", gaps: ["Leadership Experience"] },
    { title: "Data Science", fit: "88%", match: "Strong Analytical Skills", gaps: ["Statistics Advanced"] },
    { title: "Digital Marketing", fit: "72%", match: "Creative Thinking", gaps: ["Economics Background"] },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Compass size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Career & College Advisor</h1>
              <p className={styles.subtitle}>Personalized pathways based on academic performance and interest surveys.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.surveySection} card`}>
            <div className={styles.sectionHeader}>
               <ClipboardList size={20} />
               <h3>Interest & Skill Survey</h3>
            </div>
            <div className={styles.surveyContent}>
               <div className={styles.question}>
                  <p>1. Which subjects do you find most engaging?</p>
                  <div className={styles.options}>
                     <label><input type="checkbox" /> STEM</label>
                     <label><input type="checkbox" /> Humanities</label>
                     <label><input type="checkbox" /> Arts</label>
                  </div>
               </div>
               <div className={styles.question}>
                  <p>2. How do you prefer to solve problems?</p>
                  <div className={styles.options}>
                     <label><input type="radio" name="q2"/> Logic & Data</label>
                     <label><input type="radio" name="q2"/> Intuition & Creativity</label>
                  </div>
               </div>
               <button className={styles.analyzeBtn}>
                  <Sparkles size={18} />
                  <span>Analyze My Profile</span>
               </button>
            </div>
         </section>

         <section className={`${styles.recommendations} card`}>
            <div className={styles.sectionHeader}>
               <Target size={20} />
               <h3>AI Recommendations</h3>
            </div>
            <div className={styles.recList}>
               {recommendations.map((rec, i) => (
                 <div key={i} className={styles.recItem}>
                    <div className={styles.recHeader}>
                       <div>
                          <strong>{rec.title}</strong>
                          <span className={styles.fitScore}>{rec.fit} Match</span>
                       </div>
                       <ChevronRight size={18} />
                    </div>
                    <p className={styles.matchReason}>{rec.match}</p>
                    <div className={styles.gaps}>
                       <span>Skill Gaps:</span>
                       {rec.gaps.map((gap, j) => <span key={j} className={styles.gapTag}>{gap}</span>)}
                    </div>
                 </div>
               ))}
            </div>
         </section>
      </div>

      <section className={`${styles.collegeSection} glass`}>
         <div className={styles.collegeHeader}>
            <GraduationCap size={24} />
            <h3>Top College Programs for You</h3>
         </div>
         <div className={styles.collegeGrid}>
            <div className={styles.collegeCard}>
               <strong>MIT - Computer Science</strong>
               <span>Probability: 75%</span>
            </div>
            <div className={styles.collegeCard}>
               <strong>Stanford - Symbolic Systems</strong>
               <span>Probability: 60%</span>
            </div>
            <div className={styles.collegeCard}>
               <strong>ETH Zurich - Robotics</strong>
               <span>Probability: 82%</span>
            </div>
         </div>
      </section>
    </div>
  );
}
