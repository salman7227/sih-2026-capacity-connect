import './landingPage.css'
import logo from '../../assets/logo.png'


export default function LandingPage() {
  return (
    <div className="landing-page">

      {/* NAVBAR */}
      <nav className="navbar">

        <img className="brand-logo" src={logo} alt="Capacity Connect" />

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>

       <a href="/login" className="nav-button">Get Started</a>

      </nav>


      {/* HERO */}
      <section className="hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            DIGITAL CAPACITY BUILDING PLATFORM
          </div>

          <h1>
            Build Skills.
            <br />
            Connect Knowledge.
            <br />
            <span>Grow Capability.</span>
          </h1>

          <p>
            A centralized digital platform for organizational training,
            competency development, learning, and knowledge sharing.
          </p>

          <div className="hero-buttons">

  <a href="#features" className="primary-button">
    Explore Platform
  </a>

  <a href="#about" className="secondary-button">
    Learn More
  </a>

</div>
        </div>


        <div className="hero-visual">

          <div className="visual-card card-one">
            <strong>Learning</strong>
            <span>Courses & Resources</span>
          </div>

          <div className="visual-card card-two">
            <strong>Assessments</strong>
            <span>Track Your Progress</span>
          </div>

          <div className="visual-card card-three">
            <strong>Competency</strong>
            <span>Build Your Skills</span>
          </div>

          <div className="visual-circle"></div>

        </div>

      </section>


      {/* ABOUT */}
      <section className="about" id="about">

        <div className="section-heading">

          <span>ABOUT THE PLATFORM</span>

          <h2>
            One platform for continuous
            <br />
            learning and growth.
          </h2>

          <p>
            CAPACITY CONNECT brings training, assessments, learning
            resources, and competency development together in one
            connected digital environment.
          </p>

        </div>


        <div className="about-cards">

          <div className="about-card">
            <div className="card-number">01</div>
            <h3>Learning</h3>
            <p>
              Access structured courses, recorded lectures,
              study materials, and learning resources.
            </p>
          </div>


          <div className="about-card">
            <div className="card-number">02</div>
            <h3>Assessments</h3>
            <p>
              Test knowledge through quizzes and assessments
              while tracking learning progress.
            </p>
          </div>


          <div className="about-card">
            <div className="card-number">03</div>
            <h3>Competency Development</h3>
            <p>
              Connect skills and competencies with relevant
              learning opportunities and development paths.
            </p>
          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="features" id="features">

        <div className="section-heading">

          <span>PLATFORM FEATURES</span>

          <h2>
            Everything needed to
            <br />
            build better capabilities.
          </h2>

        </div>


        <div className="feature-grid">

          <div className="feature-card">
            <h3>Courses & Learning</h3>
            <p>
              Structured courses with videos, study materials,
              and organized learning content.
            </p>
          </div>


          <div className="feature-card">
            <h3>Assessments & Quizzes</h3>
            <p>
              Create and attempt MCQ-based assessments to
              evaluate knowledge and progress.
            </p>
          </div>


          <div className="feature-card">
            <h3>Competency Mapping</h3>
            <p>
              Map competencies and skills with relevant
              courses and learning opportunities.
            </p>
          </div>


          <div className="feature-card">
            <h3>Certificates</h3>
            <p>
              Track completed learning activities and
              earned certifications.
            </p>
          </div>


          <div className="feature-card">
            <h3>Progress Tracking</h3>
            <p>
              Monitor course participation, assessment
              results, and overall learning progress.
            </p>
          </div>


          <div className="feature-card">
            <h3>Knowledge Sharing</h3>
            <p>
              Connect learners and trainers through a
              centralized knowledge-sharing environment.
            </p>
          </div>

        </div>

      </section>


      {/* ROLES */}
      <section className="roles">

        <div className="section-heading">

          <span>THREE CONNECTED EXPERIENCES</span>

          <h2>
            One platform.
            <br />
            Different roles.
          </h2>

        </div>


        <div className="role-grid">

          <div className="role-card">
            <span>01</span>
            <h3>Trainee</h3>
            <p>
              Learn, take assessments, track progress,
              develop competencies, and earn certificates.
            </p>
          </div>


          <div className="role-card">
            <span>02</span>
            <h3>Trainer</h3>
            <p>
              Create courses, upload learning material,
              conduct quizzes, and monitor participation.
            </p>
          </div>


          <div className="role-card">
            <span>03</span>
            <h3>Admin</h3>
            <p>
              Manage users, courses, approvals, analytics,
              competency mapping, and platform activities.
            </p>
          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="cta" id="contact">

        <h2>
          Ready to build your
          <br />
          next capability?
        </h2>

        <p>
          Connect learning, knowledge, and competency development
          through one digital platform.
        </p>

        <a href="/login" className="primary-button">
  Explore CAPACITY CONNECT
</a>

      </section>


      {/* FOOTER */}
      <footer className="footer">

        <img className="brand-logo" src={logo} alt="Capacity Connect" />

        <p>
          Digital capacity building and learning management platform.
        </p>

        <span>
          © 2026 CAPACITY CONNECT
        </span>

      </footer>

    </div>
  )
}