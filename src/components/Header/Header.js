import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="container">
          <a href="#" className="logo">
            <img src="https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG19.png" />
          </a>
          <nav>
            <ul>
              <li>
                <a href="#">Main page</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
