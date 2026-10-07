import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Auth from "./pages/Auth";
import Profile from "./pages/Profile";
import Discover from "./pages/Discover";
import Domains from "./pages/Domains";
import Roadmap from "./pages/Roadmap";
import DailyPlan from "./pages/DailyPlan";
import Consistency from "./pages/Consistency";
import Simulation from "./pages/Simulation";
import ParallelYou from "./pages/ParallelYou";
import Dashboard from "./pages/Dashboard";
import Achievements from "./pages/Achievements";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* FIRST SCREEN */}

        <Route
          path="/"
          element={
            <Navigate
              to="/auth"
              replace
            />
          }
        />

        {/* 01 — AUTH */}

        <Route
          path="/auth"
          element={<Auth />}
        />

        {/* 02 — PROFILE */}

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* 03 — DISCOVER INTERESTS */}

        <Route
          path="/discover"
          element={<Discover />}
        />

        {/* 04 — BEST-FIT DOMAINS */}

        <Route
          path="/domains"
          element={<Domains />}
        />

        {/* 05 — ROADMAP */}

        <Route
          path="/roadmap"
          element={<Roadmap />}
        />

        {/* 06 — DAILY PLAN */}

        <Route
          path="/daily-plan"
          element={<DailyPlan />}
        />

        {/* 07 — CONSISTENCY */}

        <Route
          path="/consistency"
          element={<Consistency />}
        />

        {/* 08 — FUTURE SIMULATION */}

        <Route
          path="/simulation"
          element={<Simulation />}
        />

        {/* 09 — PARALLEL YOU */}

        <Route
          path="/parallel-you"
          element={<ParallelYou />}
        />

        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* ACHIEVEMENTS */}

        <Route
          path="/achievements"
          element={<Achievements />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;