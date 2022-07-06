import React, {useState} from "react";
import "../style/Header.css";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.avif";

function Header() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const explore = () => {
    const anchor = document.querySelector("#shopping");
    anchor.scrollIntoView({ behavior: "smooth", block: "center" });
  }
  
  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={closeMobileMenu}>
          <img className="header__logo" src={Logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item X">
                <Link to="" className="nav-links x" onClick={closeMobileMenu}>
                  Go Back
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-links mob1" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links mob2"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
              <Link
                to="/"
                className="nav-links username"
                onClick={ () => {
                  closeMobileMenu(); 
                  explore();
                }
                  }>
                Explore
              </Link>
              </li>
        </ul>
       
      </nav>
    </>
  );
}

export default Header;
