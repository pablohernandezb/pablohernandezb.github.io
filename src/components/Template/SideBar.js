import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profile.png`} alt="" />
      </Link>
      <header>
        <h2>Pablo Hernandez Borges</h2>
        <p>
          <a href="mailto:hi@pablohernandezb.dev">hi@pablohernandezb.dev</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hello! I craft models to understand our world. I am a{' '}
        Computer Engineer from <a href="http://www.usb.ve/">Universidad Simon Bolivar</a>, with a PhD in Political Science from {' '}
        <a href="https://www.ttu.edu/">Texas Tech University</a>. Previously, I
        was an Instructor at the <a href="https://www.depts.ttu.edu/politicalscience/">Department of Political Science</a> at TTU, 
        currently serving as Instructor Ad Honorem at the <a href="https://www.cs.usb.ve/">Department of Social Sciences</a> at USB.
      </p>
      <p>
        My research focuses on authoritarianism, legislatures, democratic backsliding, and
        innovations in political regimes. I try to understand why and how autocrats and
        leaders employ tools in their arsenal to expand their power. This
        includes ways to innovate and subvert democratic innovations to increase
        their chances of survival.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Pablo Hernandez Borges <Link to="/">pablohernandezb.dev</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
