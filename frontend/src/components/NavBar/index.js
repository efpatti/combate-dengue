import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink, Events, scrollSpy } from 'react-scroll';
import { IoMdArrowUp } from 'react-icons/io';
import './NavBar.css';

const NavBarComp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [navbar, setNavbar] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const addShadow = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', addShadow);

  const navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'proliferacao', label: 'Proliferação' },
    { href: 'health', label: 'Saúde' },
    { href: 'conscientizacao', label: 'Conscientização' },
  ];

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  const handleScroll = () => {
    const scrollOffset = window.scrollY + window.innerHeight / 3;
    const sections = navLinks.map((link) => document.getElementById(link.href));

    let activeSection = null;

    sections.forEach((section) => {
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.clientHeight;

        if (scrollOffset >= sectionTop && scrollOffset < sectionBottom) {
          activeSection = section.id;
        }
      }
    });

    setActiveSection(activeSection);

    setShowScrollTopButton(scrollOffset > window.innerHeight);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    Events.scrollEvent.register('begin', (to) => handleSetActive(to));
    window.addEventListener('scroll', handleScroll);
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove('begin');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`NavBar ${navbar ? 'border-b-2' : ''}`}>
        <nav className="nav-container">
          <div className="nav-left">
            <span className="nav-brand text-d">HEEJ</span>
            <button
              className="menu-toggle lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="text-4xl" /> : <FaBars className="text-4xl" />}
            </button>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navLinks.map((item) => (
              <li key={item.label}>
                <ScrollLink
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`nav-link ${activeSection === item.href ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}></div>

      <button
        onClick={scrollToTop}
        className={`scroll-top-btn ${showScrollTopButton ? 'visible' : ''}`}
      >
        <IoMdArrowUp className="text-xl" size={16} />
      </button>
    </>
  );
};

export default NavBarComp;
