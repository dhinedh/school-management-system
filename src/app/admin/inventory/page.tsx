import { 
  Boxes, 
  Search, 
  Plus, 
  Download, 
  Eye, 
  AlertTriangle, 
  TrendingUp, 
  BarChart3, 
  Package, 
  RefreshCw,
  Zap,
  Cpu
} from "lucide-react";
import styles from "./inventory.module.css";

export default function SmartInventory() {
  const stockItems = [
    { name: "Science Lab: Beakers", level: "Low", stock: 12, usage: "+15% this mo", status: "Critical" },
    { name: "Classroom: Smart Stylus", level: "Healthy", stock: 42, usage: "Stable", status: "Active" },
    { name: "Sports: Footballs", level: "Optimal", stock: 24, usage: "-2% this mo", status: "Active" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Smart Inventory Intelligence</h1>
        <p className={styles.subtitle}>Real-time institutional asset tracking with AI-predictive maintenance.</p>
      </header>

      <section className={styles.topVitals}>
         <div className={styles.vitalGrid}>
            <div className="card">
               <div className={styles.vLine}>
                  <p>Total Asset Value</p>
                  <TrendingUp size={16} color="#10b981" />
               </div>
               <strong>$1.2M</strong>
            </div>
            <div className="card">
               <div className={styles.vLine}>
                  <p>Maintenance Alerts</p>
                  <AlertTriangle size={16} color="#ef4444" />
               </div>
               <strong>4 Critical</strong>
            </div>
            <div className="card">
               <div className={styles.vLine}>
                  <p>AI Restock Prediction</p>
                  <Zap size={16} color="#f59e0b" />
               </div>
               <strong>Active</strong>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.listSection}>
            <div className={styles.sectionHeader}>
               <h3>Asset Ledger</h3>
               <div className={styles.actions}>
                  <button className={styles.addBtn}><Plus size={16} /> New Asset</button>
               </div>
            </div>
            <div className={styles.stockList}>
               <div className={styles.tableHead}>
                  <span>Asset Name</span>
                  <span>Stock Hub</span>
                  <span>Usage Cycle</span>
                  <span>Status</span>
                  <span>Action</span>
               </div>
               {stockItems.map((item, i) => (
                  <div key={i} className={styles.row}>
                     <div className={styles.assetCol}>
                        <Package size={18} color="var(--primary-color)" />
                        <strong>{item.name}</strong>
                     </div>
                     <div className={styles.hubCol}>{item.level} ({item.stock})</div>
                     <div className={styles.usageCol}>{item.usage}</div>
                     <div className={styles.statusCol} style={{ color: item.status === 'Critical' ? '#ef4444' : '#10b981' }}>{item.status}</div>
                     <div className={styles.actionCol}>
                        <button><Eye size={16} /></button>
                        <button><RefreshCw size={16} /></button>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.predictionSection}>
            <div className={`${styles.aiCard} glass`}>
               <div className={styles.asstHeader}>
                  <Cpu size={20} color="var(--primary-color)" />
                  <h3>AI Stock Predictor</h3>
               </div>
               <p>Based on 'Final Exam' schedules, <strong>Science Lab supplies</strong> will run out by <strong>Oct 02</strong>. Reorder suggested today.</p>
               <button className={styles.orderBtn}>Procure Suggested</button>
            </div>
         </aside>
      </div>
    </div>
  );
}
