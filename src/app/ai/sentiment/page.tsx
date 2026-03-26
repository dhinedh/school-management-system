import { 
  MessageCircle, 
  Smile, 
  Meh, 
  Frown, 
  TrendingUp, 
  TrendingDown, 
  Search, 
  Filter, 
  Mail, 
  PhoneCall,
  ChevronRight,
  BarChart3
} from "lucide-react";
import styles from "./sentiment.module.css";

export default function SentimentPage() {
  const communications = [
    { parent: "Mrs. Sarah Jenkins", channel: "Email", message: "Very happy with the recent sports day organization!", sentiment: "Positive", score: 0.92 },
    { parent: "Mr. David Wilson", channel: "Portal", message: "Concerned about the math homework load this week.", sentiment: "Neutral", score: 0.55 },
    { parent: "Anonymous Parent", channel: "Survey", message: "Bus service is consistently 20 mins late.", sentiment: "Negative", score: 0.12 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerMain}>
           <div className={styles.iconBox}><MessageCircle size={32} /></div>
           <div>
              <h1 className={styles.title}>AI Parent Sentiment Analyzer</h1>
              <p className={styles.subtitle}>NLP analysis of all incoming communication to detect satisfaction trends.</p>
           </div>
        </div>
        <button className="btn btn-secondary">
           <BarChart3 size={18} />
           <span>Weekly Report</span>
        </button>
      </header>

      <section className={styles.statsRow}>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Avg. Satisfaction</p>
            <div className={styles.satisfactionBox}>
               <Smile size={24} color="#10b981" />
               <p className={styles.statsValue}>82%</p>
            </div>
         </div>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Sentiment Trend</p>
            <div className={styles.trendBox}>
               <TrendingUp size={24} color="#10b981" />
               <p className={styles.statsValue}>+4.8%</p>
            </div>
         </div>
         <div className={`${styles.statsCard} card`}>
            <p className={styles.statsLabel}>Response Velocity</p>
            <p className={styles.statsValue}>1.2h Ar</p>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={`${styles.commSection} card`}>
            <div className={styles.sectionHeader}>
               <h2>Recent Parent Feedback</h2>
               <div className={styles.search}>
                  <Search size={16} />
                  <input type="text" placeholder="Search by name..." />
               </div>
            </div>
            <div className={styles.commList}>
               {communications.map((comm, i) => (
                 <div key={i} className={styles.commItem}>
                    <div className={styles.commMain}>
                       <div className={styles.commHeader}>
                          <strong>{comm.parent}</strong>
                          <span className={styles.channel}>{comm.channel}</span>
                       </div>
                       <p className={styles.message}>"{comm.message}"</p>
                    </div>
                    <div className={styles.sentimentSection}>
                       {comm.sentiment === 'Positive' && <Smile size={20} color="#10b981" />}
                       {comm.sentiment === 'Neutral' && <Meh size={20} color="#f59e0b" />}
                       {comm.sentiment === 'Negative' && <Frown size={20} color="#ef4444" />}
                       <span className={`${styles.sentimentBadge} ${styles[comm.sentiment.toLowerCase()]}`}>
                          {comm.sentiment}
                       </span>
                    </div>
                    <button className={styles.replyBtn}>Fast Reply</button>
                 </div>
               ))}
            </div>
         </section>

         <aside className={styles.sidebarSection}>
            <div className={`${styles.topicCard} glass`}>
               <h3>Trending Topics</h3>
               <div className={styles.topicList}>
                  <div className={styles.topicItem}>
                     <span>Sports Day</span>
                     <div className={styles.topicBar}><div className={styles.fill} style={{ width: '90%', background: '#10b981' }}></div></div>
                  </div>
                  <div className={styles.topicItem}>
                     <span>Math Homework</span>
                     <div className={styles.topicBar}><div className={styles.fill} style={{ width: '45%', background: '#f59e0b' }}></div></div>
                  </div>
                  <div className={styles.topicItem}>
                     <span>Bus Service</span>
                     <div className={styles.topicBar}><div className={styles.fill} style={{ width: '20%', background: '#ef4444' }}></div></div>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
