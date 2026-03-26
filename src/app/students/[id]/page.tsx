import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Download, 
  Edit, 
  FileText,
  ShieldCheck,
  GraduationCap,
  History
} from "lucide-react";
import Link from "next/link";
import { mockStudents } from "@/lib/mock-students";
import styles from "./profile.module.css";
import { notFound } from "next/navigation";

export default function StudentProfile({ params }: { params: { id: string } }) {
  const student = mockStudents.find(s => s.id === params.id);
  
  if (!student) {
    return notFound();
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/students" className={styles.backBtn}>
          <ArrowLeft size={20} />
          <span>Back to Directory</span>
        </Link>
        <div className={styles.actions}>
          <button className="btn btn-secondary">
            <Download size={18} />
            <span>ID Card</span>
          </button>
          <button className="btn btn-primary">
            <Edit size={18} />
            <span>Edit Profile</span>
          </button>
        </div>
      </header>

      <div className={styles.mainGrid}>
        <aside className={styles.leftCol}>
          <div className={`${styles.profileCard} card`}>
            <div className={styles.avatarWrapper}>
              <img src={student.photo} alt={student.name} className={styles.largeAvatar} />
              <div className={`${styles.statusBadge} ${styles[student.status]}`}></div>
            </div>
            <h1 className={styles.studentName}>{student.name}</h1>
            <p className={styles.studentIdCode}>{student.studentId}</p>
            
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <GraduationCap size={18} />
                <span>{student.grade} - Section {student.section}</span>
              </div>
              <div className={styles.infoItem}>
                <Calendar size={18} />
                <span>Enrolled: {student.enrollmentDate}</span>
              </div>
              <div className={styles.infoItem}>
                <ShieldCheck size={18} />
                <span>Status: <strong className={styles[student.status]}>{student.status}</strong></span>
              </div>
            </div>
          </div>

          <div className={`${styles.contactCard} card`}>
            <h3>Contact Information</h3>
            <div className={styles.infoList}>
              <div className={styles.infoItem}>
                <Mail size={18} />
                <span>{student.name.toLowerCase().replace(' ', '.')}@school.edu</span>
              </div>
              <div className={styles.infoItem}>
                <Phone size={18} />
                <span>{student.contact}</span>
              </div>
              <div className={styles.infoItem}>
                <MapPin size={18} />
                <span>123 Willow Lane, Springfield</span>
              </div>
            </div>
          </div>
          
          <div className={`${styles.parentCard} card`}>
             <h3>Parent / Guardian</h3>
             <div className={styles.parentInfo}>
                <p className={styles.parentName}>{student.parentName}</p>
                <p className={styles.parentRelation}>Father</p>
                <div className={styles.parentActions}>
                    <button className={styles.contactBtn}><Mail size={16} /></button>
                    <button className={styles.contactBtn}><Phone size={16} /></button>
                </div>
             </div>
          </div>
        </aside>

        <main className={styles.rightCol}>
          <div className={`${styles.academicOverview} card`}>
            <div className={styles.sectionHeader}>
              <h2>Academic Performance</h2>
              <button className={styles.viewMore}>View Full Transcript</button>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.acadStat}>
                <p className={styles.statLabel}>Current GPA</p>
                <p className={styles.statValue}>3.85</p>
              </div>
              <div className={styles.acadStat}>
                <p className={styles.statLabel}>Attendance</p>
                <p className={styles.statValue}>98.2%</p>
              </div>
              <div className={styles.acadStat}>
                <p className={styles.statLabel}>Rank</p>
                <p className={styles.statValue}>4 / 42</p>
              </div>
            </div>
          </div>

          <div className={`${styles.historySection} card`}>
            <div className={styles.sectionHeader}>
              <h2>Yearly Progress</h2>
              <History size={20} color="var(--text-tertiary)" />
            </div>
            <div className={styles.historyList}>
              {student.academicHistory.map((history, i) => (
                <div key={i} className={styles.historyItem}>
                  <div className={styles.historyYear}>{history.year}</div>
                  <div className={styles.historyStats}>
                    <div className={styles.historyStat}>
                      <span>GPA:</span> <strong>{history.gpa}</strong>
                    </div>
                    <div className={styles.historyStat}>
                      <span>Attendance:</span> <strong>{history.attendance}</strong>
                    </div>
                  </div>
                </div>
              ))}
              {student.academicHistory.length === 0 && <p className={styles.empty}>No previous academic history found.</p>}
            </div>
          </div>

          <div className={`${styles.documentsSection} card`}>
             <div className={styles.sectionHeader}>
                <h2>Documents</h2>
                <button className={styles.uploadBtn}>Upload New</button>
             </div>
             <div className={styles.docGrid}>
                <div className={styles.docItem}>
                    <FileText size={24} color="#ef4444" />
                    <div>
                        <p className={styles.docName}>Birth Certificate.pdf</p>
                        <p className={styles.docMeta}>Uploaded: Jan 20, 2024</p>
                    </div>
                    <button className={styles.downloadBtn}><Download size={16} /></button>
                </div>
                <div className={styles.docItem}>
                    <FileText size={24} color="#3b82f6" />
                    <div>
                        <p className={styles.docName}>Previous Report Card.pdf</p>
                        <p className={styles.docMeta}>Uploaded: Jan 15, 2024</p>
                    </div>
                    <button className={styles.downloadBtn}><Download size={16} /></button>
                </div>
             </div>
          </div>
        </main>
      </div>
    </div>
  );
}
