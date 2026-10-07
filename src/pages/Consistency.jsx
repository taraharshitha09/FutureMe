import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Consistency.css";

function Consistency() {
  const navigate = useNavigate();

  const profile =
    JSON.parse(localStorage.getItem("futureMeProfile")) || {};

    const user =
  JSON.parse(localStorage.getItem("futureMeUser")) || {};

  const dailyPlan =
    JSON.parse(localStorage.getItem("futureMeDailyPlan")) || {};

  const roadmapProgress =
    JSON.parse(
      localStorage.getItem("futureMeRoadmapProgress")
    ) || {};

  const domain =
    JSON.parse(
      localStorage.getItem("futureMeDomain")
    ) || {};

  const [week, setWeek] = useState(
    JSON.parse(
      localStorage.getItem("futureMeConsistency")
    ) || {
      checkedDays: [],
      totalHours: 0,
      streak: 0
    }
  );

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  const toggleDay = (day) => {
    const updatedDays = week.checkedDays.includes(day)
      ? week.checkedDays.filter(
          (item) => item !== day
        )
      : [...week.checkedDays, day];

    const updated = {
      ...week,
      checkedDays: updatedDays,
      streak: updatedDays.length
    };

    setWeek(updated);

    localStorage.setItem(
      "futureMeConsistency",
      JSON.stringify(updated)
    );
  };

  const addLearningHour = () => {
    const updated = {
      ...week,
      totalHours: Number(week.totalHours || 0) + 1
    };

    setWeek(updated);

    localStorage.setItem(
      "futureMeConsistency",
      JSON.stringify(updated)
    );
  };

  const roadmapCompleted =
    roadmapProgress[domain.id]?.length || 0;

  const roadmapTotal =
    roadmapProgress[domain.id]?.length
      ? Math.max(
          roadmapProgress[domain.id].length,
          1
        )
      : 0;

  const weeklyTarget =
    dailyPlan.dailyHours
      ? dailyPlan.dailyHours * 7
      : 7;

  const weeklyProgress =
    Math.min(
      100,
      Math.round(
        ((week.checkedDays.length *
          (dailyPlan.dailyHours || 1)) /
          weeklyTarget) *
          100
      )
    );

  const achievements = [
    {
      icon: "🌱",
      title: "First Step",
      description: "Started your FutureMe journey",
      unlocked: true
    },
    {
      icon: "🔥",
      title: "Consistency Starter",
      description: "Complete 3 learning days",
      unlocked: week.checkedDays.length >= 3
    },
    {
      icon: "⚡",
      title: "One Week Strong",
      description: "Complete all 7 days",
      unlocked: week.checkedDays.length >= 7
    },
    {
      icon: "📚",
      title: "Learning Builder",
      description: "Log your first learning hour",
      unlocked: week.totalHours >= 1
    }
  ];

  return (
    <div className="consistency-page">

      <div className="consistency-grid"></div>

      <div className="consistency-glow glow-one"></div>
      <div className="consistency-glow glow-two"></div>

      {/* NAV */}

      <nav className="consistency-nav">

        <div className="consistency-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="consistency-step">
          STEP <strong>06</strong> / 09
        </div>

      </nav>

      <main className="consistency-container">

        {/* HEADER */}

        <section className="consistency-header">

          <p>BUILD YOUR MOMENTUM</p>

          <h1>
            Progress is built
            <br />
            <span>one day at a time.</span>
          </h1>

          <p className="header-description">
            You don't need perfect days.
            You just need to keep showing up.
          </p>

        </section>

        {/* WELCOME */}

        <section className="welcome-card">

          <div>

            <span>YOUR CURRENT PATH</span>

<h2>
  {user.name
    ? `${user.name}'s`
    : "Your"}{" "}
  {domain.name || "learning"} journey
</h2>

          </div>

          <div className="streak-display">

            <strong>
              🔥 {week.streak}
            </strong>

            <span>
              DAY STREAK
            </span>

          </div>

        </section>

        {/* STATS */}

        <section className="stats-grid">

          <div className="stat-card">

            <span>🔥</span>

            <small>
              CURRENT STREAK
            </small>

            <strong>
              {week.streak} days
            </strong>

          </div>

          <div className="stat-card">

            <span>⏱️</span>

            <small>
              LEARNING HOURS
            </small>

            <strong>
              {week.totalHours} hrs
            </strong>

          </div>

          <div className="stat-card">

            <span>📅</span>

            <small>
              WEEKLY TARGET
            </small>

            <strong>
              {dailyPlan.dailyHours
                ? dailyPlan.dailyHours
                : 1} hr/day
            </strong>

          </div>

          <div className="stat-card">

            <span>🎯</span>

            <small>
              WEEKLY PROGRESS
            </small>

            <strong>
              {weeklyProgress}%
            </strong>

          </div>

        </section>

        {/* WEEKLY TRACKER */}

        <section className="tracker-section">

          <div className="section-heading">

            <div>
              <span>
                THIS WEEK
              </span>

              <h2>
                Keep your rhythm.
              </h2>
            </div>

            <small>
              {week.checkedDays.length} / 7 days
            </small>

          </div>

          <div className="days-card">

            {days.map((day, index) => {

              const completed =
                week.checkedDays.includes(day);

              return (
                <button
                  key={day}
                  className={
                    completed
                      ? "day-check active"
                      : "day-check"
                  }
                  onClick={() =>
                    toggleDay(day)
                  }
                >

                  <span className="day-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>

                  <strong>
                    {day.slice(0, 3)}
                  </strong>

                  <div className="check-circle">
                    {completed
                      ? "✓"
                      : ""}
                  </div>

                </button>
              );
            })}

          </div>

        </section>

        {/* PROGRESS */}

        <section className="progress-section">

          <div className="progress-header">

            <div>
              <span>
                LEARNING MOMENTUM
              </span>

              <h2>
                Your weekly progress
              </h2>
            </div>

            <strong>
              {weeklyProgress}%
            </strong>

          </div>

          <div className="big-progress-track">

            <div
              className="big-progress-fill"
              style={{
                width: `${weeklyProgress}%`
              }}
            ></div>

          </div>

          <p>
            Your target is{" "}
            <strong>
              {dailyPlan.dailyHours || 1}
              {" "}hour
            </strong>{" "}
            every day. Keep going — consistency
            compounds over time.
          </p>

          <button
            className="log-hour-button"
            onClick={addLearningHour}
          >
            + Log 1 Learning Hour
          </button>

        </section>

        {/* MILESTONES */}

        <section className="milestone-section">

          <div className="section-heading">

            <div>
              <span>
                YOUR MILESTONES
              </span>

              <h2>
                Small wins become momentum.
              </h2>
            </div>

          </div>

          <div className="achievement-grid">

            {achievements.map(
              (achievement) => (

                <div
                  className={
                    achievement.unlocked
                      ? "achievement unlocked"
                      : "achievement"
                  }
                  key={achievement.title}
                >

                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>

                  <div>
                    <strong>
                      {achievement.title}
                    </strong>

                    <p>
                      {achievement.description}
                    </p>
                  </div>

                  <span className="achievement-status">
                    {achievement.unlocked
                      ? "UNLOCKED"
                      : "LOCKED"}
                  </span>

                </div>

              )
            )}

          </div>

        </section>

        {/* ROADMAP STATUS */}

        <section className="roadmap-status">

          <div className="status-icon">
            🗺️
          </div>

          <div className="status-content">

            <span>
              ROADMAP STATUS
            </span>

            <h2>
              Keep moving through your roadmap.
            </h2>

            <p>
              {roadmapCompleted > 0
                ? `${roadmapCompleted} stage${
                    roadmapCompleted > 1
                      ? "s"
                      : ""
                  } completed so far.`
                : "You haven't completed a roadmap stage yet."}
            </p>

          </div>

          <button
            onClick={() =>
              navigate("/roadmap")
            }
          >
            View Roadmap →
          </button>

        </section>

        {/* NEXT */}

        <section className="future-next">

          <div>

            <span>
              READY TO LOOK AHEAD?
            </span>

            <h2>
              Now explore where this path
              could take you.
            </h2>

            <p>
              Your future isn't a prediction.
              It's a set of possibilities.
            </p>

          </div>

          <button
            onClick={() =>
              navigate("/simulation")
            }
          >
            Explore My Possible Futures
            <span>→</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default Consistency;