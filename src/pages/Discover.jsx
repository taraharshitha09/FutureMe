import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Discover.css";

function Discover() {
  const navigate = useNavigate();

  const profile =
    JSON.parse(localStorage.getItem("futureMeProfile")) || {};

  const [workTypes, setWorkTypes] = useState([]);
  const [enjoyments, setEnjoyments] = useState([]);
  const [futureType, setFutureType] = useState("");

  const workOptions = [
    { id: "intelligent", icon: "🧠", label: "Building intelligent systems" },
    { id: "web", icon: "💻", label: "Building websites & apps" },
    { id: "data", icon: "📊", label: "Working with data" },
    { id: "security", icon: "🛡️", label: "Protecting systems" },
    { id: "cloud", icon: "☁️", label: "Cloud & infrastructure" },
    { id: "design", icon: "🎨", label: "Designing products" },
    { id: "robotics", icon: "🤖", label: "Hardware & robotics" },
    { id: "research", icon: "🔬", label: "Research & problem solving" }
  ];

  const enjoymentOptions = [
    "Coding",
    "Problem Solving",
    "Math & Data",
    "Security",
    "Design",
    "Research",
    "Building Products",
    "Technology"
  ];

  const futureOptions = [
    "💼 Stable Career",
    "🚀 High Growth",
    "🌎 Remote / Freelance",
    "🏢 Product Company",
    "⚡ Startup",
    "🔬 Research"
  ];

  const toggleOption = (value, setter, current) => {
    if (current.includes(value)) {
      setter(current.filter((item) => item !== value));
    } else {
      setter([...current, value]);
    }
  };

  const handleContinue = () => {
    if (workTypes.length === 0) {
      alert("Select at least one work type.");
      return;
    }

    if (enjoyments.length === 0) {
      alert("Select at least one thing you enjoy.");
      return;
    }

    if (!futureType) {
      alert("Choose the type of future you prefer.");
      return;
    }

    const interests = {
      workTypes,
      enjoyments,
      futureType
    };

    localStorage.setItem(
      "futureMeInterests",
      JSON.stringify(interests)
    );

    navigate("/domains");
  };

  return (
    <div className="discover-page">

      <div className="discover-grid"></div>

      <div className="discover-glow discover-glow-one"></div>
      <div className="discover-glow discover-glow-two"></div>

      {/* NAVBAR */}

      <nav className="discover-nav">

        <div className="discover-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="discover-step">
          STEP <strong>02</strong> / 09
        </div>

      </nav>

      <main className="discover-container">

        {/* HEADER */}

        <section className="discover-header">

          <p>DISCOVER YOUR DIRECTION</p>

          <h1>
            What kind of work
            <br />
            <span>pulls you in?</span>
          </h1>

          <div className="discover-user">
            <span>EXPLORING FOR</span>
            <strong>
              {profile.name || "Future You"}
            </strong>
          </div>

        </section>

        {/* QUESTION 1 */}

        <section className="discover-section">

          <div className="question-heading">

            <span>01</span>

            <div>
              <h2>What kind of work sounds interesting?</h2>
              <p>Select everything that feels exciting.</p>
            </div>

          </div>

          <div className="option-grid">

            {workOptions.map((option) => {

              const selected =
                workTypes.includes(option.id);

              return (
                <button
                  key={option.id}
                  className={`discover-option ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    toggleOption(
                      option.id,
                      setWorkTypes,
                      workTypes
                    )
                  }
                >
                  <span className="option-icon">
                    {option.icon}
                  </span>

                  <span>{option.label}</span>

                  {selected && (
                    <span className="option-check">
                      ✓
                    </span>
                  )}
                </button>
              );
            })}

          </div>

        </section>

        {/* QUESTION 2 */}

        <section className="discover-section">

          <div className="question-heading">

            <span>02</span>

            <div>
              <h2>What do you enjoy doing?</h2>
              <p>Pick the things you naturally enjoy.</p>
            </div>

          </div>

          <div className="chip-grid">

            {enjoymentOptions.map((option) => {

              const selected =
                enjoyments.includes(option);

              return (
                <button
                  key={option}
                  className={`interest-chip ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    toggleOption(
                      option,
                      setEnjoyments,
                      enjoyments
                    )
                  }
                >
                  {option}

                  {selected && (
                    <span>✓</span>
                  )}
                </button>
              );
            })}

          </div>

        </section>

        {/* QUESTION 3 */}

        <section className="discover-section">

          <div className="question-heading">

            <span>03</span>

            <div>
              <h2>What kind of future attracts you?</h2>
              <p>Choose the direction that feels closest to you.</p>
            </div>

          </div>

          <div className="future-options">

            {futureOptions.map((option) => {

              const selected =
                futureType === option;

              return (
                <button
                  key={option}
                  className={`future-option ${
                    selected ? "selected" : ""
                  }`}
                  onClick={() =>
                    setFutureType(option)
                  }
                >
                  {option}

                  {selected && (
                    <span>✓</span>
                  )}
                </button>
              );
            })}

          </div>

        </section>

        {/* CONTINUE */}

        <section className="discover-continue">

          <div>
            <span>NEXT</span>

            <h2>
              Find the paths that fit you.
            </h2>
          </div>

          <button onClick={handleContinue}>
            Discover My Domains
            <span>→</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default Discover;