import { 
  BookOpen, 
  Video, 
  FileText, 
  HelpCircle, 
  Plus, 
  Search, 
  Play, 
  CheckCircle, 
  Clock, 
  BarChart,
  ChevronRight
} from "lucide-react";
import styles from "./lms.module.css";

export default function LMSPage() {
  const courses = [
    { title: "Introduction to Calculus", teacher: "Sarah Williams", lessons: 12, students: 45, progress: "65%" },
    { title: "Modern World History", teacher: "James Brown", lessons: 8, students: 38, progress: "40%" },
    { title: "Physics: Mechanics", teacher: "Dr. Robert Smith", lessons: 15, students: 52, progress: "80%" },
  ];

  const assignments = [
    { title: "Derivative Worksheet", course: "Calculus", due: "Mar 20, 2024", submissions: "32/45" },
    { title: "WWII Essay", course: "History", due: "Mar 22, 2024", submissions: "15/38" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>LMS & E-Learning</h1>
          <p className={styles.subtitle}>Host digital courses, manage assignments, and track learning progress.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Video size={18} />
             <span>Live Class (Zoom/Teams)</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Create Course</span>
           </button>
        </div>
      </header>

      <section className={styles.topSection}>
         <div className={`${styles.courseGrid} card`}>
            <div className={styles.sectionHeader}>
               <h2>Active Courses</h2>
               <div className={styles.search}>
                  <Search size={16} />
                  <input type="text" placeholder="Search courses..." />
               </div>
            </div>
            <div className={styles.courseItems}>
               {courses.map((course, i) => (
                 <div key={i} className={styles.courseItem}>
                    <div className={styles.courseIcon}>
                       <BookOpen size={24} color="var(--primary-color)" />
                    </div>
                    <div className={styles.courseMain}>
                       <p className={styles.courseTitle}>{course.title}</p>
                       <p className={styles.courseMeta}>Teacher: {course.teacher} • {course.lessons} Lessons</p>
                    </div>
                    <div className={styles.courseStat}>
                       <div className={styles.progressBar}>
                          <div className={styles.progressFill} style={{ width: course.progress }}></div>
                       </div>
                       <p className={styles.progressText}>{course.progress} Avg. Completion</p>
                    </div>
                    <ChevronRight size={20} color="#ccc" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={`${styles.assignmentSection} card`}>
            <div className={styles.sectionHeader}>
               <h2>Recent Assignments</h2>
               <button className={styles.viewAll}>Track All</button>
            </div>
            <div className={styles.assignmentList}>
               {assignments.map((asgn, i) => (
                 <div key={i} className={styles.assignmentItem}>
                    <div className={styles.asgnInfo}>
                       <p className={styles.asgnTitle}>{asgn.title}</p>
                       <p className={styles.asgnMeta}>{asgn.course} • Due: {asgn.due}</p>
                    </div>
                    <div className={styles.asgnStats}>
                       <p className={styles.asgnCount}>{asgn.submissions}</p>
                       <p className={styles.asgnLabel}>Submitted</p>
                    </div>
                 </div>
               ))}
            </div>
         </section>

         <aside className={styles.sidebarSection}>
            <div className={`${styles.quizCard} card`}>
               <h3>Interactive Quizzes</h3>
               <p className={styles.sidebarDesc}>Build AI-generated quizzes from course materials.</p>
               <button className={styles.quizBtn}>
                  <HelpCircle size={18} />
                  <span>Quiz Wizard</span>
               </button>
            </div>

            <div className={`${styles.resourceCard} glass`}>
               <div className={styles.insightHeader}>
                  <FileText size={18} color="var(--primary-color)" />
                  <span>Shared Resources</span>
               </div>
               <div className={styles.resourceList}>
                  <div className={styles.resourceItem}>
                     <Play size={14} />
                     <span>Syllabus_2024.pdf</span>
                  </div>
                  <div className={styles.resourceItem}>
                     <Play size={14} />
                     <span>Unit_1_Lab_Guide.docx</span>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
