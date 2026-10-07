import { useState } from "react";
import { useNavigate } from "react-router-dom";
import futurePaths from "../data/futurePathsTemp2";
import "./Simulation.css";

function Simulation() {
  const navigate = useNavigate();

  const domain =
    JSON.parse(
      localStorage.getItem("futureMeDomain")
    ) || {};

  const profile =
    JSON.parse(
      localStorage.getItem("futureMeProfile")
    ) || {};

const user =
  JSON.parse(
    localStorage.getItem("futureMeUser")
  ) || {};

  const paths = futurePaths[domain.id];

  const [selectedPath, setSelectedPath] = useState(
    localStorage.getItem("futureMeFutureChoice") ||
      ""
  );

  if (!paths) {
    return (
      <div className="simulation-error">
        <h2>Future paths not found.</h2>

        <button
          onClick={() => navigate("/domains")}
        >
          Choose a Domain
        </button>
      </div>
    );
  }

  const choosePath = (id) => {
    setSelectedPath(id);

    localStorage.setItem(
      "futureMeFutureChoice",
      id
    );
  };

  const continueJourney = () => {
    if (!selectedPath) {
      alert(
        "Choose a possible future first."
      );
      return;
    }

    navigate("/parallel-you");
  };

  const pathData = [
    {
      id: "safe",
      icon: "🌱",
      label: "SAFE PATH",
      className: "safe"
    },
    {
      id: "ambitious",
      icon: "🚀",
      label: "HIGH-GROWTH PATH",
      className: "ambitious"
    },
    {
      id: "bold",
      icon: "⚡",
      label: "BOLD PATH",
      className: "bold"
    }
  ];

  return (
    <div className="simulation-page">

      <div className="simulation-grid"></div>

      <div className="simulation-glow glow-one"></div>
      <div className="simulation-glow glow-two"></div>

      {/* NAV */}

      <nav className="simulation-nav">

        <div className="simulation-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="simulation-step">
          STEP <strong>07</strong> / 09
        </div>

      </nav>

      <main className="simulation-container">

        {/* HEADER */}

        <section className="simulation-header">

          <p>EXPLORE THE POSSIBILITIES</p>

          <h1>
            Your future
            <br />
            <span>isn't one path.</span>
          </h1>

          <p className="simulation-description">
           {user.name
  ? `${user.name}, `
  : ""}
            there isn't a single version of your
            future waiting to happen.
            The choices you make can lead to
            very different possibilities.
          </p>

          <div className="simulation-domain">

            <span>
              CURRENT DIRECTION
            </span>

            <strong>
              {domain.icon} {domain.name}
            </strong>

          </div>

        </section>

        {/* FUTURE CARDS */}

        <section className="future-paths">

          {pathData.map((path) => {

            const data = paths[path.id];

            if (!data) return null;

            const selected =
              selectedPath === path.id;

            return (
              <article
                key={path.id}
                className={`
                  future-card
                  ${path.className}
                  ${selected ? "selected" : ""}
                `}
                onClick={() =>
                  choosePath(path.id)
                }
              >

                <div className="future-card-top">

                  <div className="future-icon">
                    {path.icon}
                  </div>

                  <span className="future-label">
                    {path.label}
                  </span>

                  {selected && (
                    <span className="selected-badge">
                      ✓ SELECTED
                    </span>
                  )}

                </div>

                <h2>
                  {data.role}
                </h2>

                <p className="future-description">
                  {data.description}
                </p>

                <div className="future-environment">

                  <span>
                    WORK ENVIRONMENT
                  </span>

                  <strong>
                    {data.environment}
                  </strong>

                </div>

                <div className="future-stats">

                  <div>
                    <small>
                      STABILITY
                    </small>

                    <strong>
                      {data.stability}
                    </strong>
                  </div>

                  <div>
                    <small>
                      GROWTH
                    </small>

                    <strong>
                      {data.growth}
                    </strong>
                  </div>

                  <div>
                    <small>
                      RISK
                    </small>

                    <strong>
                      {data.risk}
                    </strong>
                  </div>

                </div>

                <div className="future-bottom">

                  <div>
                    <span>
                      LEARNING
                    </span>

                    <strong>
                      {data.learning}
                    </strong>
                  </div>

                  <div>
                    <span>
                      OPPORTUNITY
                    </span>

                    <strong>
                      {data.opportunity}
                    </strong>
                  </div>

                </div>

                <div className="future-timeline">

  <span>POSSIBLE TIMELINE</span>

  <div className="timeline-list">
    {data.timeline.map((step, index) => (
      <div className="timeline-item" key={index}>
        <span className="timeline-number">
          {index + 1}
        </span>

        <strong>
          {step}
        </strong>
      </div>
    ))}
  </div>

</div>
                <div className="future-select">

                  {selected
                    ? "✓ This path feels right"
                    : "Explore this future →"}

                </div>

              </article>
            );
          })}

        </section>

        {/* DISCLAIMER */}

        <div className="simulation-note">

          <span>✦</span>

          <p>
            These are <strong>possible scenarios</strong>,
            not predictions. Your future can change
            as your interests, skills and decisions evolve.
          </p>

        </div>

        {/* CONTINUE */}

        <section className="simulation-continue">

          <div>

            <span>
              SEE YOUR FUTURES SIDE BY SIDE
            </span>

            <h2>
              Meet the different versions of you.
            </h2>

          </div>

          <button
            onClick={continueJourney}
          >
            Compare My Futures
            <span>→</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default Simulation;