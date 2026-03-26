"use client";

import { 
  Trophy, 
  Music, 
  Code, 
  Users, 
  Star, 
  TrendingUp, 
  Target, 
  Award, 
  Search,
  ChevronRight,
  Plus,
  Palette
} from "lucide-react";
import styles from "./talent.module.css";

export default function TalentTrackerPage() {
  const talents = [
    { name: "Alex Johnson", grade: "Grade 10A", category: "Robotics & Coding", skillLevel: "Advanced", achievements: "1st Place National Hackathon", scholarships: "STEM Potential" },
    { name: "Maya Patel", grade: "Grade 10B", category: "Classical Dance", skillLevel: "Professional", achievements: "State Level Performance", scholarships: "Arts & Culture" },
    { name: "Chris Evans", grade: "Grade 11A", category: "Basketball", skillLevel: "State Team", achievements: "MVP District Tournament", scholarships: "Sports Merit" },
    { name: "Sofia Rodriguez", grade: "Grade 12C", category: "Debate & Leadership", skillLevel: "Fluent", achievements: "MUN Best Delegate", scholarships: "Global Leadership" },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Student Skill & Talent Tracker</h1>
          <p className={styles.subtitle}>Capturing a 360° view of student achievements beyond the classroom.</p>
        </div>
        <div className={styles.actions}>
           <button className="btn btn-secondary"><Trophy size={18} /> Hall of Fame</button>
           <button className="btn btn-primary"><Plus size={18} /> Log Talent Activity</button>
        </div>
      </header>

      <section className={styles.categoryGrid}>
        <div className={`${styles.catCard} card`}>
           <Code size={24} color="#3b82f6" />
           <h3>Coding & STEM</h3>
           <p>42 Students tracked</p>
        </div>
        <div className={`${styles.catCard} card`}>
           <Trophy size={24} color="#f59e0b" />
           <h3>Sports Excellence</h3>
           <p>128 Students tracked</p>
        </div>
        <div className={`${styles.catCard} card`}>
           <Palette size={24} color="#ec4899" />
           <h3>Fine Arts & Music</h3>
           <p>65 Students tracked</p>
        </div>
        <div className={`${styles.catCard} card`}>
           <Users size={24} color="#10b981" />
           <h3>Leadership & Public Speaking</h3>
           <p>38 Students tracked</p>
        </div>
      </section>

      <div className={styles.mainGrid}>
        <section className={`${styles.talentSection} card`}>
           <div className={styles.tableHeader}>
              <h2>Talent Profiles</h2>
              <div className={styles.search}>
                 <Search size={16} />
                 <input type="text" placeholder="Search by name or skill..." />
              </div>
           </div>
           
           <div className={styles.talentList}>
              {talents.map((t, i) => (
                <div key={i} className={styles.tItem}>
                   <div className={styles.tMain}>
                      <div className={styles.tAvatar}>{t.name[0]}</div>
                      <div className={styles.tInfo}>
                         <p className={styles.tName}>{t.name}</p>
                         <p className={styles.tGrade}>{t.grade}</p>
                      </div>
                   </div>
                   <div className={styles.tSkill}>
                      <p className={styles.tCategory}>{t.category}</p>
                      <span className={styles.tLevel}>{t.skillLevel}</span>
                   </div>
                   <div className={styles.tAchievement}>
                      <Star size={14} color="#f59e0b" />
                      <span>{t.achievements}</span>
                   </div>
                   <button className={styles.profileBtn}>Full Profile <ChevronRight size={14} /></button>
                </div>
              ))}
           </div>
        </section>

        <aside className={styles.sidebarSection}>
            <div className={`${styles.scholarshipCard} glass`}>
               <h3>AI Scholarship Match</h3>
               <div className={styles.matchItem}>
                  <p><strong>Alex Johnson:</strong> 95% match for "Future Tech Grant"</p>
                  <button className={styles.nominateBtn}>Nominate Now</button>
               </div>
               <div className={styles.matchItem}>
                  <p><strong>Maya Patel:</strong> 88% match for "Cultural Heritage Award"</p>
                  <button className={styles.nominateBtn}>Nominate Now</button>
               </div>
            </div>

            <div className={`${styles.futureCard} card`}>
               <h3>Career Pathway AI</h3>
               <p>Students with <strong>'Advanced'</strong> robotics skills show a 65% higher chance of admission to top engineering universities.</p>
               <div className={styles.chartPlaceholder}>
                  <TrendingUp size={24} color="var(--primary-color)" />
                  <span>Interactive Career Projection</span>
               </div>
            </div>
        </aside>
      </div>
    </div>
  );
}
