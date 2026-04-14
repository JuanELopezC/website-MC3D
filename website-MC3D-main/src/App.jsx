import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css';

// Components
import Slideshow from './components/slideshow.jsx';
import ImageCard from './components/ImageCard.jsx';
import Button from './components/Button.jsx'

// Pages
import About from './components/pages/About.jsx';
import Events from './components/pages/Events.jsx';
import Members from './components/pages/Members.jsx';
import Prints from './components/pages/Prints.jsx';
import Projects from './components/pages/Projects.jsx';
import Collabs from './components/pages/Collabs.jsx';
import Resources from './components/pages/Resources.jsx';
import ScrollToTop from './components/pages/ScrollToTop.jsx';

function App() {

  const imageCards = [
    { picture: '3dprinter.gif', text: 'Our 3D printer in action' },
    { picture: 'homecoming.jpg', text: 'MC3D team photo' },
    { picture: 'roger.jpg', text: 'Prototype model' },
    { picture: 'dinos.jpg', text: 'Flexy dinos' },
  ];

  return (
    <div className="app">

      {/* --- Navbar --- */}
      <nav className="navbar">
        <img className='logo' src='./images/logofixed.png'></img>
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/events", label: "Events" },
          { to: "/members", label: "Members" },
          { to: "/prints", label: "Prints" },
          { to: "/resources", label: "Resources" }
        ].map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* --- Main Content --- */}
      <main>

        {/* ✅ ADD THIS LINE RIGHT HERE */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={
            <>
              <section className="slideshow-section">
                <Slideshow
                  images={[
                    '/images/meetmaryville.jpg',
                    '/images/rocks.jpg',
                    '/images/dinos.jpg',
                    '/images/trophy.jpg',
                    '/images/braxton.png',
                    '/images/bradley.jpg',
                    '/images/chance.jpg',
                    '/images/chance&braxton.jpg',
                    '/images/firstevent.jpg',
                    '/images/firstworkshop.jpg',
                    '/images/chancehelmet.jpg',
                    '/images/whitehelment.jpg',
                  ]}
                />
              </section>

              <section className="hero">
                <h1>Maryville College 3D Printing Club</h1>
                <p>Design. Create. Innovate.</p>
                <Button label="Get Started" to="/about" />
              </section>

              <section className="home-sections">
                <div className="home-card">
                  <h2>About Us</h2>
                  <p>Learn about our club, mission, and what we do at MC3D.</p>
                  <Button label="Learn More" to="/about" />
                </div>

                <div className="home-card">
                  <h2>Events</h2>
                  <p>Workshops, meetings, and hands-on 3D printing sessions.</p>
                  <Button label="View Events" to="/events" />
                </div>

                <div className="home-card">
                  <h2>Members</h2>
                  <p>Meet the team behind the prints and projects.</p>
                  <Button label="Meet Members" to="/members" />
                </div>

                <div className="home-card">
                  <h2>Prints</h2>
                  <p>Explore our 3D printed creations and designs.</p>
                  <Button label="View Prints" to="/prints" />
                </div>

                <div className="home-card">
                  <h2>How To Join</h2>
                  <p>Learn how to join the club.</p>
                  <Button label="Learn More" to="/members" />
                </div>

                <div className="home-card">
                  <h2>Resources</h2>
                  <p>Helpful tools, guides, and materials for 3D printing.</p>
                  <Button label="Explore Resources" to="/resources" />
                </div>
              </section>
            </>
          } />

          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/collabs" element={<Collabs />} />
          <Route path="/resources" element={<Resources />} />

          <Route path="*" element={
            <div className="page-content">
              <h2>404 - Page Not Found</h2>
              <p>Sorry, this page does not exist.</p>
            </div>
          } />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footercontent">
          <span className="footerlogo">Maryville College 3D Printing Club</span>
          <div className="footer-contact">
            <a href="mailto:mc3d@maryvillecollege.edu">mc3d@maryvillecollege.edu</a>
            <a href="https://www.instagram.com/mc3dprinting/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
            <NavLink to="/resources" className="nav-link">Resources</NavLink>
          </div>
          <p className="footer-note">© 2025 Maryville College 3D Printing Club — All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;