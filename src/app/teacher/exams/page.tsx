import { 
  FileSpreadsheet, 
  Plus, 
  Settings, 
  Zap, 
  ChevronRight, 
  Download, 
  Eye, 
  Printer, 
  Copy,
  Brain,
  Layers,
  Award
} from "lucide-react";
import styles from "./exams.module.css";

export default function ExamDesigner() {
  const recentPapers = [
    { title: "Calculus Unit Test", type: "Multiple Choice", difficulty: "Balanced", date: "Sep 28" },
    { title: "Kinematics Final Prep", type: "Subjective", difficulty: "Hard", date: "Sep 25" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Automated Exam Designer</h1>
        <p className={styles.subtitle}>AI-powered question paper generation based on syllabus benchmarks.</p>
      </header>

      <section className={styles.generatorSection}>
         <div className={`${styles.genCard} glass`}>
            <div className={styles.genHeader}>
               <Brain size={24} color="var(--primary-color)" />
               <h2>New AI Generation</h2>
            </div>
            <div className={styles.configGrid}>
               <div className={styles.configItem}>
                  <label>Subject</label>
                  <select><option>Mathematics</option></select>
               </div>
               <div className={styles.configItem}>
                  <label>Difficulty</label>
                  <select><option>Bloom's Balanced</option></select>
               </div>
               <div className={styles.configItem}>
                  <label>Duration</label>
                  <select><option>90 Minutes</option></select>
               </div>
               <button className={styles.generateBtn}><Zap size={18} /> Generate Draft Paper</button>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.recentSection}>
            <h3 className={styles.sectionTitle}>Recent Question Papers</h3>
            <div className={styles.paperList}>
               {recentPapers.map((p, i) => (
                  <div key={i} className={`${styles.paperItem} card`}>
                     <div className={styles.pInfo}>
                        <strong>{p.title}</strong>
                        <p>{p.type} • {p.difficulty}</p>
                     </div>
                     <div className={styles.pActions}>
                        <button title="View"><Eye size={16} /></button>
                        <button title="Print"><Printer size={16} /></button>
                        <button title="Make Copy"><Copy size={16} /></button>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.rubricSection}>
            <div className="card">
               <h3 className={styles.sideTitle}><Layers size={18} /> Syllabus Coverage</h3>
               <div className={styles.coverageList}>
                  <div className={styles.covItem}>
                     <p>Algebra</p>
                     <div className={styles.bar}><div className={styles.fill} style={{ width: '100%', background: '#10b981' }}></div></div>
                  </div>
                  <div className={styles.covItem}>
                     <p>Geometry</p>
                     <div className={styles.bar}><div className={styles.fill} style={{ width: '85%' }}></div></div>
                  </div>
                  <div className={styles.covItem}>
                     <p>Calculus</p>
                     <div className={styles.bar}><div className={styles.fill} style={{ width: '40%', background: '#f59e0b' }}></div></div>
                  </div>
               </div>
            </div>

            <div className={`${styles.aiTip} glass`}>
               <Award size={18} color="var(--primary-color)" />
               <p>AI suggests increasing "Critical Thinking" questions for 10A based on recent quiz data.</p>
            </div>
         </aside>
      </div>
    </div>
  );
}
