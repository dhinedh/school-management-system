import { AlertTriangle, TrendingDown, Clock, UserCheck, ArrowRight } from "lucide-react";
import styles from "./RiskAlert.module.css";

interface RiskAlertProps {
  studentName: string;
  reason: string;
  severity: 'high' | 'medium';
  trend: string;
}

export default function RiskAlertCard({ studentName, reason, severity, trend }: RiskAlertProps) {
  return (
    <div className={`${styles.riskCard} ${severity === 'high' ? styles.highRisk : styles.midRisk}`}>
      <div className={styles.alertHeader}>
        <div className={styles.iconBox}>
          <AlertTriangle size={20} />
        </div>
        <div className={styles.titleArea}>
          <h4>{studentName}</h4>
          <span className={styles.badge}>{severity.toUpperCase()} RISK</span>
        </div>
      </div>
      
      <p className={styles.reason}>{reason}</p>
      
      <div className={styles.meta}>
        <div className={styles.trend}>
          <TrendingDown size={14} />
          <span>{trend}</span>
        </div>
        <div className={styles.lastAction}>
          <Clock size={14} />
          <span>Last alert: 2h ago</span>
        </div>
      </div>

      <div className={styles.actions}>
        <button className={styles.primaryAction}>
          <UserCheck size={14} />
          <span>Intervene Now</span>
        </button>
        <button className={styles.secondaryAction}>
          View History <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}
