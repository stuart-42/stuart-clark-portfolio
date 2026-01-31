# ⚡ Quick Start Guide (For Complete Beginners)

Never used GitHub or deployed a website? No problem! Follow these simple steps.

## 🎯 What You'll Accomplish

By the end of this guide, you'll have a professional portfolio website live on the internet with your own URL.

**Time needed:** 30-45 minutes (first time)

---

## 📦 What You Need

Download/prepare these items first:

1. **Your portfolio files** (you already have these)
2. **Your documents:**
   - CV/Resume (PDF format)
   - Dissertation paper (PDF)
   - NotebookLM video (upload to YouTube or Google Drive)
   - Infographic (PNG or JPG)
   - Google Colab notebook (make sure it's shareable)

---

## 🚀 Three Simple Steps

### STEP 1️⃣: Create GitHub Account (5 minutes)

**What is GitHub?** Think of it like Google Drive for code. It's where developers store their work, and it offers free website hosting.

1. Go to **github.com**
2. Click **"Sign up"**
3. Choose username (professional: `stuartclark` or `stuart-clark-ai`)
4. Use your email
5. Create a password
6. Verify email
7. Done! ✅

---

### STEP 2️⃣: Upload Your Website (10 minutes)

1. **Create a new project:**
   - Click the **"+"** icon (top right corner)
   - Select **"New repository"**
   - Name it: `stuart-clark-portfolio`
   - Description: "My professional portfolio"
   - Make sure **"Public"** is selected
   - ✅ Check **"Add a README file"**
   - Click **"Create repository"**

2. **Upload your files:**
   - Click **"Add file"** → **"Upload files"**
   - Drag the entire `stuart-clark-portfolio` folder into the upload area
   - You should see:
     - package.json
     - README.md
     - .gitignore
     - public (folder)
     - src (folder)
   - Write: "Initial upload"
   - Click **"Commit changes"**

3. **Update with your GitHub username:**
   - Click on `package.json`
   - Click the **pencil icon** ✏️ (top right)
   - Find this line: `"homepage": "https://USERNAME.github.io/stuart-clark-portfolio"`
   - Replace `USERNAME` with your actual GitHub username
   - Click **"Commit changes"**

---

### STEP 3️⃣: Make It Live (15 minutes)

**Install Node.js** (needed to deploy):

1. Go to **nodejs.org**
2. Click the big green button on the left (LTS version)
3. Download and install
4. Restart your computer

**Deploy your website:**

1. **Download your files from GitHub:**
   - On your repository page, click green **"Code"** button
   - Click **"Download ZIP"**
   - Extract ZIP to your Desktop
   - You should see a folder: `stuart-clark-portfolio-main`

2. **Open Terminal/Command Prompt:**
   
   **On Windows:**
   - Press `Windows key + R`
   - Type: `cmd`
   - Press Enter
   
   **On Mac:**
   - Press `Command + Space`
   - Type: `terminal`
   - Press Enter

3. **Navigate to your folder:**
   
   **Windows:**
   ```bash
   cd Desktop\stuart-clark-portfolio-main
   ```
   
   **Mac:**
   ```bash
   cd Desktop/stuart-clark-portfolio-main
   ```

4. **Run these commands one at a time:**
   
   ```bash
   npm install
   ```
   *(Wait 2-3 minutes - you'll see lots of text, that's normal)*
   
   ```bash
   npm run deploy
   ```
   *(Wait 1-2 minutes - you should see "Published" at the end)*

5. **Enable GitHub Pages:**
   - Go back to your repository on GitHub
   - Click **"Settings"** (top menu)
   - Click **"Pages"** (left sidebar)
   - Under "Source", select branch: **gh-pages**
   - Click **"Save"**

6. **Wait 2-3 minutes**, then visit:
   `https://YOUR-USERNAME.github.io/stuart-clark-portfolio`

🎉 **Your website is now LIVE!**

---

## 🔗 Add Your Links (Important!)

Your website currently has placeholder links. Let's fix that:

### Upload Your Documents to Google Drive

1. Go to **drive.google.com**
2. Upload your:
   - CV (stuart-clark-cv.pdf)
   - Dissertation (dissertation.pdf)
   - Infographic (research-infographic.png)
3. Right-click each file → "Get link"
4. Change to **"Anyone with the link"**
5. Copy the link

### Update Your Website

1. Go to your GitHub repository
2. Click: `src` → `App.jsx`
3. Click the **pencil icon** ✏️
4. Press `Ctrl+F` (or `Cmd+F` on Mac)
5. Search for: `href="#"`
6. You'll find 5 instances - replace each with your Google Drive links:

**Example:**
```jsx
// BEFORE:
<a href="#"

// AFTER:
<a href="https://drive.google.com/file/d/YOUR-FILE-ID/view?usp=sharing"
```

7. After replacing all 5 links, click **"Commit changes"**

8. **Redeploy:**
   - Open Terminal again
   - Navigate to your folder (same as before)
   - Run: `npm run deploy`
   - Wait 2-3 minutes

Done! Your links now work! ✅

---

## 📱 Add to LinkedIn

1. Go to your LinkedIn profile
2. Click **"Add profile section"**
3. Select **"Featured"** → **"Link"**
4. Paste your portfolio URL
5. Title: "Professional Portfolio - AI & Safety Tech"
6. Click **"Save"**

---

## 🆘 Stuck? Quick Fixes

**"npm command not found"**
→ Restart your computer after installing Node.js

**Website shows blank page**
→ Wait 5 minutes, clear browser cache (Ctrl+Shift+R)

**Links don't work**
→ Make sure Google Drive links are set to "Anyone with link"

**Terminal looks scary**
→ Don't worry! Just type the commands exactly as shown

---

## ✅ Success Checklist

After deployment, check:
- [ ] Website loads at your GitHub Pages URL
- [ ] All sections scroll smoothly
- [ ] LinkedIn link works
- [ ] Your CV/documents download properly
- [ ] Site looks good on your phone

---

## 🎯 What's Next?

**Immediate:**
- Share your portfolio URL on LinkedIn
- Add to your email signature
- Include in job applications

**This Week:**
- Connect with AI/ML professionals on LinkedIn
- Apply for internships/entry-level roles
- Join AI/Safety Tech communities

**Optional Upgrades:**
- Buy custom domain: `stuartclark.dev` (~$12/year)
- Add Google Analytics to track visitors
- Create a blog section for technical writing

---

## 💪 You Did It!

You now have:
✅ A professional portfolio website  
✅ Your own .github.io URL  
✅ A GitHub profile (shows technical skills)  
✅ Shareable link for job applications  

**Your portfolio:** `https://YOUR-USERNAME.github.io/stuart-clark-portfolio`

Share it everywhere! 🚀

---

**Questions?** Check DEPLOYMENT_GUIDE.md for detailed troubleshooting.
