import { useState, useCallback } from 'react';

const translations = {
  en: {
    dashboard: "Dashboard",
    attendance: "Attendance",
    marks: "Marks",
    fees: "Fees",
    absent_alert: "Attendance Alert",
    present_all: "Mark All Present",
    rural_hub: "Rural Support Hub",
    sync_status: "Sync Status",
    low_internet: "Low Internet Mode Enabled",
    tamil: "Tamil",
    english: "English",
  },
  ta: {
    dashboard: "தகவல் பலகை",
    attendance: "வருகைப் பதிவு",
    marks: "மதிப்பெண்கள்",
    fees: "கட்டணம்",
    absent_alert: "வருகை எச்சரிக்கை",
    present_all: "அனைவரையும் வருகை குறிக்கவும்",
    rural_hub: "கிராமப்புற உதவி மையம்",
    sync_status: "ஒத்திசைவு நிலை",
    low_internet: "குறைந்த இணைய பயன்முறை",
    tamil: "தமிழ்",
    english: "ஆங்கிலம்",
  }
};

export function useLocalization() {
  const [lang, setLang] = useState<'en' | 'ta'>('en');

  const t = useCallback((key: keyof typeof translations.en) => {
    return translations[lang][key] || translations.en[key];
  }, [lang]);

  const toggleLanguage = () => setLang(prev => prev === 'en' ? 'ta' : 'en');

  return { t, lang, toggleLanguage };
}
