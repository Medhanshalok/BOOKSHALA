import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'> Welcome to BOOKशाला, where stories come alive and imagination knows no bounds. Dive into a world of endless possibilities—whether you're looking for thrilling mysteries, timeless classics, or the latest in fantasy and sci-fi. Our curated collection has something for every reader, from seasoned bookworms to those just beginning their journey. Discover your next favorite book, explore by genre or author, and let each page take you somewhere extraordinary. Join our community of readers, and let’s find the stories that speak to you. </p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header