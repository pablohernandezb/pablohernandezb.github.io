import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Pablo Hernandez Borges via email @ hi[at]pablohernandezb.dev"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
          <p>Feel free to get in touch</p>
        </div>
      </header>
      <div className="email-at">
        <p>Let&apos;s connect on <a href="https://www.linkedin.com/in/pablohernandezb/">LinkedIn</a>,{' '}
          check some of my projects on <a href="https://www.linkedin.com/in/pablohernandezb/">GitHub</a>, or you can email me {' '}
          at <a href="mailto:hi@pablohernandezb.dev">hi[at]pablohernandezb.dev</a>
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
