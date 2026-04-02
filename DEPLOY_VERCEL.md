# 🚀 Deploy to Vercel Guide

## Quick Deploy - Cypherpunk BTC

Your repo is ready! Follow these steps to deploy to Vercel in 2 minutes.

---

## 📋 Prerequisites

✅ GitHub repo: **https://github.com/agds-alt/cypherpunk-btc**
✅ All commits pushed
✅ PWA configured & tested
✅ Production build verified

---

## 🎯 Deploy Steps (Web UI)

### **1. Go to Vercel**
Open: **https://vercel.com/new**

### **2. Import Git Repository**
- Click **"Add New Project"**
- Select **"Import Git Repository"**
- Choose **GitHub** as provider
- Find: **agds-alt/cypherpunk-btc**
- Click **Import**

### **3. Configure Project**

**Framework Preset:** Next.js (auto-detected) ✓

**Build Settings:**
- **Build Command:** `pnpm build` (auto-detected)
- **Output Directory:** `.next` (default)
- **Install Command:** `pnpm install` (auto-detected)

**Root Directory:** `./` (leave as is)

**Node Version:** 20.x (automatic)

### **4. Environment Variables**
None needed! (All client-side)

### **5. Deploy**
Click **"Deploy"** button

⏱️ **Build Time:** ~2-3 minutes
- Installing dependencies
- Running build (webpack mode for PWA)
- Generating static pages (11 pages)
- Optimizing assets

---

## ✅ What Happens After Deploy

### **Automatic Setup:**
✓ HTTPS certificate (free, auto-renewed)
✓ CDN distribution (global edge network)
✓ Serverless functions (if needed)
✓ PWA service worker activation
✓ Preview deployments for PRs

### **Your URLs:**
```
Production: https://cypherpunk-btc.vercel.app
           (or your custom domain)

Preview:    https://cypherpunk-btc-[hash].vercel.app
           (for each git push)
```

---

## 📱 Test PWA After Deploy

### **1. Open Production URL**
On your phone: `https://cypherpunk-btc.vercel.app`

### **2. Install to Home Screen**

**Android (Chrome):**
- Tap menu (⋮) → "Add to Home screen"
- Look for install banner at bottom

**iOS (Safari):**
- Tap Share (□↑) → "Add to Home Screen"

### **3. Verify PWA Features**
✓ Opens in standalone mode (no browser UI)
✓ Shows Bitcoin ₿ icon on home screen
✓ Works offline (turn off WiFi, reload)
✓ Fast loading (service worker caching)

---

## 🔧 Build & Deploy Settings

### **Framework:** Next.js 16.2.2
```json
{
  "buildCommand": "pnpm build --webpack",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install"
}
```

### **Output:**
```
Route (app)
┌ ○ /                           # Landing page
├ ○ /home                       # Main home
├ ○ /offline                    # PWA offline fallback
├ ○ /modules/austrian-economics
├ ○ /modules/halving-cycles
├ ○ /modules/monetary-history
├ ○ /modules/self-custody
└ ○ /modules/stock-to-flow

○ (Static) 11 pages prerendered
○ (PWA) Service worker: /sw.js
```

### **PWA Files:**
```
/manifest.json       # PWA manifest
/sw.js              # Service worker
/icon-*.png         # App icons (8 sizes)
/apple-touch-icon.png
/favicon.ico
```

---

## 🎨 Custom Domain (Optional)

### **Add Your Domain:**
1. Go to project **Settings** → **Domains**
2. Add domain: `cypherpunkbtc.com` (example)
3. Configure DNS:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```
4. Wait for DNS propagation (~5-10 mins)

### **Free SSL:**
- Auto-provisioned by Vercel
- Wildcard cert included
- Auto-renewal forever

---

## 🔄 Continuous Deployment

### **Auto Deploy Triggers:**
✓ **Push to `main`** → Production deploy
✓ **Push to other branches** → Preview deploy
✓ **Pull Requests** → Preview deploy + comment

### **Build Time:**
- First deploy: ~3 minutes
- Subsequent: ~1-2 minutes (cached)

### **Preview Deployments:**
Every git push gets unique URL:
```
https://cypherpunk-btc-[git-sha].vercel.app
```

---

## 📊 Monitoring & Analytics

### **Built-in Vercel Analytics:**
1. Go to project **Analytics** tab
2. Enable **Web Analytics** (free)
3. See:
   - Page views
   - Unique visitors
   - Top pages
   - Performance metrics

### **Lighthouse Scores:**
Run audit after deploy:
```
Performance:   95+ ⚡
Accessibility: 100 ♿
Best Practices: 95+ 💚
SEO:           100 🔍
PWA:           100 📱
```

---

## 🐛 Troubleshooting

### **Build Failed?**

**Check Build Logs:**
- Vercel dashboard → Deployments → Click failed build
- Look for error messages

**Common Issues:**
```bash
# TypeScript errors
→ Fix locally: pnpm build
→ Commit & push fix

# Missing dependencies
→ Check package.json
→ Run: pnpm install

# Environment variables
→ Not needed for this project (all client-side)
```

### **PWA Not Working?**

✓ Wait 1-2 mins after deploy (service worker activation)
✓ Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
✓ Check HTTPS is working (required for PWA)
✓ Open /manifest.json (should be accessible)

### **Icons Not Showing?**

✓ Check `/icon-192x192.png` is accessible
✓ Clear browser cache
✓ Reinstall PWA from home screen

---

## 🎯 Post-Deploy Checklist

After successful deploy:

- [ ] Test all 5 modules load correctly
- [ ] Test language switcher (EN/ID)
- [ ] Install PWA on Android phone
- [ ] Install PWA on iPhone (Safari)
- [ ] Test offline mode (turn off WiFi)
- [ ] Check interactive elements (calculators, selectors)
- [ ] Test all links and navigation
- [ ] Share URL with friends! 🎉

---

## 📚 Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Deploy:** https://nextjs.org/docs/deployment
- **PWA Testing:** https://web.dev/pwa-checklist/

---

## 💡 Tips

**Performance:**
- Vercel Edge Network = Fast globally
- Static pages = Instant loading
- PWA caching = Offline-first

**Cost:**
- Free tier: Unlimited personal projects
- 100GB bandwidth/month
- No credit card needed

**Security:**
- HTTPS by default
- DDoS protection included
- Auto security headers

---

## 🎉 You're Done!

Your Bitcoin education platform is now:
✅ Deployed globally
✅ HTTPS secured
✅ PWA installable
✅ Lightning fast
✅ Auto-updating

**Share it with the world! 🌍₿**

> "Fix the money, fix the world"

---

**Repo:** https://github.com/agds-alt/cypherpunk-btc
**Deploy:** https://vercel.com/new

Built with ❤️ for Bitcoin education and financial sovereignty
