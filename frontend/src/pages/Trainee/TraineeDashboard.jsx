import "./TraineeDashboard.css";
import TraineeSidebar from "../../components/trainee/TraineeSidebar";

import {
  Search,
  Bell,
  ChevronDown,
  BookOpen,
  TrendingUp,
  Award,
  Clock,
  ArrowRight,
  CheckCircle,
  FileCheck,
} from "lucide-react";

function TraineeDashboard() {
  return (
    <div className="trainee-dashboard">

      {/* Sidebar */}
      <TraineeSidebar />

      {/* Main Content */}
      <main className="trainee-main">

        {/* ================================
            TOP HEADER
        ================================= */}

        <header className="dashboard-header">

          {/* Search */}
          <div className="dashboard-search">
            <Search size={20} />

            <input
              type="text"
              placeholder="Search courses, assessments..."
            />
          </div>

          {/* Header Right */}
          <div className="dashboard-header-right">

            {/* Notifications */}
            <button className="notification-button">
              <Bell size={21} />
              <span className="notification-dot"></span>
            </button>

            {/* Profile */}
            <div className="header-profile">

              <div className="profile-avatar">
                S
              </div>

              <div className="profile-info">
                <strong>Salman</strong>
                <span>Trainee</span>
              </div>

              <ChevronDown size={18} />

            </div>

          </div>

        </header>


        {/* ================================
            WELCOME SECTION
        ================================= */}

        <section className="welcome-section">

          <div className="welcome-content">

            <p className="welcome-label">
              WELCOME BACK
            </p>

            <h1>
              Good morning, Salman!
            </h1>

            <p className="welcome-description">
              Continue your learning journey and grow your skills
              with Capacity Connect.
            </p>

          </div>

        </section>


        {/* ================================
            STATS SECTION
        ================================= */}

        <section className="stats-section">

          {/* Enrolled Courses */}
          <div className="stat-card">

            <div className="stat-icon">
              <BookOpen size={24} />
            </div>

            <div className="stat-content">
              <span>Enrolled Courses</span>
              <strong>8</strong>
            </div>

          </div>


          {/* Learning Progress */}
          <div className="stat-card">

            <div className="stat-icon">
              <TrendingUp size={24} />
            </div>

            <div className="stat-content">
              <span>Learning Progress</span>
              <strong>72%</strong>
            </div>

          </div>


          {/* Certificates */}
          <div className="stat-card">

            <div className="stat-icon">
              <Award size={24} />
            </div>

            <div className="stat-content">
              <span>Certificates Earned</span>
              <strong>4</strong>
            </div>

          </div>


          {/* Study Time */}
          <div className="stat-card">

            <div className="stat-icon">
              <Clock size={24} />
            </div>

            <div className="stat-content">
              <span>Study Time</span>
              <strong>24h</strong>
            </div>

          </div>

        </section>


        {/* ================================
            LEARNING & ASSESSMENTS
        ================================= */}

        <section className="dashboard-content-grid">

          {/* Continue Learning */}
          <div className="continue-learning-card">

            <div className="section-heading">

              <div>
                <span className="section-label">
                  YOUR LEARNING
                </span>

                <h2>
                  Continue Learning
                </h2>
              </div>

              <a href="/trainee/courses">
                View All
              </a>

            </div>


            <div className="course-progress-card">

              <div className="course-icon">
                <BookOpen size={28} />
              </div>

              <div className="course-details">

                <div className="course-top">

                  <div>

                    <span className="course-category">
                      WEB DEVELOPMENT
                    </span>

                    <h3>
                      Full Stack Web Development
                    </h3>

                  </div>

                  <strong>
                    72%
                  </strong>

                </div>


                <div className="progress-bar">

                  <div
                    className="progress-fill"
                    style={{ width: "72%" }}
                  ></div>

                </div>


                <div className="course-bottom">

                  <span>
                    18 of 25 lessons completed
                  </span>

                  <button className="continue-button">
                    Continue Learning
                  </button>

                </div>

              </div>

            </div>

          </div>


          {/* Upcoming Assessments */}
          <div className="assessment-card">

            <div className="section-heading">

              <div>
                <span className="section-label">
                  UPCOMING
                </span>

                <h2>
                  Assessments
                </h2>
              </div>

              <a href="/trainee/assessments">
                View All
              </a>

            </div>


            <div className="assessment-item">

              <div className="assessment-icon">
                <Clock size={22} />
              </div>

              <div className="assessment-details">

                <h3>
                  JavaScript Fundamentals
                </h3>

                <span>
                  Due on October 2, 2026
                </span>

              </div>

              <button className="assessment-button">
                Start
              </button>

            </div>


            <div className="assessment-item">

              <div className="assessment-icon">
                <TrendingUp size={22} />
              </div>

              <div className="assessment-details">

                <h3>
                  Data Analytics Basics
                </h3>

                <span>
                  Due on October 5, 2026
                </span>

              </div>

              <button className="assessment-button">
                Start
              </button>

            </div>

          </div>

        </section>


        {/* ================================
            RECOMMENDED COURSES
        ================================= */}

        <section className="recommended-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                FOR YOU
              </span>

              <h2>
                Recommended Courses
              </h2>

            </div>

            <a href="/trainee/courses">
              View All
            </a>

          </div>


          <div className="recommended-courses-grid">

            {/* Course 1 */}
            <div className="recommended-course-card">

              <div className="recommended-course-icon">
                <BookOpen size={24} />
              </div>

              <span className="recommended-category">
                DATA ANALYTICS
              </span>

              <h3>
                Python for Data Analysis
              </h3>

              <p>
                Learn Python, Pandas and data analysis fundamentals.
              </p>

              <div className="course-meta">
                <span>Beginner</span>
                <span>•</span>
                <span>6 Hours</span>
              </div>

              <button className="course-view-button">
                View Course
                <ArrowRight size={16} />
              </button>

            </div>


            {/* Course 2 */}
            <div className="recommended-course-card">

              <div className="recommended-course-icon">
                <TrendingUp size={24} />
              </div>

              <span className="recommended-category">
                BUSINESS INTELLIGENCE
              </span>

              <h3>
                Power BI Fundamentals
              </h3>

              <p>
                Build interactive dashboards and business reports.
              </p>

              <div className="course-meta">
                <span>Intermediate</span>
                <span>•</span>
                <span>8 Hours</span>
              </div>

              <button className="course-view-button">
                View Course
                <ArrowRight size={16} />
              </button>

            </div>


            {/* Course 3 */}
            <div className="recommended-course-card">

              <div className="recommended-course-icon">
                <Award size={24} />
              </div>

              <span className="recommended-category">
                PROFESSIONAL SKILLS
              </span>

              <h3>
                Communication Skills
              </h3>

              <p>
                Improve workplace communication and presentation skills.
              </p>

              <div className="course-meta">
                <span>Beginner</span>
                <span>•</span>
                <span>4 Hours</span>
              </div>

              <button className="course-view-button">
                View Course
                <ArrowRight size={16} />
              </button>

            </div>

          </div>

        </section>


        {/* ================================
            RECENT ACTIVITY
        ================================= */}

        <section className="recent-activity-section">

          <div className="section-heading">

            <div>

              <span className="section-label">
                YOUR JOURNEY
              </span>

              <h2>
                Recent Activity
              </h2>

            </div>

          </div>


          <div className="activity-list">

            {/* Activity 1 */}
            <div className="activity-item">

              <div className="activity-icon">
                <CheckCircle size={21} />
              </div>

              <div className="activity-details">

                <h3>
                  Completed a lesson
                </h3>

                <p>
                  React Components & Props
                </p>

              </div>

              <span className="activity-time">
                2 hours ago
              </span>

            </div>


            {/* Activity 2 */}
            <div className="activity-item">

              <div className="activity-icon">
                <FileCheck size={21} />
              </div>

              <div className="activity-details">

                <h3>
                  Assessment completed
                </h3>

                <p>
                  HTML & CSS Fundamentals — Score 86%
                </p>

              </div>

              <span className="activity-time">
                Yesterday
              </span>

            </div>


            {/* Activity 3 */}
            <div className="activity-item">

              <div className="activity-icon">
                <Award size={21} />
              </div>

              <div className="activity-details">

                <h3>
                  Certificate earned
                </h3>

                <p>
                  Introduction to Web Development
                </p>

              </div>

              <span className="activity-time">
                3 days ago
              </span>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default TraineeDashboard;