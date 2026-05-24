import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  ListOrdered,
  Ticket,
  UsersRound,
  BarChart3,
  Bell,
  Settings,
  LogOut,
  Search,
  Menu,
  X,
  CheckCircle2,
  Clock,
  ClipboardCheck,
  ChevronRight,
  MoreHorizontal,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

/* ─── animation presets ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/* ─── sidebar items ─── */
const sidebarItems = [
  { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { key: "queues", label: "Queues", icon: ListOrdered },
  { key: "tokens", label: "Tokens", icon: Ticket },
  { key: "users", label: "Users", icon: UsersRound },
  { key: "analytics", label: "Analytics", icon: BarChart3 },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "settings", label: "Settings", icon: Settings },
];

/* ─── mock data ─── */
const statCards = [
  { label: "Total Users", value: "12,847", icon: UsersRound, trend: "+12.5%", up: true, color: "#0F62FE" },
  { label: "Active Queues", value: "24", icon: CheckCircle2, trend: "+3.2%", up: true, color: "#10b981" },
  { label: "Pending Tokens", value: "318", icon: Clock, trend: "-5.1%", up: false, color: "#f59e0b" },
  { label: "Completed Tokens", value: "1,205", icon: ClipboardCheck, trend: "+8.7%", up: true, color: "#8b5cf6" },
];

const chartData = [
  { day: "Mon", value: 44 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 86 },
  { day: "Fri", value: 64 },
  { day: "Sat", value: 92 },
  { day: "Sun", value: 76 },
];

const recentActivities = [
  { text: "Token A-108 moved to Counter 2", time: "2 min ago" },
  { text: "New queue created for Billing", time: "5 min ago" },
  { text: "Counter 4 marked service complete", time: "12 min ago" },
  { text: "User Rahul Menon registered", time: "18 min ago" },
  { text: "Queue #12 capacity updated to 50", time: "25 min ago" },
  { text: "Token B-042 expired (no show)", time: "31 min ago" },
];

const queueStatusData = [
  { token: "A-108", customer: "Anika Shah", queue: "Billing", status: "Serving", wait: "4 min" },
  { token: "A-109", customer: "Rahul Menon", queue: "Registration", status: "Waiting", wait: "8 min" },
  { token: "A-110", customer: "Meera Thomas", queue: "Billing", status: "Waiting", wait: "12 min" },
  { token: "A-107", customer: "Vikram Patel", queue: "Support", status: "Completed", wait: "—" },
  { token: "A-106", customer: "Priya Das", queue: "Billing", status: "Completed", wait: "—" },
  { token: "A-111", customer: "Arjun Nair", queue: "Registration", status: "Waiting", wait: "15 min" },
];

const statusStyle = {
  Serving: "dash-badge dash-badge--serving",
  Waiting: "dash-badge dash-badge--waiting",
  Completed: "dash-badge dash-badge--completed",
};

export default function Dashboard() {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [admin, setAdmin] = useState({ name: "Admin", email: "" });

  useEffect(() => {
    const info = localStorage.getItem("adminInfo");
    if (info) {
      try {
        const parsed = JSON.parse(info);
        setAdmin(parsed);
      } catch { /* ignore */ }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminInfo");
    navigate("/admin");
  };

  return (
    <div className="dashboard-layout">
      {/* ══════ SIDEBAR ══════ */}
      <AnimatePresence>
        {(sidebarOpen || true) && (
          <motion.aside
            className={`dash-sidebar ${sidebarOpen ? "dash-sidebar--open" : ""}`}
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {/* Logo */}
            <div className="dash-sidebar__logo">
              <span className="dash-sidebar__logo-icon">TT</span>
              <span className="dash-sidebar__logo-text">TokenTrack</span>
              <button
                className="dash-sidebar__close"
                onClick={() => setSidebarOpen(false)}
                aria-label="Close sidebar"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav Items */}
            <nav className="dash-sidebar__nav">
              {sidebarItems.map(({ key, label, icon: Icon }) => (
                <button
                  key={key}
                  className={`dash-sidebar__item ${activeNav === key ? "dash-sidebar__item--active" : ""}`}
                  onClick={() => {
                    setActiveNav(key);
                    setSidebarOpen(false);
                  }}
                >
                  <Icon size={18} />
                  <span>{label}</span>
                  {activeNav === key && (
                    <ChevronRight size={14} className="dash-sidebar__chevron" />
                  )}
                </button>
              ))}
            </nav>

            {/* Logout */}
            <button className="dash-sidebar__logout" onClick={handleLogout}>
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="dash-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ══════ MAIN ══════ */}
      <div className="dash-main">
        {/* ── Navbar ── */}
        <header className="dash-navbar">
          <div className="dash-navbar__left">
            <button
              className="dash-navbar__hamburger"
              onClick={() => setSidebarOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
            <h2 className="dash-navbar__title">Dashboard Overview</h2>
          </div>
          <div className="dash-navbar__right">
            <div className="dash-navbar__search">
              <Search size={16} className="dash-navbar__search-icon" />
              <input
                type="text"
                placeholder="Search..."
                className="dash-navbar__search-input"
              />
            </div>
            <button className="dash-navbar__notif" aria-label="Notifications">
              <Bell size={18} />
              <span className="dash-navbar__notif-dot" />
            </button>
            <div className="dash-navbar__profile">
              <div className="dash-navbar__avatar">
                {admin.name?.charAt(0)?.toUpperCase() || "A"}
              </div>
              <div className="dash-navbar__profile-info">
                <span className="dash-navbar__profile-name">{admin.name}</span>
                <span className="dash-navbar__profile-role">Admin</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Content ── */}
        <main className="dash-content">
          {/* Stat Cards */}
          <motion.div
            className="dash-stats"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {statCards.map(({ label, value, icon: Icon, trend, up, color }) => (
              <motion.div key={label} className="dash-stat-card" variants={fadeUp}>
                <div className="dash-stat-card__header">
                  <div className="dash-stat-card__icon" style={{ background: `${color}12`, color }}>
                    <Icon size={20} />
                  </div>
                  <div className={`dash-stat-card__trend ${up ? "dash-stat-card__trend--up" : "dash-stat-card__trend--down"}`}>
                    {up ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {trend}
                  </div>
                </div>
                <p className="dash-stat-card__value">{value}</p>
                <p className="dash-stat-card__label">{label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Chart + Activity */}
          <div className="dash-grid-2">
            {/* Chart */}
            <motion.div
              className="dash-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="dash-card__header">
                <div>
                  <h3 className="dash-card__title">Queue Analytics</h3>
                  <p className="dash-card__subtitle">Token flow this week</p>
                </div>
                <button className="dash-card__more" aria-label="More options">
                  <MoreHorizontal size={18} />
                </button>
              </div>
              <div className="dash-chart">
                <div className="dash-chart__bars">
                  {chartData.map(({ day, value }, i) => (
                    <div key={day} className="dash-chart__col">
                      <motion.div
                        className="dash-chart__bar"
                        initial={{ height: 4 }}
                        animate={{ height: `${value}%` }}
                        transition={{ duration: 0.7, delay: 0.4 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <span className="dash-chart__label">{day}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              className="dash-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="dash-card__header">
                <div>
                  <h3 className="dash-card__title">Recent Activities</h3>
                  <p className="dash-card__subtitle">Latest queue events</p>
                </div>
              </div>
              <div className="dash-activity">
                {recentActivities.map(({ text, time }, i) => (
                  <motion.div
                    key={text}
                    className="dash-activity__item"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  >
                    <motion.span
                      className="dash-activity__dot"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    />
                    <div className="dash-activity__info">
                      <p className="dash-activity__text">{text}</p>
                      <span className="dash-activity__time">{time}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Queue Status Table */}
          <motion.div
            className="dash-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="dash-card__header">
              <div>
                <h3 className="dash-card__title">Queue Status</h3>
                <p className="dash-card__subtitle">Current token assignments</p>
              </div>
              <button className="dash-card__more" aria-label="More options">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <div className="dash-table-wrap">
              <table className="dash-table">
                <thead>
                  <tr>
                    <th>Token ID</th>
                    <th>Customer</th>
                    <th>Queue</th>
                    <th>Status</th>
                    <th>Wait Time</th>
                  </tr>
                </thead>
                <tbody>
                  {queueStatusData.map(({ token, customer, queue, status, wait }, i) => (
                    <motion.tr
                      key={token}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                    >
                      <td className="dash-table__token">{token}</td>
                      <td>{customer}</td>
                      <td>{queue}</td>
                      <td><span className={statusStyle[status]}>{status}</span></td>
                      <td>{wait}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
