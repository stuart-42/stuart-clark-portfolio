# Stuart Clark - Professional Portfolio

Professional portfolio website for Stuart Clark, showcasing the career transition from experienced Health & Safety Consultant to AI Engineer.

## 🚀 Live Site

Once deployed: `https://YOUR-USERNAME.github.io/stuart-clark-portfolio`

## 📋 Features

- **Responsive Design** - Works on all devices
- **Single Page Application** - Smooth scrolling navigation
- **Project Showcase** - MSc dissertation on AI for Occupational Safety
- **Professional Timeline** - 8+ years experience visualization
- **Skills Display** - ML/NLP tech stack + domain expertise
- **Contact Integration** - LinkedIn and downloadable CV

## 🛠️ Built With

- React 18
- Tailwind CSS
- Lucide React Icons

## 📦 Deployment Instructions

### Step 1: Create GitHub Account & Repository

1. Go to [github.com](https://github.com) and create a free account
2. Click the "+" icon → "New repository"
3. Repository name: `stuart-clark-portfolio`
4. Make it **Public**
5. ✅ Check "Add a README file"
6. Click "Create repository"

### Step 2: Upload Project Files

**Option A: Using GitHub Web Interface (Easiest)**

1. In your repository, click "Add file" → "Upload files"
2. Drag and drop ALL folders and files from this project
3. Write commit message: "Initial portfolio upload"
4. Click "Commit changes"

**Option B: Using Git Command Line**

```bash
git clone https://github.com/YOUR-USERNAME/stuart-clark-portfolio.git
cd stuart-clark-portfolio
# Copy all project files here
git add .
git commit -m "Initial portfolio upload"
git push
```

### Step 3: Install Dependencies & Deploy

You need Node.js installed on your computer. If you don't have it:
- Download from [nodejs.org](https://nodejs.org) (get the LTS version)

Then run these commands in your project folder:

```bash
# Install dependencies
npm install

# Update package.json with your GitHub username
# Open package.json and replace "USERNAME" with your actual GitHub username

# Deploy to GitHub Pages
npm run deploy
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" → "Pages" (left sidebar)
3. Under "Source", select branch: `gh-pages`
4. Click "Save"
5. Wait 2-3 minutes for deployment
6. Your site will be live at: `https://YOUR-USERNAME.github.io/stuart-clark-portfolio`

## ⚙️ Before Going Live - Important Updates

You MUST update these placeholder links in `src/App.jsx`:

### 1. Project Resource Links (Line ~330-380)
Replace all `href="#"` with actual URLs:

```jsx
// Dissertation PDF
<a href="YOUR-PDF-LINK-HERE" ...>

// Google Colab
<a href="YOUR-COLAB-LINK-HERE" ...>

// NotebookLM Video
<a href="YOUR-VIDEO-LINK-HERE" ...>

// Infographic
<a href="YOUR-INFOGRAPHIC-LINK-HERE" ...>
```

### 2. CV/Resume Download Link (Line ~820)
```jsx
<a href="YOUR-CV-LINK-HERE" ...>
```

**How to host files:**
- Upload to Google Drive → Get shareable link → Use that URL
- Or commit files to your GitHub repo and use the raw URL
- For PDFs: `https://github.com/USERNAME/stuart-clark-portfolio/raw/main/public/stuart-clark-cv.pdf`

### 3. Update package.json
Replace `USERNAME` with your actual GitHub username:
```json
"homepage": "https://YOUR-USERNAME.github.io/stuart-clark-portfolio"
```

## 🔄 Making Updates After Deployment

Whenever you make changes:

```bash
# Make your edits in src/App.jsx
npm run deploy
```

This will automatically rebuild and push to GitHub Pages.

## 📝 Adding Your Documents

Create a `public/docs` folder and add:
- `stuart-clark-cv.pdf` - Your CV/Resume
- `dissertation.pdf` - Your dissertation paper
- `infographic.png` - Your research infographic

Then reference them in the code:
```jsx
<a href={`${process.env.PUBLIC_URL}/docs/stuart-clark-cv.pdf`} download>
```

## 🆘 Troubleshooting

**Site not showing up?**
- Wait 5 minutes after deployment
- Check GitHub Pages settings (Settings → Pages)
- Make sure branch is set to `gh-pages`

**Blank page?**
- Check browser console for errors (F12)
- Verify `homepage` in package.json matches your GitHub username

**Changes not appearing?**
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Wait a few minutes for GitHub Pages to update

## 📧 Support

For issues or questions about deployment:
- GitHub Pages Documentation: https://docs.github.com/en/pages
- React Deployment: https://create-react-app.dev/docs/deployment/

## 📄 License

© 2025 Stuart Clark. All rights reserved.
