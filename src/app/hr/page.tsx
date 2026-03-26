import { 
  Users, 
  UserPlus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone,
  Briefcase,
  Calendar,
  ChevronRight,
  CreditCard
} from "lucide-react";
import styles from "./hr.module.css";

export default function HRPage() {
  const staff = [
    { name: "Dr. Robert Smith", role: "Principal", dept: "Administration", status: "Active", joinDate: "2018-06-01", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert" },
    { name: "Sarah Williams", role: "Mathematics Teacher", dept: "Academic", status: "Active", joinDate: "2020-08-15", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah" },
    { name: "James Brown", role: "Librarian", dept: "Logistics", status: "On Leave", joinDate: "2019-02-10", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
    { name: "Emily Davis", role: "HR Manager", dept: "Administration", status: "Active", joinDate: "2021-01-05", photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>HR & Staff Management</h1>
          <p className={styles.subtitle}>Manage employee records, departments, and payroll.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Briefcase size={18} />
             <span>Recruitment</span>
           </button>
           <button className="btn btn-secondary">
             <CreditCard size={18} />
             <span>Payroll</span>
           </button>
           <button className="btn btn-primary">
             <UserPlus size={18} />
             <span>Add Staff</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Staff</p>
           <p className={styles.statsValue}>84</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Academic</p>
           <p className={styles.statsValue}>56</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Non-Academic</p>
           <p className={styles.statsValue}>28</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>On Leave</p>
           <p className={styles.statsValue}>3</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.staffDirectory} card`}>
          <div className={styles.tableHeader}>
            <h2>Staff Directory</h2>
            <div className={styles.search}>
               <Search size={16} />
               <input type="text" placeholder="Search by name or role..." />
            </div>
          </div>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Staff Member</th>
                <th>Department</th>
                <th>Role</th>
                <th>Join Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {staff.map((member, i) => (
                <tr key={i}>
                  <td>
                    <div className={styles.staffInfo}>
                       <img src={member.photo} alt={member.name} className={styles.avatar} />
                       <div>
                          <p className={styles.name}>{member.name}</p>
                          <p className={styles.email}>{member.name.toLowerCase().replace(' ', '.').replace('dr.', '')}@school.edu</p>
                       </div>
                    </div>
                  </td>
                  <td>{member.dept}</td>
                  <td>{member.role}</td>
                  <td>{member.joinDate}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[member.status.replace(' ', '').toLowerCase()]}`}>
                       {member.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.moreBtn}><MoreVertical size={18} /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={`${styles.leaveSection} glass`}>
            <h3>Leave Requests</h3>
            <div className={styles.leaveList}>
                <div className={styles.leaveItem}>
                    <div className={styles.leaveInfo}>
                        <p className={styles.leaveRequester}>Sarah Williams</p>
                        <p className={styles.leaveType}>Sick Leave • 2 Days</p>
                    </div>
                    <div className={styles.leaveActions}>
                        <button className={styles.approveBtn}>Approve</button>
                        <button className={styles.rejectBtn}>Reject</button>
                    </div>
                </div>
                <div className={styles.leaveItem}>
                    <div className={styles.leaveInfo}>
                        <p className={styles.leaveRequester}>James Brown</p>
                        <p className={styles.leaveType}>Personal • Mar 18-20</p>
                    </div>
                    <span className={styles.pendingBadge}>Pending HR</span>
                </div>
            </div>
            
            <div className={styles.appraisalCard}>
                <h4>Performance Review</h4>
                <p>Q1 Appraisals are due by Mar 31.</p>
                <div className={styles.progressBar}>
                    <div className={styles.progressFill} style={{ width: '65%' }}></div>
                </div>
                <p className={styles.progressText}>65% Completed</p>
            </div>
        </section>
      </div>
    </div>
  );
}
