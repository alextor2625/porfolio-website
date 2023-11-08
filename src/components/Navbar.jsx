import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-bar-links">
        <li>
          <Link
            to="Home"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="AboutMe"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="Skills"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className="dropdown">
          <Link
            to="Projects"
            className="nav-link"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects <span className="dropdown-arrow"></span>
          </Link>
          <ul className="dropdown-content">
            <li>
              <Link
                to="CookBook"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CookBook
              </Link>
            </li>
            <li>
              <Link
                to="MotekRewards"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Motek Rewards
              </Link>
            </li>
            <li>
              <Link
                to="DecodeMe"
                className="nav-link"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                DecodeMe
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
