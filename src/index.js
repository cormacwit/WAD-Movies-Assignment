import React from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; // NEW
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import {Link} from 'react-router-dom';
import { Home } from "@mui/icons-material";
import UpcomingPage from './pages/upcomingMoviesPage';

const App = () => {
  return (
      <BrowserRouter>
          <SiteHeader />      {FavouriteMoviesPage}
          <SiteHeader />      {HomePage}

      <Routes>
        <Route exact path="/movies/favourites" element={<FavouriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/movies/upcoming" element={ <UpcomingPage /> } />
      </Routes>
    </BrowserRouter>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App /> );