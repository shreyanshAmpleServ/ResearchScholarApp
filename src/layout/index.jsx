import { Outlet, useNavigate } from "react-router-dom";
import logo from "../Assets/logoR.png";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icon lib

const Layout = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setOpen(false);
  };
  return (
    <div className="grain-overlay  " style={{ position: "relative" }}>
      {/* Navigation */}
      {/* <Sparkles className="logo-icon" /> */}
      {/* <img src={logo} className="logo-icon " /> */}
      {/* <span className="logo-text">ResearchHub</span> */}
      {/* <nav className="navbar">
        <div className="nav-container">
          <div className="logo">

            <img src={logo} className="logo-icon " />
            <span className="logo-text">
              Universal Journal of Advanced Research
            </span>
          </div>
          <div className="nav-links">
            <a href="#about">Home</a>
            <a href="#about">About Us</a>
            <a href="#features">Aims & Scope</a>
            <a href="#stats">​Editorial Board</a>
            <a href="#stats">​Submission Guidelines</a>
            <a href="#stats">​Publication Charges</a>
            <a href="#stats">​Contact Us</a>
            <button className="nav-btn" onClick={() => navigate("/library")}>
              Explore Library
            </button>
          </div>
        </div>
      </nav> */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={() => goTo("/")}>
            <img src={logo} className="logo-icon" />
            <span className="logo-text">
              Universal Journal of Advanced Research
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="nav-links desktop-only">
            <button className="nav-link" onClick={() => goTo("/")}>
              Home
            </button>

            <div className="nav-dropdown">
              <span className="nav-link">About</span>
              <div className="dropdown-menu">
                <button onClick={() => goTo("/about")}>About Us</button>
                <button onClick={() => goTo("/aims-scope")}>
                  Aims & Scope
                </button>
                <button onClick={() => goTo("/editorial-board")}>
                  Editorial Board
                </button>
              </div>
            </div>

            <div className="nav-dropdown">
              <span className="nav-link">Authors</span>
              <div className="dropdown-menu">
                <button onClick={() => goTo("/submission-guidelines")}>
                  Submission Guidelines
                </button>
                <button onClick={() => goTo("/publication-charges")}>
                  Publication Charges
                </button>
              </div>
            </div>
            <div className="nav-dropdown">
              <span className="nav-link">Archive </span>
              <div className="dropdown-menu">
                <button onClick={() => goTo("/library/archive")}>
                  Select Volume
                </button>
                {/* <button onClick={() => goTo("/publication-charges")}>
                  Publication Charges
                </button> */}
              </div>
            </div>

            <button className="nav-link" onClick={() => goTo("/contact")}>
              Contact
            </button>

            <button className="nav-btn" onClick={() => goTo("/library")}>
              Explore Library
            </button>
          </div>

          {/* Mobile Menu Button */}

          {/* <button
            className="nav-btn menu-btn mobile-only"
            onClick={() => navigate("/library")}
          >
            Library
          </button> */}
          <button
            className="menu-btn mobile-only"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <span>Menu</span>
          <button onClick={() => setOpen(false)}>
            <X size={24} />
          </button>
        </div>

        <div className="drawer-links">
          <button onClick={() => goTo("/")}>Home</button>
          <button onClick={() => goTo("/about")}>About Us</button>
          <button onClick={() => goTo("/aims-scope")}>Aims & Scope</button>
          <button onClick={() => goTo("/editorial-board")}>
            Editorial Board
          </button>
          <button onClick={() => goTo("/submission-guidelines")}>
            Submission Guidelines
          </button>
          <button onClick={() => goTo("/publication-charges")}>
            Publication Charges
          </button>
          <button onClick={() => goTo("/library/archive")}>Archive</button>
          <button onClick={() => goTo("/contact")}>Contact</button>

          <button
            className="drawer-btn nav-btn"
            onClick={() => goTo("/library")}
          >
            Explore Library
          </button>
        </div>
      </div>

      <Outlet />
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            {/* <Sparkles className="footer-logo" /> */}
            <img src={logo} className="logo-icon " />

            {/* <span>ResearchHub</span> */}
            <span className="logo-text">
              Universal Journal of Advanced Research
            </span>
          </div>
          <p className="footer-text">
            Advancing knowledge through collaborative research
          </p>
          <p className="footer-copyright">
            © 2026 Universal Journal of Advanced Research. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
