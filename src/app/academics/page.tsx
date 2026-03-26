import { 
  Calendar, 
  Layers, 
  BookMarked, 
  Clock, 
  Plus, 
  Settings2,
  ChevronRight,
  UserCheck,
  BookOpen,
  ArrowUpRight,
  Users
} from "lucide-react";
import styles from "./academics.module.css";

export default function AcademicsPage() {
  const sections = [
    { 
      title: "Academic Years & Terms", 
      icon: Calendar, 
      description: "Set up enrollment cycles and term dates.",
      count: "Active: 2024-25",
      color: "#4f46e5"
    },
    { 
      title: "Grades & Sections", 
      icon: Layers, 
      description: "Manage class levels and student distribution.",
      count: "12 Grades, 36 Sections",
      color: "#10b981"
    },
    { 
      title: "Subject Management", 
      icon: BookMarked, 
      description: "Define curriculum subjects and teacher allocations.",
      count: "48 Subjects",
      color: "#f59e0b"
    },
    { 
      title: "Timetable Builder", 
      icon: Clock, 
      description: "Create and optimize weekly schedules.",
      count: "8 Drafts",
      color: "#ef4444"
    },
    { 
      title: "Curriculum Planner", 
      icon: BookOpen, 
      description: "Map weekly topics and learning objectives.",
      count: "Active",
      color: "#8b5cf6"
    },
    { 
      title: "Grade Promotion", 
      icon: ArrowUpRight, 
      description: "Automated end-of-year student promotion.",
      count: "Year End",
      color: "#06b6d4"
    }
  ];

  const currentTerms = [
    { name: "First Term", dates: "Aug 2024 - Dec 2024", status: "Completed" },
    { name: "Second Term", dates: "Jan 2025 - Mar 2025", status: "Active" },
    { name: "Third Term", dates: "Apr 2025 - Jun 2025", status: "Upcoming" },
  ];

  const gradeOverview = [
    { grade: "Grade 10", sections: ["A", "B", "C"], students: 124, capacity: 135 },
    { grade: "Grade 11", sections: ["A", "B"], students: 82, capacity: 90 },
    { grade: "Grade 12", sections: ["A", "B", "C", "D"], students: 156, capacity: 180 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Academic Management</h1>
          <p className={styles.subtitle}>Configure your institution's academic structure and curriculum.</p>
        </div>
        <div className={styles.actions}>
          <button className="btn btn-secondary">
            <Users size={18} />
            <span>Substitute Management</span>
            <span className={styles.aiBadge}>AI Auto-assign</span>
          </button>
          <button className="btn btn-primary">
            <Plus size={18} />
            <span>Setup New Year</span>
          </button>
        </div>
      </header>

      <section className={styles.grid}>
        {sections.map((section, i) => (
          <div key={i} className={`${styles.card} card`}>
            <div className={styles.cardHeader}>
              <div className={styles.iconBox} style={{ background: `${section.color}15`, color: section.color }}>
                <section.icon size={24} />
              </div>
              <button className={styles.settingsBtn}><Settings2 size={18} /></button>
            </div>
            <h3 className={styles.cardTitle}>{section.title}</h3>
            <p className={styles.cardDesc}>{section.description}</p>
            <div className={styles.cardFooter}>
              <span>{section.count}</span>
              <ChevronRight size={16} />
            </div>
          </div>
        ))}
      </section>

      <div className={styles.bottomGrid}>
        <section className={`${styles.termSection} card`}>
          <div className={styles.sectionHeader}>
             <h2>Academic Terms</h2>
             <button className={styles.manageBtn}>Manage Terms</button>
          </div>
          <div className={styles.termList}>
             {currentTerms.map((term, i) => (
               <div key={i} className={styles.termItem}>
                 <div className={styles.termInfo}>
                   <p className={styles.termName}>{term.name}</p>
                   <p className={styles.termDates}>{term.dates}</p>
                 </div>
                 <span className={`${styles.statusBadge} ${styles[term.status.toLowerCase()]}`}>
                   {term.status}
                 </span>
               </div>
             ))}
          </div>
        </section>

        <section className={`${styles.gradeSection} card`}>
          <div className={styles.sectionHeader}>
            <h2>Grade Capacity</h2>
            <UserCheck size={20} color="var(--text-tertiary)" />
          </div>
          <div className={styles.gradeTable}>
            {gradeOverview.map((g, i) => (
              <div key={i} className={styles.gradeRow}>
                <div className={styles.gradeInfo}>
                  <p className={styles.gradeName}>{g.grade}</p>
                  <p className={styles.gradeSub}>{g.sections.length} Sections</p>
                </div>
                <div className={styles.capacityInfo}>
                  <div className={styles.capacityBar}>
                    <div className={styles.fill} style={{ width: `${(g.students/g.capacity)*100}%` }}></div>
                  </div>
                  <p className={styles.capacityText}>{g.students} / {g.capacity} Students</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
