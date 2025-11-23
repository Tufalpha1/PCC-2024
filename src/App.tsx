import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Categories from "./components/Categories";
import Hero from "./components/Hero";
import CashPrizePodium from "./components/CashPrizePodium";
import ScrollToTopButton from "./components/ScrollToTopButton";
import SectionDivider from "./components/SectionDivider";
import Showdown from "./components/Showdown";
import Badge from "./components/Badge";
import Winners from "./components/Winners";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import Organizers from "./components/Organizers";
import Sponsors from "./components/Sponsors";
import Stats from "./components/Stats";
import Register from "./components/Register";

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
              <Stats />
              <SectionDivider className="bg-white text-black" />
              <Organizers />
              <SectionDivider className="bg-white text-black" />
              <Sponsors />
              <CashPrizePodium />
              <SectionDivider className="bg-white text-black" />
              {/* <Scoreboard />
              <Podium /> */}
              <Showdown />   
              <SectionDivider className="bg-gradient-to-r from-[#45cc2d] to-[#092004] text-white" />
              <Categories />
              <SectionDivider className="bg-black text-white" />
              <Badge />
              <Winners />
              <SectionDivider className="bg-white text-black" />
              <Register />
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
