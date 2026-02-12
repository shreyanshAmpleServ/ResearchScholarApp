import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
// import pdf from "../Assets/dummyPdf.pdf";
import pdf1 from "../Assets/UJAR_1.pdf";
import pdf2 from "../Assets/UJAR_2.pdf";
import pdf3 from "../Assets/UJAR_3.pdf";
import pdf4 from "../Assets/UJAR_4.pdf";
import pdf5 from "../Assets/UJAR_5.pdf";

const LibraryPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVolume, setSelectedVolume] = useState(null);
  const [sortBy, setSortBy] = useState("recent");

  const [showPreview, setShowPreview] = useState(false);
  const [previewPdf, setPreviewPdf] = useState(null);

  const [showVolumeModal, setShowVolumeModal] = useState(false);
  const [directLibrary, setDirectLibrary] = useState(false);

  const isArchivePage = name === "archive";
  useEffect(() => {
    if (isArchivePage) {
      setShowVolumeModal(true);
    }
  }, [isArchivePage]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   Trend Analysis of Rainfall In Uttar Pradesh :
  //        https://doi.org/10.5281/zenodo.18616889

  // Evaluation of Mechanical and Self-Healing Performance of Bacterial Concrete Using BACTAHEAL-PR and Fly Ash: A Sustainable Approach :
  //  https://doi.org/10.5281/zenodo.18617041

  // Seasonal Assessment of Physico-Chemical Water Quality Parameters of the Ganga River at Varanasi, India :
  //  https://doi.org/10.5281/zenodo.18617068

  // Spatiotemporal Analysis of Nitrogen Dioxide (NO2) Dynamics in Lucknow, India: A Comparative Study of Pre-Lockdown and COVID-19 Lockdown Periods using Google Earth Engine :
  //  https://doi.org/10.5281/zenodo.18617106

  // A Review of Digital Banking Trends in Rural India: Challenges and Opportunities :
  // https://doi.org/10.5281/zenodo.18617137
  const pdfs = [
    {
      id: 1,
      title: "Trend Analysis of Rainfall In Uttar Pradesh",
      link_description: "Trend Analysis of Rainfall In Uttar Pradesh ",
      link: "https://doi.org/10.5281/zenodo.18616889",
      author: "Angad Yadav, Mithu Kumar",
      category: "Department of Civil Engineering",
      date: "2026-01-01",
      volume: 1,
      issue: 1,
      pdf: pdf1,
      abstract:
        "This study examines rainfall variability in Eastern and Western Uttar Pradesh.",
      tags: ["Rainfall", "Climate Change"],
    },
    {
      id: 2,
      title: "Self-Healing Performance of Bacterial Concrete",
      link_description:
        "Evaluation of Mechanical and Self-Healing Performance of Bacterial Concrete Using BACTAHEAL-PR and Fly Ash: A Sustainable Approach",
      link: "https://doi.org/10.5281/zenodo.18617041",
      author: "Astha Dwivedi, Md Shuaib Khan",
      category: "Department of Civil Engineering",
      date: "2026-01-01",
      volume: 1,
      issue: 1,
      pdf: pdf2,
      abstract:
        "Optimized bacterial dosage improves strength and crack healing.",
      tags: ["Bacterial Concrete", "Sustainability"],
    },
    {
      id: 3,
      title: "Water Quality Assessment of Ganga River",
      link_description:
        "Seasonal Assessment of Physico-Chemical Water Quality Parameters of the Ganga River at Varanasi, India ",
      link: "https://doi.org/10.5281/zenodo.18617068",
      author: "Angad Yadav, Vishal Yadav",
      category: "Department of Civil Engineering",
      date: "2026-01-01",
      volume: 1,
      issue: 1,
      pdf: pdf3,
      abstract: "Seasonal variation in water quality at Varanasi ghats.",
      tags: ["Water Quality", "Ganga River"],
    },
    {
      id: 4,
      title: "NO₂ Dynamics During COVID-19 Lockdown",
      author: "Atisham Ali, Pawan Yadav",
      link_description:
        "Spatiotemporal Analysis of Nitrogen Dioxide (NO2) Dynamics in Lucknow, India: A Comparative Study of Pre-Lockdown and COVID-19 Lockdown Periods using Google Earth Engine",
      link: "https://doi.org/10.5281/zenodo.18617106",
      category: "Department of Civil Engineering",
      date: "2026-01-01",
      volume: 1,
      issue: 1,
      pdf: pdf4,
      abstract: "Significant reduction in NO₂ during lockdown.",
      tags: ["Air Quality", "Remote Sensing"],
    },
    {
      id: 5,
      title: "Digital Banking Trends in Rural India",
      link_description:
        "A Review of Digital Banking Trends in Rural India: Challenges and Opportunities",
      link: "https://doi.org/10.5281/zenodo.18617137",
      author: "Farhan Shakeel, Md. Shaquib Khan",
      category: "Department of Business Administration",
      date: "2026-01-01",
      volume: 1,
      issue: 1,
      pdf: pdf5,
      abstract: "Challenges and opportunities in rural digital finance.",
      tags: ["Digital Banking", "Financial Inclusion"],
    },
  ];

  const categories = [
    "All",
    "Department of Civil Engineering",
    "Department of Business Administration",
    "Computer Science",
    "Medical Science",
    "Environmental Science",
    "Architecture",
    "Economics",
  ];

  const filteredPdfs = pdfs
    .filter((pdf) => !selectedVolume || pdf.volume === Number(selectedVolume))
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
      if (sortBy === "title") return a.title.localeCompare(b.title);
      return 0;
    });

  const handlePreview = (pdf) => {
    setPreviewPdf(pdf);
    setShowPreview(true);
  };

  const handleDownload = (pdf) => {
    const link = document.createElement("a");
    link.href = pdf.pdf;
    link.download = `${pdf.title}.pdf`;
    link.click();
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
      {(directLibrary || isArchivePage) && (
        <>
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
                  <FileText size={18} />
                  <select
                    value={selectedVolume}
                    onChange={(e) => setSelectedVolume(e.target.value)}
                    className="filter-select"
                  >
                    <option value="All">All Volumes</option>
                    <option value="1">Volume 1</option>
                    <option value="2">Volume 2</option>
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
                        month: "long",
                        // day: "numeric",
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
                  {pdf?.tags.map((tag) => (
                    <span key={tag} className="pdf-tag">
                      <Tag size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="pdf-abstract">
                  {pdf.link_description}:{" "}
                  <a href={pdf.link} target="_blank">
                    {pdf.link}
                  </a>
                </p>

                <div className="pdf-footer">
                  {/* <div className="pdf-stats">
                <span className="stat-item">{pdf.pages} pages</span>
                <span className="stat-divider">•</span>
                <span className="stat-item">{pdf.size}</span>
                <span className="stat-divider">•</span>
                <span className="stat-item">
                  {pdf.downloads.toLocaleString()} downloads
                </span>
              </div> */}
                  <div className="pdf-stats">
                    <span className="stat-item">{pdf.volume} Volume</span>
                    <span className="stat-divider">•</span>
                    <span className="stat-item">{pdf.issue} Issue</span>
                    {/* <span className="stat-divider">•</span>
                <span className="stat-item">
                  {pdf.downloads.toLocaleString()} downloads
                </span> */}
                  </div>

                  <div className="pdf-actions">
                    <button
                      className="action-btn preview-btn"
                      onClick={() => handlePreview(pdf?.pdf)}
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
        </>
      )}
      {/* SIMPLE VOLUME BOX (Non-Archive Page) */}
      {!isArchivePage && !directLibrary && (
        <div className="volume-inline-wrapper">
          <div
            className="volume-inline-card slide-up"
            onClick={() => {
              setSelectedVolume("1");
              setDirectLibrary(true);
            }}
          >
            <FileText size={32} />
            <h3>Volume 1</h3>
            <p>Click to view publications</p>
          </div>
        </div>
      )}

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
              <iframe
                src={previewPdf}
                title="PDF Preview"
                className="pdf-viewer"
              />
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

      {/* VOLUME MODAL */}
      {showVolumeModal && (
        <div className="volume-modal-overlay">
          <div className="volume-modal-card slide-up">
            <div className="volume-modal-header">
              <FileText size={36} />
              <h2>Universal Journal of Advanced Research</h2>
              <p>Select a journal volume to continue</p>
            </div>

            <div className="volume-options">
              <button
                className="volume-btn active"
                onClick={() => {
                  setSelectedVolume("1");
                  setShowVolumeModal(false);
                }}
              >
                <span className="volume-number">Volume 1</span>
                <span className="volume-year">2026</span>
              </button>

              <button className="volume-btn disabled" disabled>
                <span className="volume-number">Volume 2</span>
                <span className="volume-year">Coming Soon</span>
              </button>
            </div>

            <div className="volume-modal-footer">
              <p>Peer-reviewed • Open Access • Multidisciplinary</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LibraryPage;
