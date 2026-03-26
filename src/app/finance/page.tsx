import { 
  DollarSign, 
  FileText, 
  CreditCard, 
  TrendingUp, 
  Plus, 
  Download, 
  Search, 
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Bell,
  Award
} from "lucide-react";
import styles from "./finance.module.css";
import { mockStudents } from "@/lib/mock-students";

export default function FinancePage() {
  const transactions = [
    { student: "Alex Johnson", id: "INV-2024-001", amount: "$1,200", date: "Mar 15, 2024", type: "Tuition", status: "Paid" },
    { student: "Maya Patel", id: "INV-2024-002", amount: "$850", date: "Mar 14, 2024", type: "Transport", status: "Pending" },
    { student: "Chris Evans", id: "INV-2024-003", amount: "$2,400", date: "Mar 12, 2024", type: "Tuition", status: "Paid" },
    { student: "Sofia Rodriguez", id: "INV-2024-004", amount: "$150", date: "Mar 10, 2024", type: "Activity", status: "Overdue" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Fee & Finance</h1>
          <p className={styles.subtitle}>Monitor fee collections, manage invoices, and track school expenses.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Award size={18} />
             <span>Scholarships</span>
           </button>
           <button className="btn btn-secondary">
             <FileText size={18} />
             <span>Expense Tracker</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>New Invoice</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <div className={styles.statsHeader}>
              <div className={styles.iconBox} style={{ background: '#e0e7ff', color: '#4338ca' }}>
                 <DollarSign size={24} />
              </div>
              <span className={styles.growth}><ArrowUpRight size={16} /> 12%</span>
           </div>
           <p className={styles.statsValue}>$142,500</p>
           <p className={styles.statsLabel}>Total Revenue (MTD)</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <div className={styles.statsHeader}>
              <div className={styles.iconBox} style={{ background: '#fef3c7', color: '#b45309' }}>
                 <Clock size={24} />
              </div>
           </div>
           <p className={styles.statsValue}>$12,840</p>
           <p className={styles.statsLabel}>Pending Fees</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <div className={styles.statsHeader}>
              <div className={styles.iconBox} style={{ background: '#fee2e2', color: '#b91c1c' }}>
                 <ArrowDownRight size={24} />
              </div>
           </div>
           <p className={styles.statsValue}>$3,200</p>
           <p className={styles.statsLabel}>Overdue Amount</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.transactionsTable} card`}>
          <div className={styles.tableHeader}>
            <h2>Recent Transactions</h2>
            <div className={styles.tableActions}>
               <div className={styles.search}>
                  <Search size={16} />
                  <input type="text" placeholder="Search invoices..." />
               </div>
               <button className={styles.filterBtn}><Filter size={18} /></button>
            </div>
          </div>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Invoice ID</th>
                <th>Student</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, i) => (
                <tr key={i}>
                  <td><code className={styles.invId}>{tx.id}</code></td>
                  <td><span className={styles.studentName}>{tx.student}</span></td>
                  <td>{tx.type}</td>
                  <td><span className={styles.amount}>{tx.amount}</span></td>
                  <td>{tx.date}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[tx.status.toLowerCase()]}`}>
                      {tx.status}
                    </span>
                  </td>
                  <td><button className={styles.moreBtn}>Receipt</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={`${styles.paymentSection} glass`}>
            <h3>AI Revenue Prediction</h3>
            <p className={styles.aiDesc}>Based on historical patterns, we expect 92% collection by end of term.</p>
            <div className={styles.predictionBar}>
                <div className={styles.predictFill} style={{ width: '92%' }}></div>
            </div>
            
            <div className={styles.remindersBox}>
                <h4>Auto-Reminders</h4>
                <div className={styles.reminderItem}>
                    <Bell size={16} color="#ef4444" />
                    <span>8 Overdue alerts sent today</span>
                </div>
                <button className={styles.manageAlerts}>Manage Templates</button>
            </div>
        </section>
      </div>
    </div>
  );
}
