import { useState } from "react";
import { useNavigate } from "react-router-dom";
import roadmaps from "../data/roadmaps";
import "./DailyPlan.css";

function DailyPlan() {
  const navigate = useNavigate();

  const savedDomain =
    JSON.parse(localStorage.getItem("futureMeDomain")) || {};

  const roadmap = roadmaps[savedDomain.id];

  const [dailyHours, setDailyHours] = useState("");

  if (!roadmap) {
    return (
      <div className="daily-error">
        <h2>No roadmap selected.</h2>

        <button onClick={() => navigate("/domains")}>
          Choose a Domain
        </button>
      </div>
    );
  }

  const options = [
    {
      value: 0.5,
      label: "30 MIN",
      description: "Light but consistent",
    },
    {
      value: 1,
      label: "1 HOUR",
      description: "Balanced learning",
    },
    {
      value: 2,
      label: "2 HOURS",
      description: "Focused progress",
    },
    {
      value: 3,
      label: "3 HOURS",
      description: "Fast progress",
    },
    {
      value: 4,
      label: "4+ HOURS",
      description: "Intensive learning",
    },
  ];

  /* =========================
     WEEKLY PLAN
  ========================= */

  const getPlan = () => {
    // Nothing selected yet
    if (!dailyHours) {
      return [
        ["Monday", "—", "—"],
        ["Tuesday", "—", "—"],
        ["Wednesday", "—", "—"],
        ["Thursday", "—", "—"],
        ["Friday", "—", "—"],
        ["Saturday", "—", "—"],
        ["Sunday", "—", "—"],
      ];
    }

    // 30 MIN
    if (dailyHours === 0.5) {
      return [
        ["Monday", "Learn", "30 min"],
        ["Tuesday", "Practice", "30 min"],
        ["Wednesday", "Revision", "30 min"],
        ["Thursday", "Learn", "30 min"],
        ["Friday", "Practice", "30 min"],
        ["Saturday", "Mini Project", "30 min"],
        ["Sunday", "Weekly Review", "30 min"],
      ];
    }

    // 1 HOUR
    if (dailyHours === 1) {
      return [
        ["Monday", "Learn + Practice", "1 hr"],
        ["Tuesday", "Learn + Coding", "1 hr"],
        ["Wednesday", "Revision + Practice", "1 hr"],
        ["Thursday", "Learn + Coding", "1 hr"],
        ["Friday", "Theory + Problems", "1 hr"],
        ["Saturday", "Project Work", "1 hr"],
        ["Sunday", "Revision + Review", "1 hr"],
      ];
    }

    // 2 HOURS
    if (dailyHours === 2) {
      return [
        ["Monday", "Learn + Practice", "2 hrs"],
        ["Tuesday", "Learn + Coding", "2 hrs"],
        ["Wednesday", "Revision + Problems", "2 hrs"],
        ["Thursday", "Learn + Coding", "2 hrs"],
        ["Friday", "Practice + Problems", "2 hrs"],
        ["Saturday", "Project Development", "2 hrs"],
        ["Sunday", "Revision + Weekly Review", "2 hrs"],
      ];
    }

    // 3 HOURS
    if (dailyHours === 3) {
      return [
        ["Monday", "Theory + Practice", "3 hrs"],
        ["Tuesday", "Coding + Practice", "3 hrs"],
        ["Wednesday", "Advanced Learning", "3 hrs"],
        ["Thursday", "Coding + Problems", "3 hrs"],
        ["Friday", "Practice + Revision", "3 hrs"],
        ["Saturday", "Project Development", "3 hrs"],
        ["Sunday", "Project + Weekly Review", "3 hrs"],
      ];
    }

    // 4+ HOURS
    return [
      ["Monday", "Deep Learning", "4+ hrs"],
      ["Tuesday", "Coding + Practice", "4+ hrs"],
      ["Wednesday", "Advanced Concepts", "4+ hrs"],
      ["Thursday", "Coding + Problems", "4+ hrs"],
      ["Friday", "Advanced Practice", "4+ hrs"],
      ["Saturday", "Project Development", "4+ hrs"],
      ["Sunday", "Project + Review", "4+ hrs"],
    ];
  };

  const weeklyPlan = getPlan();

  /* =========================
     CALCULATIONS
  ========================= */

  const weeklyHours = dailyHours ? dailyHours * 7 : 0;

  const completionDays = dailyHours
    ? Math.ceil(roadmap.totalHours / dailyHours)
    : 0;

  const completionWeeks = dailyHours
    ? Math.ceil(completionDays / 7)
    : 0;

  /* =========================
     SAVE PLAN
  ========================= */

  const savePlan = () => {
    if (!dailyHours) return;

    const plan = {
      domain: savedDomain.id,
      dailyHours,
      weeklyHours,
      completionDays,
      completionWeeks,
      weeklyPlan,
    };

    localStorage.setItem(
      "futureMeDailyPlan",
      JSON.stringify(plan)
    );

    navigate("/consistency");
  };

  return (
    <div className="daily-page">

      <div className="daily-grid"></div>

      <div className="daily-glow daily-glow-one"></div>
      <div className="daily-glow daily-glow-two"></div>

      {/* =========================
          NAV
      ========================= */}

      <nav className="daily-nav">

        <div className="daily-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="daily-step">
          STEP <strong>05</strong> / 09
        </div>

      </nav>

      <main className="daily-container">

        {/* =========================
            HEADER
        ========================= */}

        <section className="daily-header">

          <p>BUILD YOUR ROUTINE</p>

          <h1>
            How much time
            <br />
            <span>can you give?</span>
          </h1>

          <p className="daily-description">
            Choose a pace you can realistically maintain.
            FutureMe will turn your roadmap into a
            personalized weekly routine.
          </p>

        </section>

        {/* =========================
            TIME OPTIONS
        ========================= */}

        <section className="time-section">

          <div className="section-heading">

            <span>YOUR DAILY COMMITMENT</span>

            <small>
              Consistency matters more than intensity.
            </small>

          </div>

          <div className="time-options">

            {options.map((option) => (

              <button
                key={option.value}
                type="button"
                className={
                  dailyHours === option.value
                    ? "time-card active"
                    : "time-card"
                }
                onClick={() =>
                  setDailyHours(option.value)
                }
              >

                <div className="time-check">
                  {dailyHours === option.value
                    ? "✓"
                    : ""}
                </div>

                <strong>
                  {option.label}
                </strong>

                <span>
                  {option.description}
                </span>

              </button>

            ))}

          </div>

        </section>

        {/* =========================
            PLAN PREVIEW
        ========================= */}

        <section className="plan-section">

          <div className="plan-heading">

            <div>

              <span>
                YOUR PERSONALIZED PLAN
              </span>

              <h2>
                {roadmap.name}
              </h2>

            </div>

            <div className="weekly-hours">

              <strong>
                {dailyHours
                  ? dailyHours === 4
                    ? "28+"
                    : weeklyHours
                  : "—"}
              </strong>

              <span>
                hrs / week
              </span>

            </div>

          </div>

          <div className="weekly-plan">

            {weeklyPlan.map(
              ([day, activity, time], index) => (

                <div
                  className="day-row"
                  key={day}
                >

                  <div className="day-number">
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  <div className="day-name">
                    {day}
                  </div>

                  <div className="day-activity">
                    {activity}
                  </div>

                  <div className="day-time">
                    {time}
                  </div>

                </div>

              )
            )}

          </div>

        </section>

        {/* =========================
            ESTIMATE
        ========================= */}

        <section className="estimate-card">

          <div className="estimate-icon">
            ⏱
          </div>

          <div className="estimate-content">

            <span>
              ESTIMATED ROADMAP TIME
            </span>

            <h2>

              {dailyHours
                ? `About ${completionWeeks} ${
                    completionWeeks === 1
                      ? "week"
                      : "weeks"
                  }`
                : "Select your daily time"}

            </h2>

            <p>

              {dailyHours ? (
                <>
                  At your selected pace of{" "}

                  <strong>
                    {dailyHours === 4
                      ? "4+ hours"
                      : `${dailyHours} hour${
                          dailyHours > 1
                            ? "s"
                            : ""
                        }`}
                  </strong>{" "}

                  per day, you can complete the{" "}

                  <strong>
                    {roadmap.name}
                  </strong>{" "}

                  roadmap in approximately{" "}

                  <strong>
                    {completionDays} days
                  </strong>.
                </>
              ) : (
                "Choose how much time you can give each day to see your personalized roadmap estimate."
              )}

            </p>

          </div>

        </section>

        {/* =========================
            PRINCIPLE
        ========================= */}

        <div className="consistency-message">

          <div className="message-line"></div>

          <div>

            <span>
              ✦ FUTUREME PRINCIPLE
            </span>

            <h3>
              Small progress every day
              <br />
              becomes a different future.
            </h3>

          </div>

          <div className="message-line"></div>

        </div>

        {/* =========================
            CONTINUE
        ========================= */}

        <button
          type="button"
          className="daily-continue"
          onClick={savePlan}
          disabled={!dailyHours}
        >

          {dailyHours
            ? "Start My Consistency Journey"
            : "Select Your Daily Time"}

          <span>→</span>

        </button>

      </main>

    </div>
  );
}

export default DailyPlan;