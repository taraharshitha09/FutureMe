import { useNavigate } from "react-router-dom";
import domains from "../data/domains";
import "./Domains.css";

function Domains() {
  const navigate = useNavigate();

  const profile =
    JSON.parse(localStorage.getItem("futureMeProfile")) || {};
    const user =
  JSON.parse(localStorage.getItem("futureMeUser")) || {};

  const interests =
    JSON.parse(localStorage.getItem("futureMeInterests")) || {};

  const workTypes = interests.workTypes || [];
  const enjoyments = interests.enjoyments || [];
  const futureType = interests.futureType || "";

  const getScore = (domain) => {
    let score = 0;

    const allInterests = [
      ...workTypes,
      ...enjoyments,
      futureType
    ].map((item) => item.toLowerCase());

    domain.interests.forEach((interest) => {
      if (allInterests.includes(interest.toLowerCase())) {
        score += 20;
      }
    });

    return Math.min(score, 100);
  };

  const scoredDomains = domains
    .map((domain) => ({
      ...domain,
      score: getScore(domain)
    }))
    .sort((a, b) => b.score - a.score);

  const bestMatches = scoredDomains.slice(0, 3);

  const exploreDomains = scoredDomains;

  const selectDomain = (domain) => {
    localStorage.setItem(
      "futureMeDomain",
      JSON.stringify(domain)
    );

    navigate("/roadmap");
  };

  return (
    <div className="domains-page">

      {/* BACKGROUND */}
      <div className="domains-grid"></div>

      <div className="domains-orb orb-one"></div>
      <div className="domains-orb orb-two"></div>
      <div className="domains-orb orb-three"></div>


      {/* NAVBAR */}
      <nav className="domains-nav">

        <div className="domains-logo">
          <span>✦</span>
          FutureMe
        </div>

        <div className="domains-step">
          STEP <strong>03</strong> / 09
        </div>

      </nav>


      <main className="domains-container">

        {/* HERO */}
        <section className="domains-hero">

          <div className="hero-label">
            <span></span>
            YOUR POSSIBLE DIRECTIONS
          </div>

          <h1>
            Paths that could
            <br />
            <span>fit your future.</span>
          </h1>

          <p>
  {profile.name
    ? `${profile.name}, `
    : ""}
  based on what interests you, these are
  the technology directions worth exploring.
</p>

        </section>


        {/* BEST FIT */}
        <section className="best-section">

          <div className="section-heading">

            <div>
              <span>01</span>

              <div>
                <small>PERSONALIZED FOR YOU</small>
                <h2>Your best-fit domains</h2>
              </div>
            </div>

            <p>
              Your strongest matches based on your
              interests and future preferences.
            </p>

          </div>


          <div className="best-grid">

            {bestMatches.map((domain, index) => (

              <article
                className={`best-card ${
                  index === 0 ? "best-primary" : ""
                }`}
                key={domain.id}
              >

                <div className="best-card-top">

                  <div className="domain-icon">
                    {domain.icon}
                  </div>

                  <div className="match-badge">
                    {domain.score}% MATCH
                  </div>

                </div>


                {index === 0 && (
                  <div className="top-match">
                    ✦ BEST MATCH
                  </div>
                )}


                <h3>
                  {domain.name}
                </h3>

                <p className="domain-description">
                  {domain.description}
                </p>


                <div className="career-area">

                  <span>CAREER DIRECTIONS</span>

                  <div className="career-list">

                    {domain.careers
                      .slice(0, 3)
                      .map((career) => (
                        <span key={career}>
                          {career}
                        </span>
                      ))}

                  </div>

                </div>


                <button
                  onClick={() => selectDomain(domain)}
                >
                  Explore this path
                  <span>→</span>
                </button>

              </article>

            ))}

          </div>

        </section>


        {/* ALL DOMAINS */}
        <section className="all-section">

          <div className="section-heading all-heading">

            <div>
              <span>02</span>

              <div>
                <small>EXPLORE WITHOUT LIMITS</small>
                <h2>All technology directions</h2>
              </div>
            </div>

            <p>
              You don't have to choose your future today.
              Explore any direction that interests you.
            </p>

          </div>


          <div className="domains-grid-cards">

            {exploreDomains.map((domain) => (

              <article
                className="domain-card"
                key={domain.id}
              >

                <div className="domain-card-header">

                  <div className="small-domain-icon">
                    {domain.icon}
                  </div>

                  <span className="domain-arrow">
                    ↗
                  </span>

                </div>


                <div className="domain-match">
                  {domain.score}% match
                </div>


                <h3>
                  {domain.name}
                </h3>


                <p>
                  {domain.description}
                </p>


                <div className="domain-careers">

                  {domain.careers
                    .slice(0, 2)
                    .map((career) => (
                      <span key={career}>
                        {career}
                      </span>
                    ))}

                </div>


                <button
                  onClick={() => selectDomain(domain)}
                >
                  Explore
                  <span>→</span>
                </button>

              </article>

            ))}

          </div>

        </section>


        {/* BOTTOM MESSAGE */}
        <section className="domains-bottom">

          <div className="bottom-symbol">
            ✦
          </div>

          <div>
            <h3>
              Your best-fit domain isn't a final decision.
            </h3>

            <p>
              You can explore any path, change direction,
              and discover what actually feels right as
              you learn more about yourself.
            </p>
          </div>

          <button
            onClick={() => navigate("/profile")}
          >
            Revisit my profile
            <span>↗</span>
          </button>

        </section>

      </main>

    </div>
  );
}

export default Domains;