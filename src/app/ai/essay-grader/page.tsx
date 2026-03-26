import { 
  FileSearch, 
  Plus, 
  Search, 
  BookOpen, 
  CheckCircle, 
  PenTool, 
  BarChart, 
  MessageSquare,
  AlertCircle,
  ChevronRight,
  Download
} from "lucide-react";
import styles from "./grader.module.css";

export default function EssayGraderPage() {
  const submissions = [
    { title: "Causes of the French Revolution", student: "Alex Johnson", grade: "Grade 10", status: "Graded", score: "85/100" },
    { title: "Climate Change Impacts", student: "Maya Patel", studentGrade: "Grade 10", status: "Pending", score: "-" },
    { title: "The Industrial Revolution", student: "Chris Evans", studentGrade: "Grade 10", status: "Graded", score: "92/100" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><PenTool size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Automated Essay Grader</h1>
              <p className={styles.subtitle}>NLP-powered grading for descriptive answers and literature essays.</p>
           </div>
        </div>
        <div className={styles.headerActions}>
           <button className="btn btn-secondary">Configure Rubric</button>
           <button className="btn btn-primary">Start New Grading Batch</button>
        </div>
      </header>

      <section className={styles.statsRow}>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Total Graded</p>
            <p className={styles.statsValue}>1,450</p>
         </div>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Accuracy vs. Teachers</p>
            <p className={styles.statsValue}>96%</p>
         </div>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Hours Saved (Teacher)</p>
            <p className={styles.statsValue}>240h</p>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={`${styles.submissionSection} card`}>
            <div className={styles.sectionHeader}>
               <h2>Recent Submissions</h2>
               <div className={styles.search}>
                  <Search size={16} />
                  <input type="text" placeholder="Search by student or topic..." />
               </div>
            </div>
            <div className={styles.submissionList}>
               {submissions.map((sub, i) => (
                 <div key={i} className={styles.subItem}>
                    <div className={styles.subInfo}>
                       <div className={styles.subIcon}><FileSearch size={20} /></div>
                       <div>
                          <p className={styles.subTitle}>{sub.title}</p>
                          <p className={styles.subMeta}>{sub.student} • {sub.grade}</p>
                       </div>
                    </div>
                    <div className={styles.subStatus}>
                       <span className={`${styles.statusBadge} ${styles[sub.status.toLowerCase()]}`}>
                          {sub.status}
                       </span>
                       <p className={styles.subScore}>{sub.score}</p>
                    </div>
                    <div className={styles.subActions}>
                       <button className={styles.reviewBtn}>Review Feedback</button>
                       <button className={styles.overrideBtn}>Teacher Override</button>
                    </div>
                 </div>
               ))}
            </div>
         </section>

         <aside className={styles.sidebarSection}>
            <div className={`${styles.feedbackCard} glass`}>
               <h3>AI Insight: Common Errors</h3>
               <p className={styles.insightDesc}>"Misinterpretation of social class impact in 18th century France."</p>
               <div className={styles.tagGroup}>
                   <span className={styles.errorTag}>Structure: 85%</span>
                   <span className={styles.errorTag}>Vocabulary: 92%</span>
                   <span className={styles.errorTag}>Grammar: 98%</span>
               </div>
               <button className={styles.insightBtn}>Suggest Corrective Lesson</button>
            </div>

            <div className={`${styles.configCard} card`}>
                <h3>Grading Rubrics</h3>
                <div className={styles.rubricList}>
                   <div className={styles.rubricItem}>
                      <BookOpen size={16} />
                      <span>History Grade 10 Standard</span>
                   </div>
                   <div className={styles.rubricItem}>
                      <BookOpen size={16} />
                      <span>English Literature (GCSE)</span>
                   </div>
                </div>
                <button className={styles.manageBtn}>Manage Rubrics</button>
            </div>
         </aside>
      </div>
    </div>
  );
}
