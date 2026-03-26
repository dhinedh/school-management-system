import { 
  Book, 
  Search, 
  Plus, 
  Filter, 
  BookCopy, 
  Clock, 
  AlertTriangle, 
  Download,
  Barcode,
  History,
  Settings2
} from "lucide-react";
import styles from "./library.module.css";

export default function LibraryPage() {
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", isbn: "978-0743273565", category: "Fiction", status: "Available", instances: 5 },
    { title: "Advanced Mathematics", author: "R.D. Sharma", isbn: "978-8178556334", category: "Academic", status: "Borrowed", instances: 0 },
    { title: "Brief History of Time", author: "Stephen Hawking", isbn: "978-0553380163", category: "Science", status: "Available", instances: 2 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", isbn: "978-0061120084", category: "Fiction", status: "Available", instances: 3 },
  ];

  const recentBorrows = [
    { student: "Alex Johnson", book: "The Great Gatsby", date: "Mar 12, 2024", due: "Mar 26, 2024", status: "On Time" },
    { student: "Maya Patel", book: "Brief History of Time", date: "Feb 28, 2024", due: "Mar 14, 2024", status: "Overdue" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Library Management</h1>
          <p className={styles.subtitle}>Manage book inventory, track borrowings, and handle overdue fines.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary">
             <Settings2 size={18} />
             <span>Issuance Rules</span>
           </button>
           <button className="btn btn-secondary">
             <Barcode size={18} />
             <span>Scan Barcode</span>
           </button>
           <button className="btn btn-primary">
             <Plus size={18} />
             <span>Add New Book</span>
           </button>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Total Books</p>
           <p className={styles.statsValue}>4,250</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Currently Borrowed</p>
           <p className={styles.statsValue}>342</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Overdue</p>
           <p className={styles.statsValue}>14</p>
        </div>
        <div className={`${styles.statsCard} card`}>
           <p className={styles.statsLabel}>Inventory Value</p>
           <p className={styles.statsValue}>$18,400</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.catalogSection} card`}>
          <div className={styles.tableHeader}>
            <h2>Book Catalog</h2>
            <div className={styles.search}>
               <Search size={16} />
               <input type="text" placeholder="Search by title, author, or ISBN..." />
            </div>
          </div>
          
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Book Details</th>
                <th>Category</th>
                <th>ISBN</th>
                <th>Stock</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, i) => (
                <tr key={i}>
                  <td>
                    <div className={styles.bookInfo}>
                       <div className={styles.bookCover}><Book size={18} /></div>
                       <div>
                          <p className={styles.bookTitle}>{book.title}</p>
                          <p className={styles.bookAuthor}>{book.author}</p>
                       </div>
                    </div>
                  </td>
                  <td>{book.category}</td>
                  <td><code className={styles.isbn}>{book.isbn}</code></td>
                  <td>{book.instances} units</td>
                  <td>
                    <span className={`${styles.statusBadge} ${styles[book.status.toLowerCase()]}`}>
                       {book.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.borrowBtn}>Issue</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <aside className={styles.sidebarSection}>
          <div className={`${styles.borrowCard} card`}>
             <div className={styles.sectionHeader}>
                <h3>Recently Borrowed</h3>
                <History size={18} color="var(--text-tertiary)" />
             </div>
             <div className={styles.borrowList}>
                {recentBorrows.map((item, i) => (
                  <div key={i} className={styles.borrowItem}>
                    <div className={styles.borrowMain}>
                       <p className={styles.borrowStudent}>{item.student}</p>
                       <p className={styles.borrowBook}>{item.book}</p>
                    </div>
                    <div className={styles.borrowMeta}>
                       <p className={styles.borrowDue}>Due: {item.due}</p>
                       <span className={`${styles.statusTag} ${styles[item.status.replace(' ', '').toLowerCase()]}`}>
                          {item.status}
                       </span>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          <div className={`${styles.aiInsights} glass`}>
             <div className={styles.insightHeader}>
                <AlertTriangle size={18} color="#f59e0b" />
                <span>Low Availability Alert</span>
             </div>
             <p className={styles.insightText}>
                "Physics Grade 11" is in high demand with 0 units available. 5 reservations pending.
             </p>
             <button className={styles.insightBtn}>Order More Units</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
