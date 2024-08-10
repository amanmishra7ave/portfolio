import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Aman Mishra</h1>
        <p>Computer Science Engineer | Flutter Developer | AI Enthusiast</p>
      </header>
      <main>
        <section id='about'>
          <h2>About Me</h2>
          <p>B.Tech in Computer Science Engineering student at Amity University Raipur with a passion for Flutter development, AI, and web technologies.</p>
        </section>
        <section id='skills'>
          <h2>Skills</h2>
          <ul>
            <li>C/C++</li>
            <li>Python</li>
            <li>Dart</li>
            <li>Java</li>
            <li>Flutter</li>
            <li>Machine Learning</li>
            <li>Web development</li>
            <li>Linux</li>
            <li>OpenCV</li>
            <li>Deep Learning</i>
          </ul>
        </section>
        <section id='experience'>
          <h2>Experience</h2>
          <div className='experience-item'>
            <h3>Flutter Developer Intern</h3>
            <p>August 2023 - February 2024 | Noida, UP</p>
            <ul>
              <li>Developed an Invoice screen for users to get the bill of purchase instantly.</li>
              <li>Worked on CDR app for government to monitor crime rate in the region.</li>
              <li>Technologies used: Flutter, BLoC Cubit for state management, Postman, REST API</li>
            </ul>
          </div>
          <div className="experience-item">
            <h3>AI Intern</h3>
            <p>December 2023 | Pantech E Learning, Raipur, C.G</p>
            <ul>
              <li>Developed and automated organization processes using AI.</li>
              <li>Created hate speech detection using Natural Language Processing.</li>
            </ul>
          </div>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project-item">
            <h3>Online Free and Paid Courses App</h3>
            <p>July 2023 – September 2023</p>
            <p>A Flutter app providing access to free online courses and allowing course providers to set price tags.</p>
          </div>
          <div className="project-item">
            <h3>Movie Recommendation System</h3>
            <p>December 2022 – January 2023</p>
            <p>Developed a system showing three types of recommendations based on genre, popularity, and user preferences.</p>
          </div>
          <div className="project-item">
            <h3>Face and Eye Detection</h3>
            <p>June 2023 – July 2023</p>
            <p>Used OpenCV and Haar Cascade classifiers for face and eye detection in images.</p>
          </div>
        </section>
      </main>
      <footer>
        <p>Contact: amanmishra7ave@gmail.com | +91 7024274951</p>
        <p>
          <a href="https://linkedin.com/in/aman-mishra-450" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="https://github.com/amanmishra7ave" target="_blank" rel="noopener noreferrer">GitHub</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
