import { 
  Plus, 
  UserPlus, 
  FileUp, 
  Search, 
  MoreVertical, 
  Filter, 
  Download,
  CreditCard,
  ArrowLeftRight
} from "lucide-react";
import { mockStudents } from "@/lib/mock-students";
import styles from "./students.module.css";
import Image from "next/image";

export default function StudentsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Student Directory</h1>
          <p className={styles.subtitle}>Manage and view all students in the institution.</p>
        </div>
        <div className={styles.actions}>
          <button className="btn btn-secondary">
             <CreditCard size={18} />
             <span>ID Cards</span>
          </button>
          <button className="btn btn-secondary">
             <ArrowLeftRight size={18} />
             <span>Transfers</span>
          </button>
          <button className="btn btn-secondary">
            <FileUp size={18} />
            <span>CSV Import</span>
          </button>
          <button className="btn btn-primary">
            <UserPlus size={18} />
            <span>New Enrollment</span>
          </button>
        </div>
      </header>

      <section className={`${styles.statsGrid} glass`}>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Total Students</p>
          <p className={styles.statValue}>1,248</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Enrolled This Year</p>
          <p className={styles.statValue}>152</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Withdrawn</p>
          <p className={styles.statValue}>8</p>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.stat}>
          <p className={styles.statLabel}>Graduated</p>
          <p className={styles.statValue}>94</p>
        </div>
      </section>

      <div className={`${styles.tableContainer} card`}>
        <div className={styles.tableHeader}>
          <div className={styles.search}>
            <Search size={18} />
            <input type="text" placeholder="Search by name, ID, or grade..." />
          </div>
          <div className={styles.tableActions}>
            <button className={styles.filterBtn}>
              <Filter size={18} />
              <span>Filters</span>
            </button>
            <button className={styles.filterBtn}>
              <Download size={18} />
              <span>Export</span>
            </button>
          </div>
        </div>

        <table className={styles.table}>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Student</th>
              <th>ID</th>
              <th>Grade</th>
              <th>Section</th>
              <th>Parent</th>
              <th>Comm Type</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mockStudents.map((student, i) => (
              <tr key={student.id}>
                <td><input type="checkbox" /></td>
                <td>
                  <div className={styles.studentInfo}>
                    <img src={student.photo} alt={student.name} className={styles.avatar} />
                    <div>
                      <p className={styles.name}>{student.name}</p>
                      <p className={styles.contact}>{student.contact}</p>
                    </div>
                  </div>
                </td>
                <td><code className={styles.studentId}>{student.studentId}</code></td>
                <td>{student.grade}</td>
                <td>{student.section}</td>
                <td>{student.parentName}</td>
                <td>
                  <div className={styles.commType}>
                    {i % 3 === 0 ? 'WhatsApp' : i % 3 === 1 ? 'SMS/Voice' : 'Print Only'}
                  </div>
                </td>
                <td>
                  <span className={`${styles.badge} ${styles[student.status]}`}>
                    {student.status}
                  </span>
                </td>
                <td>
                  <button className={styles.moreBtn}>
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <div className={styles.pagination}>
            <span>Showing 1 to 4 of 1,248 students</span>
            <div className={styles.pageBtns}>
                <button disabled>Previous</button>
                <button className={styles.activePage}>1</button>
                <button>2</button>
                <button>3</button>
                <span>...</span>
                <button>Next</button>
            </div>
        </div>
      </div>
    </div>
  );
}
