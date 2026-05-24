import {
  Activity,
  BarChart3,
  BellRing,
  Clock3,
  Gauge,
  LayoutDashboard,
  LineChart,
  MonitorCheck,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Workflow,
} from "lucide-react";

export const navLinks = ["Features", "Workflow", "Dashboard", "Benefits"];

export const features = [
  {
    title: "Real-time Queue Tracking",
    description: "See every active counter, queue length, and token movement as it happens.",
    icon: Activity,
  },
  {
    title: "Admin Dashboard",
    description: "Run branches, counters, operators, and queue rules from one focused control room.",
    icon: LayoutDashboard,
  },
  {
    title: "Token Analytics",
    description: "Understand wait times, peak hours, and service flow with clear visual insights.",
    icon: BarChart3,
  },
  {
    title: "User Management",
    description: "Assign roles, manage staff access, and keep queue operations organized.",
    icon: UsersRound,
  },
  {
    title: "Instant Notifications",
    description: "Notify customers and teams when tokens move, pause, or need attention.",
    icon: BellRing,
  },
  {
    title: "Queue Status Monitoring",
    description: "Track live queue health with simple status signals and operational alerts.",
    icon: MonitorCheck,
  },
];

export const steps = [
  {
    title: "Create Queue",
    description: "Set up counters, services, capacity, and staff ownership in a few clicks.",
  },
  {
    title: "Generate Tokens",
    description: "Issue walk-in or digital tokens with clear numbering and live status updates.",
  },
  {
    title: "Monitor in Real Time",
    description: "Watch queue progress, resolve bottlenecks, and keep customers informed.",
  },
];

export const benefits = [
  { title: "Saves Time", description: "Shorten wait cycles with faster token flow.", icon: Clock3 },
  {
    title: "Reduces Crowd Congestion",
    description: "Keep waiting areas calmer with digital visibility.",
    icon: Workflow,
  },
  {
    title: "Improves Customer Experience",
    description: "Give visitors clarity, confidence, and timely updates.",
    icon: Sparkles,
  },
  {
    title: "Easy Queue Monitoring",
    description: "Make daily operations simpler for every admin.",
    icon: Gauge,
  },
];

export const testimonials = [
  {
    quote:
      "TokenTrack helped our front desk move from manual slips to a clean live queue. Customers know exactly where they stand.",
    name: "Anika Shah",
    role: "Clinic Owner",
  },
  {
    quote:
      "The dashboard gives our managers instant visibility across counters. It made peak-hour service far easier to control.",
    name: "Rahul Menon",
    role: "Service Center Director",
  },
  {
    quote:
      "Setup was simple, and the token analytics quickly showed us where the real delays were happening.",
    name: "Meera Thomas",
    role: "Operations Lead",
  },
];

export const activity = [
  "Token A-108 moved to Counter 2",
  "New queue created for Billing",
  "Counter 4 marked service complete",
];

export const chartBars = [44, 70, 52, 86, 64, 92, 76];

export const dashboardStats = [
  { label: "Total Users", value: "12.8k", icon: UsersRound },
  { label: "Active Queues", value: "24", icon: ShieldCheck },
  { label: "Pending Tokens", value: "318", icon: LineChart },
];
