# DukanPal Frontend

Frontend for an e-commerce application built using React, Vite, and Tailwind CSS.

## Tech Stack
- React (Vite)
- React Router DOM
- Tailwind CSS
- Context API
- Fake Store API
- LocalStorage

## Project Structure

frontend/
├── node_modules/
├── public/
├── src/
│   ├── components/
│   │   ├── cart_ske/          # Cart skeleton components
│   │   ├── products_page_ske/ # Product page skeleton components
│   │   ├── scroll_to_top/
│   │   │   └── ScrollToTop.jsx
│   │   ├── CartItem.jsx
│   │   ├── CategoryBar.jsx
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   └── ProductCard.jsx
│   ├── context/
│   │   └── CartContext.jsx    # Global cart state management
│   ├── layouts/
│   │   └── AppLayout.jsx      # Main application layout
│   ├── pages/
│   │   ├── CartPage.jsx
│   │   ├── LandingPage.jsx
│   │   ├── LoginPage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── RegisterPage.jsx
│   ├── App.jsx                # Main App component
│   ├── index.css              # Global styles
│   └── main.jsx               # Application entry point
├── .env                       # Environment variables
├── .gitignore
├── eslint.config.js           # ESLint configuration
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js          # PostCSS configuration
├── README.md
├── tailwind.config.js         # Tailwind configuration
└── vite.config.js             # Vite configuration

## Features
- Product listing using Fake Store API
- Cart with quantity management
- Cart persistence using localStorage
- Responsive navigation (desktop & mobile)
- Buyer & Seller flow entry
- Login & Register UI (OTP-ready)
- Skeleton loaders for product and cart pages
- Scroll-to-top on route change

## Setup
```bash
npm install
npm run dev
