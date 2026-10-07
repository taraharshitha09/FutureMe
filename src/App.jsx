import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation
} from "react-router-dom";
import { useEffect } from "react";

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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>

      {/* ScrollToTop must be OUTSIDE Routes */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Navigate to="/auth" replace />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/domains" element={<Domains />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/daily-plan" element={<DailyPlan />} />
        <Route path="/consistency" element={<Consistency />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/parallel-you" element={<ParallelYou />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;