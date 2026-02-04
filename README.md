# 🎬 MovieApp

A modern web application to explore and discover movies, built with React, TypeScript, and Vite. Integrated with The Movie Database (TMDB) API to fetch up-to-date movie information.

## ✨ Features

- 🎯 **Home Page**: Interactive carousel with upcoming movies and a list of top-rated films
- 🔍 **Real-Time Search**: Find movies instantly as you type
- 📂 **Category Exploration**: 
  - Now Playing (Currently in theaters)
  - Popular (Most popular movies)
  - Top Rated (Highest rated films)
  - Upcoming (Coming soon)
- 📄 **Movie Details**: Complete information including synopsis, genres, rating, and release date
- 🎥 **Embedded Trailers**: Watch YouTube trailers directly in the app
- 🎭 **Similar Movies**: Discover movies related to your favorites
- 📱 **Responsive Design**: Interface adapts to different devices
- ⚡ **Optimized Loading**: Infinite pagination with "Load More" button
- 💀 **Skeleton Loaders**: Enhanced user experience during loading

## 🛠️ Technologies Used

### Frontend
- **React 19.2.0**: Main library for building the user interface
- **TypeScript 5.9.3**: JavaScript superset with static typing
- **Vite 7.2.4**: Next-generation build tool for fast development
- **React Router DOM 7.13.0**: Routing and navigation

### Styling
- **TailwindCSS**: Utility-first CSS framework
- **Bootstrap 5.3.3**: CSS framework for components like carousels

### HTTP Requests
- **Axios 1.13.3**: Promise-based HTTP client

### Additional Features
- **React YouTube 10.1.0**: Component for playing YouTube videos
- **React Icons 5.5.0**: Icon library

### Development Tools
- **ESLint**: Linter to maintain consistent code
- **TypeScript ESLint**: TypeScript-specific rules

## 📁 Project Structure

```
movie-app/
├── public/                    # Static files
├── src/
│   ├── api/
│   │   └── axiosInstance.ts  # Axios and TMDB API configuration
│   ├── assets/               # Media resources
│   ├── components/
│   │   ├── Button/
│   │   │   └── LoadMoreButton.tsx
│   │   ├── Home/
│   │   │   ├── CarouselMiniCard.tsx
│   │   │   ├── HomeCarousel.tsx
│   │   │   ├── HomeCarouselList.tsx
│   │   │   ├── HomeSlider.tsx
│   │   │   ├── MovieCard.tsx
│   │   │   └── MovieList.tsx
│   │   ├── MovieDetails/
│   │   │   ├── SimilarMovies.tsx
│   │   │   └── Trailers.tsx
│   │   ├── Navbar/
│   │   │   └── Navbar.tsx
│   │   └── Skeleton/
│   │       ├── CarouselMiniCardSkeleton.tsx
│   │       ├── DetailsSkeleton.tsx
│   │       ├── HomeCarouselSkeleton.tsx
│   │       └── MovieCardSkeleton.tsx
│   ├── pages/
│   │   ├── Details/
│   │   │   └── Details.tsx    # Movie details page
│   │   ├── Home/
│   │   │   └── Home.tsx       # Main page
│   │   └── Movies/
│   │       └── Movies.tsx     # Exploration page
│   ├── utils/
│   │   └── constant.ts        # Constants and TypeScript types
│   ├── App.tsx                # Main component
│   └── main.tsx               # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure TMDB API**
   
   This project uses The Movie Database (TMDB) API. The access token is already configured in the `src/api/axiosInstance.ts` file, but for production it is recommended to:
   
   - Create an account on [TMDB](https://www.themoviedb.org/)
   - Get your API Key
   - Replace the token in `src/api/axiosInstance.ts`

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   
   The application will be available at `http://localhost:5173`

## 📜 Available Scripts

```bash
# Start the development server
npm run dev

# Build the project for production
npm run build

# Run the linter
npm run lint

# Preview the production build
npm run preview
```

## 🎨 Main Features in Detail

### Home Page
- **Main carousel**: Displays upcoming movies with high-quality images
- **Movie list**: Top-rated movies with pagination system
- **Interactivity**: Intuitive navigation and smooth animations

### Exploration Page (Movies)
- **Category filters**: Switch between different movie categories
- **Dynamic loading**: Pagination system to load more movies
- **Detailed information**: Rating, language, and release date on each card

### Details Page
- **Complete information**: Title, synopsis, genres, rating
- **Trailers**: Playback of official YouTube trailers
- **Similar movies**: Recommendations based on the current movie
- **Attractive design**: Background with backdrop image and gradients

### Navigation Bar
- **Real-time search**: Instant results as you type
- **Quick navigation**: Direct access to all sections
- **Responsive design**: Adapts to different screen sizes

## 🌐 API Used

This project consumes [The Movie Database (TMDB) API](https://www.themoviedb.org/documentation/api) to obtain:
- Movie information
- Images and posters
- Videos and trailers
- Similar movies
- Search results

**Main endpoints used:**
- `/3/movie/upcoming` - Upcoming movies
- `/3/movie/top_rated` - Top-rated movies
- `/3/movie/now_playing` - Movies in theaters
- `/3/movie/popular` - Popular movies
- `/3/movie/{id}` - Movie details
- `/3/movie/{id}/videos` - Movie trailers
- `/3/movie/{id}/similar` - Similar movies
- `/3/search/movie` - Movie search

## 🎯 TypeScript Types

The project includes well-defined TypeScript interfaces to ensure type-safety:

```typescript
// Main types
interface CarouselMovieType
interface MovieCardType
interface MovieDetailType
interface CategoryType
```

## 🤝 Contributing

Contributions are welcome. To contribute:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👨‍💻 Author

**Edgar Guerrero**

---

⭐ If you like this project, don't forget to give it a star!

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the API
- [Vite](https://vitejs.dev/) for the incredible development experience
- [React](https://react.dev/) for the framework
- [TailwindCSS](https://tailwindcss.com/) for the styling system
