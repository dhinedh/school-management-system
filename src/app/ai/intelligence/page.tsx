import { 
  BrainCircuit, 
  Target, 
  TrendingDown, 
  Mic, 
  MessageSquare, 
  AlertCircle, 
  ArrowRight,
  Sparkles,
  Zap,
  PieChart,
  UserCheck
} from "lucide-react";
import styles from "./intelligence.module.css";
import RiskAlertCard from "@/components/ai/RiskAlertCard";

export default function AIIntelligenceHub() {
  const riskStudents = [
    { name: "Maya Patel", reason: "3 Consecutive Monday Absences + 15% drop in Maths", severity: 'high', trend: "-12%" },
    { name: "Siddharth Rao", reason: "Multiple failing marks in Science subjects", severity: 'medium', trend: "-8%" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>AI Intelligence Hub 🧠</h1>
          <p className={styles.subtitle}>Institutional brain monitoring academic, behavioral, and financial vitals.</p>
        </div>
        <div className={styles.aiBadge}>
           <Sparkles size={16} />
           <span>AUTONOMOUS MODE ACTIVE</span>
        </div>
      </header>

      <div className={styles.grid}>
        <section className={styles.leftCol}>
           <div className={styles.sectionHeader}>
              <h2>Predictive Risk Center</h2>
              <span>Live Flagging</span>
           </div>
           <div className={styles.riskList}>
              {riskStudents.map((s, i) => (
                <RiskAlertCard key={i} studentName={s.name} reason={s.reason} severity={s.severity as any} trend={s.trend} />
              ))}
           </div>

           <div className={`${styles.insightCard} card`}>
              <div className={styles.insightHeader}>
                 <PieChart size={24} color="var(--primary-color)" />
                 <h3>ROI & Fee Prediction</h3>
              </div>
              <p>94% of Term Fees likely to be collected by EOP. <strong>8 parents</strong> flagged for proactive reminders.</p>
              <button className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Initiate Proactive Reminders</button>
           </div>
        </section>

        <section className={styles.rightCol}>
           <div className={`${styles.voiceHub} glass`}>
              <div className={styles.featureHeader}>
                 <Mic size={24} color="var(--primary-color)" />
                 <div>
                    <h3>Institutional Voice Control</h3>
                    <p>Simplified commands in Tamil & English.</p>
                 </div>
              </div>
              <div className={styles.micPulse}>
                 <div className={styles.pulseRing}></div>
                 <div className={styles.micIcon}><Mic color="white" /></div>
              </div>
              <div className={styles.transcript}>
                 <span>"Mark attendance for Grade 10A"</span>
              </div>
              <div className={styles.voiceExecution}>
                 <UserCheck size={16} />
                 <span>Action Executed: Attendance Logged.</span>
              </div>
           </div>

           <div className={`${styles.narrativeBox} card`}>
              <div className={styles.featureHeader}>
                 <MessageSquare size={24} color="var(--success)" />
                 <h3>AI Auto-Message & Narrative</h3>
              </div>
              <p>Generated <strong>142</strong> report card comments and <strong>58</strong> absent alerts today.</p>
              <div className={styles.snippet}>
                 <strong>Sample Comment:</strong>
                 <p>"Maya shows mixed results. Focus is required in Maths... erratic attendance patterns are affecting engagement."</p>
              </div>
              <button className="btn btn-secondary" style={{ width: '100%' }}>Manage AI Templates</button>
           </div>
        </section>
      </div>
    </div>
  );
}
