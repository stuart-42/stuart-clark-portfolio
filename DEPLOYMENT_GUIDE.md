# 📘 Complete GitHub Pages Deployment Guide

## Prerequisites Checklist

Before starting, make sure you have:
- [ ] A GitHub account (create at github.com)
- [ ] Node.js installed (download from nodejs.org - get LTS version)
- [ ] Your project files downloaded
- [ ] Links ready for: CV, Colab notebook, dissertation PDF, video, infographic

---

## Part 1: GitHub Setup (10 minutes)

### Step 1.1: Create GitHub Account
1. Go to https://github.com
2. Click "Sign up"
3. Choose a professional username (e.g., "stuartclark" or "stuart-clark-ai")
4. Complete registration

### Step 1.2: Create New Repository
1. Click the "+" icon (top right) → "New repository"
2. Fill in:
   - **Repository name:** `stuart-clark-portfolio`
   - **Description:** "Professional portfolio - AI Engineer & Safety Expert"
   - **Public** (must be public for free GitHub Pages)
   - ✅ Check "Add a README file"
3. Click "Create repository"

### Step 1.3: Upload Project Files
1. Click "Add file" → "Upload files"
2. Drag ALL files from the `stuart-clark-portfolio` folder:
   - `package.json`
   - `README.md`
   - `.gitignore`
   - `public/` folder
   - `src/` folder
3. Scroll down, write: "Initial portfolio setup"
4. Click "Commit changes"

---

## Part 2: Update Your Information (5 minutes)

### Step 2.1: Edit package.json
1. In GitHub, click on `package.json`
2. Click the pencil icon (✏️) to edit
3. Find line 5: `"homepage": "https://USERNAME.github.io/stuart-clark-portfolio"`
4. Replace `USERNAME` with your actual GitHub username
5. Click "Commit changes"

### Step 2.2: Add Your Links to App.jsx
1. Click on `src` folder → `App.jsx`
2. Click pencil icon (✏️) to edit
3. Search for `href="#"` (there are 5 instances)
4. Replace with your actual links:

**Around line 340 - Dissertation PDF:**
```jsx
<a href="YOUR-PDF-URL-HERE"
```

**Around line 350 - Google Colab:**
```jsx
<a href="YOUR-COLAB-URL-HERE"
```

**Around line 360 - NotebookLM Video:**
```jsx
<a href="YOUR-VIDEO-URL-HERE"
```

**Around line 370 - Infographic:**
```jsx
<a href="YOUR-INFOGRAPHIC-URL-HERE"
```

**Around line 820 - CV Download:**
```jsx
<a href="YOUR-CV-URL-HERE"
```

5. Commit changes after each edit

**💡 How to get file URLs:**
- Upload to Google Drive → Right-click → Get link → Set to "Anyone with link"
- Or add files to `public` folder in your repo and use: `https://github.com/YOUR-USERNAME/stuart-clark-portfolio/raw/main/public/filename.pdf`

---

## Part 3: Local Setup & Deployment (15 minutes)

### Step 3.1: Install Node.js
1. Go to https://nodejs.org
2. Download LTS version (left button)
3. Run installer, click "Next" through all steps
4. Restart your computer

### Step 3.2: Download Your Repository
1. On your repository page, click green "Code" button
2. Click "Download ZIP"
3. Extract ZIP to a folder (e.g., Desktop)
4. Open that folder

### Step 3.3: Open Terminal/Command Prompt

**Windows:**
- Press `Win + R`
- Type `cmd` and press Enter
- Navigate to your folder:
  ```bash
  cd Desktop\stuart-clark-portfolio
  ```

**Mac:**
- Press `Cmd + Space`
- Type "terminal" and press Enter
- Navigate to your folder:
  ```bash
  cd Desktop/stuart-clark-portfolio
  ```

### Step 3.4: Install Dependencies
In terminal, run:
```bash
npm install
```

This will take 2-3 minutes. You'll see a lot of text scrolling - this is normal!

### Step 3.5: Deploy to GitHub Pages
Run:
```bash
npm run deploy
```

You'll see:
1. Building project...
2. Publishing to gh-pages branch...
3. "Published" ✅

---

## Part 4: Enable GitHub Pages (2 minutes)

### Step 4.1: Configure GitHub Pages
1. Go back to your repository on GitHub
2. Click "Settings" (top menu)
3. Scroll down, click "Pages" (left sidebar)
4. Under "Source":
   - Branch: Select `gh-pages`
   - Folder: Select `/ (root)`
5. Click "Save"

### Step 4.2: Wait for Deployment
1. You'll see: "Your site is ready to be published at..."
2. Wait 2-3 minutes
3. Refresh the page
4. You should see: "Your site is published at https://YOUR-USERNAME.github.io/stuart-clark-portfolio"

---

## Part 5: Verify & Share (2 minutes)

### Step 5.1: Check Your Live Site
1. Click the URL or visit: `https://YOUR-USERNAME.github.io/stuart-clark-portfolio`
2. Test all sections scroll properly
3. Check links work (LinkedIn, project resources)

### Step 5.2: Update LinkedIn
1. Go to your LinkedIn profile
2. Click "Add profile section" → "Featured" → "Link"
3. Add your portfolio URL
4. Title: "Professional Portfolio"

---

## 🔄 Making Updates Later

Whenever you want to update your portfolio:

### Quick Edit (Small Changes)
1. Go to GitHub repository
2. Navigate to file (e.g., `src/App.jsx`)
3. Click pencil icon to edit
4. Make changes
5. Commit
6. Run `npm run deploy` from terminal

### Major Updates
1. Make changes locally in your files
2. Open terminal in project folder
3. Run:
   ```bash
   npm run deploy
   ```
4. Wait 2-3 minutes for changes to appear

---

## 📋 Post-Deployment Checklist

After your site is live, verify:
- [ ] All navigation links work
- [ ] LinkedIn link opens correctly
- [ ] Project resource links work (PDF, Colab, video, infographic)
- [ ] CV download works
- [ ] Site looks good on mobile (open on your phone)
- [ ] No console errors (press F12 in browser)

---

## 🆘 Common Issues & Solutions

### "npm: command not found"
- Node.js isn't installed properly
- Restart computer after installing Node.js
- Try running: `node --version` to verify

### "Permission denied" error
**Windows:** Run Command Prompt as Administrator
**Mac/Linux:** Add `sudo` before commands: `sudo npm install`

### Site shows 404 error
- Wait 5 more minutes (GitHub Pages can be slow)
- Check Settings → Pages → branch is set to `gh-pages`
- Check `homepage` in package.json matches your username

### Blank white page
- Check browser console (F12) for errors
- Verify all files uploaded correctly
- Clear browser cache (Ctrl+Shift+R)

### Changes not appearing
- Clear browser cache
- Wait 5 minutes (GitHub Pages caches content)
- Check you ran `npm run deploy` successfully

---

## 🎯 Next Steps After Deployment

1. **Add to LinkedIn:** Feature your portfolio prominently
2. **Share with network:** Post about your new portfolio
3. **Update regularly:** Add new projects as you complete them
4. **Track visitors:** Add Google Analytics (optional)
5. **Custom domain:** Consider buying `stuartclark.dev` ($12/year)

---

## 📞 Need Help?

If you get stuck:
1. Read the error message carefully
2. Google the specific error
3. Check GitHub Pages docs: https://docs.github.com/en/pages
4. Ask on Stack Overflow with tags: `github-pages`, `react`

---

## 🎉 Success!

Once deployed, you'll have a professional portfolio that:
- Shows up in Google searches
- Demonstrates technical skills (hosting on GitHub)
- Showcases your unique AI + Safety expertise
- Is easily shareable with recruiters

**Your portfolio URL:**
`https://YOUR-USERNAME.github.io/stuart-clark-portfolio`

Add this everywhere:
- LinkedIn profile (Featured section)
- Email signature
- Resume/CV
- Job applications

Good luck with your job search! 🚀
