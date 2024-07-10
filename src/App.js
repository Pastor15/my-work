import React from 'react';
import './App.css';
// Import your images here
import cardImage from './images/illustration-article.svg';
import authorImage from './images/img1.webp';

function App() {
  return (
    <div className="card">
      <div className="card-image">
        <img src={cardImage} alt="Card Image" />
      </div>
      <div className="card-content">
        <div className="tag">Learning</div>
        <div className="date">Published 21 Dec 2023</div>
        <h2 className="title">HTML & CSS foundations</h2>
        <p className="description">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className="author">
          <img src={authorImage} alt="Author Image" />
          <span>Greg Hooper</span>
        </div>
      </div>
    </div>
  );
}

export default App;
