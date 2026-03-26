import { 
  Rocket, 
  TrendingUp, 
  Users, 
  DollarSign, 
  ShieldCheck, 
  BrainCircuit, 
  Globe, 
  AlertTriangle,
  ChevronRight,
  Zap,
  Target,
  BarChart3,
  Boxes
} from "lucide-react";
import styles from "./admin.module.css";

export default function AdminDashboard() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
           <div className={styles.adminBadge}>STRATEGIC COMMAND CENTER • GLOBAL ADMIN</div>
           <h1 className={styles.title}>Institutional Overview</h1>
           <p className={styles.subtitle}>Unified Strategic View for Smart School Group (New York, London, Tokyo).</p>
        </div>
        <div className={styles.globalVitals}>
           <div className={styles.vitalItem}>
              <span>Group Revenue</span>
              <strong>$4.2M <span className={styles.trend}>+12%</span></strong>
           </div>
        </div>
      </header>

      <section className={styles.statsGrid}>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Admission Funnel</p>
              <Target size={16} color="var(--primary-color)" />
           </div>
           <p className={styles.value}>842 <span className={styles.unit}>Leads</span></p>
           <span className={styles.caption}>Conversion Rate: 24%</span>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Average Performance</p>
              <BarChart3 size={16} color="#3b82f6" />
           </div>
           <p className={styles.value}>82.5%</p>
           <span className={styles.caption}>Global Group Benchmark</span>
        </div>
        <div className="card">
           <div className={styles.statLine}>
              <p className={styles.label}>Asset Utilization</p>
              <Boxes size={16} color="#f59e0b" />
           </div>
           <p className={styles.value}>92%</p>
           <span className={styles.caption}>Predictive Alert: Lab Supplies Low</span>
        </div>
        <div className={styles.aiCard}>
           <div className={styles.statLine}>
              <p className={styles.label}>AI Efficiency</p>
              <Zap size={16} color="#10b981" />
           </div>
           <p className={styles.value}>98.9%</p>
           <span className={styles.caption}>Ops Automated: 4,200/mo</span>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <div className={styles.leftCol}>
           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Franchise Performance Heatmap</h3>
                 <button className={styles.linkAction}>Compare Campuses</button>
              </div>
              <div className={styles.franchiseList}>
                 <div className={styles.franchiseItem}>
                    <Globe size={18} color="#3b82f6" />
                    <div className={styles.fInfo}>
                       <strong>Campus New York (Main)</strong>
                       <p>Retention: 98% • CSAT: 4.9/5</p>
                    </div>
                    <div className={styles.fStatus} style={{ background: '#d1fae5', color: '#065f46' }}>TOP PERFORMER</div>
                 </div>
                 <div className={styles.franchiseItem}>
                    <Globe size={18} color="#ec4899" />
                    <div className={styles.fInfo}>
                       <strong>Campus London</strong>
                       <p>Retention: 92% • CSAT: 4.2/5</p>
                    </div>
                    <div className={styles.fStatus} style={{ background: '#fef3c7', color: '#92400e' }}>STABLE</div>
                 </div>
              </div>
           </section>

           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Compliance Audit Status</h3>
                 <span className={styles.badgeGood}>94% Compliant</span>
              </div>
              <div className={styles.auditList}>
                 <div className={styles.auditItem}>
                    <ShieldCheck size={18} color="#10b981" />
                    <div className={styles.auditInfo}>
                       <strong>CBSE Annual Filing</strong>
                       <p>Due in 14 days • Auto-generated draft ready.</p>
                    </div>
                    <button className={styles.reviewBtn}>Review Filing</button>
                 </div>
                 <div className={styles.auditItem}>
                    <AlertTriangle size={18} color="#f59e0b" />
                    <div className={styles.auditInfo}>
                       <strong>Fire Safety Certification</strong>
                       <p>Expires in 30 days • Contractor notified.</p>
                    </div>
                    <button className={styles.actionBtn}>Renew Now</button>
                 </div>
              </div>
           </section>
        </div>

        <aside className={styles.rightCol}>
           <section className={`${styles.strategicCard} glass`}>
              <div className={styles.stratHeader}>
                 <TrendingUp size={20} color="var(--primary-color)" />
                 <h3>Growth Prediction</h3>
              </div>
              <p>Based on current admission trends, we expect a <strong>15% increase</strong> in enrollment for the next academic year.</p>
              <div className={styles.projectionBar}>
                 <div className={styles.pFill} style={{ width: '85%' }}></div>
              </div>
              <button className={styles.fullReportBtn}>View Strategy Plan</button>
           </section>

           <section className="card">
              <div className={styles.sectionHeader}>
                 <h3>Urgent Strategic Flags</h3>
              </div>
              <div className={styles.alertList}>
                 <div className={styles.alertItem}>
                    <p>Revenue Leakage detected in <strong>Campus Tokyo</strong> Transport Fees.</p>
                    <ChevronRight size={16} />
                 </div>
                 <div className={styles.alertItem}>
                    <p>Unusual Teacher turnover risk in <strong>Science Department</strong>.</p>
                    <ChevronRight size={16} />
                 </div>
              </div>
           </section>

           <section className={`${styles.adminActionCard} glass`}>
              <h3>Command Center Actions</h3>
              <button className={styles.commandBtn}>Initiate Group Audit</button>
              <button className={styles.commandBtn}>Global Announcement</button>
              <button className={styles.commandBtn}>New Campus Setup</button>
           </section>
        </aside>
      </div>
    </div>
  );
}
