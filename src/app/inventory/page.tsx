import { 
  Package, 
  Search, 
  Plus, 
  Truck, 
  Wrench, 
  AlertTriangle, 
  BarChart3, 
  History,
  ClipboardList,
  ChevronRight
} from "lucide-react";
import styles from "./inventory.module.css";

export default function InventoryPage() {
  const assets = [
    { name: "Projectors - Epson EB", category: "Electronics", stock: 12, value: "$8,400", status: "In Use" },
    { name: "Science Lab Flasks", category: "Lab Equipment", stock: 45, value: "$1,200", status: "Stocked" },
    { name: "Office Desk Chairs", category: "Furniture", stock: 120, value: "$12,000", status: "In Use" },
    { name: "Chemistry Reagents", category: "Consumables", stock: 8, value: "$600", status: "Low Stock" },
  ];

  const maintenance = [
    { asset: "Bus 01", task: "Engine Service", date: "Mar 20, 2024", priority: "High" },
    { asset: "AC - Staff Room", task: "Filter Cleaning", date: "Mar 22, 2024", priority: "Medium" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Inventory & Asset Management</h1>
          <p className={styles.subtitle}>Track school property, manage consumables, and schedule maintenance.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Wrench size={18} />
             <span>Maintenance</span>
           </button>
           <button className="btn btn-secondary">
             <Truck size={18} />
             <span>Suppliers</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Add Asset</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Asset Value</p>
           <p className={styles.statsValue}>$142,800</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Active Items</p>
           <p className={styles.statsValue}>3,450</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Critical Maintenance</p>
           <p className={styles.statsValue}>3</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Low Stock Alerts</p>
           <p className={styles.statsValue}>8</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.inventoryTable} card`}>
          <div className={styles.tableHeader}>
            <h2>Asset Register</h2>
            <div className={styles.search}>
               <Search size={16} />
               <input type="text" placeholder="Search assets..." />
            </div>
          </div>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Category</th>
                <th>Qty</th>
                <th>Total Value</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset, i) => (
                <tr key={i}>
                  <td>
                    <div className={styles.assetInfo}>
                       <div className={styles.assetIcon}><Package size={18} /></div>
                       <span className={styles.assetName}>{asset.name}</span>
                    </div>
                  </td>
                  <td>{asset.category}</td>
                  <td>{asset.stock}</td>
                  <td>{asset.value}</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[asset.status.replace(' ', '').toLowerCase()]}`}>
                      {asset.status}
                    </span>
                  </td>
                  <td><button className={styles.detailsBtn}>View</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={styles.sidebarSection}>
            <div className={`${styles.maintenanceCard} card`}>
                <div className={styles.sectionHeader}>
                   <h3>Maintenance Schedule</h3>
                   <button className={styles.viewAllBtn}>Schedule</button>
                </div>
                <div className={styles.mList}>
                   {maintenance.map((m, i) => (
                     <div key={i} className={styles.mItem}>
                        <div className={styles.mInfo}>
                           <p className={styles.mTitle}>{m.task}</p>
                           <p className={styles.mAsset}>{m.asset} • {m.date}</p>
                        </div>
                        <span className={`${styles.priorityTag} ${styles[m.priority.toLowerCase()]}`}>
                           {m.priority}
                        </span>
                     </div>
                   ))}
                </div>
            </div>

            <div className={`${styles.stockAlerts} glass`}>
               <div className={styles.insightHeader}>
                  <AlertTriangle size={18} color="#ef4444" />
                  <span>Restock Required</span>
               </div>
               <p className={styles.insightText}>
                 "A4 Printing Paper" is below threshold (2 reams left). Automating purchase order?
               </p>
               <button className={styles.insightBtn}>Approve PO</button>
            </div>
        </section>
      </div>
    </div>
  );
}
