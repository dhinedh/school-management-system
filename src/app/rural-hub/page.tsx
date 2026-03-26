"use client"; // Marked as client component to handle localization hooks
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  Smartphone, 
  Printer, 
  WifiOff, 
  Globe, 
  LayoutGrid,
  ClipboardCheck,
  PhoneIncoming,
  Zap,
  ArrowRight
} from "lucide-react";
import styles from "./rural-hub.module.css";
import { useLocalization } from "@/hooks/useLocalization";

export default function RuralHub() {
  const { t, lang, toggleLanguage } = useLocalization();

  const primaryActions = [
    { name: t('attendance'), icon: ClipboardCheck, color: "var(--primary-color)", sub: "Quick Mark" },
    { name: t('marks'), icon: BookOpen, color: "var(--success)", sub: "Excel Upload" },
    { name: t('fees'), icon: DollarSign, color: "var(--warning)", sub: "Cash Receipt" },
    { name: "Bulk Print", icon: Printer, color: "var(--text-primary)", sub: "Reports/ID" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>{t('rural_hub')} 🏠</h1>
          <p className={styles.subtitle}>Institutional control for low-internet & low-end systems.</p>
        </div>
        <div className={styles.headerActions}>
           <button className={styles.langBtn} onClick={toggleLanguage}>
              <Globe size={18} />
              <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
           </button>
           <div className={styles.syncTag}>
              <WifiOff size={16} />
              <span>{t('low_internet')}</span>
           </div>
        </div>
      </header>

      <div className={styles.actionGrid}>
        {primaryActions.map((action, i) => (
          <button key={i} className={styles.actionCard} style={{ '--hover-color': action.color } as any}>
            <div className={styles.iconCircle} style={{ background: action.color }}>
               <action.icon size={32} color="white" />
            </div>
            <div className={styles.cardText}>
               <h3>{action.name}</h3>
               <span>{action.sub}</span>
            </div>
            <ArrowRight className={styles.arrow} />
          </button>
        ))}
      </div>

      <div className={styles.ruralFeatures}>
        <section className={`${styles.missedCall} glass`}>
           <div className={styles.featureHeader}>
              <PhoneIncoming size={24} color="var(--primary-color)" />
              <h3>Missed Call Info System</h3>
           </div>
           <p>Parents can give a missed call to <strong>+91 800-SMART-OS</strong> to receive an automated SMS of their child's attendance & marks.</p>
           <div className={styles.featureStats}>
              <strong>124</strong>
              <span>Requests Today</span>
           </div>
        </section>

        <section className={`${styles.printSection} card`}>
           <div className={styles.featureHeader}>
              <Zap size={24} color="var(--warning)" />
              <h3>One-Click School Summary</h3>
           </div>
           <p>Generate a 2-page summary of today's events, absentees, and fee reminders for the physical notice board.</p>
           <button className="btn btn-primary" style={{ marginTop: '1rem' }}>Generate & Print Summary</button>
        </section>
      </div>

      <footer className={styles.footer}>
         <div className={styles.hardwareInfo}>
            <LayoutGrid size={16} />
            <span>Optimization: Low Resource Mode (Legacy Hardware Support)</span>
         </div>
         <div className={styles.version}>SmartOS vRural-1.0</div>
      </footer>
    </div>
  );
}
