# Research Scholar Application

A modern, animated React + Vite application designed for research scholars to publish and discover academic research papers.

## Features

### Landing Page
- **Innovative Design**: Modern, elegant aesthetic with Playfair Display and Crimson Pro fonts
- **Smooth Animations**: Floating shapes, fade-in effects, and interactive elements
- **Responsive Layout**: Fully responsive design that works on all devices
- **Key Sections**:
  - Hero section with animated visual cards
  - Statistics showcase
  - Features grid highlighting platform benefits
  - Call-to-action section
  
### Library Page
- **PDF Showcase**: Grid layout displaying research publications
- **Advanced Search**: Real-time search by title, author, or tags
- **Smart Filtering**: Filter by category and sort by date, popularity, or title
- **PDF Preview**: Click "Preview" to view PDF in a modal with embedded viewer
- **PDF Download**: Click "Download" to download the PDF file
- **Rich Information**: Each PDF card shows:
  - Title, author, and publication date
  - Abstract preview
  - Tags for easy categorization
  - Download statistics
  - File size and page count
  - Preview and Download buttons

## Design Philosophy

The application features a distinctive academic aesthetic:
- **Color Palette**: Warm ink (#1a1a2e), paper (#faf8f3), and terracotta accent (#c7522a)
- **Typography**: Playfair Display for headlines, Crimson Pro for body text, DM Sans for UI elements
- **Animations**: Subtle grain texture overlay, floating elements, and smooth transitions
- **Visual Effects**: Radial gradients, custom shadows, and hover interactions

## Tech Stack

- **React 18.3** - UI library
- **Vite 5** - Build tool and dev server
- **React Router 6** - Navigation
- **Lucide React** - Icon library
- **Framer Motion** - Animation library (ready to use)

## Installation

### ⚠️ IMPORTANT FIRST STEP - Add Your PDF File

**Before running the application, you MUST add a PDF file:**

1. **Place your PDF** in the `src/Assets/` folder
2. **Name it exactly:** `dummyPdf.pdf`
3. This enables all preview and download functionality

You can use any PDF file - the one you uploaded ("Contradictory Postulates of Singularity" research paper) or any other PDF on your computer.

### Install and Run

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`

4. Preview production build:
\`\`\`bash
npm run preview
\`\`\`

## Project Structure

\`\`\`
research-scholar-app/
├── src/
│   ├── pages/
│   │   ├── LandingPage.jsx       # Home page component
│   │   ├── LandingPage.css       # Landing page styles
│   │   ├── LibraryPage.jsx       # PDF library component
│   │   └── LibraryPage.css       # Library page styles
│   ├── App.jsx                   # Main app with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles
├── index.html                     # HTML template
├── package.json                   # Dependencies
├── vite.config.js                # Vite configuration
└── README.md                      # This file
\`\`\`

## Customization

### Adding Your PDF File

The application is configured to use a PDF file from `src/Assets/dummyPdf.pdf`:

1. **Place your PDF** in the `src/Assets/` folder
2. **Name it** `dummyPdf.pdf` (or update the import path in `LibraryPage.jsx`)
3. **The preview and download features will work automatically**

All PDF cards will use this same PDF file for preview and download. To use different PDFs for each card:
- Update the `pdfs` array in `LibraryPage.jsx` to include a `file` property
- Import multiple PDFs or fetch them from a server
- Update the `handlePreview` and `handleDownload` functions to use the specific PDF file

### Adding Real PDFs

Currently, the library uses sample data. To integrate real PDFs:

1. Update the `pdfs` array in `LibraryPage.jsx` with actual data from your API/database
2. Connect the Preview and Download buttons to actual PDF files
3. Consider adding a backend API to fetch PDF metadata and files

### Styling

All colors are defined as CSS custom properties in `index.css`:
- `--color-ink`: Main text color
- `--color-paper`: Background color
- `--color-accent`: Primary brand color
- `--color-sage`: Secondary text color
- `--color-cream`: Light background variant

### Fonts

The application uses Google Fonts:
- Playfair Display (Display/Headlines)
- Crimson Pro (Body Text)
- DM Sans (UI Elements)

Change fonts by updating the Google Fonts link in `index.html` and CSS variables in `index.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized animations using CSS transforms
- Lazy loading ready for images
- Minimal bundle size with Vite's tree-shaking
- Production builds are minified and optimized

## Future Enhancements

- User authentication and profiles
- PDF upload functionality
- Advanced search with filters
- Bookmarking and favorites
- Citation export (BibTeX, APA, MLA)
- Comments and discussions
- Citation tracking
- Collaborative features

## License

This project is open source and available under the MIT License.

## Credits

Created with attention to design detail and modern web development best practices.
