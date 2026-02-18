<div align="center">

<br/>

```
███╗   ██╗ ██████╗ ███╗   ██╗ ██████╗ ████████╗███████╗██████╗
████╗  ██║██╔═══██╗████╗  ██║██╔═══██╗╚══██╔══╝██╔════╝██╔══██╗
██╔██╗ ██║██║   ██║██╔██╗ ██║██║   ██║   ██║   █████╗  ██║  ██║
██║╚██╗██║██║   ██║██║╚██╗██║██║   ██║   ██║   ██╔══╝  ██║  ██║
██║ ╚████║╚██████╔╝██║ ╚████║╚██████╔╝   ██║   ███████╗██████╔╝
╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝╚═════╝
```

**A clean, fast, and beautiful notes app — for web, Android, and desktop.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Kaa278/nonoted)
![License](https://img.shields.io/badge/license-MIT-blue?style=flat-square)
![Platform](https://img.shields.io/badge/platform-Web%20%7C%20Android%20%7C%20Desktop-blueviolet?style=flat-square)
![Firebase](https://img.shields.io/badge/backend-Firebase-orange?style=flat-square)

<br/>

</div>

---

## ✨ Features

| Feature | Description |
|---|---|
| 📝 **Rich Notes** | Create, edit, pin, and tag your notes |
| 🔍 **Smart Search** | Contextual search with highlighted snippets — shows exactly where your keyword appears |
| 🏷️ **Tags & Filters** | Organize notes by custom tags, filter by pinned or drafts |
| 🌙 **Dark / Light Mode** | Seamless theme toggle, persisted across sessions |
| ☁️ **Cloud Sync** | Notes synced to Firebase Firestore in real-time |
| 👤 **Auth** | Register / login with email — guest mode supported |
| 🔄 **Guest Migration** | Notes created as guest are automatically migrated to your account on login or register |
| 📱 **Android App** | Built with Capacitor — available as a native APK |
| 🖥️ **Desktop App** | Packaged with Electron — runs as a standalone AppImage on Linux |
| 📤 **Export** | Export all notes as JSON backup |

---

## 🚀 Deploy

### Vercel (Recommended)

```bash
# 1. Clone the repo
git clone https://github.com/Kaa278/nonoted.git
cd nonoted

# 2. Set root directory to `www` in Vercel dashboard
# 3. Deploy — no build step needed, it's pure HTML/JS
```

> **Vercel settings:**
> - **Root Directory:** `www`
> - **Framework Preset:** Other
> - **Build Command:** *(leave empty)*
> - **Output Directory:** `.`

### Local

```bash
npx http-server www -p 3000
# Open http://localhost:3000
```

---

## 🛠️ Tech Stack

```
Frontend    → Vanilla HTML + CSS + JavaScript
Styling     → Tailwind CSS (CDN)
Icons       → Lucide Icons
Backend     → Firebase Firestore + Firebase Auth
Mobile      → Capacitor (Android APK)
Desktop     → Electron (AppImage)
```

---

## 📁 Project Structure

```
nonoted/
├── www/                    # Web app (main source)
│   └── index.html          # Single-file app
├── android/                # Capacitor Android project
├── desktop-electron/       # Electron desktop app
│   └── main.js
├── desktop-dist/           # Built desktop AppImage
└── capacitor.config.json
```

---

## 📱 Android APK

```bash
npx cap sync
cd android && ./gradlew assembleDebug
# APK → android/app/build/outputs/apk/debug/app-debug.apk
```

---

## 🖥️ Desktop App (Linux)

```bash
cd desktop-electron
npm install
npm run build:linux
# Output → desktop-dist/Nonoted-1.0.0.AppImage
```

---

<div align="center">

Made with ☕ by **Kaa**

</div>
