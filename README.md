# NewsExplorer

A full-stack news aggregation application that allows users to search, save, and manage their favorite news articles.

![NewsExplorer Banner](./Screenshot 2025-12-09 at 4.11.23 PM)

---

## 🌟 Project Overview

**NewsExplorer** is an interactive news aggregation application that allows users to search for the latest news articles on any topic and save them to their personal account. The application provides a clean, intuitive interface for discovering and organizing news content.

### What It Does

- 🔍 **Search** for current news articles using keyword queries
- 📰 **Display** search results with article images, titles, descriptions, and sources
- 💾 **Save** articles to a personal collection
- 📁 **Manage** saved articles on a dedicated page
- 🔐 **Authenticate** users to protect personal collections
- 📱 **Responsive** design that works on desktop, tablet, and mobile

### Problem It Solves

In today's information-saturated world, it's challenging to keep track of news articles across multiple topics. NewsExplorer solves this by providing a centralized platform where users can search for news, curate their own collection of interesting articles, and return to them later—all in one place.

---

## 🚀 Live Demo

- **Frontend**: [https://newsexplorer27.mooo.com](https://newsexplorer27.mooo.com)
- **Backend API**: [https://api.newsexplorer27.mooo.com](https://api.newsexplorer27.mooo.com)
- **GitHub Frontend**: [https://github.com/cpeterson27/News-Explorer-Frontend](https://github.com/cpeterson27/News-Explorer-Frontend)
- **GitHub Backend**: [https://github.com/cpeterson27/News-Explorer-Backend](https://github.com/cpeterson27/News-Explorer-Backend)

---

## 💻 Technical Details

### Frontend Technologies

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with BEM methodology
- **JavaScript (ES6+)** - Modern JavaScript features
- **React** - Component-based UI framework
- **React Router** - Client-side routing for navigation
- **Vite** - Fast build tool and development server

### Backend Technologies

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for storing user data and articles
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **Celebrate** - Request validation middleware
- **Winston** - Logging library

### External APIs

- **News API** - Fetching current news articles

---

## ✨ Key Features

### Search Functionality
Real-time news search with keyword queries. Users can search for any topic and get the latest articles from various sources.

### Article Cards
Dynamic rendering of news articles with:
- Article image
- Title and description
- Source and publication date
- Save/delete toggle button

### User Authentication
- Secure sign up/sign in modals
- Form validation for email and password
- JWT-based session management
- Protected routes for authenticated users

### Save & Manage Articles
- Toggle save/delete functionality on article cards
- Dedicated saved articles page
- Visual indication of saved articles
- Delete articles from saved collection

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet (768px) and mobile (320px)
- Hamburger menu for mobile navigation
- Optimized images and layouts for all screen sizes

### Pagination
"Show more" button to load additional search results incrementally (3 articles at a time)

### Component Architecture
Modular React components for reusability and maintainability:
```
src/
├── components/
│   ├── Header/
│   ├── Navigation/
│   ├── SearchForm/
│   ├── NewsCard/
│   ├── SearchResults/
│   ├── LoginModal/
│   └── RegisterModal/
├── pages/
│   ├── HomePage/
│   └── SavedNewsPage/
├── contexts/
│   └── CurrentUserContext/
└── utils/
    ├── api.js
    └── constants.js
```

### State Management
- **React Hooks** (`useState`, `useEffect`, `useContext`) for managing application state
- **Context API** for global user authentication state
- **Local Storage** for JWT token persistence

### Conditional Rendering
Dynamic UI based on:
- Authentication status (show/hide save buttons, navigation links)
- Data availability (loading states, empty states)
- User interactions (modal visibility, saved article status)

### CSS BEM Methodology
Block Element Modifier naming convention for organized, maintainable stylesheets:
```css
.navigation { }
.navigation__logo { }
.navigation__link { }
.navigation__link_active { }
.navigation--saved-page { }
```

### Form Validation
- **Frontend**: Client-side validation with visual feedback
- **Backend**: Server-side validation using Celebrate (Joi)
- Password requirements: minimum 8 characters, uppercase, lowercase, number

### API Integration
- Centralized API utility functions
- Error handling with try-catch blocks
- Environment-based API URLs (development vs production)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- News API key

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/cpeterson27/News-Explorer-Frontend.git
   cd News-Explorer-Frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://api.newsexplorer27.mooo.com
   ```
   
   For local development:
   ```env
   VITE_API_URL=http://localhost:5001
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5000`

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/cpeterson27/News-Explorer-Backend.git
   cd News-Explorer-Backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   PORT=5001
   MONGODB_URI=mongodb://127.0.0.1:27017/newsexplorer
   JWT_SECRET=your-super-secret-jwt-key
   NEWS_API_KEY=your-newsapi-key-here
   FRONTEND_URL=http://localhost:5000
   ```

4. **Start the server**
   ```bash
   npm start
   ```

5. **For development with auto-restart**
   ```bash
   npm run dev
   ```

### Get API Keys

**News API**
1. Visit [News API](https://newsapi.org/)
2. Sign up for a free account
3. Copy your API key
4. Add it to your backend `.env` file as `NEWS_API_KEY`

---

## 🏗️ Project Structure

### Frontend
```
News-Explorer-Frontend/
├── public/
│   └── assets/
│       ├── images/
│       └── fonts/
├── src/
│   ├── components/
│   │   ├── App/
│   │   ├── Header/
│   │   ├── Navigation/
│   │   ├── SearchForm/
│   │   ├── NewsCard/
│   │   ├── SearchResults/
│   │   ├── LoginModal/
│   │   ├── RegisterModal/
│   │   └── Footer/
│   ├── pages/
│   │   ├── HomePage/
│   │   └── SavedNewsPage/
│   ├── contexts/
│   │   └── CurrentUserContext.jsx
│   ├── utils/
│   │   ├── api.js
│   │   └── constants.js
│   └── main.jsx
├── .env
├── package.json
└── vite.config.js
```

### Backend
```
News-Explorer-Backend/
├── controllers/
│   ├── articles.js
│   └── user.js
├── middleware/
│   ├── auth.js
│   ├── logger.js
│   └── validation.js
├── models/
│   ├── article.js
│   └── user.js
├── routes/
│   ├── articles.js
│   ├── auth.js
│   ├── news.js
│   ├── user.js
│   └── index.js
├── utils/
│   ├── errors/
│   ├── config.js
│   ├── errorHandler.js
│   └── rateLimit.js
├── .env
├── app.js
└── package.json
```

---

## 🚧 Development Journey

### Challenges Overcome

**CORS Configuration**
- Configured Express CORS middleware to allow requests from frontend domain
- Set up proper headers for credentials and allowed methods

**JWT Authentication**
- Implemented secure token-based authentication
- Stored tokens in localStorage for session persistence
- Created protected routes using authentication middleware

**State Synchronization**
- Used Context API to share authentication state across components
- Implemented proper cleanup in useEffect hooks to prevent memory leaks
- Ensured saved articles persist across page navigation and refresh

**Responsive Layout**
- Created flexible grid system using CSS Grid and Flexbox
- Implemented hamburger menu with slide-in animation for mobile
- Used CSS transforms for smooth menu transitions

**Form Validation**
- Implemented both frontend and backend validation
- Used Celebrate (Joi) for server-side validation
- Provided clear, user-friendly error messages

**Password Security**
- Hashed passwords using bcrypt before storing in database
- Implemented password requirements (minimum 8 characters, uppercase, lowercase, number)
- Used `select: false` in Mongoose schema to prevent password exposure

**API Rate Limiting**
- Implemented rate limiting to prevent abuse
- Cached News API responses to minimize redundant calls
- Added loading states to improve user experience

**Deployment**
- Set up nginx as reverse proxy for frontend and backend
- Configured environment-specific URLs
- Used PM2 for process management on production server

---

## 📊 Current Status

✅ **Completed Features**
- User authentication (signup/login/logout)
- News search functionality with News API integration
- Save/delete articles to personal collection
- Responsive design (desktop, tablet, mobile)
- Protected routes for authenticated users
- Form validation (client and server-side)
- Error handling and user feedback
- Hamburger menu for mobile navigation

💡 **Future Improvements**
- Add tags or folders for better organization of saved articles
- Implement article sharing functionality
- Add article recommendations based on user interests
- Dark mode toggle
- Export saved articles to PDF or CSV
- Add comments/notes to saved articles

---

## 🧪 Testing

### Manual Testing Checklist

- [x] User registration with valid/invalid data
- [x] User login with correct/incorrect credentials
- [x] Search functionality with various keywords
- [x] Save/unsave articles
- [x] View saved articles page
- [x] Responsive design on different screen sizes
- [x] Protected routes (redirect to home if not logged in)
- [x] Form validation error messages
- [x] Logout functionality

### Future Testing Plans
- Unit tests for React components using Jest and React Testing Library
- API endpoint testing using Supertest
- End-to-end testing using Cypress

---

## 🤝 Contributing

This project was created as part of the TripleTen Software Engineering Bootcamp. While it's primarily a learning project, feedback and suggestions are always welcome!

---

## 👤 Author

**Cassandra Peterson**
- GitHub: [@cpeterson27](https://github.com/cpeterson27)
- LinkedIn: [Connect with me](https://www.linkedin.com/in/cassandra-peterson-your-profile)
- Portfolio: [Your portfolio URL]

Created as part of the **TripleTen Software Engineering Bootcamp**

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **TripleTen** for the comprehensive curriculum and support
- **News API** for providing the news data
- **The React team** for the amazing framework
- **The open-source community** for the various libraries used in this project