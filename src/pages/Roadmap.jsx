import { useState } from "react";
import { useNavigate } from "react-router-dom";
import roadmaps from "../data/roadmaps";
import "./Roadmap.css";

function Roadmap() {
  const navigate = useNavigate();

  const savedDomain =
    JSON.parse(localStorage.getItem("futureMeDomain")) || {};

  const domainId = savedDomain.id;

  const roadmap = roadmaps[domainId];

  const savedProgress =
    JSON.parse(
      localStorage.getItem("futureMeRoadmapProgress")
    ) || {};

  const [completed, setCompleted] = useState(
    savedProgress[domainId] || []
  );

  if (!roadmap) {
    return (
      <div className="roadmap-error">
        <h2>Roadmap not found.</h2>
        <button onClick={() => navigate("/domains")}>
          Choose a Domain
        </button>
      </div>
    );
  }

  const toggleStep = (index) => {
    const updated = completed.includes(index)
      ? completed.filter((item) => item !== index)
      : [...completed, index];

    setCompleted(updated);

    localStorage.setItem(
      "futureMeRoadmapProgress",
      JSON.stringify({
        ...savedProgress,
        [domainId]: updated
      })
    );
  };

  const progress =
    roadmap.steps.length === 0
      ? 0
      : Math.round(
          (completed.length / roadmap.steps.length) * 100
        );

  return (
    <div className="roadmap-page">

      <div className="roadmap-grid"></div>

      <div className="roadmap-glow roadmap-glow-one"></div>
      <div className="roadmap-glow roadmap-glow-two"></div>

      {/* NAV */}

      <nav className="roadmap-nav">

        <div className="roadmap-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="roadmap-step">
          STEP <strong>04</strong> / 09
        </div>

      </nav>

      <main className="roadmap-container">

        {/* HEADER */}

        <section className="roadmap-hero">

          <div className="roadmap-icon">
            {roadmap.icon}
          </div>

          <div className="roadmap-heading">

            <p>YOUR ROADMAP</p>

            <h1>
              {roadmap.name}
            </h1>

            <span>
              {roadmap.target}
            </span>

          </div>

        </section>

        {/* SUMMARY */}

        <section className="roadmap-summary">

          <div>
            <small>ROADMAP PROGRESS</small>

            <strong>
              {progress}%
            </strong>
          </div>

          <div className="progress-track">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`
              }}
            ></div>
          </div>

          <div className="roadmap-stat">
            <small>ESTIMATED TIME</small>

            <strong>
              {roadmap.totalHours} hrs
            </strong>
          </div>

          <div className="roadmap-stat">
            <small>STAGES</small>

            <strong>
              {roadmap.steps.length}
            </strong>
          </div>

        </section>

        {/* INTRO */}

        <div className="roadmap-intro">

          <div>
            <span>HOW DO I GET THERE?</span>

            <h2>
              Your path, from zero to ready.
            </h2>
          </div>

          <p>
            Follow each stage in order. Learn the
            concepts, use the resources and complete
            the project before moving forward.
          </p>

        </div>

        {/* ROADMAP */}

        <section className="roadmap-list">

          {roadmap.steps.map((step, index) => {

            const isCompleted =
              completed.includes(index);

            return (
              <article
                className={
                  isCompleted
                    ? "roadmap-step-card completed"
                    : "roadmap-step-card"
                }
                key={index}
              >

                {/* NUMBER */}

                <div className="roadmap-number">

                  <div>
                    {isCompleted
                      ? "✓"
                      : String(index + 1).padStart(2, "0")}
                  </div>

                  {index !==
                    roadmap.steps.length - 1 && (
                    <span></span>
                  )}

                </div>

                {/* CONTENT */}

                <div className="roadmap-step-content">

                  <div className="step-top">

                    <div>
                      <span className="stage-label">
                        STAGE {index + 1}
                      </span>

                      <h3>
                        {step.title}
                      </h3>
                    </div>

                    <div className="step-time">
                      ⏱ {step.time}
                    </div>

                  </div>

                  {/* LEARN */}

                  <div className="learn-section">

                    <div className="content-label">
                      WHAT YOU'LL LEARN
                    </div>

                    <div className="learn-list">

                      {step.learn.map(
                        (item, i) => (
                          <span key={i}>
                            ✓ {item}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                  {/* PROJECT */}

                  <div className="project-box">

                    <div className="project-icon">
                      ⚡
                    </div>

                    <div>
                      <small>
                        BUILD THIS
                      </small>

                      <strong>
                        {step.project}
                      </strong>
                    </div>

                  </div>

                  {/* RESOURCES */}

                  <div className="resources-section">

                    <div className="content-label">
                      LEARNING RESOURCES
                    </div>

                    <div className="resource-grid">

                      {step.resources.map(
                        (resource, i) => (

                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noreferrer"
                            className="resource-card"
                            key={i}
                          >

                            <div className="resource-top">

                              <span>
                                {resource.type}
                              </span>

                              <span className="resource-arrow">
                                ↗
                              </span>

                            </div>

                            <strong>
                              {resource.name}
                            </strong>

                            <div className="resource-tags">

                              <span>
                                {resource.tag}
                              </span>

                              <span>
                                {resource.level}
                              </span>

                            </div>

                          </a>

                        )
                      )}

                    </div>

                  </div>

                  {/* COMPLETE */}

                  <button
                    className={
                      isCompleted
                        ? "complete-button completed-button"
                        : "complete-button"
                    }
                    onClick={() =>
                      toggleStep(index)
                    }
                  >
                    {isCompleted
                      ? "✓ Stage Completed"
                      : "Mark Stage Complete →"}
                  </button>

                </div>

              </article>
            );
          })}

        </section>

        {/* NEXT */}

        <section className="roadmap-next">

          <div>
            <span>READY FOR THE NEXT STEP?</span>

            <h2>
              Turn your roadmap into a daily plan.
            </h2>

            <p>
              Choose how much time you can realistically
              invest every day.
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/daily-plan")
            }
          >
            Build My Daily Plan
            <span>→</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default Roadmap;