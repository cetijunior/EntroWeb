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

[File Structure 1/2]

<img width="655" height="765" alt="Screenshot 2025-09-24 103702" src="https://github.com/user-attachments/assets/6d72bf2a-c899-49e2-96a7-d2d3164830a2" />

[File Structure 2/2]

<img width="667" height="688" alt="Screenshot 2025-09-24 103720" src="https://github.com/user-attachments/assets/b0511a8f-5dba-44ac-b0ff-b571433d760b" />



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
