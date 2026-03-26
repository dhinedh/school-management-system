"use client";

import { 
  FileText, 
  Award, 
  BarChart3, 
  Plus, 
  Download, 
  ChevronRight,
  ClipboardList,
  UserPlus,
  TrendingUp,
  Printer,
  LayoutDashboard,
  Zap,
  Sparkles
} from "lucide-react";
import styles from "./grades.module.css";
import { mockStudents } from "@/lib/mock-students";

export default function GradesPage() {
  const exams = [
    { title: "First Mid-Term", date: "Oct 15, 2024", type: "Internal", status: "Published" },
    { title: "Half-Yearly Examination", date: "Dec 20, 2024", type: "Main", status: "In Progress" },
    { title: "Second Mid-Term", date: "Feb 10, 2025", type: "Internal", status: "Upcoming" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Grades & Assessment</h1>
          <p className={styles.subtitle}>Configure examinations, manage markbooks, and generate report cards.</p>
        </div>
        <div className={styles.actions}>
            <div className={styles.uploadWrapper}>
               <input type="file" id="csvUpload" hidden onChange={() => alert('Processing student marks CSV... AI grading logic initialized.')} />
               <label htmlFor="csvUpload" className="btn btn-secondary">
                  <Download size={18} style={{ transform: 'rotate(180deg)' }} />
                  <span>Bulk Mark Entry (CSV)</span>
               </label>
            </div>
           <button className="btn btn-secondary" onClick={() => alert('Generating Hall Tickets for 120 students...')}>
             <Printer size={18} />
             <span>Hall Tickets</span>
           </button>
           <button 
             className="btn btn-primary" 
             style={{ background: 'var(--success)' }}
             onClick={() => alert('RESULTS PUBLISHED: 42 Smart Notifications sent, 18 IVR Calls triggered, 5 Print queue updated.')}
           >
             <Zap size={18} />
             <span>Publish All Results</span>
           </button>
        </div>
      </header>

      <div className={styles.mainGrid}>
        <section className={`${styles.examSection} card`}>
          <div className={styles.sectionHeader}>
            <h2>Active Examinations</h2>
            <button className={styles.viewAll}>Manage All</button>
          </div>
          <div className={styles.examList}>
            {exams.map((exam, i) => (
              <div key={i} className={styles.examItem}>
                <div className={styles.examIcon}>
                   <ClipboardList size={20} color="var(--primary-color)" />
                </div>
                <div className={styles.examInfo}>
                  <p className={styles.examTitle}>{exam.title}</p>
                  <p className={styles.examMeta}>{exam.type} • {exam.date}</p>
                </div>
                <span className={`${styles.statusBadge} ${styles[exam.status.replace(' ', '').toLowerCase()]}`}>
                  {exam.status}
                </span>
                <ChevronRight size={18} color="#ccc" />
              </div>
            ))}
          </div>
        </section>

        <section className={`${styles.reportSection} glass`}>
            <div className={styles.sectionHeader}>
                <h2>Report Card Generation</h2>
                <Award size={24} color="var(--primary-color)" />
            </div>
            <p className={styles.sectionDesc}>Generate and publish term-wise report cards for students.</p>
            <div className={styles.reportActions}>
                <div className={styles.filterGroup}>
                    <label>Select Grade</label>
                    <select><option>Grade 10</option></select>
                </div>
                <div className={styles.filterGroup}>
                    <label>Select Term</label>
                    <select><option>Second Term</option></select>
                </div>
                <button className={styles.generateBtn}>
                    <Download size={18} />
                    <span>Bulk Generate PDFs</span>
                </button>
            </div>
            <div className={styles.aiFeature}>
                <div className={styles.aiTag}>AI Powered</div>
                <p>Auto-generate narrative comments based on student performance.</p>
            </div>
        </section>
      </div>

      <div className={`${styles.markbookContainer} card`}>
         <div className={styles.tableHeader}>
            <div className={styles.tableTitle}>
               <h2>Online Markbook</h2>
               <span className={styles.selectionTag}>Grade 10A • Mathematics • Half-Yearly</span>
            </div>
            <div className={styles.tableActions}>
               <button className={styles.aiCommentBtn} onClick={() => alert('AI NARRATIVE: "Student shows strong command of Mathematics. Demonstrated 12% improvement in Theory since Mid-Term."')}>
                  <Sparkles size={16} />
                  <span>Generate AI Comments</span>
               </button>
               <button className={styles.exportBtn}><Download size={16} /> Export CSV</button>
            </div>
         </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Student</th>
              <th>Roll No</th>
              <th>Internal (20)</th>
              <th>Theory (80)</th>
              <th>Total (100)</th>
              <th>Grade</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student, i) => (
              <tr key={student.id}>
                <td>
                  <div className={styles.studentInfo}>
                    <img src={student.photo} alt={student.name} className={styles.avatar} />
                    <span className={styles.name}>{student.name}</span>
                  </div>
                </td>
                <td>{100 + i}</td>
                <td><input type="number" defaultValue={18 - i} className={styles.markInput} /></td>
                <td><input type="number" defaultValue={72 - (i*2)} className={styles.markInput} /></td>
                <td><strong className={styles.total}>{90 - (i*3)}</strong></td>
                <td><span className={styles.gradeBadge}>A{(i === 0) ? '+' : ''}</span></td>
                <td><span className={styles.rankBadge}>{i + 1}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
