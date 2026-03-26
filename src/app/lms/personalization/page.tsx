"use client";

import { 
  Zap, 
  Target, 
  TrendingUp, 
  BookOpen, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  BarChart3, 
  FileText,
  Play,
  Award,
  Lightbulb
} from "lucide-react";
import styles from "./personalization.module.css";

export default function PersonalizationPage() {
  const learningPaths = [
    { student: "Harry Potter", grade: "10A", focus: "Advanced Alchemy", status: "82% Progress", nextStep: "Mastering Transmutation", weakTopics: ["Potions", "Herbology"] },
    { student: "Hermione Granger", grade: "10A", focus: "Experimental Charms", status: "98% Progress", nextStep: "Ancient Runes Thesis", weakTopics: ["None - Accelerated"] },
    { student: "Ron Weasley", grade: "10A", focus: "Strategic Defense", status: "45% Progress", nextStep: "Basic Shielding", weakTopics: ["Quidditch Theory", "History of Magic"] },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Hyper-Personalized Learning Paths</h1>
          <p className={styles.subtitle}>AI-suggested study plans, weak topic analysis, and video lesson recommendations for every student.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><Lightbulb size={18} /> Suggest New Paths</button>
           <button className="btn btn-primary"><Target size={18} /> Run Learning Gap Audit</button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Active Personal Paths</p>
           <p className={styles.statsValue}>840</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Avg. Performance Gain</p>
           <p className={styles.statsValue}>+14.2%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Weak Topics Addressed</p>
           <p className={styles.statsValue}>3,210</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Self-Paced Completion</p>
           <p className={styles.statsValue}>88%</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.pathSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Individual Learning Progress</h2>
              <div className={styles.iconBox}><Zap size={18} color="#f59e0b" /></div>
           </div>
           
           <div className={styles.pathList}>
              {learningPaths.map((path, i) => (
                <div key={i} className={styles.pItem}>
                   <div className={styles.pHeader}>
                      <div className={styles.pMain}>
                         <p className={styles.pName}>{path.student}</p>
                         <p className={styles.pFocus}>Focus: {path.focus}</p>
                      </div>
                      <span className={styles.pStatus}>{path.status}</span>
                   </div>
                   
                   <div className={styles.pDetails}>
                      <div className={styles.nextStep}>
                         <p className={styles.label}>Next AI Suggestion:</p>
                         <p className={styles.val}>{path.nextStep}</p>
                      </div>
                      <div className={styles.weakTopics}>
                         <p className={styles.label}>Weak Topics (Auto-detected):</p>
                         <div className={styles.tagGroup}>
                            {path.weakTopics.map((topic, j) => (
                              <span key={j} className={styles.topicTag}>{topic}</span>
                            ))}
                         </div>
                      </div>
                   </div>
                   <button className={styles.actionBtn}>Open Learning Hub</button>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.insightCard} glass`}>
               <h3>Smart Recommendation</h3>
               <div className={styles.recommendContent}>
                  <Lightbulb size={24} color="#f59e0b" />
                  <p>"Next week, 40% of Class 10A might struggle with 'Calculus Integration'. Suggest adding a video-based practice submodule by Tuesday."</p>
               </div>
               <button className={styles.triggerBtn}>Deploy Video Supplement</button>
            </div>

            <div className={`${styles.contentCard} card`}>
               <BookOpen size={24} color="var(--primary-color)" />
               <h3>Tailored Content Library</h3>
               <div className={styles.contentItem}>
                  <p><strong>Practice Quiz:</strong> Defense Against Dark Arts</p>
                  <span className={styles.meta}>Adaptive Level: Medium</span>
               </div>
               <div className={styles.contentItem}>
                  <p><strong>Video Lesson:</strong> Advanced Potions</p>
                  <span className={styles.meta}>Visual-First Content</span>
               </div>
               <button className={styles.viewAllBtn}>Manage Content AI</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
