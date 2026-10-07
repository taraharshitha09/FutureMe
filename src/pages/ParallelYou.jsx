import { useNavigate } from "react-router-dom";
import futurePaths from "../data/futurePathsTemp2";
import "./ParallelYou.css";

function ParallelYou() {
  const navigate = useNavigate();

  const domain =
    JSON.parse(localStorage.getItem("futureMeDomain")) || {};

  const profile =
    JSON.parse(localStorage.getItem("futureMeProfile")) || {};

    const user =
  JSON.parse(localStorage.getItem("futureMeUser")) || {};

  const selectedPath =
    localStorage.getItem("futureMeFutureChoice") || "";

  const paths = futurePaths[domain.id];

  if (!paths) {
    return (
      <div className="parallel-error">
        <h2>Future paths not found.</h2>

        <button onClick={() => navigate("/domains")}>
          Choose a Domain
        </button>
      </div>
    );
  }

  const pathData = [
    {
      id: "safe",
      icon: "🌱",
      label: "SAFE YOU",
      className: "safe"
    },
    {
      id: "ambitious",
      icon: "🚀",
      label: "HIGH-GROWTH YOU",
      className: "ambitious"
    },
    {
      id: "bold",
      icon: "⚡",
      label: "BOLD YOU",
      className: "bold"
    }
  ];

  return (
    <div className="parallel-page">

      <div className="parallel-grid"></div>

      <div className="parallel-glow parallel-glow-one"></div>
      <div className="parallel-glow parallel-glow-two"></div>

      {/* NAVBAR */}

      <nav className="parallel-nav">

        <div className="parallel-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="parallel-step">
          STEP <strong>08</strong> / 09
        </div>

      </nav>

      {/* HEADER */}

      <main className="parallel-container">

        <section className="parallel-header">

          <p>PARALLEL YOU</p>

          <h1>
            Three paths.
            <br />
            <span>Three possible yous.</span>
          </h1>

          <p className="parallel-description">
            {user.name
              ? `${user.name}, `
              : ""}
            the future isn't about choosing the "perfect"
            path. It's about understanding where different
            decisions could take you.
          </p>

          <div className="parallel-domain">
            <span>YOUR CURRENT DIRECTION</span>

            <strong>
              {domain.icon} {domain.name}
            </strong>
          </div>

        </section>

        {/* FUTURE COMPARISON */}

        <section className="parallel-paths">

          {pathData.map((path) => {

            const data = paths[path.id];

            if (!data) return null;

            const isSelected =
              selectedPath === path.id;

            return (
              <article
                key={path.id}
                className={`parallel-card ${path.className} ${
                  isSelected ? "selected" : ""
                }`}
              >

                {isSelected && (
                  <div className="your-choice">
                    ✦ YOUR CHOICE
                  </div>
                )}

                <div className="parallel-card-top">

                  <div className="parallel-icon">
                    {path.icon}
                  </div>

                  <span>
                    {path.label}
                  </span>

                </div>

                <h2>{data.role}</h2>

                <p className="parallel-description-text">
                  {data.description}
                </p>

                <div className="parallel-info">

                  <div>
                    <span>ENVIRONMENT</span>
                    <strong>
                      {data.environment}
                    </strong>
                  </div>

                  <div>
                    <span>STABILITY</span>
                    <strong>
                      {data.stability}
                    </strong>
                  </div>

                  <div>
                    <span>GROWTH</span>
                    <strong>
                      {data.growth}
                    </strong>
                  </div>

                  <div>
                    <span>RISK</span>
                    <strong>
                      {data.risk}
                    </strong>
                  </div>

                </div>

                <div className="parallel-divider"></div>

                <div className="parallel-learning">

                  <div>
                    <span>LEARNING</span>
                    <strong>
                      {data.learning}
                    </strong>
                  </div>

                  <div>
                    <span>OPPORTUNITY</span>
                    <strong>
                      {data.opportunity}
                    </strong>
                  </div>

                </div>

                <div className="parallel-timeline">

                  <span>YOUR POSSIBLE JOURNEY</span>

                  {data.timeline.map(
                    (step, index) => (
                      <div
                        className="parallel-timeline-item"
                        key={index}
                      >
                        <span>
                          {index + 1}
                        </span>

                        <p>{step}</p>
                      </div>
                    )
                  )}

                </div>

              </article>
            );
          })}

        </section>

        {/* MESSAGE */}

        <section className="parallel-message">

          <div className="message-icon">
            ✦
          </div>

          <div>

            <span>
              REMEMBER
            </span>

            <h2>
              You are not choosing your destiny.
            </h2>

            <p>
              You're choosing the direction you want
              to explore. Your skills, interests and
              decisions can always change your path.
            </p>

          </div>

        </section>

        {/* CONTINUE */}

        <section className="parallel-continue">

          <div>

            <span>
              READY TO BUILD YOUR FUTURE?
            </span>

            <h2>
              Turn possibilities into progress.
            </h2>

          </div>

          <button
            onClick={() => navigate("/dashboard")}
          >
            Open My Dashboard
            <span>→</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default ParallelYou;