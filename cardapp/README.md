# Credit Card Portal & Transaction Management App

A modern, responsive React application built with Vite and Redux Toolkit for managing credit cards, viewing financial summaries, and tracking transaction history with advanced date filtering and pagination.

---

## 🏗️ Solution Approach & Architecture

### 1. State Management (Redux Toolkit)
- **Auth Slice**: Manages user authentication state (`isAuthenticated`), login, and logout.
- **Cards Slice**: Manages credit card data, card loading status, and selected card details.
- **Transactions Slice**: Manages transaction records and async fetching.

### 2. Data Organization & Services
- Dummy data for cards and transactions is hosted in public JSON files (`/card.json` and `/transaction.json`).
- Asynchronous service layer (`services.js`) fetches data via `fetch` API, including dynamic transaction data generators spanning across months and years.

### 3. Component Hierarchy & UX
- **App**: Global application shell with sticky header and navigation.
- **Login**: Secure login portal with clean styling and demo access.
- **DashBoard**: Renders interactive credit card widgets (`Cards`) and detailed financial summaries (`CardDetails`).
- **History**: Displays transaction history with date range filtering, quick preset filters ("Last 7 Days", "1 Month", "1 Year"), clear filter button with disabled state, and pagination (10 records per page).
- **Loader**: Reusable common spinner component for loading states.

---

## 🎨 Design Document & UI/UX Features

- **Design System**: Vanilla CSS with modern card gradients, subtle shadows, consistent typography, and responsive layouts.
- **Interactive Feedback**: Hover effects on cards and buttons, disabled state for clear filter when no filter is active, and clear page navigation.

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation & Running
```bash
# Navigate to project directory
cd cardapp

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

---

## 📷 Screenshots (Output)

*(Placeholder for application screenshots)*

### 1. Login Page
![Login Page Placeholder](docs/screenshots/login.png)

### 2. Dashboard & Cards View
![Dashboard Placeholder](docs/screenshots/dashboard.png)

### 3. Card Details & Financial Summary
![Card Details Placeholder](docs/screenshots/card-details.png)

### 4. Transaction History with Date Filter & Pagination
![History & Filter Placeholder](docs/screenshots/history.png)
