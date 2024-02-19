import React from 'react';
import './home.css';

const Home = () => {
  return (
    <header id="header">
    <div className="intro">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 intro-text">
              <h2>
               POST APP
                <span></span>
              </h2>
              <p>This application shows the posts related to data.</p>
              <a href="/posts"
                
                className="btn btn-custom btn-lg page-scroll"
              >
                Learn More
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Home