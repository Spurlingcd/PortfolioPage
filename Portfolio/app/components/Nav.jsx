import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <h1>Christina<span>.com</span></h1>

        <ul className="nav-menu">
          <a href="/"><li>Home</li></a>
          <a href="/"><li>Projects</li></a>
          <a href="/"><li>Contact</li></a>
          <a href="/"><li>About</li></a>
        </ul>
        <div className="nav-right">
          <button>Hire Me</button>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>\
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
