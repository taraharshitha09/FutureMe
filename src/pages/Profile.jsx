import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const savedUser =
    JSON.parse(localStorage.getItem("futureMeUser")) || {};

  const savedProfile =
    JSON.parse(localStorage.getItem("futureMeProfile")) || {};

  const [name, setName] = useState(
  savedUser.name || ""
);

  const [age, setAge] = useState(
    savedProfile.age || ""
  );

  const [status, setStatus] = useState(
    savedProfile.status || "CSE Student"
  );

  const [education, setEducation] = useState(
    savedProfile.education || ""
  );

  const [skills, setSkills] = useState(
    savedProfile.skills || []
  );

  const [level, setLevel] = useState(
    savedProfile.level || "Beginner"
  );

  const skillOptions = [
    "Java",
    "Python",
    "C",
    "JavaScript",
    "React",
    "SQL",
    "HTML/CSS",
    "AI / ML",
    "Git / GitHub",
    "Cloud",
    "Linux"
  ];

  const toggleSkill = (skill) => {
    setSkills((current) =>
      current.includes(skill)
        ? current.filter((item) => item !== skill)
        : [...current, skill]
    );
  };

  const handleContinue = (e) => {
    e.preventDefault();

    if (!name || !age || !status || !education) {
      alert("Please complete your profile first.");
      return;
    }

    const profile = {
  name: savedUser.name || name,
  age,
  status,
  education,
  skills,
  level
};

localStorage.setItem(
  "futureMeProfile",
  JSON.stringify(profile)
);

// Keep the signup name as the main user name
const updatedUser = {
  ...savedUser,
  name: savedUser.name || name
};

localStorage.setItem(
  "futureMeUser",
  JSON.stringify(updatedUser)
);

navigate("/discover");
  };

  return (
    <div className="profile-page">

      <div className="profile-grid"></div>

      <div className="profile-glow profile-glow-one"></div>
      <div className="profile-glow profile-glow-two"></div>

      {/* NAVBAR */}

      <nav className="profile-nav">

        <div className="profile-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="profile-step">
          STEP <strong>01</strong> / 09
        </div>

      </nav>

      {/* MAIN */}

      <main className="profile-container">

        {/* LEFT SIDE */}

        <section className="profile-intro">

          <p className="profile-overline">
            BUILD YOUR IDENTITY
          </p>

          <h1>
            Start with
            <br />
            <span>you.</span>
          </h1>

          <p className="profile-description">
            Tell FutureMe where you are today.
            Your interests, skills and experience
            will help shape the possibilities ahead.
          </p>

          <div className="identity-graph">

            <div className="graph-node node-one">
              YOU
            </div>

            <div className="graph-line line-one"></div>

            <div className="graph-node node-two">
              SKILLS
            </div>

            <div className="graph-line line-two"></div>

            <div className="graph-node node-three">
              FUTURE
            </div>

          </div>

        </section>

        {/* FORM CARD */}

        <section className="profile-card">

          <div className="profile-card-top">

            <div>
              <span>YOUR IDENTITY</span>

              <h2>
                Start with you.
              </h2>
            </div>

            <div className="profile-card-number">
              01
            </div>

          </div>

          <form onSubmit={handleContinue}>

            {/* NAME + AGE */}

            <div className="profile-two-column">

              <div className="profile-field">

                <label>
                  YOUR NAME
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) =>
                    setName(e.target.value)
                  }
                />

              </div>

              <div className="profile-field">

                <label>
                  AGE
                </label>

                <input
                  type="number"
                  min="15"
                  max="70"
                  placeholder="19"
                  value={age}
                  onChange={(e) =>
                    setAge(e.target.value)
                  }
                />

              </div>

            </div>

            {/* CURRENT STATUS */}

            <div className="profile-field">

              <label>
                CURRENT STATUS
              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
              >

                <option>
                  CSE Student
                </option>

                <option>
                  Engineering Student
                </option>

                <option>
                  Computer Science Graduate
                </option>

                <option>
                  Recent Graduate
                </option>

                <option>
                  Job Seeker
                </option>

                <option>
                  Working Professional
                </option>

                <option>
                  Software Developer
                </option>

                <option>
                  Freelancer
                </option>

                <option>
                  Entrepreneur
                </option>

                <option>
                  Startup Founder
                </option>

                <option>
                  Pursuing Higher Studies
                </option>

                <option>
                  Researcher
                </option>

                <option>
                  Career Switcher
                </option>

                <option>
                  Exploring Careers
                </option>

              </select>

            </div>

            {/* EDUCATION */}

            <div className="profile-field">

              <label>
                EDUCATION
              </label>

              <select
                value={education}
                onChange={(e) =>
                  setEducation(e.target.value)
                }
              >

                <option value="">
                  Select your education
                </option>

                <option>
                  B.Tech / B.E
                </option>

                <option>
                  B.Sc Computer Science
                </option>

                <option>
                  BCA
                </option>

                <option>
                  MCA
                </option>

                <option>
                  M.Tech
                </option>

                <option>
                  Diploma
                </option>

                <option>
                  Other
                </option>

              </select>

            </div>

            {/* SKILLS */}

            <div className="profile-field">

              <label>
                YOUR CURRENT SKILLS
              </label>

              <div className="skill-options">

                {skillOptions.map((skill) => (

                  <button
                    type="button"
                    key={skill}
                    className={
                      skills.includes(skill)
                        ? "skill-chip selected"
                        : "skill-chip"
                    }
                    onClick={() =>
                      toggleSkill(skill)
                    }
                  >

                    {skills.includes(skill) && (
                      <span className="skill-check">
                        ✓
                      </span>
                    )}

                    {skill}

                  </button>

                ))}

              </div>

            </div>

            {/* LEVEL */}

            <div className="profile-field">

              <label>
                CURRENT SKILL LEVEL
              </label>

              <div className="level-options">

                {[
                  "Beginner",
                  "Intermediate",
                  "Advanced"
                ].map((item) => (

                  <button
                    type="button"
                    key={item}
                    className={
                      level === item
                        ? "level-button active"
                        : "level-button"
                    }
                    onClick={() =>
                      setLevel(item)
                    }
                  >
                    {item}
                  </button>

                ))}

              </div>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="profile-continue"
            >

              Discover My Interests

              <span>
                →
              </span>

            </button>

          </form>

          <div className="profile-footer-note">
            ✦ Your answers shape your possible futures.
          </div>

        </section>

      </main>

    </div>
  );
}

export default Profile;