import { 
  FileText, 
  User, 
  CheckCircle, 
  Sparkles, 
  ArrowRight,
  Clipboard,
  Save,
  RefreshCw
} from "lucide-react";
import styles from "./narrative.module.css";

export default function NarrativeGenPage() {
  const students = [
    { name: "Alex Johnson", grade: "10A", average: "88%", attendance: "94%" },
    { name: "Maya Patel", grade: "10A", average: "92%", attendance: "98%" },
    { name: "Chris Evans", grade: "10A", average: "75%", attendance: "82%" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Sparkles size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Report Card Narrative Generator</h1>
              <p className={styles.subtitle}>Generate personalized, insightful narrative comments for thousands of students in minutes.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.studentSection} card`}>
            <h3>Select Students</h3>
            <div className={styles.studentList}>
               {students.map((s, i) => (
                 <div key={i} className={styles.studentItem}>
                    <div className={styles.sInfo}>
                       <strong>{s.name}</strong>
                       <span>Grade {s.grade} • Avg: {s.average}</span>
                    </div>
                    <button className={styles.genBtn}>Generate</button>
                 </div>
               ))}
            </div>
         </section>

         <section className={`${styles.editorSection} card`}>
            <div className={styles.editorHeader}>
               <h3>AI Narrative Editor</h3>
               <div className={styles.toneSelector}>
                  <span>Tone:</span>
                  <select>
                     <option>Encouraging</option>
                     <option>Professional</option>
                     <option>Direct</option>
                  </select>
               </div>
            </div>
            
            <div className={styles.editorContent}>
               <div className={styles.narrativeBox}>
                  <p className={styles.generatedText}>
                     "Alex has shown consistent academic growth this term, particularly in mathematics where his problem-solving skills have flourished. While his attendance remains high at 94%, a slight increase in participation during lab sessions would further solidify his practical understanding. Overall, Alex is a dedicated student with a bright academic trajectory."
                  </p>
                  <div className={styles.editLayer}>
                     <textarea defaultValue="Alex has shown consistent academic growth this term, particularly in mathematics where his problem-solving skills have flourished. While his attendance remains high at 94%, a slight increase in participation during lab sessions would further solidify his practical understanding. Overall, Alex is a dedicated student with a bright academic trajectory."></textarea>
                  </div>
               </div>
            </div>

            <div className={styles.editorActions}>
               <button className={styles.saveBtn}>
                  <Save size={18} />
                  <span>Finalize for Report</span>
               </button>
               <button className={styles.regenBtn}>
                  <RefreshCw size={18} />
               </button>
            </div>
         </section>
      </div>
    </div>
  );
}
