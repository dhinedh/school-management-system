"use client";

import {
  Users,
  Search,
  Calendar,
  CheckCircle2,
  XCircle,
  Clock,
  QrCode,
  Scan,
  MessageSquare,
  PhoneCall,
  AlertTriangle,
  ArrowRight,
  Sparkles
} from "lucide-react";
import styles from "./attendance.module.css";

export default function AttendancePage() {
  const stats = [
    { label: "Present Today", value: "942", sub: "92%", color: "var(--success)" },
    { label: "Absent Today", value: "82", sub: "-3% from avg", color: "var(--danger)" },
    { label: "Late Arrivals", value: "15", sub: "Flagged", color: "var(--warning)" },
  ];

  const recentAbsences = [
    { name: "Maya Patel", class: "10A", parent: "Velmurugan", contact: "SMS/IVR", status: "Alert Sent" },
    { name: "Rahul Khanna", class: "9B", parent: "Aditi Singh", contact: "WhatsApp", status: "Delivered" },
    { name: "Siddharth Rao", class: "12C", parent: "K. Rao", contact: "WhatsApp", status: "Read" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Smart Attendance Hub</h1>
          <p className={styles.subtitle}>Unified tracking via Manual, QR, and AI-Face recognition.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary" style={{ borderColor: 'var(--success)', color: 'var(--success)' }} onClick={() => alert('Rural Mode: All 32 students marked PRESENT. Tap absentees to toggle.')}>
              <CheckCircle2 size={18} />
              <span>Mark All Present</span>
           </button>
           <button className="btn btn-secondary"><QrCode size={18} /> QR Terminal</button>
           <button className="btn btn-primary"><Scan size={18} /> AI Face Scan</button>
        </div>
      </header>

      <div className={styles.statsGrid}>
        {stats.map((s, i) => (
          <div key={i} className="card">
            <span className={styles.statLabel}>{s.label}</span>
            <div className={styles.statValueRow}>
              <strong className={styles.statValue}>{s.value}</strong>
              <span className={styles.statSub} style={{ color: s.color }}>{s.sub}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.mainGrid}>
        <section className={`${styles.liveFeed} card`}>
           <div className={styles.sectionHeader}>
              <h2>Live Absence Feed</h2>
              <div className={styles.liveTag}><div className={styles.pulse}></div> Real-time Alerts</div>
           </div>
           <div className={styles.absentList}>
              {recentAbsences.map((abs, i) => (
                <div key={i} className={styles.absentItem}>
                  <div className={styles.absentInfo}>
                    <strong>{abs.name}</strong>
                    <span>Grade {abs.class} • {abs.parent}</span>
                  </div>
                  <div className={styles.absentMethod}>
                    {abs.contact === 'WhatsApp' ? <MessageSquare size={16} /> : <PhoneCall size={16} />}
                    <span>{abs.contact}</span>
                  </div>
                  {i === 0 && <div className={styles.aiPatternTag}><Sparkles size={12} /> Pattern: Monday Absence</div>}
                  <span className={abs.status === 'Alert Sent' ? styles.badgeYellow : styles.badgeBlue}>
                    {abs.status}
                  </span>
                </div>
              ))}
           </div>
        </section>

        <section className={styles.riskSection}>
           <div className={`${styles.riskCard} glass`}>
              <div className={styles.riskHeader}>
                 <AlertTriangle size={24} color="#ef4444" />
                 <h3>Attendance Risk Alert (3+ Days)</h3>
              </div>
              <p>System detected <strong>5 students</strong> with chronic absence patterns this week.</p>
              <button className={styles.auditBtn}>View Behavioral Audit <ArrowRight size={16} /></button>
           </div>

           <div className={styles.automationBox}>
              <h4>Master Automation Flow</h4>
              <ul className={styles.flowList}>
                 <li><span>1.</span> Student absent @ 9:15 AM</li>
                 <li><span>2.</span> System determines Parent Phone Type</li>
                 <li><span>3.</span> Trigger IVR call (Tamil) if basic phone</li>
                 <li><span>4.</span> Log interaction for teacher review</li>
              </ul>
           </div>
        </section>
      </div>
    </div>
  );
}
