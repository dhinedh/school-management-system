import { 
  Bookmark, 
  Search, 
  Download, 
  Eye, 
  Plus, 
  Folder, 
  FileText, 
  Users,
  Star,
  Share2
} from "lucide-react";
import styles from "./resources.module.css";

export default function FacultyResourceLibrary() {
  const categories = [
    { name: "Lesson Materials", count: 124, icon: FileText },
    { name: "Rubrics & Grading", count: 42, icon: Folder },
    { name: "Video Modules", count: 15, icon: Bookmark },
  ];

  const recentResources = [
    { title: "Quantum Physics Introduction", author: "Dr. Robert King", rating: 4.8, downloads: 120 },
    { title: "Calculus Visual Proofs", author: "Mrs. Sarah White", rating: 4.9, downloads: 85 },
    { title: "English Poetry Guide", author: "Ms. Elena Rose", rating: 4.5, downloads: 60 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Faculty Resource Library</h1>
        <p className={styles.subtitle}>Collaborative repository for high-impact teaching materials.</p>
      </header>

      <section className={styles.searchBar}>
         <div className={styles.searchWrapper}>
            <Search size={20} className={styles.searchIcon} />
            <input type="text" placeholder="Search resources, authors or categories..." />
         </div>
         <button className={styles.uploadBtn}><Plus size={18} /> Upload Resource</button>
      </section>

      <div className={styles.mainGrid}>
         <div className={styles.leftCol}>
            <section className={styles.catGrid}>
               {categories.map((cat, i) => (
                  <div key={i} className={`${styles.catCard} card`}>
                     <cat.icon size={24} color="var(--primary-color)" />
                     <strong>{cat.name}</strong>
                     <span>{cat.count} Files</span>
                  </div>
               ))}
            </section>

            <section className={styles.listSection}>
               <h3 className={styles.sectionTitle}>High Impact Resources</h3>
               <div className={styles.resourceList}>
                  {recentResources.map((res, i) => (
                     <div key={i} className={`${styles.resourceItem} card`}>
                        <div className={styles.resInfo}>
                           <strong>{res.title}</strong>
                           <p>By {res.author}</p>
                        </div>
                        <div className={styles.resStats}>
                           <div className={styles.stat}>
                              <Star size={14} color="#f59e0b" fill="#f59e0b" />
                              <span>{res.rating}</span>
                           </div>
                           <div className={styles.stat}>
                              <Download size={14} />
                              <span>{res.downloads}</span>
                           </div>
                        </div>
                        <div className={styles.resActions}>
                           <button title="View"><Eye size={16} /></button>
                           <button title="Download"><Download size={16} /></button>
                           <button title="Share"><Share2 size={16} /></button>
                        </div>
                     </div>
                  ))}
               </div>
            </section>
         </div>

         <aside className={styles.rightCol}>
            <div className="card">
               <h3 className={styles.sideTitle}><Users size={18} /> Top Contributors</h3>
               <div className={styles.contributorList}>
                  <div className={styles.contItem}>
                     <strong>Mrs. Sarah White</strong>
                     <span>42 Shares</span>
                  </div>
                  <div className={styles.contItem}>
                     <strong>Dr. Robert King</strong>
                     <span>38 Shares</span>
                  </div>
               </div>
               <button className={styles.rankBtn}>View Rankings</button>
            </div>

            <div className={`${styles.collaborationTip} glass`}>
               <h3>Why Share?</h3>
               <p>Sharing high-quality resources improves institutional benchmarks and earns faculty "Innovation Credits".</p>
            </div>
         </aside>
      </div>
    </div>
  );
}
