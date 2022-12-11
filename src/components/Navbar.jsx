import React from 'react';
import Logo from '../img/mc-logo.png';


export default function Navbar () {
  return (
    <header className="header beige">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h1> Mayhem Creates Portfolio </h1>
            <img src={Logo} alt="Mayhem Creates logo" className="header__logo"/>
          </div>
          <div className="col-8">
            <nav className="navbar beige">
              <a href="#about" className="nav__item">
                about
              </a>
              <a href="#work" className="nav__item">
                my work
              </a>
              <a href="#skills" className="nav__item">
                my skills
              </a>
              <a href="#contact" className="nav__item">
                get in touch
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
