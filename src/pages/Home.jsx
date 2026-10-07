import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
    <div className="future-app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span>✦</span> FutureMe
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#vision">My Vision</a>
          <a href="#goals">Goals</a>
          <a href="#letter">Future Letter</a>
        </div>

       <button
  className="nav-btn"
  onClick={() => navigate("/profile")}
>
  Get Started
</button>
      </nav>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-content">

          <p className="small-title">YOUR FUTURE IS WAITING</p>

          <h1>
            Meet the <span>Future You.</span>
          </h1>

          <p className="hero-text">
            Imagine the person you want to become.
            Plan your dreams, track your goals and
            create a better version of yourself.
          </p>

          <div className="hero-buttons">
            <button
  className="primary-btn"
  onClick={() => navigate("/profile")}
>
  Start My Journey →
</button>

            <button className="secondary-btn">
              Explore Future
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>365</h3>
              <p>Days to Grow</p>
            </div>

            <div>
              <h3>∞</h3>
              <p>Possibilities</p>
            </div>

            <div>
              <h3>1</h3>
              <p>Future You</p>
            </div>
          </div>

        </div>

        {/* FUTURE CARD */}
        <div className="hero-card">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="future-card">
            <span className="card-icon">✦</span>

            <p>YOUR FUTURE SELF</p>

            <h2>
              Becoming
              <br />
              Better.
            </h2>

            <div className="progress">
              <div></div>
            </div>

            <small>Journey progress</small>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="section" id="vision">

        <div className="section-heading">
          <p>CREATE YOUR VISION</p>

          <h2>Who do you want to become?</h2>

          <span>
            Your future starts with a clear vision.
          </span>
        </div>

        <div className="cards">

          <div className="feature-card">
            <div className="feature-icon">🎯</div>

            <h3>Set Your Goals</h3>

            <p>
              Turn your dreams into meaningful,
              achievable goals.
            </p>

           <button onClick={() => navigate("/goals")}>
  Begin Goals →
</button>
          </div>

          <div className="feature-card highlight">
            <div className="feature-icon">🧠</div>

            <h3>Build Your Mindset</h3>

            <p>
              Develop habits and thoughts that
              move you towards success.
            </p>

            <button>Build Mindset →</button>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚀</div>

            <h3>Track Your Growth</h3>

            <p>
              Watch your progress and celebrate
              every small achievement.
            </p>

            <button>Track Growth →</button>
          </div>

        </div>
      </section>

      {/* GOALS */}
      <section className="goals-section" id="goals">

        <div className="goal-text">

          <p>YOUR JOURNEY</p>

          <h2>
            Small steps.
            <br />
            <span>Big future.</span>
          </h2>

          <p>
            Success doesn't happen overnight.
            FutureMe helps you stay focused,
            consistent and motivated.
          </p>

          <button className="primary-btn">
            Begin Today →
          </button>

        </div>

        <div className="goal-list">

          <div className="goal-item">
            <span>01</span>

            <div>
              <h3>Dream</h3>
              <p>Define the life you want.</p>
            </div>

            <b>✓</b>
          </div>

          <div className="goal-item">
            <span>02</span>

            <div>
              <h3>Plan</h3>
              <p>Create a path towards it.</p>
            </div>

            <b>✓</b>
          </div>

          <div className="goal-item">
            <span>03</span>

            <div>
              <h3>Act</h3>
              <p>Take one step every day.</p>
            </div>

            <b>✓</b>
          </div>

          <div className="goal-item">
            <span>04</span>

            <div>
              <h3>Become</h3>
              <p>Meet the person you imagined.</p>
            </div>

            <b>→</b>
          </div>

        </div>
      </section>

      {/* FUTURE LETTER */}
      <section className="letter-section" id="letter">

        <div className="letter-card">

          <div className="letter-top">
            <span>✦</span>
            <p>MESSAGE FROM YOUR FUTURE SELF</p>
          </div>

          <h2>Dear Future Me,</h2>

          <p>
            I hope you remember why you started.
            Every difficult day, every small victory
            and every decision brought you here.
          </p>

          <p>
            Keep believing in yourself.
            The future you dreamed about is being
            created by what you do today.
          </p>

          <div className="signature">
            With love,
            <br />
            <strong>Future You ✦</strong>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="cta">

        <p>YOUR FUTURE STARTS TODAY</p>

        <h2>
          Don't wait for the future.
          <br />
          <span>Create it.</span>
        </h2>

        <button className="primary-btn">
          Start My Future →
        </button>

      </section>

      {/* FOOTER */}
      <footer>

        <div className="logo">
          <span>✦</span> FutureMe
        </div>

        <p>
          Designed for the person you're becoming.
        </p>

        <span>© 2026 FutureMe</span>

      </footer>

    </div>
  );
}

export default Home;