import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About Bookशाला</h2>
            <p className='fs-17'>Welcome to Bookशाला, a haven for book lovers and curious minds alike! Founded on the belief that every story deserves a reader, Bookshala is dedicated to connecting people with books that inspire, entertain, and educate. Whether you’re here to dive into a new world, find a fresh perspective, or reconnect with a classic, we’re here to make your reading journey as fulfilling as possible.</p>
            <p className='fs-17'>At Bookशाला, we believe books have the power to change lives. Our carefully curated collection spans genres and interests, ensuring there’s something for everyone—from captivating fiction and mind-bending sci-fi to insightful non-fiction and inspiring biographies. We’re more than just a bookstore; we’re a community of readers, dreamers, and learners.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
