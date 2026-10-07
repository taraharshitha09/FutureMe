import { useNavigate } from "react-router-dom";

import { logout } from "../utils/logout";
import "./Dashboard.css";
function Dashboard() {
  const navigate = useNavigate();

  const profile =
    JSON.parse(localStorage.getItem("futureMeProfile")) || {};
    const user =
  JSON.parse(localStorage.getItem("futureMeUser")) || {};

  const domain =
    JSON.parse(localStorage.getItem("futureMeDomain")) || {};

  const dailyPlan =
    JSON.parse(localStorage.getItem("futureMeDailyPlan")) || {};

  const consistency =
    JSON.parse(localStorage.getItem("futureMeConsistency")) || {};

  const roadmapProgress =
    JSON.parse(
      localStorage.getItem("futureMeRoadmapProgress")
    ) || {};

  const futureChoice =
    localStorage.getItem("futureMeFutureChoice") || "";

  const roadmapCompleted =
    roadmapProgress.completedStages || [];

  const streak =
    consistency.streak || 0;

  const dailyHours =
    dailyPlan.hours || dailyPlan.dailyHours || 1;

  const futureNames = {
    safe: {
      icon: "🌱",
      name: "Safe Path"
    },
    ambitious: {
      icon: "🚀",
      name: "High-Growth Path"
    },
    bold: {
      icon: "⚡",
      name: "Bold Path"
    }
  };

  const selectedFuture =
    futureNames[futureChoice] || {
      icon: "🔮",
      name: "Not selected yet"
    };

  const roadmapPercent =
    roadmapProgress.progress ||
    roadmapProgress.percentage ||
    0;

  const futureScore = Math.min(
    100,
    50 +
      roadmapCompleted.length * 5 +
      streak * 3
  );

  const skillGrowth = Math.min(
    100,
    30 +
      roadmapCompleted.length * 8
  );

  const readiness = Math.min(
    100,
    25 +
      roadmapCompleted.length * 10 +
      streak * 2
  );

  return (
    <div className="dashboard-page">

      {/* BACKGROUND */}
      <div className="dashboard-grid"></div>
      <div className="dashboard-glow dashboard-glow-one"></div>
      <div className="dashboard-glow dashboard-glow-two"></div>

      {/* NAVBAR */}
      <nav className="dashboard-nav">

        <div
          className="dashboard-logo"
          onClick={() => navigate("/domains")}
        >
          <span>✦</span>
          FutureMe
        </div>

        <div className="dashboard-nav-links">
          <button onClick={() => navigate("/roadmap")}>
            Roadmap
          </button>

          <button onClick={() => navigate("/simulation")}>
            Futures
          </button>

          <button className="active">
            Dashboard
          </button>
        </div>
        <button
  className="logout-button"
  onClick={logout}
>
  Logout
</button>

        <div className="dashboard-avatar">
          {(user.name || "T").charAt(0).toUpperCase()}
        </div>

      </nav>


      {/* MAIN */}
      <main className="dashboard-container">

        {/* HEADER */}
        <section className="dashboard-header">

          <div>

            <p className="dashboard-eyebrow">
              YOUR FUTURE DASHBOARD
            </p>

            <h1>
             

              Welcome,
<span> {user.name || "Future Builder"}.</span>
            </h1>

            <p className="dashboard-subtitle">
              Here's a snapshot of the person you're becoming.
            </p>

          </div>

          <div className="dashboard-domain-pill">

            <span>
              {domain.icon || "💻"}
            </span>

            <div>
              <small>CURRENT DIRECTION</small>
              <strong>
                {domain.name || "Explore your direction"}
              </strong>
            </div>

          </div>

        </section>


        {/* SCORE */}
        <section className="future-score-card">

          <div className="score-left">

            <div className="score-ring">
              <div>
                <strong>{futureScore}</strong>
                <span>/100</span>
              </div>
            </div>

          </div>

          <div className="score-content">

            <p>FUTURE SCORE</p>

            <h2>
              You're building momentum.
            </h2>

            <span>
              Your score reflects your roadmap progress,
              consistency and learning commitment.
            </span>

          </div>

          <div className="score-arrow">
            ↗
          </div>

        </section>


        {/* STATS */}
        <section className="dashboard-stats">

          <div className="stat-card">

            <div className="stat-icon purple">
              ⏱
            </div>

            <div>
              <span>DAILY COMMITMENT</span>
              <strong>
                {dailyHours}h
              </strong>
              <small>
                Learning every day
              </small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon blue">
              🗺
            </div>

            <div>
              <span>ROADMAP PROGRESS</span>
              <strong>
                {roadmapPercent}%
              </strong>
              <small>
                Path completed
              </small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon orange">
              🔥
            </div>

            <div>
              <span>CONSISTENCY</span>
              <strong>
                {streak} days
              </strong>
              <small>
                Current streak
              </small>
            </div>

          </div>


          <div className="stat-card">

            <div className="stat-icon pink">
              📈
            </div>

            <div>
              <span>SKILL GROWTH</span>
              <strong>
                {skillGrowth}%
              </strong>
              <small>
                Estimated growth
              </small>
            </div>

          </div>

        </section>


        {/* TWO COLUMN AREA */}
        <section className="dashboard-columns">


          {/* LEFT */}
          <div className="dashboard-panel">

            <div className="panel-heading">

              <div>
                <span>01</span>
                <h2>Your Journey</h2>
              </div>

              <button
                onClick={() => navigate("/roadmap")}
              >
                View roadmap →
              </button>

            </div>


            <div className="journey-item">

              <div className="journey-number active">
                01
              </div>

              <div className="journey-info">

                <span>YOUR DIRECTION</span>

                <h3>
                  {domain.name || "Choose a domain"}
                </h3>

                <p>
                  Your current technology direction.
                </p>

              </div>

              <div className="journey-status">
                ✓
              </div>

            </div>


            <div className="journey-line"></div>


            <div className="journey-item">

              <div className="journey-number">
                02
              </div>

              <div className="journey-info">

                <span>ROADMAP</span>

                <h3>
                  Build your skills
                </h3>

                <p>
                  {roadmapCompleted.length} roadmap stages completed.
                </p>

              </div>

              <div className="journey-progress">
                {roadmapPercent}%
              </div>

            </div>


            <div className="journey-line"></div>


            <div className="journey-item">

              <div className="journey-number">
                03
              </div>

              <div className="journey-info">

                <span>FUTURE</span>

                <h3>
                  {selectedFuture.name}
                </h3>

                <p>
                  The direction you've chosen to explore.
                </p>

              </div>

              <div className="journey-future">
                {selectedFuture.icon}
              </div>

            </div>

          </div>


          {/* RIGHT */}
          <div className="dashboard-panel readiness-panel">

            <div className="panel-heading">

              <div>
                <span>02</span>
                <h2>Future Readiness</h2>
              </div>

            </div>


            <div className="readiness-circle">

              <div className="readiness-inner">

                <strong>
                  {readiness}%
                </strong>

                <span>
                  READY
                </span>

              </div>

            </div>


            <div className="readiness-message">

              <h3>
                Keep moving forward.
              </h3>

              <p>
                Every completed stage makes your
                future more defined.
              </p>

            </div>


            <button
              className="continue-button"
              onClick={() => navigate("/roadmap")}
            >
              Continue Learning
              <span>→</span>
            </button>

          </div>

        </section>


        {/* FUTURE CARD */}
        <section className="future-dashboard-card">

          <div className="future-dashboard-icon">
            {selectedFuture.icon}
          </div>

          <div className="future-dashboard-content">

            <span>
              YOUR POSSIBLE FUTURE
            </span>

            <h2>
              {selectedFuture.name}
            </h2>

            <p>
              Your future isn't fixed. Keep learning,
              experimenting and choosing the direction
              that feels right for you.
            </p>

          </div>

          <button
            onClick={() => navigate("/simulation")}
          >
            Explore Futures →
          </button>

        </section>


        {/* QUICK ACTIONS */}
        <section className="quick-actions">

          <p>
            KEEP EXPLORING
          </p>

          <div className="quick-grid">

            <button
              onClick={() => navigate("/roadmap")}
            >
              <span>🗺️</span>
              <div>
                <strong>Continue Roadmap</strong>
                <small>Keep building your skills</small>
              </div>
              →
            </button>


            <button
              onClick={() => navigate("/daily-plan")}
            >
              <span>⏱️</span>
              <div>
                <strong>Daily Plan</strong>
                <small>See today's learning plan</small>
              </div>
              →
            </button>


            <button
              onClick={() => navigate("/simulation")}
            >
              <span>🔮</span>
              <div>
                <strong>Explore Futures</strong>
                <small>Compare possible paths</small>
              </div>
              →
            </button>

          </div>

        </section>


        {/* FOOTER */}
        <footer className="dashboard-footer">

          <span>✦ FutureMe</span>

          <p>
            Your future isn't one path. Explore the possibilities.
          </p>

        </footer>

      </main>

    </div>
  );
}

export default Dashboard;