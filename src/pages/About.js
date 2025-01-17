import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const About = () => (
  <Main
    title="About"
    description="Info about this site and acknowledgements"
  >
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2>
            <Link to="/about">About</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>This site was built using <a href="https://github.com/facebook/create-react-app">create-react-app</a>, <a href="https://github.com/remix-run/react-router">React-Router</a>,
        <a href="https://nodejs.org/en">Node.js</a>, and <a href="https://sass-lang.com/">SCSS</a>. 
        The author is <a href="https://mldangelo.com/">Michael D'Angelo</a>, and the source can 
        be found <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
      </div>
    </article>
  </Main>
);

export default About;
