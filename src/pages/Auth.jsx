import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("signup");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "signup") {

      if (!name || !email || !password || !confirmPassword) {
        alert("Please fill all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      const user = {
        name,
        email,
        password
      };

      localStorage.setItem(
        "futureMeUser",
        JSON.stringify(user)
      );

      localStorage.setItem(
        "futureMeLoggedIn",
        "true"
      );

      navigate("/profile");

    } else {

      const savedUser =
        JSON.parse(
          localStorage.getItem("futureMeUser")
        );

      if (!savedUser) {
        alert("Account not found. Please Sign Up first.");
        return;
      }

      if (
        email !== savedUser.email ||
        password !== savedUser.password
      ) {
        alert("Invalid email or password.");
        return;
      }

      localStorage.setItem(
        "futureMeLoggedIn",
        "true"
      );

      navigate("/profile");
    }
  };

  return (
    <div className="auth-page">

      {/* BACKGROUND EFFECTS */}

      <div className="auth-glow glow-one"></div>
      <div className="auth-glow glow-two"></div>

      {/* LOGO */}

      <div className="auth-logo">
        <span>✦</span> FutureMe
      </div>


      {/* AUTH CONTAINER */}

      <div className="auth-container">

        {/* LEFT SIDE */}

        <div className="auth-intro">

          <p className="auth-overline">
            YOUR FUTURE AWAITS
          </p>

          <h1>
            Your future
            <br />
            isn't <span>one path.</span>
          </h1>

          <p className="auth-description">
            Explore the possibilities. Make decisions.
            Discover the different versions of yourself
            you could become.
          </p>


          <div className="future-preview">

            <div className="preview-line">
              <span>2026</span>
              <div></div>
              <strong>YOU</strong>
            </div>

            <div className="preview-line">
              <span>2028</span>
              <div></div>
              <strong>GROWTH</strong>
            </div>

            <div className="preview-line">
              <span>2030</span>
              <div></div>
              <strong>FUTURE YOU</strong>
            </div>

          </div>

        </div>


        {/* AUTH CARD */}

        <div className="auth-card">

          {/* TABS */}

          <div className="auth-tabs">

            <button
              className={
                mode === "signin"
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() => setMode("signin")}
            >
              Sign In
            </button>

            <button
              className={
                mode === "signup"
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() => setMode("signup")}
            >
              Create Account
            </button>

          </div>


          {/* HEADING */}

          <div className="auth-heading">

            <span className="auth-icon">
              ✦
            </span>

            <h2>
              {mode === "signup"
                ? "Create your account"
                : "Welcome back"}
            </h2>

            <p>
              {mode === "signup"
                ? "Start exploring your possible futures."
                : "Continue your journey into the future."}
            </p>

          </div>


          {/* FORM */}

          <form onSubmit={handleSubmit}>

            {mode === "signup" && (

              <div className="input-group">

                <label>
                  Full Name
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

            )}


            <div className="input-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>


            <div className="input-group">

              <label>
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>


            {mode === "signup" && (

              <div className="input-group">

                <label>
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                />

              </div>

            )}


            {mode === "signin" && (

              <div className="forgot-password">
                Forgot password?
              </div>

            )}


            <button
              type="submit"
              className="auth-submit"
            >
              {mode === "signup"
                ? "Create My Future →"
                : "Enter FutureMe →"}
            </button>

          </form>


          {/* SWITCH */}

          <div className="auth-switch">

            {mode === "signup"
              ? "Already have an account?"
              : "Don't have an account?"}

            <button
              onClick={() =>
                setMode(
                  mode === "signup"
                    ? "signin"
                    : "signup"
                )
              }
            >
              {mode === "signup"
                ? "Sign In"
                : "Create Account"}
            </button>

          </div>


          <div className="auth-note">
            ✦ Your journey starts with one decision.
          </div>

        </div>

      </div>

    </div>
  );
}

export default Auth;