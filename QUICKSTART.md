# Quick Start Guide

## Getting Started in 4 Steps

### ⚠️ Step 0: Add Your PDF (REQUIRED!)
**This is the most important step - the app won't work without it!**

1. Go to the `src/Assets/` folder
2. Place a PDF file named `dummyPdf.pdf` in this folder
3. You can use the PDF you uploaded to me or any other PDF file
4. This single step enables all preview and download features

**Without this PDF file, you'll see errors when clicking Preview or Download buttons!**

### Step 1: Install Dependencies
Open your terminal in the `research-scholar-app` folder and run:
\`\`\`bash
npm install
\`\`\`

### Step 2: Start Development Server
\`\`\`bash
npm run dev
\`\`\`

### Step 3: Open Your Browser
Navigate to the URL shown in terminal (usually `http://localhost:5173`)

## What You'll See

### Landing Page (/)
- Animated hero section with floating shapes
- Interactive feature cards
- Statistics showcase
- Modern, elegant design with custom typography
- "Explore Library" button to navigate to the PDF library

### Library Page (/library)
- 12 sample research papers with detailed metadata
- Search functionality (try searching "quantum" or "climate")
- Category filters (Computer Science, Medical Science, etc.)
- Sort options (Most Recent, Most Popular, Title A-Z)
- Interactive cards with hover effects
- Preview and Download buttons (currently demo - you can connect to real PDFs)

## Key Features to Try

1. **Navigate between pages** using the buttons and navigation
2. **Search for papers** using the search bar
3. **Filter by category** using the dropdown
4. **Sort papers** by different criteria
5. **Preview PDFs** - Click any "Preview" button to view the PDF in a modal
6. **Download PDFs** - Click any "Download" button to download the PDF
7. **Hover over cards** to see animations
8. **Experience smooth animations** throughout the app

## Customization Tips

- **Colors**: Edit CSS variables in `src/index.css`
- **Content**: Modify PDF data in `src/pages/LibraryPage.jsx`
- **Fonts**: Change Google Fonts in `index.html`
- **Animations**: Adjust timings in component CSS files

## Build for Production

When ready to deploy:
\`\`\`bash
npm run build
\`\`\`

This creates optimized files in the `dist` folder ready for deployment.

## Need Help?

Check the main README.md for detailed documentation.

Enjoy your modern research platform! 🚀
