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
│ ├── component/
│ │ ├── cart_ske/
│ │ ├── products_page_ske/
│ │ ├── scroll_to_top/
│ │ │ └── ScrollToTop.jsx
│ │ ├── CartItem.jsx
│ │ ├── CategoryBar.jsx
│ │ ├── Footer.jsx
│ │ ├── NavBar.jsx
│ │ └── ProductCard.jsx
│ │
│ ├── context/
│ │ └── CartContext.jsx
│ │
│ ├── layouts/
│ │ └── AppLayout.jsx
│ │
│ ├── pages/
│ │ ├── CartPage.jsx
│ │ ├── LandingPage.jsx
│ │ ├── LoginPage.jsx
│ │ ├── ProductsPage.jsx
│ │ └── RegisterPage.jsx
│ │
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js

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
