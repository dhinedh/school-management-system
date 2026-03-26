import { 
  FileText, 
  Search, 
  Plus, 
  Filter, 
  UserPlus, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  TrendingUp,
  Download,
  ChevronRight
} from "lucide-react";
import styles from "./admissions.module.css";

export default function AdmissionsPage() {
  const applications = [
    { name: "Emily White", grade: "Grade 09", date: "Mar 15, 2024", status: "Under Review", score: "88/100" },
    { name: "Michael Chang", grade: "Grade 11", date: "Mar 14, 2024", status: "Offer Sent", score: "92/100" },
    { name: "Sarah Miller", grade: "Grade 10", date: "Mar 12, 2024", status: "Waitlisted", score: "75/100" },
    { name: "David Wilson", grade: "Grade 09", date: "Mar 10, 2024", status: "Accepted", score: "85/100" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Admissions Module</h1>
          <p className={styles.subtitle}>Manage the student intake lifecycle from application to enrollment.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <TrendingUp size={18} />
             <span>Funnel Analytics</span>
           </button>
           <button className="btn btn-primary">
             <UserPlus size={18} />
             <span>Offline Application</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Applications</p>
           <p className={styles.statsValue}>342</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Pending Review</p>
           <p className={styles.statsValue}>84</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Offers Made</p>
           <p className={styles.statsValue}>152</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Enrollment Target</p>
           <p className={styles.statsValue}>65%</p>
        </div>
      </section>

      <div className={`${styles.appTableContainer} card`}>
        <div className={styles.tableHeader}>
           <h2>Admissions Pipeline</h2>
           <div className={styles.tableActions}>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search applicants..." />
              </div>
              <button className={styles.filterBtn}><Filter size={18} /></button>
           </div>
        </div>
        
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Target Grade</th>
              <th>Applied Date</th>
              <th>Test Score</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr key={i}>
                <td>
                   <p className={styles.appName}>{app.name}</p>
                   <p className={styles.appId}>APP-2024-{1000 + i}</p>
                </td>
                <td>{app.grade}</td>
                <td>{app.date}</td>
                <td><span className={styles.score}>{app.score}</span></td>
                <td>
                  <span className={`${styles.statusBadge} ${styles[app.status.replace(' ', '').toLowerCase()]}`}>
                    {app.status}
                  </span>
                </td>
                <td><button className={styles.reviewBtn}>Review Application</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className={`${styles.admissionsToolbox} glass`}>
         <div className={styles.toolboxGrid}>
            <div className={styles.toolItem}>
                <FileText size={24} color="var(--primary-color)" />
                <div>
                    <h4>Entrance Test Scheduler</h4>
                    <p>Organize batches for upcoming admission exams.</p>
                    <button className={styles.toolBtn}>Open Scheduler</button>
                </div>
            </div>
            <div className={styles.toolItem}>
                <CheckCircle2 size={24} color="#10b981" />
                <div>
                    <h4>Bulk Offer Generator</h4>
                    <p>Generate and email admission letters to selected applicants.</p>
                    <button className={styles.toolBtn}>Launch Generator</button>
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
