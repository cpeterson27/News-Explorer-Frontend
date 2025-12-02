NewsExplorer
Project Overview

NewsExplorer is an interactive news aggregation application that allows users to search for the latest news articles on any topic and save them to their personal account. The application provides a clean, intuitive interface for discovering and organizing news content.
What It Does

Searches for current news articles using keyword queries
Displays search results with article images, titles, descriptions, and sources
Allows users to save articles to a personal collection
Provides a dedicated page to view and manage saved articles
Offers user authentication to protect personal collections

Problem It Solves
In today's information-saturated world, it's challenging to keep track of news articles across multiple topics. NewsExplorer solves this by providing a centralized platform where users can search for news, curate their own collection of interesting articles, and return to them later—all in one place.

Technical Details
Technologies Used

HTML5 - Semantic markup structure
CSS3 - Custom styling with responsive design
JavaScript (ES6+) - Core application logic
React - Component-based UI framework
React Router - Client-side routing for navigation
News API - External API for fetching news articles

Key Features Implemented

Search Functionality: Real-time news search with keyword queries
Article Cards: Dynamic rendering of news articles with images and metadata
Save/Delete Articles: Toggle functionality to add or remove articles from saved collection
User Authentication: Sign in/sign up modals with form validation
Responsive Design: Mobile-first approach with breakpoints for tablet and desktop
Pagination: "Show more" button to load additional search results incrementally
Protected Routes: Saved news page accessible only to authenticated users

Special Techniques

Component Architecture: Modular React components for reusability and maintainability
State Management: React hooks (useState, useEffect) for managing application state
Conditional Rendering: Dynamic UI based on authentication status and data availability
CSS BEM Methodology: Block Element Modifier naming convention for organized stylesheets
Responsive Images: Optimized loading and display across different screen sizes
Form Validation: Client-side validation for user input fields


Visual Appeal
Screenshots
Homepage - Search Interface
Show Image
Search Results
Show Image
Saved Articles Page
Show Image
Mobile View
Show Image

Practical Information
Live Demo
🔗 //link for live demo here after deployment of front and backend
Running Locally

Clone the repository

bash   git clone https://github.com/yourusername/news-explorer.git

cd news-explorer

Install dependencies

bash   npm install

Set up environment variables
Create a .env file in the root directory:

   REACT_APP_NEWS_API_KEY=your_api_key_here
   REACT_APP_API_URL=http://localhost:5001

Start the development server

bash   npm start

Open your browser
Navigate to http://localhost:5000

API Setup
You'll need a free API key from News API. Sign up and add the key to your .env file.

Development Journey
Challenges Overcome

API Rate Limiting: Implemented caching strategy to minimize redundant API calls
State Synchronization: Ensuring saved articles persist across page navigation and refresh
Responsive Layout: Creating a flexible grid system that adapts smoothly to all screen sizes
Authentication Flow: Building secure login/signup with proper error handling

Future Improvements

Add article filtering by date, source, or category
Implement tags or folders for better organization of saved articles
Add social sharing functionality
Include article recommendations based on user interests

Author
Created as part of the TripleTen Software Engineering Bootcamp
License
This project is licensed under the MIT License
