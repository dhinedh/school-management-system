import { 
  Trophy, 
  Award, 
  Star, 
  Flame, 
  Shield, 
  Gift,
  Target,
  Zap,
  TrendingUp,
  Crown
} from "lucide-react";
import styles from "./rewards.module.css";

export default function RewardsHub() {
  const badges = [
    { title: "Mathlete Elite", icon: "🏆", date: "Oct 1, 2024", points: "+500 XP", desc: "Top 1% in Advanced Calculus" },
    { title: "Perfect Monthly Attendance", icon: "📅", date: "Sep 30, 2024", points: "+200 XP", desc: "100% attendance in September" },
    { title: "AI Explorer", icon: "🤖", date: "Sep 15, 2024", points: "+150 XP", desc: "Mastered 5 AI learning modules" },
    { title: "Social Warrior", icon: "🤝", date: "Sep 10, 2024", points: "+100 XP", desc: "Initiated a peer study group" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Rewards & Achievements</h1>
        <p className={styles.subtitle}>Celebrate your milestones and redeem your hard-earned talent points.</p>
      </header>

      <section className={styles.heroSection}>
         <div className={styles.pointCard}>
            <div className={styles.rankInfo}>
               <Crown size={32} color="#f59e0b" />
               <h2>1,240 <span className={styles.xp}>XP</span></h2>
               <p>Gold Rank • Global Top 10%</p>
            </div>
            <div className={styles.nextLevel}>
               <p>Next Rank: Platinum (1,500 XP)</p>
               <div className={styles.progress}>
                  <div className={styles.fill} style={{ width: '80%' }}></div>
               </div>
            </div>
         </div>
      </section>

      <div className={styles.mainGrid}>
         <section className={styles.badgesSection}>
            <h3 className={styles.sectionTitle}>My Badge Collection</h3>
            <div className={styles.badgeGrid}>
               {badges.map((b, i) => (
                  <div key={i} className={`${styles.badgeCard} card`}>
                     <div className={styles.badgeIcon}>{b.icon}</div>
                     <div className={styles.badgeInfo}>
                        <h4>{b.title}</h4>
                        <p>{b.desc}</p>
                        <span className={styles.points}>{b.points}</span>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         <aside className={styles.redeemSection}>
            <div className="card">
               <h3 className={styles.sideTitle}><Gift size={18} /> Points Store</h3>
               <div className={styles.storeItems}>
                  <div className={styles.storeItem}>
                     <p>Canteen Voucher ($5)</p>
                     <button className={styles.redeemBtn}>200 XP</button>
                  </div>
                  <div className={styles.storeItem}>
                     <p>Library Fee Waiver</p>
                     <button className={styles.redeemBtn}>150 XP</button>
                  </div>
                  <div className={styles.storeItem}>
                     <p>Premium AI Buddy Pro</p>
                     <button className={styles.redeemBtn}>500 XP</button>
                  </div>
               </div>
            </div>

            <div className={`${styles.leaderboard} glass`}>
               <h3 className={styles.sideTitle}><Trophy size={18} /> Global Leaderboard</h3>
               <div className={styles.leaderList}>
                  <div className={styles.leaderItem}>
                     <span className={styles.rank}>1</span>
                     <strong>Maya Patel</strong>
                     <span>2,450 XP</span>
                  </div>
                  <div className={styles.leaderItem}>
                     <span className={styles.rank}>2</span>
                     <strong>Chris Evans</strong>
                     <span>2,100 XP</span>
                  </div>
                  <div className={`${styles.leaderItem} ${styles.current}`}>
                     <span className={styles.rank}>14</span>
                     <strong>You</strong>
                     <span>1,240 XP</span>
                  </div>
               </div>
            </div>
         </aside>
      </div>
    </div>
  );
}
