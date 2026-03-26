import { 
  Wallet, 
  History, 
  ArrowUpRight, 
  ArrowDownLeft, 
  Plus, 
  Pizza, 
  Coffee, 
  ShoppingCart,
  Zap,
  ShieldCheck,
  AlertCircle
} from "lucide-react";
import styles from "./wallet.module.css";

export default function CanteenWallet() {
  const transactions = [
    { title: "Lunch: Chicken Pasta", amount: "-$4.50", date: "Today, 12:45 PM", type: "Food" },
    { title: "Snack: Fruit Salad", amount: "-$2.00", date: "Today, 10:30 AM", type: "Food" },
    { title: "Wallet Auto-Topup", amount: "+$20.00", date: "Yesterday, 09:00 AM", type: "Credit" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Canteen Wallet</h1>
        <p className={styles.subtitle}>Institutional digital currency for Alex's daily spends.</p>
      </header>

      <div className={styles.heroSection}>
         <div className={styles.balanceCard}>
            <div className={styles.cardMain}>
               <div className={styles.balanceInfo}>
                  <span>Current Balance</span>
                  <h2>$42.50</h2>
               </div>
               <button className={styles.addBtn}><Plus size={18} /> Add Money</button>
            </div>
            <div className={styles.cardFooter}>
               <div className={styles.autoTop}>
                  <ShieldCheck size={16} />
                  <span>Auto-topup active below $10.00</span>
               </div>
            </div>
         </div>
      </div>

      <div className={styles.mainGrid}>
         <section className={styles.historySection}>
            <h3 className={styles.sectionTitle}>Recent Spending</h3>
            <div className={styles.txList}>
               {transactions.map((tx, i) => (
                  <div key={i} className={`${styles.txItem} card`}>
                     <div className={styles.txIcon}>
                        {tx.type === 'Food' ? <Pizza size={18} /> : <Zap size={18} />}
                     </div>
                     <div className={styles.txInfo}>
                        <strong>{tx.title}</strong>
                        <span>{tx.date}</span>
                     </div>
                     <div className={`${styles.txAmount} ${tx.amount.startsWith('+') ? styles.credit : styles.debit}`}>
                        {tx.amount}
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.controlsSection}>
            <div className="card">
               <h3 className={styles.sideTitle}><Zap size={18} /> Spend AI Controls</h3>
               <div className={styles.controlItem}>
                  <div className={styles.ctrlLabel}>
                     <strong>Daily Limit</strong>
                     <p>Maximum daily canteen spend</p>
                  </div>
                  <span className={styles.ctrlValue}>$10.00</span>
               </div>
               <div className={styles.controlItem}>
                  <div className={styles.ctrlLabel}>
                     <strong>Dietary Restriction</strong>
                     <p>Blocked items: Sugary drinks</p>
                  </div>
                  <button className={styles.editBtn}>Edit</button>
               </div>
            </div>

            <div className={`${styles.alertsCard} glass`}>
               <div className={styles.alertHeader}>
                  <AlertCircle size={18} color="#f59e0b" />
                  <span>Recent Anomaly Flag</span>
               </div>
               <p>Unusual duplicate purchase attempt blocked for Alex at 12:46 PM.</p>
            </div>
         </aside>
      </div>
    </div>
  );
}
