"use client";

import { useState } from "react";
import { 
  Search as SearchIcon, 
  History, 
  Sparkles, 
  Users, 
  BookOpen, 
  DollarSign, 
  BrainCircuit,
  ArrowRight,
  TrendingUp,
  Mic
} from "lucide-react";
import Link from "next/link";
import styles from "./search.module.css";

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const suggestedModules = [
    { name: "Student Registry", icon: Users, href: "/students", color: "var(--primary-color)" },
    { name: "Fee Intelligence", icon: DollarSign, href: "/finance", color: "#10b981" },
    { name: "Academic Hub", icon: BookOpen, href: "/academics", color: "#8b5cf6" },
    { name: "AI Strategy", icon: BrainCircuit, href: "/ai", color: "#f59e0b" },
  ];

  const recentSearches = [
    "Grade 10 Results",
    "Admissions 2024",
    "Rural Hub Sync Status",
    "Finance Report Q1"
  ];

  const aiInsights = [
    { text: "Predictive dropout risk analysis for Grade 9", type: "AI Action" },
    { text: "Generate March performance report", type: "AI Report" },
    { text: "Sync local database for offline use", type: "System" }
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.searchBox}>
          <SearchIcon size={24} color="var(--primary-color)" />
          <input 
            type="text" 
            placeholder="Search students, modules, AI commands..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button className={styles.voiceBtn}>
            <Mic size={20} />
          </button>
        </div>
      </header>

      <div className={styles.mainContent}>
        <section className={styles.recentSection}>
          <div className={styles.sectionHeader}>
            <h3><History size={16} /> Recent Searches</h3>
            <button className={styles.clearBtn}>Clear</button>
          </div>
          <div className={styles.recentList}>
            {recentSearches.map((search, i) => (
              <div key={i} className={styles.recentItem}>
                <History size={14} />
                <span>{search}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.suggestedSection}>
          <div className={styles.sectionHeader}>
            <h3><TrendingUp size={16} /> Key Service Hubs</h3>
          </div>
          <div className={styles.moduleGrid}>
            {suggestedModules.map((module, i) => (
              <Link key={i} href={module.href} className={`${styles.moduleCard} card`}>
                <div className={styles.moduleIcon} style={{ background: `${module.color}15`, color: module.color }}>
                  <module.icon size={24} />
                </div>
                <span>{module.name}</span>
                <ArrowRight size={14} className={styles.arrow} />
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.aiInsightSection}>
          <div className={styles.sectionHeader}>
             <h3><Sparkles size={18} color="#f59e0b" /> AI Predictive Actions</h3>
          </div>
          <div className={styles.insightList}>
             {aiInsights.map((insight, i) => (
               <div key={i} className={`${styles.insightItem} card`}>
                  <div className={styles.insightMain}>
                     <span className={styles.insightType}>{insight.type}</span>
                     <p className={styles.insightText}>{insight.text}</p>
                  </div>
                  <button className={styles.executeBtn}>
                    <Sparkles size={14} />
                    <span>Run AI Action</span>
                  </button>
               </div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
}
