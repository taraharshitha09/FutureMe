import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const navigate = useNavigate();

  const savedUser =
    JSON.parse(localStorage.getItem("futureMeUser")) || {};

  const savedProfile =
    JSON.parse(localStorage.getItem("futureMeProfile")) || {};

  // Signup lo ichina exact name automatic ga vastundi
  const [name, setName] = useState(savedUser.name || "");

  // Age intentionally blank ga start avutundi
  const [age, setAge] = useState("");

  // Current status intentionally blank ga start avutundi
  const [status, setStatus] = useState("");

  // Education intentionally blank ga start avutundi
  const [education, setEducation] = useState("");

  // Existing skills preserve chestunnam
  const [skills, setSkills] = useState(
    savedProfile.skills || []
  );

  // Existing skill level preserve chestunnam
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
      // Signup name exact ga preserve chestunnam
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

    // Signup name main user name ga preserve chestunnam
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
                  placeholder="Enter your age"
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

                <option value="" disabled>
                  Select your current status
                </option>

                <option value="CSE Student">
                  CSE Student
                </option>

                <option value="Engineering Student">
                  Engineering Student
                </option>

                <option value="Computer Science Graduate">
                  Computer Science Graduate
                </option>

                <option value="Recent Graduate">
                  Recent Graduate
                </option>

                <option value="Job Seeker">
                  Job Seeker
                </option>

                <option value="Working Professional">
                  Working Professional
                </option>

                <option value="Software Developer">
                  Software Developer
                </option>

                <option value="Freelancer">
                  Freelancer
                </option>

                <option value="Entrepreneur">
                  Entrepreneur
                </option>

                <option value="Startup Founder">
                  Startup Founder
                </option>

                <option value="Pursuing Higher Studies">
                  Pursuing Higher Studies
                </option>

                <option value="Researcher">
                  Researcher
                </option>

                <option value="Career Switcher">
                  Career Switcher
                </option>

                <option value="Exploring Careers">
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

                <option value="" disabled>
                  Select your education
                </option>

                <option value="B.Tech / B.E">
                  B.Tech / B.E
                </option>

                <option value="B.Sc Computer Science">
                  B.Sc Computer Science
                </option>

                <option value="BCA">
                  BCA
                </option>

                <option value="MCA">
                  MCA
                </option>

                <option value="M.Tech">
                  M.Tech
                </option>

                <option value="Diploma">
                  Diploma
                </option>

                <option value="Other">
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