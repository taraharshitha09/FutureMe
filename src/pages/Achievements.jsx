import { useNavigate } from "react-router-dom";
import "./Achievements.css";

function Achievements() {
  const navigate = useNavigate();

  const achievements = [
    {
      icon: "🌱",
      title: "First Step",
      description: "Started your FutureMe journey."
    },
    {
      icon: "🧭",
      title: "Direction Found",
      description: "Explored your best-fit career domains."
    },
    {
      icon: "🗺️",
      title: "Roadmap Ready",
      description: "Created a learning roadmap for your future."
    },
    {
      icon: "🔥",
      title: "Consistency",
      description: "Started building a consistent learning habit."
    },
    {
      icon: "🔮",
      title: "Future Explorer",
      description: "Explored multiple possible career futures."
    },
    {
      icon: "🚀",
      title: "Future Builder",
      description: "Started turning possibilities into progress."
    }
  ];

  return (
    <div className="achievements-page">

      <nav className="achievements-nav">
        <div className="achievements-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div>
          STEP <strong>09</strong> / 09
        </div>
      </nav>

      <main className="achievements-container">

        <section className="achievements-header">
          <p>YOUR JOURNEY</p>

          <h1>
            Look how far
            <br />
            <span>you've come.</span>
          </h1>

          <p>
            Every small step you take today is building
            the person you want to become tomorrow.
          </p>
        </section>

        <section className="achievement-grid">

          {achievements.map((achievement) => (
            <article
              className="achievement-card"
              key={achievement.title}
            >
              <div className="achievement-icon">
                {achievement.icon}
              </div>

              <h2>{achievement.title}</h2>

              <p>{achievement.description}</p>

              <span>ACHIEVEMENT UNLOCKED ✓</span>
            </article>
          ))}

        </section>

        <section className="achievement-bottom">

          <div>
            <span>THE JOURNEY CONTINUES</span>

            <h2>
              Your future is still being written.
            </h2>
          </div>

          <button onClick={() => navigate("/dashboard")}>
            View My Dashboard →
          </button>

        </section>

      </main>
    </div>
  );
}

export default Achievements;