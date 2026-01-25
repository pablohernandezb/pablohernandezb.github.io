import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Pablo Hernandez Borges's personal website. Data Scientist | "
      + 'AI & ML Modeler.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">print("Welcome to my site!")</Link>
          </h2>
          <p>
            Data Scientist & Researcher | AI Engineering | Large-Scale Data Engineering & Causal Analytics
          </p>
        </div>
      </header>
      <p>
        {' '}
        Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        <Link to="/posters">posters</Link>, <Link to="/maps">maps</Link>,{' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
