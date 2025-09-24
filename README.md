# 🌐 EntroWeb – SMMA & Digital Agency Website

**EntroWeb** is a sleek, animated, multilingual website designed for modern digital agencies, SMMA teams, and creative studios. Built with speed, responsiveness, and elegance in mind, it showcases your projects, services, and brand credibility across three languages.
---

## 💡 Project Purpose

A portfolio-driven marketing site that blends beautiful visuals with smooth UX — perfect for agencies working in:

- 🧠 Social Media Marketing
- 🎨 Branding & Design
- 🧩 UI/UX & Web Development
- 📣 Digital Campaign Strategy

---

## 🛠️ Tech Stack

| Tech             | Purpose                                 |
|------------------|------------------------------------------|
| **React + Vite** | Lightning-fast SPA foundation            |
| **Tailwind CSS** | Utility-first CSS styling                |
| **Framer Motion**| Animations (hero, scrolls, buttons, etc) |
| **i18next**      | Multilingual support                     |
| **Lucide Icons** | Clean icons for buttons & nav            |
| **WordPress API**| (Optional) Dynamic content for blog/projects |

---

## ✨ Features

- 🎯 **Landing page hero** with animated motion and parallax
- 🌐 **3-Language Support** – English 🇬🇧, Albanian 🇦🇱, Italian 🇮🇹
- 📱 **Fully responsive** from mobile to desktop
- 💬 **Animated text**, CTAs, brand blocks & testimonials
- 🌀 **Galaxy background** with hover effects
- 🎞️ **Animated page transitions** (via Framer Motion)
- 🧑‍🎓 **Modular component design** for easy scalability
- 📁 **Projects page** (static or WordPress dynamic)

---

src/
│
├── assets/                     # Static assets (logos, images, icons)
│   ├── logo.svg
│   └── ...
│
├── components/                 # Reusable UI components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── BG.jsx
│   ├── BrandSection.jsx
│   ├── CTA.jsx
│   ├── AboutHero.jsx
│   └── ...
│
├── pages/                      # Page-level components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Projects.jsx
│   ├── ProjectDetail.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   ├── PrivacyPolicy.jsx
│   ├── TermsOfUse.jsx
│   └── NotFound.jsx
│
├── locales/                    # i18n translations
│   ├── en/
│   │   ├── common.json
│   │   ├── projects.json
│   │   ├── brands.json
│   │   └── ...
│   ├── sq/
│   │   ├── common.json
│   │   ├── projects.json
│   │   ├── brands.json
│   │   └── ...
│   └── it/
│       ├── common.json
│       ├── projects.json
│       ├── brands.json
│       └── ...
│
├── hooks/                      # Custom React hooks
│   └── useInViewAnimation.js
│
├── styles/                     # Tailwind or global styles
│   └── index.css
│
├── App.jsx                     # Main App component with router + scroll restore
├── main.jsx                    # ReactDOM entry point
├── routes.jsx                  # React Router route definitions
├── i18n.js                     # i18next configuration
└── vite.config.js              # Vite bundler config


## 🧠 Folder Breakdown

| Folder | Description |
|--------|-------------|
| `components/` | Reusable elements (Navbar, HeroSection, Galaxy, etc.) |
| `pages/` | Routed views: Home, Projects, Blog, Contact, etc. |
| `locales/` | Translations for each language in `common.json` etc. |
| `hooks/` | Custom hooks like scroll animations |
| `styles/` | Tailwind or custom global styles |
| `i18n.js` | i18next configuration |

---

## 🌍 Language Support

Easily extendable! All translations are stored as JSON files under `src/locales`.

| Code | Language   |
|------|------------|
| `en` | English 🇬🇧 |
| `it` | Italian 🇮🇹 |
| `sq` | Albanian 🇦🇱 |

You can add more by simply adding new folders and updating the `i18n.js`.

---

## 🧪 Development

### Install dependencies:
```bash
npm install
```

### Start the local dev server:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
```

---

## 🚀 Deployment

This project is optimized for **Vercel**, **Netlify**, or any **static hosting** that supports client-side routing.

Make sure to enable SPA fallback (404.html → index.html) on host platforms.

---

## 🔒 License

MIT – Free to use, modify, and deploy.

---

## 💼 Built by

**CA Web Services**  
Website: [https://ca-webservices.com](https://ca-webservices.com)  
Location: 🇲🇹 Malta & 🇦🇱 Albania  

We make waves 🌊 — one project at a time.
