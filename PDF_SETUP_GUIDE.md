# PDF Setup Guide

## Why You Need to Add a PDF

The application has **Preview** and **Download** buttons on every research paper card. These buttons need an actual PDF file to work. Without it, clicking these buttons will cause errors.

## Quick Setup (30 seconds)

1. **Locate** the `src/Assets/` folder in the project
2. **Add** any PDF file to this folder
3. **Rename** it to: `dummyPdf.pdf` (exactly, including the extension)
4. **Done!** The preview and download features will now work

## Where to Get a PDF

You have several options:

### Option 1: Use the PDF You Uploaded to Me ⭐ RECOMMENDED
You already uploaded a PDF called "Contradictory Postulates of Singularity" - a research paper from Mechanical Engineering Research journal. This is perfect for the application!

### Option 2: Use Any Other PDF
- Any research paper from your computer
- A Word document converted to PDF
- Any PDF file you have available

## What Happens When You Click the Buttons

### Preview Button
- Opens a modal window with an embedded PDF viewer
- Shows the full PDF with all pages
- Uses the browser's native PDF rendering
- Allows scrolling, zooming, and reading
- Close by clicking the X or clicking outside

### Download Button
- Downloads the PDF to your computer
- Filename will be the paper title (e.g., "Quantum Computing Applications in Machine Learning.pdf")
- Saves to your default Downloads folder

## Current Setup

Right now, **all 12 research paper cards** use the same PDF file (`dummyPdf.pdf`). This is intentional for the demo.

### To Use Different PDFs for Each Card:

If you want each of the 12 cards to show and download a different PDF:

1. Add multiple PDF files to `src/Assets/` (e.g., `paper1.pdf`, `paper2.pdf`, etc.)
2. Import them in `src/pages/LibraryPage.jsx`:
   ```javascript
   import pdf1 from "../Assets/paper1.pdf"
   import pdf2 from "../Assets/paper2.pdf"
   // ... etc
   ```
3. Add a `pdfFile` property to each paper in the `pdfs` array
4. Update the handler functions to use the specific PDF for each paper

## Troubleshooting

**Error when clicking Preview/Download:**
→ Make sure `dummyPdf.pdf` exists in `src/Assets/`

**PDF shows as broken:**
→ Ensure the file is a valid PDF and not corrupted

**Can't find Assets folder:**
→ It's located at: `src/Assets/` from the project root

**Different PDF for each card:**
→ See "To Use Different PDFs for Each Card" section above

## File Structure

```
research-scholar-app/
├── src/
│   ├── Assets/
│   │   └── dummyPdf.pdf  ← PUT YOUR PDF HERE
│   ├── pages/
│   │   └── LibraryPage.jsx (contains the PDF logic)
│   └── ...
└── ...
```

That's it! Once you add the PDF file, everything will work perfectly! 🎉
