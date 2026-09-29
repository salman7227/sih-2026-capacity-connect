import './trainer.welcomeBanner.css'

import welcomeBanner from '../../assets/trainer/welcomeBanner.png';

function WelcomeBanner() {
  return (
    <section className="welcome-banner">

      {/* LEFT SIDE */}
      <div className="welcome-content">

        <div className="welcome-heading">
          <span className="heading-line"></span>

          <span className="good-morning">
            Good morning,
          </span>
        </div>

        <h1 className="trainer-name">
          Mayank!
        </h1>

        <p className="welcome-description">
          Inspire learners, create impactful content,
          <br />
          and track their progress with
          <br />
          CAPACITY CONNECT.
        </p>

        <button className="manage-course-btn">
          <span>Manage My Courses</span>
          <span className="arrow">→</span>
        </button>

      </div>


      {/* RIGHT SIDE */}
      <div className="welcome-illustration">
        <img
          src={welcomeBanner}
          alt="Trainer learning illustration"
        />
      </div>

    </section>

  );
}

export default WelcomeBanner;