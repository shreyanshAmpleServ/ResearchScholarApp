import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
  Tag
} from 'lucide-react'
import './LibraryPage.css'
import pdf from "../Assets/dummyPdf.pdf"

const LibraryPage = () => {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('recent')
  const [showPreview, setShowPreview] = useState(false)
  const [previewPdf, setPreviewPdf] = useState(null)

  // Sample PDF data - in a real app, this would come from an API
  const pdfs = [
    {
      id: 1,
      title: "Quantum Computing Applications in Machine Learning",
      author: "Dr. Sarah Chen",
      category: "Computer Science",
      date: "2026-01-15",
      downloads: 1243,
      pages: 45,
      size: "2.4 MB",
      abstract: "An exploration of quantum algorithms for enhancing machine learning models...",
      tags: ["Quantum Computing", "ML", "Algorithms"]
    },
    {
      id: 2,
      title: "Climate Change Impact on Marine Biodiversity",
      author: "Prof. James Anderson",
      category: "Environmental Science",
      date: "2026-01-10",
      downloads: 892,
      pages: 67,
      size: "5.1 MB",
      abstract: "Comprehensive study on the effects of rising ocean temperatures on marine ecosystems...",
      tags: ["Climate", "Marine Biology", "Conservation"]
    },
    {
      id: 3,
      title: "Novel Approaches to Gene Therapy in Cancer Treatment",
      author: "Dr. Maria Rodriguez",
      category: "Medical Science",
      date: "2025-12-28",
      downloads: 2156,
      pages: 89,
      size: "7.8 MB",
      abstract: "Revolutionary gene editing techniques showing promise in targeting cancer cells...",
      tags: ["Genetics", "Oncology", "Therapy"]
    },
    {
      id: 4,
      title: "Sustainable Architecture: Net-Zero Building Design",
      author: "Dr. Michael Zhang",
      category: "Architecture",
      date: "2025-12-20",
      downloads: 634,
      pages: 52,
      size: "12.3 MB",
      abstract: "Innovative design principles for creating energy-efficient, carbon-neutral buildings...",
      tags: ["Sustainability", "Design", "Energy"]
    },
    {
      id: 5,
      title: "Artificial Neural Networks for Financial Forecasting",
      author: "Prof. Emily Johnson",
      category: "Economics",
      date: "2025-12-15",
      downloads: 1567,
      pages: 73,
      size: "3.9 MB",
      abstract: "Advanced neural network architectures applied to stock market prediction...",
      tags: ["AI", "Finance", "Forecasting"]
    },
    {
      id: 6,
      title: "Ancient Civilizations: New Archaeological Discoveries",
      author: "Dr. Robert Williams",
      category: "Archaeology",
      date: "2025-12-05",
      downloads: 445,
      pages: 102,
      size: "18.5 MB",
      abstract: "Recent excavations revealing insights into ancient Mesopotamian culture...",
      tags: ["History", "Archaeology", "Culture"]
    },
    {
      id: 7,
      title: "Blockchain Technology in Supply Chain Management",
      author: "Dr. Lisa Park",
      category: "Business",
      date: "2025-11-28",
      downloads: 978,
      pages: 58,
      size: "4.2 MB",
      abstract: "Implementation strategies for blockchain-based supply chain transparency...",
      tags: ["Blockchain", "Logistics", "Technology"]
    },
    {
      id: 8,
      title: "Neuroplasticity and Learning: A Comprehensive Review",
      author: "Prof. David Kim",
      category: "Neuroscience",
      date: "2025-11-20",
      downloads: 1834,
      pages: 95,
      size: "6.7 MB",
      abstract: "How the brain adapts and reorganizes in response to learning experiences...",
      tags: ["Brain", "Learning", "Cognition"]
    },
    {
      id: 9,
      title: "Renewable Energy Systems: Solar Power Optimization",
      author: "Dr. Anna Petrov",
      category: "Engineering",
      date: "2025-11-12",
      downloads: 1123,
      pages: 81,
      size: "8.4 MB",
      abstract: "Advanced techniques for maximizing solar panel efficiency in various climates...",
      tags: ["Solar", "Energy", "Optimization"]
    },
    {
      id: 10,
      title: "Social Media Influence on Political Discourse",
      author: "Prof. Thomas Brown",
      category: "Social Science",
      date: "2025-11-05",
      downloads: 756,
      pages: 64,
      size: "3.1 MB",
      abstract: "Analysis of how digital platforms shape public opinion and political engagement...",
      tags: ["Social Media", "Politics", "Communication"]
    },
    {
      id: 11,
      title: "CRISPR Technology: Ethical Implications and Future",
      author: "Dr. Jennifer Lee",
      category: "Bioethics",
      date: "2025-10-28",
      downloads: 1445,
      pages: 76,
      size: "4.8 MB",
      abstract: "Examining the moral and societal considerations of gene editing technologies...",
      tags: ["Ethics", "Genetics", "CRISPR"]
    },
    {
      id: 12,
      title: "Urban Planning in the Age of Smart Cities",
      author: "Dr. Carlos Martinez",
      category: "Urban Studies",
      date: "2025-10-15",
      downloads: 623,
      pages: 69,
      size: "9.2 MB",
      abstract: "Integrating IoT and AI into modern city infrastructure for improved living...",
      tags: ["Smart Cities", "IoT", "Planning"]
    }
  ]

  const categories = ['All', 'Computer Science', 'Medical Science', 'Environmental Science', 
                      'Architecture', 'Economics', 'Archaeology', 'Business', 'Neuroscience', 
                      'Engineering', 'Social Science', 'Bioethics', 'Urban Studies']

  const filteredPdfs = pdfs
    .filter(pdf => selectedCategory === 'All' || pdf.category === selectedCategory)
    .filter(pdf => 
      pdf.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pdf.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'recent') return new Date(b.date) - new Date(a.date)
      if (sortBy === 'popular') return b.downloads - a.downloads
      if (sortBy === 'title') return a.title.localeCompare(b.title)
      return 0
    })

  const handlePreview = (pdfData) => {
    setPreviewPdf(pdfData)
    setShowPreview(true)
  }

  const handleDownload = (pdfData) => {
    // Create a download link for the PDF
    const link = document.createElement('a')
    link.href = pdf
    link.download = `${pdfData.title}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const closePreview = () => {
    setShowPreview(false)
    setPreviewPdf(null)
  }

  return (
    <div className="library-page">
      {/* Header */}
      <header className="library-header">
        <div className="header-content">
          <button className="back-button" onClick={() => navigate('/')}>
            <ArrowLeft size={20} />
            Back to Home
          </button>
          
          <div className="header-title-section">
            <div className="header-icon">
              <Sparkles />
            </div>
            <div>
              <h1 className="header-title">Research Library</h1>
              <p className="header-subtitle">Explore {pdfs.length} cutting-edge research publications</p>
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
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
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
        <p>Showing {filteredPdfs.length} publication{filteredPdfs.length !== 1 ? 's' : ''}</p>
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
                  {new Date(pdf.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
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
              {pdf.tags.map(tag => (
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
                <span className="stat-item">{pdf.downloads.toLocaleString()} downloads</span>
              </div>

              <div className="pdf-actions">
                <button className="action-btn preview-btn" onClick={() => handlePreview(pdf)}>
                  <Eye size={18} />
                  Preview
                </button>
                <button className="action-btn download-btn" onClick={() => handleDownload(pdf)}>
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
      <footer className="library-footer">
        <p>© 2026 ResearchHub. Advancing knowledge through collaborative research.</p>
      </footer>

      {/* PDF Preview Modal */}
      {showPreview && previewPdf && (
        <div className="preview-modal" onClick={closePreview}>
          <div className="preview-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="preview-header">
              <div className="preview-info">
                <h2>{previewPdf.title}</h2>
                <p className="preview-author">{previewPdf.author}</p>
              </div>
              <button className="close-preview" onClick={closePreview}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <div className="preview-body">
              <iframe
                src={pdf}
                title="PDF Preview"
                className="pdf-viewer"
              />
            </div>
            <div className="preview-footer">
              <button className="modal-btn download-modal-btn" onClick={() => handleDownload(previewPdf)}>
                <Download size={18} />
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LibraryPage
