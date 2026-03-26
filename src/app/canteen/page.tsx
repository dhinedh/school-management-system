import { 
  Coffee, 
  Plus, 
  Search, 
  Utensils, 
  Wallet, 
  History, 
  AlertCircle, 
  ShoppingCart,
  TrendingUp,
  ChevronRight
} from "lucide-react";
import styles from "./canteen.module.css";

export default function CanteenPage() {
  const menuItems = [
    { name: "Vegetable Pasta", category: "Lunch", price: "$4.50", status: "Available", stock: "High" },
    { name: "Chicken Teriyaki", category: "Lunch", price: "$6.00", status: "Out of Stock", stock: "None" },
    { name: "Fruit Salad", category: "Snacks", price: "$2.50", status: "Available", stock: "Medium" },
    { name: "Greek Yogurt", category: "Snacks", price: "$3.00", status: "Available", stock: "Low" },
  ];

  const recentOrders = [
    { student: "Alex Johnson", item: "Veg Pasta + Juice", amount: "$6.00", time: "12:45 PM", status: "Picked Up" },
    { student: "Maya Patel", item: "Fruit Salad", amount: "$2.50", time: "1:15 PM", status: "Processing" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Canteen Module</h1>
          <p className={styles.subtitle}>Manage school cafeteria menus, track student wallets, and monitor sales.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <ShoppingCart size={18} />
             <span>Pre-orders</span>
           </button>
           <button className="btn btn-secondary">
             <AlertCircle size={18} />
             <span>Manage Allergens</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Add Menu Item</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Daily Revenue</p>
           <p className={styles.statsValue}>$1,240</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Active Orders</p>
           <p className={styles.statsValue}>12</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Wallet Credits</p>
           <p className={styles.statsValue}>$8,450</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Items</p>
           <p className={styles.statsValue}>32</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.menuSection} card`}>
           <div className={styles.sectionHeader}>
              <h2>Canteen Menu</h2>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search food items..." />
              </div>
           </div>
           <div className={styles.menuList}>
              {menuItems.map((item, i) => (
                <div key={i} className={styles.menuItem}>
                   <div className={styles.itemIcon}>
                      <Coffee size={20} color="var(--primary-color)" />
                   </div>
                   <div className={styles.itemMain}>
                      <p className={styles.itemName}>{item.name}</p>
                      <p className={styles.itemMeta}>{item.category} • Price: {item.price}</p>
                   </div>
                   <div className={styles.itemStock}>
                      <span className={`${styles.stockBadge} ${styles[item.stock.toLowerCase().replace(' ', '')]}`}>
                         Stock: {item.stock}
                      </span>
                   </div>
                   <span className={`${styles.statusBadge} ${styles[item.status.toLowerCase().replace(' ', '')]}`}>
                      {item.status}
                   </span>
                   <ChevronRight size={18} color="#ccc" />
                </div>
              ))}
           </div>
        </section>

        <section className={styles.sidebarSection}>
            <div className={`${styles.ordersCard} card`}>
                <h3>Live Order Feed</h3>
                <div className={styles.orderList}>
                   {recentOrders.map((order, i) => (
                     <div key={i} className={styles.orderItem}>
                        <div className={styles.orderInfo}>
                           <p className={styles.orderStudent}>{order.student}</p>
                           <p className={styles.orderDetail}>{order.item} • {order.time}</p>
                        </div>
                        <span className={`${styles.orderStatus} ${styles[order.status.toLowerCase().replace(' ', '')]}`}>
                           {order.status}
                        </span>
                     </div>
                   ))}
                </div>
            </div>

            <div className={`${styles.walletCard} glass`}>
                <div className={styles.insightHeader}>
                   <Wallet size={18} color="var(--primary-color)" />
                   <span>Smart Wallet Analytics</span>
                </div>
                <p className={styles.insightText}>
                   Average student wallet balance is $24.50. 12 students need top-up reminders.
                </p>
                <button className={styles.insightBtn}>Send Reminders</button>
            </div>
        </section>
      </div>
    </div>
  );
}
