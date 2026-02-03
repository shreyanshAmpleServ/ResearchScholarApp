import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import LandingPage from "../pages/LandingPage";
import LibraryPage from "../pages/LibraryPage";
import "./pages.css";
import AboutPage from "../Components/About";
import AimsScopePage from "../Components/AimsScopePage";
import EditorialBoardPage from "../Components/EditorialBoardPage";
import SubmissionGuidelinesPage from "../Components/SubmissionGuidelinesPage";
import PublicationChargesPage from "../Components/PublicationChargesPage";
import ContactPage from "../Components/ContactPage";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<LandingPage />} />
          <Route path="/library" element={<LibraryPage />} /> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/aims-scope" element={<AimsScopePage />} />
          <Route path="/editorial-board" element={<EditorialBoardPage />} />
          <Route
            path="/submission-guidelines"
            element={<SubmissionGuidelinesPage />}
          />
          <Route
            path="/publication-charges"
            element={<PublicationChargesPage />}
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routers;
