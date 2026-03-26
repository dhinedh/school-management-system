import { 
  Plus, 
  BookOpen, 
  FileText, 
  Zap, 
  Download, 
  ChevronRight,
  Clock,
  Sparkles
} from "lucide-react";
import styles from "./lesson-plan.module.css";

export default function LessonPlanGeneratorPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Sparkles size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Lesson Plan Generator</h1>
              <p className={styles.subtitle}>Create fully structured pedagogical plans in seconds.</p>
           </div>
        </div>
      </header>

      <div className={styles.mainGrid}>
         <section className={`${styles.inputSection} card`}>
            <h3>Generator Parameters</h3>
            <div className={styles.formGrid}>
               <div className={styles.formGroup}>
                  <label>Subject</label>
                  <input type="text" placeholder="e.g. Quantum Physics" />
               </div>
               <div className={styles.formGroup}>
                  <label>Grade Level</label>
                  <select>
                     <option>Grade 9</option>
                     <option>Grade 10</option>
                     <option>Grade 11</option>
                     <option>Grade 12</option>
                  </select>
               </div>
               <div className={styles.formGroup}>
                  <label>Topic</label>
                  <input type="text" placeholder="e.g. Wave-Particle Duality" />
               </div>
               <div className={styles.formGroup}>
                  <label>Duration (Mins)</label>
                  <input type="number" defaultValue={45} />
               </div>
            </div>
            <div className={styles.formGroup}>
               <label>Learning Objectives</label>
               <textarea placeholder="What should students learn?"></textarea>
            </div>
            <button className={styles.generateBtn}>
               <Zap size={18} />
               <span>Generate Structured Plan</span>
            </button>
         </section>

         <aside className={styles.previewSection}>
            <div className={`${styles.previewCard} glass`}>
               <div className={styles.previewHeader}>
                  <h3>Live Preview</h3>
                  <span className={styles.badge}>Draft</span>
               </div>
               <div className={styles.previewContent}>
                  <div className={styles.placeholder}>
                     <Sparkles size={48} color="rgba(255,255,255,0.2)" />
                     <p>Generated plan will appear here...</p>
                  </div>
               </div>
               <div className={styles.previewActions}>
                  <button className={styles.saveBtn}>Save to Curriculum</button>
                  <button className={styles.exportBtn}><Download size={16} /></button>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
