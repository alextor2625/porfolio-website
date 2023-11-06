const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-links">
        <li>
          <a href="#Home" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#AboutMe" className="nav-link">
            About Me
          </a>
        </li>
        <li>
          <a href="#Skills" className="nav-link">
            Skills
          </a>
        </li>
        <li className="dropdown">
          <a href="#Projects" className="nav-link ">
            Projects <span className="dropdown-arrow"></span>
          </a>
          <ul className="dropdown-content">
            <li>
              <a href="" className="nav-link">
                CookBook
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                Motek Rewards
              </a>
            </li>
            <li>
              <a href="" className="nav-link">
                DecodeMe
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
