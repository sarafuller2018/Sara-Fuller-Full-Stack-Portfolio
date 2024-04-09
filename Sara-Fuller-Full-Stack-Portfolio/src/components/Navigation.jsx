import "../styles/Navigation.css";
import { Link, useLocation } from "react-router-dom";

function Navigation() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            to="/"
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/AboutMePage"
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/AboutMePage' ? 'nav-link active' : 'nav-link'}
          >
            About Me
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/PortfolioPage"
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/PortfolioPage' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/ResumePage"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/ResumePage' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/ContactPage"
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === '/ContactPage' ? 'nav-link active' : 'nav-link'}
          >
            Contact Me
          </Link>
        </li>
      </ul>
    );
  }
  
  export default Navigation;