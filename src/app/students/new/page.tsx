import { 
  ArrowLeft, 
  User, 
  Users, 
  MapPin, 
  BookOpen, 
  FileText, 
  CheckCircle,
  ChevronRight,
  ChevronLeft,
  Camera,
  Upload
} from "lucide-react";
import Link from "next/link";
import styles from "./enrollment.module.css";

export default function NewEnrollment() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/students" className={styles.backBtn}>
          <ArrowLeft size={20} />
          <span>Back to Directory</span>
        </Link>
        <h1 className={styles.title}>Student Enrollment</h1>
      </header>

      <div className={styles.stepper}>
        <div className={`${styles.step} ${styles.active}`}>
          <div className={styles.stepNum}>1</div>
          <span>Personal Info</span>
        </div>
        <div className={styles.stepConnector}></div>
        <div className={styles.step}>
          <div className={styles.stepNum}>2</div>
          <span>Parent Details</span>
        </div>
        <div className={styles.stepConnector}></div>
        <div className={styles.step}>
          <div className={styles.stepNum}>3</div>
          <span>Academic Info</span>
        </div>
        <div className={styles.stepConnector}></div>
        <div className={styles.step}>
          <div className={styles.stepNum}>4</div>
          <span>Documents</span>
        </div>
      </div>

      <div className={`${styles.formCard} card`}>
        <div className={styles.formGrid}>
          <div className={styles.photoUpload}>
            <div className={styles.photoPlaceholder}>
                <Camera size={40} color="var(--text-tertiary)" />
                <p>Upload Photo</p>
            </div>
            <button className={styles.uploadBtn}><Upload size={16} /> Choose File</button>
          </div>

          <div className={styles.fields}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label>First Name</label>
                <input type="text" placeholder="e.g. John" />
              </div>
              <div className={styles.field}>
                <label>Last Name</label>
                <input type="text" placeholder="e.g. Doe" />
              </div>
            </div>
            
            <div className={styles.row}>
              <div className={styles.field}>
                <label>Date of Birth</label>
                <input type="date" />
              </div>
              <div className={styles.field}>
                <label>Gender</label>
                <select>
                  <option>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className={styles.field}>
              <label>Blood Group</label>
              <select>
                <option>Select Blood Group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>

            <div className={styles.field}>
              <label>Address</label>
              <textarea placeholder="Residential Address" rows={3}></textarea>
            </div>
          </div>
        </div>

        <div className={styles.formActions}>
          <button className={styles.cancelBtn}>Cancel</button>
          <button className="btn btn-primary">
            <span>Next Step</span>
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
