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
/*fetch("http://localhost/reactapp/getdate.php",{
  method: "POST",
  body: formData
  }
)*/
function App() {
  /* Fun Fact Cards
  const funFacts = [
    { number: "", title: "3D Prints Completed" },
    { number: "", title: "Active Members" },
    { number: "", title: "Projects Built" },
    { number: "", title: "Collabs With Other Clubs" },
  ]*/

  // Image Cards
  const imageCards = [
    { picture: '3dprinter.gif', text: 'Our 3D printer in action' },
    { picture: 'homecoming.jpg', text: 'MC3D team photo' },
    { picture: 'roger.jpg', text: 'Prototype model' },
    {picture: 'dinos.jpg' , text: 'Flexy dinos'},
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
          /*{ to: "/projects", label: "Projects" },
          /*{ to: "/collabs", label: "Collabs" },*/
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

        {/* Homepage */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Slideshow */}
              <section className="slideshow-section">
                <Slideshow
                  images={[
                    '/images/meetmaryville.jpg',
                    '/images/rocks.jpg',
                    '/images/dinos.jpg',
                    '/images/trophy.jpg',
                    '/images/blackjack.jpg',
                    '/images/bradley.jpg',
                    '/images/chancemic.jpg',
                    '/images/chance&braxton.jpg',
                    '/images/firstevent.jpg',
                    '/images/firstworkshop.jpg',
                    '/images/chancehelmet.jpg',
                    '/images/whitehelment.jpg',
                    '/images/firstfloorpic.jpg',
                    '/images/crapstable.jpg',
                    '/images/frontable.jpeg',
                    '/images/joshdealer.jpeg',
                    '/images/slotsmachine.jpg'
                    
                  ]}
                />
              </section>

              {/* Hero Text */}
              <section className="photo-text">
                <div className="box">
                  <div className="inner"><span>Welcome to MC3D</span></div>
                  <div className="inner"><span>Welcome to MC3D</span></div>
                </div>
                <h2>Official Maryville College 3D Printing Club</h2>
              </section>

                {/* Fun Fact Cards */}
                <section className="funfacts-section">
                  <h2>LEARN ABOUT US</h2>
                  <div className="funfacts-container">
                    <Button
                      label="About Us"
                      to="/about"
                    
                    />
                  </div>
                </section>

              

              {/* Image Cards */}
              <section className="imagecards-section">
                <h2>3D Printing Highlights</h2>
                <div className="imagecards-container">
                  {imageCards.map((card, i) => (
                    <ImageCard key={i} picture={card.picture} text={card.text} />
                  ))}
                </div>
              </section>
            </>
          } />

          {/* Other Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
          <Route path="/prints" element={<Prints />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/collabs" element={<Collabs />} />
          <Route path="/resources" element={<Resources />} />

          {/* 404 */}
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
            
          </div>
          <p className="footer-note">© 2025 Maryville College 3D Printing Club — All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}




export default App;
