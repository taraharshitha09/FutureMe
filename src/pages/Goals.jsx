import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Goals() {
  const navigate = useNavigate();

  const [mainGoal, setMainGoal] = useState("");
  const [targetYear, setTargetYear] = useState("2030");
  const [dailyTime, setDailyTime] = useState("1 hour");
  const [priority, setPriority] = useState("");
  const [goal, setGoal] = useState("");

  const handleContinue = (e) => {
    e.preventDefault();

    if (!mainGoal || !priority || !goal) {
      alert("Please complete your goals first.");
      return;
    }

    const goals = {
      mainGoal,
      targetYear,
      dailyTime,
      priority,
      goal,
    };

    localStorage.setItem(
      "futureMeGoals",
      JSON.stringify(goals)
    );

    navigate("/decisions");
  };

  return (
    <div className="goals-page">
      <div className="page-grid"></div>

      <nav className="page-nav">
        <div className="page-logo">
          <span>✦</span> FutureMe
        </div>

        <div className="page-step">
          STEP <strong>02</strong> / 04
        </div>
      </nav>

      <main className="goals-container">

        <section className="goals-intro">
          <p className="page-overline">
            DEFINE YOUR DIRECTION
          </p>

          <h1>
            Where do you
            <br />
            <span>want to go?</span>
          </h1>

          <p>
            Your future starts with a direction.
            Tell us what you want to achieve and
            we'll create different possibilities around it.
          </p>

          <div className="direction-visual">

            <div className="direction-point active">
              <span>NOW</span>
              <b>YOU</b>
            </div>

            <div className="direction-line"></div>

            <div className="direction-point">
              <span>2030</span>
              <b>FUTURE</b>
            </div>

          </div>
        </section>

        <section className="goals-card">

          <div className="card-header">
            <div>
              <span>YOUR DIRECTION</span>
              <h2>Define your goals.</h2>
            </div>

            <strong>02</strong>
          </div>

          <form onSubmit={handleContinue}>

            <div className="field">

              <label>
                WHAT DO YOU WANT TO ACHIEVE?
              </label>

              <div className="goal-options">

                {[
                  ["💼", "Get a Job"],
                  ["🚀", "Build a Startup"],
                  ["🌎", "Freelancing"],
                  ["🎓", "Higher Studies"],
                  ["🔬", "Research"],
                  ["📈", "High Growth Career"],
                ].map(([icon, value]) => (

                  <button
                    type="button"
                    key={value}
                    className={
                      mainGoal === value
                        ? "goal-option selected"
                        : "goal-option"
                    }
                    onClick={() =>
                      setMainGoal(value)
                    }
                  >
                    <span>{icon}</span>
                    {value}
                  </button>

                ))}

              </div>

            </div>

            <div className="field">

              <label>
                DESCRIBE YOUR DREAM
              </label>

              <input
                type="text"
                placeholder="Example: I want to become an AI Engineer"
                value={goal}
                onChange={(e) =>
                  setGoal(e.target.value)
                }
              />

            </div>

            <div className="two-fields">

              <div className="field">

                <label>
                  TARGET YEAR
                </label>

                <select
                  value={targetYear}
                  onChange={(e) =>
                    setTargetYear(e.target.value)
                  }
                >
                  <option>2027</option>
                  <option>2028</option>
                  <option>2029</option>
                  <option>2030</option>
                  <option>2032</option>
                  <option>2035</option>
                </select>

              </div>

              <div className="field">

                <label>
                  DAILY LEARNING TIME
                </label>

                <select
                  value={dailyTime}
                  onChange={(e) =>
                    setDailyTime(e.target.value)
                  }
                >
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>2 hours</option>
                  <option>3 hours</option>
                  <option>4+ hours</option>
                </select>

              </div>

            </div>

            <div className="field">

              <label>
                WHAT MATTERS MOST TO YOU?
              </label>

              <div className="priority-options">

                {[
                  ["💰", "Salary"],
                  ["📈", "Career Growth"],
                  ["🧘", "Stability"],
                  ["🌎", "Freedom"],
                  ["🧠", "Learning"],
                ].map(([icon, value]) => (

                  <button
                    type="button"
                    key={value}
                    className={
                      priority === value
                        ? "priority-option selected"
                        : "priority-option"
                    }
                    onClick={() =>
                      setPriority(value)
                    }
                  >
                    <span>{icon}</span>
                    {value}
                  </button>

                ))}

              </div>

            </div>

            <button
              type="submit"
              className="continue-button"
            >
              Continue to Decisions
              <span>→</span>
            </button>

          </form>

          <div className="page-note">
            ✦ Your goals shape the futures we explore.
          </div>

        </section>

      </main>
    </div>
  );
}

export default Goals;