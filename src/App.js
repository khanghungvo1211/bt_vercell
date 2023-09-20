import React from 'react';
import MyAvatar from './avatar.jpg';
import './App.css';

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={MyAvatar} alt="My Avatar" width={500} height={500} />
          <p>It thi 5 qua trung, nhieu thi 1 qua ten lua</p>
          <a
              className="App-link"
              href="https://www.facebook.com/khangvo1211"
              target="_blank"
              rel="noopener noreferrer"
          >
            Contact me through
          </a>
          <h2>My favorite music</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hK-s3LsZcFc?si=RqeJPRDHcUobsOvh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </header>

        {/* Footer */}
        <footer className="App-footer">
          {/* Add your footer content here */}
          <p>Pham Thanh Dat Heo</p>
        </footer>
      </div>
  );
}

export default App;
