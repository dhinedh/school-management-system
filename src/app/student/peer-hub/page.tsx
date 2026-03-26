import { 
  Users, 
  MessageSquare, 
  FileText, 
  Search, 
  Plus, 
  BookOpen, 
  Zap,
  ArrowRight
} from "lucide-react";
import styles from "./peer-hub.module.css";

export default function PeerHub() {
  const groups = [
    { title: "Calculus Crew", subject: "Math", members: 14, status: "Active Now" },
    { title: "Literature Analysts", subject: "English", members: 8, status: "Meeting @ 5PM" },
    { title: "Physics Lab Prep", subject: "Physics", members: 5, status: "Sharing Resources" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Peer Learning Hub</h1>
        <p className={styles.subtitle}>Collaborate with classmates, share resources, and study together.</p>
      </header>

      <div className={styles.searchBar}>
         <Search size={20} className={styles.searchIcon} />
         <input type="text" placeholder="Search for study groups, resources, or classmates..." />
         <button className={styles.newGroupBtn}><Plus size={18} /> Create Group</button>
      </div>

      <div className={styles.mainGrid}>
         <section className={styles.groupsSection}>
            <h3 className={styles.sectionTitle}>Global Study Groups</h3>
            <div className={styles.groupGrid}>
               {groups.map((g, i) => (
                  <div key={i} className={`${styles.groupCard} card`}>
                     <div className={styles.groupInfo}>
                        <h4>{g.title}</h4>
                        <span className={styles.subject}>{g.subject}</span>
                        <div className={styles.meta}>
                           <Users size={14} />
                           <span>{g.members} Members</span>
                        </div>
                     </div>
                     <div className={styles.statusBox}>
                        <span className={styles.status}>{g.status}</span>
                        <button className={styles.joinBtn}>Join <ArrowRight size={14} /></button>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.resourcesSection}>
            <div className="card">
               <h3 className={styles.sideTitle}><FileText size={18} /> Top Shared Files</h3>
               <div className={styles.fileList}>
                  <div className={styles.fileItem}>
                     <BookOpen size={16} />
                     <p>Organic Chem Notes.pdf</p>
                  </div>
                  <div className={styles.fileItem}>
                     <FileText size={16} />
                     <p>History Timeline.xlsx</p>
                  </div>
               </div>
               <button className={styles.uploadBtn}>Upload Resource</button>
            </div>

            <div className={`${styles.pinnedForum} glass`}>
               <h3>Pinned Forum Discussion</h3>
               <div className={styles.forumItem}>
                  <MessageSquare size={16} color="var(--primary-color)" />
                  <p>Tips for the upcoming English Mid-term?</p>
                  <span>24 Replies</span>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
