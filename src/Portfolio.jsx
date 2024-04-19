import './Portfolio.css'
export default function Portfolio(){
    return (
        <div className="App">
      <header className="App-header">
        <h1>Zahid Amin - Web Developer</h1>
        <p>Languages Known: HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, React, Node.js</p>
      </header>
      <main>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
           
            <div className="project-info">
              <h3>Hiremeup</h3>
              <p>Campus Recruitment System</p>
              <p className="description">A platform for connecting students with job opportunities on campus.</p>
              <p className="skills">Skills Used: HTML, CSS, JavaScript,PHP, MySQL, Bootstrap</p>
            </div>
          </div>
          
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Zahid Amin</p>
      </footer>
    </div>
  );
}