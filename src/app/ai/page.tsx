import { 
  BrainCircuit, 
  Target, 
  LineChart, 
  MessageCircle, 
  ShieldCheck, 
  GraduationCap, 
  HeartPulse, 
  Calendar, 
  FileSearch, 
  Lightbulb, 
  Bot,
  Zap,
  ChevronRight,
  AlertTriangle
} from "lucide-react";
import styles from "./ai.module.css";

export default function AIHubPage() {
  const aiModules = [
    { title: "Dropout Risk Predictor", icon: <Target />, desc: "Identifies students at risk based on attendance and grades.", status: "Active", link: "/ai/dropout-risk" },
    { title: "Automated Essay Grader", icon: <FileSearch />, desc: "AI-driven grading for descriptive answers and essays.", status: "Active", link: "/ai/essay-grader" },
    { title: "Personalized Learning", icon: <BrainCircuit />, desc: "Tailors curriculum paths based on student performance.", status: "Beta", link: "/ai/personalized-learning" },
    { title: "Smart Timetable Gen", icon: <Calendar />, desc: "Optimizes class schedules with zero conflicts.", status: "Active", link: "/ai/timetable-gen" },
    { title: "Behavioral Pattern AI", icon: <Zap />, desc: "Analyzes social and behavioral data for early intervention.", status: "In Training", link: "/ai/behavior-ai" },
    { title: "Fee Collection Predictor", icon: <LineChart />, desc: "Forecasts revenue and identifies payment delays.", status: "Active", link: "/ai/fee-predictor" },
    { title: "Sentiment Analyzer", icon: <MessageCircle />, desc: "Analyzes parent communication for satisfaction levels.", status: "Active", link: "/ai/sentiment" },
    { title: "Teacher Content Rec", icon: <Lightbulb />, desc: "Suggests teaching materials based on class needs.", status: "Active", link: "/ai/content-rec" },
    { title: "Wellness Monitor", icon: <HeartPulse />, desc: "Tracks student mental and physical health indicators.", status: "Beta", link: "/ai/wellness" },
    { title: "Career Path Predictor", icon: <GraduationCap />, desc: "Predicts ideal careers based on academic strengths.", status: "In Training", link: "/ai/career-predict" },
    { title: "Auto Exam Proctor", icon: <ShieldCheck />, desc: "AI monitoring for online assessments.", status: "Active", link: "/ai/proctor" },
    { title: "Smart Query Bot", icon: <Bot />, desc: "24/7 intelligent answering for parents and students.", status: "Active", link: "/ai/query-bot" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
           <div className={styles.aiBadge}>SMS PRO AI ENGINE</div>
           <h1 className={styles.title}>AI Global Hub</h1>
           <p className={styles.subtitle}>Unified interface for 12 enterprise AI modules transforming school operations.</p>
        </div>
        <div className={styles.systemStatus}>
           <div className={styles.statusItem}>
              <span>Engine Status</span>
              <strong>OPTIMAL</strong>
           </div>
           <div className={styles.statusItem}>
              <span>Active Models</span>
              <strong>12 / 12</strong>
           </div>
        </div>
      </header>

      <section className={styles.aiGrid}>
        {aiModules.map((mod, i) => (
          <div key={i} className={`${styles.aiCard} card`}>
             <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{mod.icon}</div>
                <span className={`${styles.statusBadge} ${styles[mod.status.toLowerCase().replace(' ', '')]}`}>
                   {mod.status}
                </span>
             </div>
             <h2 className={styles.cardTitle}>{mod.title}</h2>
             <p className={styles.cardDesc}>{mod.desc}</p>
             <button className={styles.launchBtn}>
                <span>Configure & Launch</span>
                <ChevronRight size={16} />
             </button>
          </div>
        ))}
      </section>

      <section className={`${styles.riskAlerts} glass`}>
         <div className={styles.alertHeader}>
            <AlertTriangle size={20} color="#ef4444" />
            <h3>Urgent AI Interventions Required</h3>
         </div>
         <div className={styles.alertList}>
            <div className={styles.alertItem}>
               <p><strong>Dropout Risk:</strong> 3 students in Grade 10A show &gt;75% risk due to sudden attendance drop.</p>
               <button className={styles.actionBtn}>View Detailed Analysis</button>
            </div>
         </div>
      </section>
    </div>
  );
}
