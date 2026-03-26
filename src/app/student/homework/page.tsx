import { 
  ClipboardList, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Upload,
  BrainCircuit,
  MessageSquare
} from "lucide-react";
import styles from "./homework.module.css";

export default function HomeworkHub() {
  const assignments = [
    { id: 1, subject: "Physics", title: "Kinetic Motion Lab Report", due: "Today, 4:00 PM", status: "Pending", priority: "High" },
    { id: 2, subject: "Literature", title: "Narrative Techniques Analysis", due: "Tomorrow, 9:00 AM", status: "In Progress", priority: "Medium" },
    { id: 3, subject: "Math", title: "Advanced Calculus Set 4", due: "Oct 15", status: "Pending", priority: "Low" },
    { id: 4, subject: "History", title: "Industrial Revolution Impact", due: "Completed", status: "Submitted", priority: "N/A" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Homework Hub</h1>
        <p className={styles.subtitle}>Track assignments, submit work, and get AI-powered feedback.</p>
      </header>

      <div className={styles.mainGrid}>
        <div className={styles.listSection}>
           <div className="card">
              <div className={styles.filters}>
                 <button className={styles.filterBtnActive}>All Assignments</button>
                 <button className={styles.filterBtn}>Pending</button>
                 <button className={styles.filterBtn}>Completed</button>
              </div>

              <div className={styles.tableHead}>
                 <span>Subject</span>
                 <span>Assignment</span>
                 <span>Deadline</span>
                 <span>Status</span>
                 <span>Action</span>
              </div>

              {assignments.map(hw => (
                 <div key={hw.id} className={styles.row}>
                    <div className={styles.subjectCol}>
                       <strong>{hw.subject}</strong>
                    </div>
                    <div className={styles.infoCol}>
                       <p>{hw.title}</p>
                       <span className={styles.priority}>{hw.priority} Priority</span>
                    </div>
                    <div className={styles.dateCol}>
                       <Clock size={14} />
                       <span>{hw.due}</span>
                    </div>
                    <div className={styles.statusCol}>
                       <span className={`${styles.statusBadge} ${styles[hw.status.toLowerCase().replace(' ', '')]}`}>
                          {hw.status}
                       </span>
                    </div>
                    <div className={styles.actionCol}>
                       {hw.status === 'Submitted' ? (
                          <button className={styles.viewBtn}>View Feedback</button>
                       ) : (
                          <button className={styles.submitBtn}><Upload size={14} /> Submit</button>
                       )}
                    </div>
                 </div>
              ))}
           </div>
        </div>

        <aside className={styles.aiAssistance}>
           <div className={`${styles.aiCard} glass`}>
              <div className={styles.aiHeader}>
                 <BrainCircuit size={20} color="var(--primary-color)" />
                 <h3>AI Grading Preview</h3>
              </div>
              <p>Upload a draft to get a predicted grade and feedback before final submission.</p>
              <div className={styles.dropzone}>
                 <Upload size={24} color="var(--text-tertiary)" />
                 <p>Drop your draft here</p>
                 <span>Supports PDF, DOCX, MD</span>
              </div>
           </div>

           <div className="card">
              <h3>Study Buddy</h3>
              <div className={styles.buddyChat}>
                 <div className={styles.msg}>
                    <p>I can help you with the 'Kinetic Motion' report. Need formulas?</p>
                 </div>
                 <div className={styles.chatInput}>
                    <input type="text" placeholder="Ask AI Buddy..." />
                    <button><MessageSquare size={16} /></button>
                 </div>
              </div>
           </div>
        </aside>
      </div>
    </div>
  );
}
