import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LibraryPage from "./pages/LibraryPage";
import "./pages/LandingPage.css";
import Routers from "./routes";

function App() {
  return (
    <>
      <div className="grain-overlay"></div>
      <Routers />
      {/* <Router>
        <Routes>
         
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
