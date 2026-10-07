import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pages.css";

function Decisions() {
  const navigate = useNavigate();

  const [risk, setRisk] = useState(50);
  const [learning, setLearning] = useState("Projects");
  const [workStyle, setWorkStyle] = useState("Team");
  const [careerStyle, setCareerStyle] =
    useState("Product Company");
  const [focus, setFocus] = useState("Growth");

  const handleContinue = () => {

    const decisions = {
      risk,
      learning,
      workStyle,
      careerStyle,
      focus,
    };

    localStorage.setItem(
      "futureMeDecisions",
      JSON.stringify(decisions)
    );

    navigate("/simulation");
  };

  const riskLabel =
    risk < 35
      ? "Low Risk"
      : risk < 70
      ? "Balanced"
      : "High Risk";

  return (
    <div className="decisions-page">

      <div className="page-grid"></div>

      <nav className="page-nav">

        <div className="page-logo">
          <span>✦</span> FutureMe
        </div>

        <div className="page-step">
          STEP <strong>03</strong> / 04
        </div>

      </nav>

      <main className="decisions-container">

        <section className="decisions-intro">

          <p className="page-overline">
            THE DECISIONS THAT SHAPE YOU
          </p>

          <h1>
            What kind of
            <br />
            <span>future do you want?</span>
          </h1>

          <p>
            There is no right answer.
            Your choices simply create different
            possibilities.
          </p>

          <div className="decision-orbit">

            <div className="orbit-ring"></div>

            <div className="orbit-core">
              YOU
            </div>

            <span className="orbit-item one">
              RISK
            </span>

            <span className="orbit-item two">
              GROWTH
            </span>

            <span className="orbit-item three">
              FREEDOM
            </span>

            <span className="orbit-item four">
              LEARNING
            </span>

          </div>

        </section>

        <section className="decisions-card">

          <div className="card-header">

            <div>
              <span>YOUR DECISIONS</span>
              <h2>Choose your direction.</h2>
            </div>

            <strong>03</strong>

          </div>

          {/* RISK */}

          <div className="decision-section">

            <div className="decision-title">

              <div>

                <label>
                  RISK TOLERANCE
                </label>

                <p>
                  How comfortable are you with uncertainty?
                </p>

              </div>

              <strong>
                {riskLabel}
              </strong>

            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={risk}
              onChange={(e) =>
                setRisk(Number(e.target.value))
              }
              className="risk-slider"
            />

            <div className="slider-labels">
              <span>Stable</span>
              <span>Balanced</span>
              <span>Bold</span>
            </div>

          </div>

          {/* LEARNING */}

          <div className="decision-section">

            <label>
              HOW DO YOU LEARN BEST?
            </label>

            <div className="decision-options">

              {[
                ["📚", "Structured"],
                ["🧪", "Projects"],
                ["⚡", "Experiment"],
              ].map(([icon, value]) => (

                <button
                  type="button"
                  key={value}
                  className={
                    learning === value
                      ? "decision-option selected"
                      : "decision-option"
                  }
                  onClick={() =>
                    setLearning(value)
                  }
                >
                  <span>{icon}</span>
                  {value}
                </button>

              ))}

            </div>

          </div>

          {/* WORK STYLE */}

          <div className="decision-section">

            <label>
              HOW DO YOU LIKE TO WORK?
            </label>

            <div className="decision-options">

              {[
                ["👤", "Individual"],
                ["👥", "Team"],
                ["👑", "Leadership"],
              ].map(([icon, value]) => (

                <button
                  type="button"
                  key={value}
                  className={
                    workStyle === value
                      ? "decision-option selected"
                      : "decision-option"
                  }
                  onClick={() =>
                    setWorkStyle(value)
                  }
                >
                  <span>{icon}</span>
                  {value}
                </button>

              ))}

            </div>

          </div>

          {/* CAREER STYLE */}

          <div className="decision-section">

            <label>
              WHAT KIND OF CAREER ATTRACTS YOU?
            </label>

            <div className="decision-options wide">

              {[
                ["🏢", "Enterprise"],
                ["🚀", "Startup"],
                ["🌎", "Remote"],
                ["💼", "Freelance"],
                ["🔬", "Research"],
              ].map(([icon, value]) => (

                <button
                  type="button"
                  key={value}
                  className={
                    careerStyle === value
                      ? "decision-option selected"
                      : "decision-option"
                  }
                  onClick={() =>
                    setCareerStyle(value)
                  }
                >
                  <span>{icon}</span>
                  {value}
                </button>

              ))}

            </div>

          </div>

          {/* PRIORITY */}

          <div className="decision-section">

            <label>
              YOUR BIGGEST PRIORITY
            </label>

            <div className="decision-options">

              {[
                ["💰", "Salary"],
                ["📈", "Growth"],
                ["🧘", "Stability"],
                ["🌎", "Freedom"],
                ["🧠", "Learning"],
              ].map(([icon, value]) => (

                <button
                  type="button"
                  key={value}
                  className={
                    focus === value
                      ? "decision-option selected"
                      : "decision-option"
                  }
                  onClick={() =>
                    setFocus(value)
                  }
                >
                  <span>{icon}</span>
                  {value}
                </button>

              ))}

            </div>

          </div>

          <button
            className="continue-button"
            onClick={handleContinue}
          >
            Reveal My Possible Futures
            <span>→</span>
          </button>

          <div className="page-note">
            ✦ Different decisions. Different possibilities.
          </div>

        </section>

      </main>

    </div>
  );
}

export default Decisions;