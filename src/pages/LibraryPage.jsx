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
// import pdf from "../Assets/dummyPdf.pdf";
import pdf1 from "../Assets/UJAR_1.pdf";
import pdf2 from "../Assets/UJAR_2.pdf";
import pdf3 from "../Assets/UJAR_3.pdf";
import pdf4 from "../Assets/UJAR_4.pdf";
import pdf5 from "../Assets/UJAR_5.pdf";

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
      title: "Trend Analysis of Rainfall In Uttar Pradesh",
      author: "Angad Yadav, Mithu Kumar ",
      category: "Department of Civil Engineering",
      date: "2026-01-01",
      pdf: pdf1,
      abstract:
        "This study examines rainfall variability in Eastern and Western Uttar Pradesh from 1901–2017, revealing a declining trend in rainfall, delayed monsoon onset, and a shortened rainy season, particularly in Eastern Uttar Pradesh.",
      tags: ["Rainfall Trends", "Monsoon Variability", "Climate Change"],
    },
    {
      id: 2,
      title:
        "Evaluation of Mechanical and Self-Healing Performance of Bacterial Concrete Using BACTAHEAL-PR and Fly Ash: A Sustainable Approach",
      author: "Astha Dwivedi, Md Shuaib Khan,",
      category: "Department of Civil Engineering",
      date: "2026-01-01",
      pdf: pdf2,
      abstract:
        "This study investigates bacterial self-healing concrete using BACTAHEAL-PR, showing that optimized dosage improves strength and enables effective crack healing.",
      tags: [
        "Self-Healing Concrete",
        "Bacterial Concrete",
        "Sustainable Construction",
      ],
    },
    {
      id: 3,
      title:
        "Seasonal Assessment of Physico-Chemical Water Quality Parameters of the Ganga River at Varanasi, India",
      author: "Angad Yadav, Vishal Yadav",
      category: " Department of Civil Engineering",
      date: "2026-01-01",
      pdf: pdf3,
      abstract:
        "This study assesses seasonal water quality variations of the Ganga River at major ghats in Varanasi, revealing elevated pollution levels during the monsoon season and highlighting the need for improved river management.",
      tags: ["Ganga River", "Water Quality Assessment", "Seasonal Variation"],
    },
    {
      id: 4,
      title:
        "Spatiotemporal Analysis of Nitrogen Dioxide (NO2) Dynamics in Lucknow, India: A Comparative Study of Pre-Lockdown and COVID-19 Lockdown Periods using Google Earth Engine ",
      author: "Atisham Ali, Pawan Yadav ",
      category: " Department of Civil Engineering",
      date: "2026-01-01",
      pdf: pdf4,
      abstract:
        "This study uses Google Earth Engine and Sentinel-5P data to analyze NO₂ variations in Lucknow, revealing a significant reduction during the COVID-19 lockdown and highlighting the air-quality benefits of reduced anthropogenic activity.",
      tags: ["NO₂ Pollution", "Remote Sensing", "Urban Air Quality"],
    },
    {
      id: 5,
      title:
        "A Review of Digital Banking Trends in Rural India: Challenges and Opportunities ",
      author: "Farhan Shakeel, Md. Shaquib Khan ",
      category: "Department of Business Administration,",
      date: "2026-01-01",
      pdf: pdf5,
      abstract:
        "This review examines the rapid shift toward digital finance in rural India, highlighting the role of UPI, AePS, and digital public infrastructure while identifying key challenges related to inclusion, infrastructure, and cybersecurity.",
      tags: [
        "Digital Financial Inclusion",
        "Rural Banking",
        "Digital Payments",
      ],
    },
    // {
    //   id: 6,
    //   title:
    //     "Tribological Performance of Lubricants under High Load Conditions",
    //   author: "D. Rao et al.",
    //   category: "Mechanical Engineering",
    //   date: "2025-12-05",
    //   downloads: 445,
    //   pages: 49,
    //   size: "3.6 MB",
    //   abstract:
    //     "An experimental study on friction and wear characteristics of industrial lubricants under high-load operating conditions.",
    //   tags: ["Tribology", "Lubrication", "Wear Analysis"],
    // },
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
    link.href = pdfData?.pdf;
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
    </div>
  );
};

export default LibraryPage;
