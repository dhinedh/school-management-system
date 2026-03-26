import { 
  Users2, 
  Search, 
  Plus, 
  Filter, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Calendar, 
  MoreVertical,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import styles from "./alumni.module.css";

export default function AlumniPage() {
  const alumni = [
    { name: "Jessica Stevens", batch: "2018", career: "Senior Engineer at Google", location: "San Francisco, CA", membership: "Gold", lastDonation: "$500" },
    { name: "Ahmed Khan", batch: "2020", career: "Medical Resident", location: "London, UK", membership: "Silver", lastDonation: "$100" },
    { name: "Li Wei", batch: "2015", career: "Architect", location: "Singapore", membership: "Platinum", lastDonation: "$1,200" },
    { name: "Sarah Connor", batch: "2019", career: "Data Scientist", location: "Austin, TX", membership: "Standard", lastDonation: "-" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Alumni Management Hub</h1>
          <p className={styles.subtitle}>Maintain relationships with graduates, track careers, and manage donations.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Heart size={18} />
             <span>Donation Program</span>
           </button>
           <button className="btn btn-primary">
             <Calendar size={18} />
             <span>Alumni Meet 2024</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Alumni</p>
           <p className={styles.statsValue}>2,840</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Employment Rate</p>
           <p className={styles.statsValue}>94.2%</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Annual Donations</p>
           <p className={styles.statsValue}>$42,500</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Events Planned</p>
           <p className={styles.statsValue}>4</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.alumniSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Alumni Directory</h2>
              <div className={styles.tableActions}>
                 <div className={styles.search}>
                    <Search size={16} />
                    <input type="text" placeholder="Search by name, batch, or company..." />
                 </div>
                 <button className={styles.filterBtn}><Filter size={18} /></button>
              </div>
           </div>
           
           <table className={styles.table}>
             <thead>
               <tr>
                 <th>Full Name</th>
                 <th>Batch & Career</th>
                 <th>Location</th>
                 <th>Membership</th>
                 <th>Recent Contribution</th>
                 <th></th>
               </tr>
             </thead>
             <tbody>
               {alumni.map((a, i) => (
                 <tr key={i}>
                   <td>{a.name}</td>
                   <td>
                      <p className={styles.batch}>Class of {a.batch}</p>
                      <p className={styles.career}>{a.career}</p>
                   </td>
                   <td>{a.location}</td>
                   <td>
                      <span className={`${styles.memberBadge} ${styles[a.membership.toLowerCase()]}`}>
                         {a.membership}
                      </span>
                   </td>
                   <td>{a.lastDonation}</td>
                   <td><button className={styles.moreBtn}><MoreVertical size={18} /></button></td>
                 </tr>
               ))}
             </tbody>
           </table>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.careerCard} glass`}>
               <h3>Career Destinations</h3>
               <div className={styles.destinationList}>
                  <div className={styles.destItem}>
                     <span>Technology</span>
                     <strong>32%</strong>
                  </div>
                  <div className={styles.destItem}>
                     <span>Medicine</span>
                     <strong>18%</strong>
                  </div>
                  <div className={styles.destItem}>
                     <span>Finance</span>
                     <strong>15%</strong>
                  </div>
               </div>
               <div className={styles.chartLink}>View Detailed Analytics <ChevronRight size={14} /></div>
            </div>

            <div className={`${styles.fundraiserCard} card`}>
               <h3>"Old Wing" Fundraiser</h3>
               <p>Renovating the historical wing libraries.</p>
               <div className={styles.progressContainer}>
                  <div className={styles.progressHeader}>
                     <span>65% Raised</span>
                     <span>$15,000 Goal</span>
                  </div>
                  <div className={styles.progressBar}>
                     <div className={styles.progressFill} style={{ width: '65%' }}></div>
                  </div>
               </div>
               <button className={styles.donateBtn}>Reach Out to Silver+ Members</button>
            </div>
        </aside>
      </div>
    </div>
  );
}
