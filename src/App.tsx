import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import Podium from "./components/Podium";
import CashPrizePodium from "./components/CashPrizePodium";
import Scoreboard from "./components/Scoreboard";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SectionDivider from "./components/SectionDivider";
import Showdown from "./components/Showdown";
import Badge from "./components/Badge";
import Winners from "./components/Winners";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Organizers from "./components/Organizers";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <Router>
      <ScrollToTopButton />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Hero />
              <About />
              <SectionDivider className="bg-white text-black" />
              <Organizers />
              <SectionDivider className="bg-white text-black" />
              <Sponsors />
              <CashPrizePodium />
              <SectionDivider className="bg-white text-black" />
              <Scoreboard />
              <Podium />
              <SectionDivider className="bg-white text-black" />
              <Showdown />
              <SectionDivider className="bg-gradient-to-r from-[#aa0000] to-[#91221E] text-white" />
              <Categories />
              <SectionDivider className="bg-black text-white" />
              <Badge />
              <Winners />
              <SectionDivider className="bg-white text-black" />
            </Layout>
          }
        />
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
