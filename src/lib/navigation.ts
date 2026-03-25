import { 
  Users, 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  DollarSign, 
  UserSquare2, 
  MessageSquare, 
  Library, 
  Bus, 
  Home, 
  Star, 
  ClipboardCheck, 
  LayoutDashboard, 
  Settings,
  BrainCircuit,
  PieChart,
  Stethoscope,
  Utensils,
  Package,
  FileText
} from "lucide-react";

export const navigationContent = [
  {
    title: "Core Operations",
    items: [
      { name: "Dashboard", href: "/", icon: LayoutDashboard },
      { name: "Students", href: "/students", icon: Users },
      { name: "Academics", icon: GraduationCap, href: "/academics" },
      { name: "Attendance", icon: Calendar, href: "/attendance" },
      { name: "Exams & Grades", icon: ClipboardCheck, href: "/grades" },
    ]
  },
  {
    title: "Administrative",
    items: [
      { name: "Finance", icon: DollarSign, href: "/finance" },
      { name: "HR & Staff", icon: UserSquare2, href: "/hr" },
      { name: "Admissions", icon: FileText, href: "/admissions" },
    ]
  },
  {
    title: "Logistics",
    items: [
      { name: "Library", icon: Library, href: "/library" },
      { name: "Transport", icon: Bus, href: "/transport" },
      { name: "Hostel", icon: Home, href: "/hostel" },
      { name: "Inventory", icon: Package, href: "/inventory" },
      { name: "Health", icon: Stethoscope, href: "/health" },
      { name: "Canteen", icon: Utensils, href: "/canteen" },
    ]
  },
  {
    title: "AI Modules",
    items: [
      { name: "AI Insights", icon: BrainCircuit, href: "/ai-insights" },
      { name: "AI Learning", icon: BrainCircuit, href: "/ai-learning" },
      { name: "AI Assistant", icon: MessageSquare, href: "/ai-assistant" },
    ]
  },
  {
    title: "System",
    items: [
      { name: "Reports", icon: PieChart, href: "/reports" },
      { name: "Communication", icon: MessageSquare, href: "/communication" },
      { name: "Events", icon: Star, href: "/events" },
      { name: "LMS", icon: BookOpen, href: "/lms" },
      { name: "Settings", icon: Settings, href: "/settings" },
    ]
  }
];
