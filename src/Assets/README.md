# Assets Folder

## ⚠️ IMPORTANT: Add Your PDF Here

You have uploaded a PDF file called `dummyPdf.pdf` which contains the research paper:
**"Contradictory Postulates of Singularity"** by Kyle Baker, Eryn Culton, Joshua Ten Eyck, Zachary Lewis & Timothy Sands

**To make the preview and download features work:**

1. **Download the PDF** you uploaded to me
2. **Place it in this folder** (`src/Assets/`)
3. **Name it** `dummyPdf.pdf` (exactly as shown)
4. **The preview and download buttons will now work!**

The application is configured with: `import pdf from "../Assets/dummyPdf.pdf"`

## How the Preview & Download Work:

**Preview**: When you click the "Preview" button on any PDF card:
- A modal window opens with an embedded PDF viewer
- The PDF displays using the browser's native PDF viewer
- Shows the full "Contradictory Postulates of Singularity" research paper
- You can scroll through all 8 pages
- Click the X button or outside the modal to close

**Download**: When you click the "Download" button:
- The browser downloads the PDF file
- File name will be "[Paper Title].pdf" (e.g., "Quantum Computing Applications in Machine Learning.pdf")
- The actual PDF downloaded is the "Contradictory Postulates of Singularity" paper
- Downloaded file will be saved to your default downloads folder

## For Multiple Different PDFs:

Currently, all 12 cards use the same PDF (dummyPdf.pdf) for demonstration. To use different PDFs:

1. Add more PDF files to this Assets folder (e.g., `pdf1.pdf`, `pdf2.pdf`, etc.)
2. Import them in LibraryPage.jsx:
   ```javascript
   import pdf1 from "../Assets/pdf1.pdf"
   import pdf2 from "../Assets/pdf2.pdf"
   ```
3. Add a `pdfFile` property to each item in the pdfs array:
   ```javascript
   {
     id: 1,
     title: "...",
     pdfFile: pdf1,  // Add this line
     ...
   }
   ```
4. Update the handlers to use `pdfData.pdfFile || pdf` instead of just `pdf`

Note: For development, Vite will handle the PDF file imports correctly.


