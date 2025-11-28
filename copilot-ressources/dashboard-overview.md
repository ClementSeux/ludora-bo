# Ludora Dashboard - Project Overview

## Quick Start

```bash
cd ludora-dashboard
npm run dev
```

Visit: http://localhost:5173

## Test Login

-   Email: `teacher@ludora.com`
-   Password: `teacher123`

## Architecture Summary

### Atomic Design Structure

```
components/
├── atoms/         → Button, Input, Label
├── molecules/     → FormField
├── organisms/     → LoginForm
└── templates/     → (to be added based on Figma)
```

### Key Files

-   `App.jsx` - Main router and auth provider
-   `AuthContext.jsx` - Authentication state
-   `authService.js` - API integration
-   `PrivateRoute.jsx` - Route protection

## Current Features ✅

-   Login/logout with JWT
-   Form validation
-   Protected routes
-   Session persistence
-   Responsive design

## Awaiting Figma 🎨

-   Complete design system
-   Teacher dashboard features
-   Class/student management
-   Activity tracking
-   Analytics views

## API Integration

Backend: http://localhost:3000/api
Configured in: `.env` → `VITE_API_URL`

## Development Notes

-   Pure CSS (no frameworks yet - awaiting design system)
-   Context API for state (may upgrade to Redux if needed)
-   Axios interceptors handle auth tokens automatically
-   Form validation in components (can extract to utils later)

## Color Palette (Temporary)

-   Primary: #6366f1 (Indigo)
-   Secondary: #f3f4f6 (Gray)
-   Error: #ef4444 (Red)
-   Gradient: #667eea → #764ba2

---

**Next:** Import Figma designs and build out full feature set
