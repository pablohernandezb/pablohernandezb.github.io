import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Pablo Hernandez Borges's personal website. PhD in Political Science from TTU | "
      + 'Data Analyst | Data Scientist | Video Games.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Welcome to my site!</Link>
          </h2>
          <p>
            PhD in Political Science with a background in Data Science.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
