"use client";

import { useState } from "react";
import { MessageSquare, X, Send, Bot, User } from "lucide-react";
import styles from "./Chatbot.module.css";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hello! I'm the Zech SMS Assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: "user", text: input }]);
    setInput("");
    
    // Simulating streaming response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text: "I'm analyzing your request... (AI streaming simulated)" }]);
    }, 1000);
  };

  return (
    <div className={styles.wrapper}>
      {!isOpen && (
        <button className={styles.launcher} onClick={() => setIsOpen(true)}>
          <MessageSquare size={24} />
          <span className={styles.badge}>AI</span>
        </button>
      )}

      {isOpen && (
        <div className={styles.window}>
          <div className={styles.header}>
            <div className={styles.headerInfo}>
               <Bot size={20} />
               <strong>SMS Helpdesk</strong>
            </div>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className={styles.chatArea}>
            {messages.map((msg, i) => (
              <div key={i} className={`${styles.message} ${styles[msg.role]}`}>
                 <div className={styles.avatar}>
                    {msg.role === 'bot' ? <Bot size={14} /> : <User size={14} />}
                 </div>
                 <div className={styles.bubble}>{msg.text}</div>
              </div>
            ))}
          </div>

          <div className={styles.inputArea}>
            <input 
              type="text" 
              placeholder="Ask about fees, grades, or events..." 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button className={styles.sendBtn} onClick={handleSend}>
              <Send size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
