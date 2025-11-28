# Ludora Teacher Dashboard

A React-based back office dashboard for teachers using the Ludora ludoeducative mobile game. Built with Vite and following atomic design architecture.

## 🏗️ Project Structure

```
ludora-dashboard/
├── src/
│   ├── components/
│   │   ├── atoms/              # Basic building blocks (Button, Input, Label)
│   │   ├── molecules/          # Simple component groups (FormField)
│   │   ├── organisms/          # Complex components (LoginForm)
│   │   ├── templates/          # Page layouts (to be added)
│   │   └── PrivateRoute.jsx    # Route protection component
│   ├── pages/
│   │   ├── LoginPage/          # Authentication page
│   │   └── HomePage/           # Main dashboard page
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication state management
│   ├── services/
│   │   └── authService.js      # API calls and auth logic
│   ├── hooks/                  # Custom React hooks (to be added)
│   ├── utils/                  # Utility functions (to be added)
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Global app styles
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global CSS reset and base styles
├── .env                        # Environment variables
├── .env.example                # Environment variables template
└── package.json                # Dependencies and scripts
```

## 🎨 Atomic Design Architecture

This project follows the **Atomic Design** methodology:

- **Atoms**: Basic HTML elements (Button, Input, Label)
- **Molecules**: Simple groups of atoms (FormField)
- **Organisms**: Complex UI components (LoginForm, Navigation)
- **Templates**: Page-level layouts with reusable structure
- **Pages**: Specific instances of templates with real content

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.19+ or v22.12+) - *Note: Current version may show warnings*
- npm or yarn
- Ludora Backend API running on `http://localhost:3000`

### Installation

1. **Navigate to the dashboard directory**
   ```bash
   cd ludora-dashboard
   ```

2. **Install dependencies** (already done if you just created the project)
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` if your API is on a different URL:
   ```
   VITE_API_URL=http://localhost:3000/api
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

   The dashboard will be available at `http://localhost:5173`

## 🔑 Default Login Credentials

Use these credentials from the seeded Ludora backend:

| Role     | Email               | Password    |
| -------- | ------------------- | ----------- |
| Teacher  | teacher@ludora.com  | teacher123  |
| Director | director@ludora.com | director123 |
| Admin    | admin@ludora.com    | admin123    |

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🧩 Current Features

### ✅ Implemented

- **Authentication System**
  - Login page with form validation
  - JWT token management
  - Protected routes
  - User session persistence
  - Logout functionality

- **Atomic Components**
  - Button component with variants
  - Input component with error handling
  - Label component
  - FormField molecule (Label + Input)
  - LoginForm organism

- **Pages**
  - Login page with gradient background
  - Home page with basic layout
  - Responsive design

- **Infrastructure**
  - React Router for navigation
  - Context API for state management
  - Axios for API communication
  - Environment configuration

### 🚧 Coming Soon (Awaiting Figma Designs)

- Teacher-specific features
- Class management interface
- Student roster views
- Activity tracking
- Performance analytics
- Settings and profile management
- Detailed navigation and menus
- Complete design system implementation

## 🎯 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **HTTP Client**: Axios
- **Styling**: Pure CSS (atomic design approach)
- **State Management**: React Context API
- **Authentication**: JWT tokens

## 🔐 Authentication Flow

1. User enters credentials on login page
2. Credentials sent to `/api/auth/login`
3. Backend returns JWT token and user data
4. Token stored in localStorage
5. Token included in all subsequent API requests
6. PrivateRoute component protects authenticated pages
7. Auto-redirect to login if not authenticated

## 🎨 Design System (Preliminary)

### Colors

- **Primary**: `#6366f1` (Indigo)
- **Secondary**: `#f3f4f6` (Gray)
- **Error**: `#ef4444` (Red)
- **Text**: `#1f2937` (Dark Gray)
- **Background**: `#f9fafb` (Light Gray)

### Typography

- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, Segoe UI, Roboto)
- **Base Size**: 16px
- **Weights**: 400 (normal), 600 (semi-bold), 700 (bold)

## 📝 Development Guidelines

### Creating New Components

1. **Atoms** - Simple, reusable elements
   ```jsx
   // components/atoms/ComponentName/ComponentName.jsx
   const ComponentName = ({ prop1, prop2 }) => {
     return <div>{/* implementation */}</div>;
   };
   ```

2. **Molecules** - Combine multiple atoms
   ```jsx
   // components/molecules/ComponentName/ComponentName.jsx
   import Atom1 from '../../atoms/Atom1/Atom1';
   ```

3. **Organisms** - Complex, standalone components
   ```jsx
   // components/organisms/ComponentName/ComponentName.jsx
   ```

### API Service Pattern

```javascript
// services/yourService.js
import api from './authService';

export const yourService = {
  getData: async () => {
    const response = await api.get('/endpoint');
    return response.data;
  }
};
```

## 🔄 Integration with Backend

The dashboard connects to the Ludora Backend API. Ensure the backend is running before starting the dashboard:

```bash
# In the backend directory
npm run dev
```

See `copilot-ressources/api-README.md` for backend setup instructions.

## 🐛 Known Issues

- Node.js version warnings (v20.8.1 vs required v20.19+)
  - App runs but may show engine warnings
  - Consider upgrading Node.js for best compatibility

## 📋 Next Steps

1. **Design Implementation**: Waiting for Figma designs to:
   - Complete visual design system
   - Build out full feature set
   - Implement teacher-specific workflows
   - Add data visualization components

2. **Feature Development**:
   - Class management CRUD
   - Student management
   - Activity assignment
   - Progress tracking
   - Reports and analytics

3. **Enhancement**:
   - Add loading states
   - Implement error boundaries
   - Add toast notifications
   - Optimize performance
   - Add unit tests

## 🤝 Contributing

This is an internal project for the Ludora educational platform. Follow the atomic design principles and maintain clean, modular code.

## 📄 License

Private - Ludora Educational Platform
