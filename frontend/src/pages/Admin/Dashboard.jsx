import './Dashboard.css'
function Dashboard() {
  return (
   <main className="admin-page">

    <section className="dashboard-hero">
        <div className="hero-text">
            <p className="hero-greeting">Good morning,</p>

            <h1>Sohail!</h1>

            <p className="hero-description">
                Manage your platform, track progress, and create better
                learning experiences with CAPACITY CONNECT.
            </p>

            <button className="hero-button">
                View Analytics →
            </button>
        </div>

        <div className="hero-illustration">
            <div className="hero-placeholder">
                CAPACITY CONNECT
            </div>
        </div>
    </section>
    <section className="stats-grid">

    <div className="stat-card">
        <div className="stat-icon">👥</div>
        <div>
            <p>Total Users</p>
            <h2>248</h2>
            <span>↑ 12% from last month</span>
        </div>
    </div>

    <div className="stat-card">
        <div className="stat-icon">📚</div>
        <div>
            <p>Total Courses</p>
            <h2>24</h2>
            <span>↑ 8% from last month</span>
        </div>
    </div>

    <div className="stat-card">
        <div className="stat-icon">📋</div>
        <div>
            <p>Total Assessments</p>
            <h2>36</h2>
            <span>↑ 15% from last month</span>
        </div>
    </div>

    <div className="stat-card">
        <div className="stat-icon">📊</div>
        <div>
            <p>Platform Activity</p>
            <h2>1,842</h2>
            <span>↑ 21% from last month</span>
        </div>
    </div>

</section>
<section className="dashboard-middle">

    <div className="dashboard-panel user-growth">
        <div className="panel-header">
            <h2>User Growth</h2>
            <select>
                <option>Last 6 Months</option>
            </select>
        </div>

        <div className="growth-chart">
            <div className="chart-bars">
                <div style={{ height: "35%" }}></div>
                <div style={{ height: "45%" }}></div>
                <div style={{ height: "55%" }}></div>
                <div style={{ height: "62%" }}></div>
                <div style={{ height: "75%" }}></div>
                <div style={{ height: "90%" }}></div>
            </div>

            <div className="chart-labels">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
            </div>
        </div>
    </div>

    <div className="dashboard-panel user-distribution">
        <div className="panel-header">
            <h2>User Distribution</h2>
            <select>
                <option>All Roles</option>
            </select>
        </div>

        <div className="distribution-content">
            <div className="donut-chart">
                <strong>248</strong>
                <span>Total Users</span>
            </div>

            <div className="distribution-list">
                <p>🔵 Learners <strong>182</strong></p>
                <p>🟢 Trainers <strong>38</strong></p>
                <p>🟣 Admins <strong>28</strong></p>
            </div>
        </div>
    </div>

    <div className="dashboard-panel recent-activities">
        <div className="panel-header">
            <h2>Recent Activities</h2>
            <a href="#">View All →</a>
        </div>

        <div className="activity-list">
            <div>
                <strong>New user registered</strong>
                <span>Mahek Fatema · 10 min ago</span>
            </div>

            <div>
                <strong>New course published</strong>
                <span>Python for Data Analysis · 1 hour ago</span>
            </div>

            <div>
                <strong>Assessment created</strong>
                <span>DBMS Unit 1 Test · 3 hours ago</span>
            </div>

            <div>
                <strong>User role updated</strong>
                <span> MD.Sufiyan → Trainer · 5 hours ago</span>
            </div>

            <div>
                <strong>Announcement posted</strong>
                <span>Hackathon Registration Open · 8 hours ago</span>
            </div>
        </div>
    </div>

</section>
<section className="dashboard-bottom">

    <div className="dashboard-panel recent-users">
        <div className="panel-header">
            <h2>Recent Users</h2>
            <a href="#">View All →</a>
        </div>

        <div className="user-table">
            <div className="table-header">
                <span>Name</span>
                <span>Role</span>
                <span>Joined On</span>
                <span>Status</span>
            </div>

            <div className="user-row">
                <strong>Mahek Fatema</strong>
                <span className="role learner">Learner</span>
                <span>12 Sep 2026</span>
                <span className="status active-status">Active</span>
            </div>

            <div className="user-row">
                <strong>MD.Sufiyan</strong>
                <span className="role trainer">Trainer</span>
                <span>10 Sep 2026</span>
                <span className="status active-status">Active</span>
            </div>

            <div className="user-row">
                <strong>Tahera Anjum</strong>
                <span className="role learner">Learner</span>
                <span>8 Sep 2026</span>
                <span className="status active-status">Active</span>
            </div>

            <div className="user-row">
                <strong>Azaj Khan</strong>
                <span className="role trainer">Trainer</span>
                <span>5 Sep 2026</span>
                <span className="status inactive-status">Inactive</span>
            </div>
        </div>
    </div>

    <div className="dashboard-panel top-courses">
        <div className="panel-header">
            <h2>Top Performing Courses</h2>
            <a href="#">View All →</a>
        </div>

        <div className="course-list">

            <div className="course-item">
                <strong>React.js Fundamentals</strong>
                <div className="course-progress">
                    <div style={{ width: "78%" }}></div>
                </div>
                <span>78%</span>
            </div>

            <div className="course-item">
                <strong>Python for Data Analysis</strong>
                <div className="course-progress">
                    <div style={{ width: "72%" }}></div>
                </div>
                <span>72%</span>
            </div>

            <div className="course-item">
                <strong>Database Management Systems</strong>
                <div className="course-progress">
                    <div style={{ width: "65%" }}></div>
                </div>
                <span>65%</span>
            </div>

            <div className="course-item">
                <strong>Web Development Basics</strong>
                <div className="course-progress">
                    <div style={{ width: "59%" }}></div>
                </div>
                <span>59%</span>
            </div>

        </div>
    </div>

    <div className="dashboard-panel quick-actions">
        <div className="panel-header">
            <h2>Quick Actions</h2>
        </div>

        <div className="quick-action-grid">

            <button>
                <span>👥</span>
                Add New User
            </button>

            <button>
                <span>📚</span>
                Create Course
            </button>

            <button>
                <span>📋</span>
                Create Assessment
            </button>

            <button>
                <span>📢</span>
                Post Announcement
            </button>

        </div>
    </div>

</section>
</main>
  );
}

export default Dashboard;