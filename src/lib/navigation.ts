import { 
  Users, 
  BookOpen, 
  Calendar, 
  GraduationCap, 
  DollarSign, 
  SquareUserRound, 
  MessageSquare, 
  Library, 
  Bus, 
  Home, 
  LayoutDashboard, 
  Settings,
  BrainCircuit,
  PieChart,
  FileText,
  UserCheck,
  LifeBuoy,
  UsersRound,
  Globe,
  Zap,
  Mic,
  ChartColumn,
  ShieldAlert,
  Smartphone,
  Target,
  ShieldCheck,
  Database,
  Award,
  Trophy,
  Coffee,
  Heart,
  Users as UsersIcon,
  ClipboardList,
  MapPin,
  Wallet,
  FileDigit,
  CalendarCheck,
  Cpu,
  Bookmark,
  FileSpreadsheet,
  GraduationCap as GradIcon,
  UserPlus,
  Rocket,
  ShieldPlus,
  Package,
  ChartGantt,
  Eye,
  Lock,
  Boxes
} from "lucide-react";

export type UserRole = 'admin' | 'teacher' | 'student' | 'parent';

const ClipboardCheck = FileText;

export const navigationByRole: Record<UserRole, any[]> = {
  admin: [
    {
      title: "Command Center",
      items: [
        { name: "Strategic Dashboard", href: "/dashboard/admin", icon: Rocket },
        { name: "Global Franchise", href: "/franchise", icon: Globe },
        { name: "Digital Twin 2.0", icon: BrainCircuit, href: "/analytics/digital-twin" },
        { name: "Growth Strategy", href: "/admin/strategy", icon: ChartGantt },
      ]
    },
    {
      title: "Admissions & SIS",
      items: [
        { name: "Admission Funnel", href: "/admin/admissions", icon: Target },
        { name: "Student Registry", href: "/students", icon: Users },
        { name: "Parent Pulse", href: "/parents", icon: UserCheck },
      ]
    },
    {
      title: "Finance & Operations",
      items: [
        { name: "Financial Intelligence", icon: DollarSign, href: "/finance" },
        { name: "Fee Optimizer", icon: PieChart, href: "/finance/optimizer" },
        { name: "HR & Staff Engine", icon: SquareUserRound, href: "/hr" },
        { name: "Smart Inventory", icon: Boxes, href: "/admin/inventory" },
      ]
    },
    {
      title: "Security & Legal",
      items: [
        { name: "Compliance Engine", href: "/admin/compliance", icon: ShieldCheck },
        { name: "Campus Security Hub", href: "/admin/security", icon: ShieldPlus },
        { name: "Smart Documents", icon: Database, href: "/documents" },
      ]
    },
    {
      title: "AI Ecosystem",
      items: [
        { name: "Global AI Hub", icon: BrainCircuit, href: "/ai" },
        { name: "AI Intelligence Center", icon: Target, href: "/ai/intelligence" },
        { name: "Auto-Operations", icon: Zap, href: "/operations" },
        { name: "Voice Assistant", icon: Mic, href: "/ai/voice-assistant" },
        { name: "Comm Hub & IVR", icon: Smartphone, href: "/admin/communication" },
        { name: "Rural Hub (Tamil)", icon: Home, href: "/rural-hub" },
        { name: "Helpdesk Pro", icon: LifeBuoy, href: "/ai/helpdesk-pro" },
      ]
    }
  ],
  teacher: [
    {
      title: "Academic Engine",
      items: [
        { name: "My Dashboard", href: "/dashboard/teacher", icon: LayoutDashboard },
        { name: "Class Control", href: "/academics", icon: GraduationCap },
        { name: "Live Attendance", href: "/attendance", icon: UserCheck },
        { name: "Evaluation Hub", href: "/grades", icon: Award },
      ]
    },
    {
      title: "AI & Planning",
      items: [
        { name: "AI Teaching Asst", href: "/teacher/assistant", icon: Cpu },
        { name: "Lesson Planner", href: "/ai/lesson-plan", icon: BookOpen },
        { name: "Exam Designer", href: "/teacher/exams", icon: FileSpreadsheet },
      ]
    },
    {
      title: "Faculty Growth",
      items: [
        { name: "Resource Library", href: "/teacher/resources", icon: Bookmark },
        { name: "Professional Dev", href: "/teacher/training", icon: GradIcon },
        { name: "Leave & Sub", href: "/teacher/substitute", icon: UserPlus },
      ]
    },
    {
      title: "Connect",
      items: [
        { name: "Communication", icon: MessageSquare, href: "/communication" },
        { name: "HR Profile", icon: SquareUserRound, href: "/hr" },
      ]
    }
  ],
  student: [
    {
      title: "Student Hub",
      items: [
        { name: "Dashboard", href: "/dashboard/student", icon: LayoutDashboard },
        { name: "Homework Hub", href: "/student/homework", icon: ClipboardList },
        { name: "Learning Paths", href: "/lms/personalization", icon: Target },
        { name: "LMS Portal", icon: BookOpen, href: "/lms" },
      ]
    },
    {
      title: "Growth & Community",
      items: [
        { name: "Rewards & Badges", href: "/student/rewards", icon: Trophy },
        { name: "Peer Learning", href: "/student/peer-hub", icon: UsersIcon },
        { name: "Clubs & Events", href: "/student/clubs", icon: Coffee },
        { name: "Talent Profile", icon: Award, href: "/students/talent-profile" },
      ]
    },
    {
      title: "Personal Wellbeing",
      items: [
        { name: "Wellness Center", href: "/student/wellness", icon: Heart },
        { name: "Digital Twin", icon: BrainCircuit, href: "/analytics/digital-twin" },
        { name: "Voice Buddy", icon: Mic, href: "/ai/voice-assistant" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Library", icon: Library, href: "/library" },
        { name: "Transport Hub", icon: Bus, href: "/transport" },
      ]
    }
  ],
  parent: [
    {
      title: "Child's Journey",
      items: [
        { name: "Overview Vitals", href: "/dashboard/parent", icon: UserCheck },
        { name: "Growth & Wellbeing", href: "/parent/wellbeing", icon: Heart },
        { name: "Academic History", href: "/grades", icon: GraduationCap },
        { name: "Attendance Logs", href: "/attendance", icon: Calendar },
      ]
    },
    {
      title: "Daily Logistics",
      items: [
        { name: "Live Bus Tracker", href: "/parent/bus", icon: MapPin },
        { name: "PTM Scheduler", href: "/parent/ptm", icon: CalendarCheck },
        { name: "Canteen Wallet", href: "/parent/wallet", icon: Wallet },
      ]
    },
    {
      title: "Financial & Legal",
      items: [
        { name: "Fees & Invoices", href: "/finance", icon: DollarSign },
        { name: "Document Vault", href: "/parent/vault", icon: FileDigit },
      ]
    },
    {
      title: "Smart Connect",
      items: [
        { name: "AI Helpdesk", href: "/ai/helpdesk-pro", icon: LifeBuoy },
        { name: "WhatsApp Hub", icon: Smartphone, href: "/communication/whatsapp" },
        { name: "Direct Message", icon: MessageSquare, href: "/communication" },
      ]
    }
  ]
};
