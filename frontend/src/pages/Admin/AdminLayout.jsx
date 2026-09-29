
import './AdminLayout.css'
import { Outlet } from 'react-router-dom'
import {
    LayoutDashboard,
    Users,
    BookOpen,
    ClipboardCheck,
    Target,
    UserCheck,
    BarChart3,
    Megaphone,
    User,
    Settings,
    LogOut,
    Bell,
ChevronDown
} from 'lucide-react'

export default function AdminLayout() {

    return (
        <div className="admin-layout">

            <aside className="admin-sidebar">

    <div className="sidebar-logo">
        <div className="logo-mark">C</div>

        <div>
            <h2>CAPACITY</h2>
            <h2>CONNECT</h2>
        </div>
    </div>

   <nav className="sidebar-nav">

    <a className="active">
        <LayoutDashboard size={19} />
        <span>Dashboard</span>
    </a>

    <p className="nav-title">MANAGEMENT</p>

    <a>
        <Users size={19} />
        <span>User Management</span>
    </a>

    <a>
        <BookOpen size={19} />
        <span>Course & Content</span>
    </a>

    <a>
        <ClipboardCheck size={19} />
        <span>Assessments & Certifications</span>
    </a>

    <p className="nav-title">COMPETENCY</p>

    <a>
        <Target size={19} />
        <span>Competency Management</span>
    </a>

    <a>
        <UserCheck size={19} />
        <span>Trainer Matching</span>
    </a>

    <p className="nav-title">INSIGHTS</p>

    <a>
        <BarChart3 size={19} />
        <span>Analytics & Reports</span>
    </a>

    <p className="nav-title">SYSTEM</p>

    <a>
        <Megaphone size={19} />
        <span>Communication & System</span>
    </a>

</nav>

   <div className="sidebar-bottom">

    <a>
        <User size={19} />
        <span>Profile</span>
    </a>

    <a>
        <Settings size={19} />
        <span>Settings</span>
    </a>

    <a>
        <LogOut size={19} />
        <span>Logout</span>
    </a>

</div>

</aside>
            <div className="admin-main">

                <header className="admin-header">

    <div className="header-search">
        <input
            type="text"
            placeholder="Search for users, courses, assessments, or reports..."
        />
    </div>

    <div className="header-actions">

        <div className="notification-button">
            <Bell size={20} />
            <span className="notification-dot"></span>
        </div>

        <div className="admin-profile">
            <div className="profile-avatar">
                S
            </div>

            <div className="profile-info">
                <strong>Sohail Chaudhary</strong>
                <small>Admin</small>
            </div>

            <ChevronDown size={17} />
        </div>

    </div>

</header>

                <main className="admin-page">
                    <Outlet />
                </main>

            </div>

        </div>
    )
}