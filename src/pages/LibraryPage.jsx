import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Download,
  Eye,
  Search,
  Filter,
  Calendar,
  User,
  ArrowLeft,
  FileText,
  Sparkles,
  SortAsc,
  Tag,
} from "lucide-react";
import "./LibraryPage.css";
import pdf from "../Assets/dummyPdf.pdf";

const LibraryPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("recent");
  const [showPreview, setShowPreview] = useState(false);
  const [previewPdf, setPreviewPdf] = useState(null);

  // Sample PDF data - in a real app, this would come from an API
  const pdfs = [
    {
      id: 1,
      title: "Optimization of Heat Transfer in Compact Heat Exchangers",
      author: "A. K. Sharma et al.",
      category: "Mechanical Engineering",
      date: "2026-01-15",
      downloads: 1243,
      pages: 38,
      size: "2.1 MB",
      abstract:
        "This study investigates enhanced heat transfer techniques in compact heat exchangers using numerical and experimental approaches.",
      tags: ["Heat Transfer", "Thermal Engineering", "Heat Exchangers"],
    },
    {
      id: 2,
      title: "Experimental Analysis of Turbulent Flow in Pipe Systems",
      author: "R. Verma et al.",
      category: "Mechanical Engineering",
      date: "2026-01-10",
      downloads: 892,
      pages: 46,
      size: "3.4 MB",
      abstract:
        "An experimental investigation into turbulent flow characteristics in circular pipe systems under varying Reynolds numbers.",
      tags: ["Fluid Mechanics", "Turbulence", "Pipe Flow"],
    },
    {
      id: 3,
      title: "Mechanical Behavior of Advanced Composite Materials",
      author: "S. Patel et al.",
      category: "Mechanical Engineering",
      date: "2025-12-28",
      downloads: 2156,
      pages: 54,
      size: "4.7 MB",
      abstract:
        "This paper analyzes the mechanical properties of fiber-reinforced composite materials for structural applications.",
      tags: [
        "Composite Materials",
        "Material Science",
        "Mechanical Properties",
      ],
    },
    {
      id: 4,
      title: "Design and Analysis of Energy Efficient HVAC Systems",
      author: "M. Singh et al.",
      category: "Mechanical Engineering",
      date: "2025-12-20",
      downloads: 634,
      pages: 42,
      size: "6.2 MB",
      abstract:
        "The study presents design methodologies and performance analysis of energy-efficient HVAC systems for commercial buildings.",
      tags: ["HVAC", "Energy Efficiency", "Building Systems"],
    },
    {
      id: 5,
      title:
        "Application of Finite Element Analysis in Machine Component Design",
      author: "P. Kumar et al.",
      category: "Mechanical Engineering",
      date: "2025-12-15",
      downloads: 1567,
      pages: 61,
      size: "5.1 MB",
      abstract:
        "This research focuses on the use of finite element analysis to predict stress, deformation, and failure in machine components.",
      tags: [
        "Finite Element Analysis",
        "Machine Design",
        "Structural Analysis",
      ],
    },
    {
      id: 6,
      title:
        "Tribological Performance of Lubricants under High Load Conditions",
      author: "D. Rao et al.",
      category: "Mechanical Engineering",
      date: "2025-12-05",
      downloads: 445,
      pages: 49,
      size: "3.6 MB",
      abstract:
        "An experimental study on friction and wear characteristics of industrial lubricants under high-load operating conditions.",
      tags: ["Tribology", "Lubrication", "Wear Analysis"],
    },
    {
      id: 7,
      title: "Additive Manufacturing Techniques for Metal Components",
      author: "L. Mehta et al.",
      category: "Mechanical Engineering",
      date: "2025-11-28",
      downloads: 978,
      pages: 57,
      size: "6.8 MB",
      abstract:
        "This paper reviews metal additive manufacturing processes and their mechanical performance in industrial applications.",
      tags: ["Additive Manufacturing", "3D Printing", "Metal Fabrication"],
    },
    {
      id: 8,
      title: "Dynamics and Vibration Control of Rotating Machinery",
      author: "K. Nair et al.",
      category: "Mechanical Engineering",
      date: "2025-11-20",
      downloads: 1834,
      pages: 63,
      size: "4.9 MB",
      abstract:
        "The study examines vibration characteristics and control strategies for high-speed rotating machinery.",
      tags: ["Machine Dynamics", "Vibration Analysis", "Rotordynamics"],
    },
    {
      id: 9,
      title: "Performance Analysis of Solar Thermal Energy Systems",
      author: "A. Mishra et al.",
      category: "Mechanical Engineering",
      date: "2025-11-12",
      downloads: 1123,
      pages: 52,
      size: "5.4 MB",
      abstract:
        "An analytical and experimental evaluation of solar thermal collectors for sustainable energy generation.",
      tags: ["Solar Energy", "Thermal Systems", "Renewable Energy"],
    },
    {
      id: 10,
      title: "CFD Analysis of Aerodynamic Drag Reduction in Automobiles",
      author: "T. Bose et al.",
      category: "Mechanical Engineering",
      date: "2025-11-05",
      downloads: 756,
      pages: 47,
      size: "4.2 MB",
      abstract:
        "This paper presents a computational fluid dynamics study focused on reducing aerodynamic drag in vehicle design.",
      tags: ["CFD", "Aerodynamics", "Automotive Engineering"],
    },
    {
      id: 11,
      title: "Fatigue Life Prediction of Welded Joints",
      author: "S. Kulkarni et al.",
      category: "Mechanical Engineering",
      date: "2025-10-28",
      downloads: 1445,
      pages: 58,
      size: "5.6 MB",
      abstract:
        "An investigation into fatigue behavior and life prediction methods for welded joints under cyclic loading.",
      tags: ["Fatigue Analysis", "Welding", "Structural Integrity"],
    },
    {
      id: 12,
      title: "Optimization of Manufacturing Processes Using Lean Techniques",
      author: "R. Choudhary et al.",
      category: "Mechanical Engineering",
      date: "2025-10-15",
      downloads: 623,
      pages: 44,
      size: "3.9 MB",
      abstract:
        "This study explores the application of lean manufacturing principles to improve productivity and reduce waste.",
      tags: ["Manufacturing", "Lean Engineering", "Process Optimization"],
    },
  ];

  const categories = [
    "All",
    "Computer Science",
    "Medical Science",
    "Environmental Science",
    "Architecture",
    "Economics",
    "Archaeology",
    "Business",
    "Neuroscience",
    "Engineering",
    "Social Science",
    "Bioethics",
    "Urban Studies",
  ];

  const filteredPdfs = pdfs
    .filter(
      (pdf) => selectedCategory === "All" || pdf.category === selectedCategory,
    )
    .filter(
      (pdf) =>
        pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pdf.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pdf.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase()),
        ),
    )
    .sort((a, b) => {
      if (sortBy === "recent") return new Date(b.date) - new Date(a.date);
      if (sortBy === "popular") return b.downloads - a.downloads;
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  const handlePreview = (pdfData) => {
    setPreviewPdf(pdfData);
    setShowPreview(true);
  };

  const handleDownload = (pdfData) => {
    // Create a download link for the PDF
    const link = document.createElement("a");
    link.href = pdf;
    link.download = `${pdfData.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const closePreview = () => {
    setShowPreview(false);
    setPreviewPdf(null);
  };

  return (
    <div className="library-page">
      {/* Header */}
      <header className="library-header">
        <div className="header-content">
          <button className="back-button" onClick={() => navigate("/")}>
            <ArrowLeft size={20} />
            Back to Home
          </button>

          <div className="header-title-section">
            <div className="header-icon">
              <Sparkles />
            </div>
            <div>
              <h1 className="header-title">Research Library</h1>
              <p className="header-subtitle">
                Explore {pdfs.length} cutting-edge research publications
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Search and Filters */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-bar">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search by title, author, or tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-controls">
            <div className="filter-group">
              <Filter size={18} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="filter-select"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <SortAsc size={18} />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="filter-select"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Results Info */}
      <div className="results-info">
        <p>
          Showing {filteredPdfs.length} publication
          {filteredPdfs.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* PDF Grid */}
      <section className="pdf-grid">
        {filteredPdfs.map((pdf, index) => (
          <div
            key={pdf.id}
            className="pdf-card"
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <div className="pdf-card-header">
              <div className="pdf-icon">
                <FileText size={28} />
              </div>
              <div className="pdf-meta-top">
                <span className="pdf-category">{pdf.category}</span>
                <span className="pdf-date">
                  <Calendar size={14} />
                  {new Date(pdf.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            <h3 className="pdf-title">{pdf.title}</h3>

            <div className="pdf-author">
              <User size={16} />
              <span>{pdf.author}</span>
            </div>

            <p className="pdf-abstract">{pdf.abstract}</p>

            <div className="pdf-tags">
              {pdf.tags.map((tag) => (
                <span key={tag} className="pdf-tag">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>

            <div className="pdf-footer">
              <div className="pdf-stats">
                <span className="stat-item">{pdf.pages} pages</span>
                <span className="stat-divider">•</span>
                <span className="stat-item">{pdf.size}</span>
                <span className="stat-divider">•</span>
                <span className="stat-item">
                  {pdf.downloads.toLocaleString()} downloads
                </span>
              </div>

              <div className="pdf-actions">
                <button
                  className="action-btn preview-btn"
                  onClick={() => handlePreview(pdf)}
                >
                  <Eye size={18} />
                  Preview
                </button>
                <button
                  className="action-btn download-btn"
                  onClick={() => handleDownload(pdf)}
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Empty State */}
      {filteredPdfs.length === 0 && (
        <div className="empty-state">
          <FileText size={64} className="empty-icon" />
          <h3>No publications found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}

      {/* Footer */}
      {/* <footer className="library-footer">
        <p>
          © 2026 Universal Journal of Advanced Research. Advancing knowledge
          through collaborative research.
        </p>
      </footer> */}

      {/* PDF Preview Modal */}
      {showPreview && previewPdf && (
        <div className="preview-modal" onClick={closePreview}>
          <div
            className="preview-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="preview-header">
              <div className="preview-info">
                <h2>{previewPdf.title}</h2>
                <p className="preview-author">{previewPdf.author}</p>
              </div>
              <button className="close-preview" onClick={closePreview}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="preview-body">
              <iframe src={pdf} title="PDF Preview" className="pdf-viewer" />
            </div>
            <div className="preview-footer">
              <button
                className="modal-btn download-modal-btn"
                onClick={() => handleDownload(previewPdf)}
              >
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;
