import { 
  Target, 
  AlertTriangle, 
  TrendingDown, 
  Calendar, 
  GraduationCap, 
  Mail, 
  Phone, 
  ChevronRight,
  ArrowRight,
  Info
} from "lucide-react";
import styles from "./dropout.module.css";
import { mockStudents } from "@/lib/mock-students";

export default function DropoutRiskPage() {
  const atRiskStudents = [
    { name: "John Smith", risk: 85, factors: ["Attendance - 65%", "Grade Drop - 20%"], action: "Parent Meeting" },
    { name: "Sarah Miller", risk: 72, factors: ["Declining Math Scores", "3 Consecutive Absences"], action: "Counseling" },
    { name: "Alex Johnson", risk: 45, factors: ["Late Submission Pattern"], action: "Academic Support" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><Target size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Dropout Risk Predictor</h1>
              <p className={styles.subtitle}>Analyzing 50+ data points to predict early withdrawal risks.</p>
           </div>
        </div>
        <button className="btn btn-primary">Run Daily Model Analysis</button>
      </header>

      <section className={styles.statsRow}>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Students Analyzed</p>
            <p className={styles.statsValue}>1,240</p>
         </div>
         <div className={`${styles.statsCard} card ${styles.highRisk}`}>
            <p className={styles.statsLabel}>High Risk (&gt;70%)</p>
            <p className={styles.statsValue}>12</p>
         </div>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Successful Interventions</p>
            <p className={styles.statsValue}>84%</p>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={`${styles.riskTable} card`}>
            <div className={styles.tableHeader}>
               <h2>High Risk Student List</h2>
            </div>
            <div className={styles.studentList}>
               {atRiskStudents.map((student, i) => (
                 <div key={i} className={styles.studentItem}>
                    <div className={styles.studentInfo}>
                       <div className={styles.riskCircle} style={{ 
                          border: `3px solid ${student.risk > 80 ? '#ef4444' : '#f59e0b'}`,
                          color: student.risk > 80 ? '#ef4444' : '#f59e0b'
                       }}>
                          {student.risk}%
                       </div>
                       <div className={styles.nameSection}>
                          <p className={styles.name}>{student.name}</p>
                          <p className={styles.grade}>Grade 10A • Student ID: #10293</p>
                       </div>
                    </div>
                    <div className={styles.factorSection}>
                       <p className={styles.factorLabel}>Key Risk Factors</p>
                       <div className={styles.factorTags}>
                          {student.factors.map((f, j) => (
                            <span key={j} className={styles.factorTag}>{f}</span>
                          ))}
                       </div>
                    </div>
                    <div className={styles.actionSection}>
                       <p className={styles.actionLabel}>AI Recommendation</p>
                       <button className={styles.actionBtn}>{student.action} <ArrowRight size={14} /></button>
                    </div>
                 </div>
               ))}
            </div>
         </section>

         <aside className={styles.sidebarSection}>
            <div className={`${styles.modelCard} glass`}>
               <h3>Model Confidence</h3>
               <div className={styles.confidenceBar}>
                  <div className={styles.confidenceFill} style={{ width: '92%' }}></div>
               </div>
               <p className={styles.confidenceText}>92% Accuracy vs. 2023 Historical Data</p>
               <div className={styles.modelMeta}>
                  <Info size={14} />
                  <span>Random Forest + LSTM Engine</span>
               </div>
            </div>

            <div className={`${styles.interventionCard} card`}>
                <h3>Intervention Hub</h3>
                <div className={styles.iList}>
                   <div className={styles.iItem}>
                      <Mail size={16} />
                      <span>Email Parents (3)</span>
                   </div>
                   <div className={styles.iItem}>
                      <Calendar size={16} />
                      <span>Counselor Block (2)</span>
                   </div>
                </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
