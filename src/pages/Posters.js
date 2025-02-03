import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Sheet from '../components/Posters/Sheet';
import data from '../data/posters';

const Posters = () => (
  <Main title="Posters" description="Learn about Pablo Hernandez Borges's posters.">
    <article className="post" id="posters">
      <header>
        <div className="title">
          <h2>
            <Link to="/posters">Posters</Link>
          </h2>
          <p>A selection of posters presented at research conferences</p>
        </div>
      </header>
      <p>
        Some of these posters were made using <a href="https://www.latex-project.org/">LaTeX</a> on{' '}
        <a href="https://www.overleaf.com/">Overleaf</a>; you can find the Latin Modern font{' '}
        <a href="https://www.gust.org.pl/projects/e-foundry/latin-modern">here</a>.{' '}
        The ones with the big image in the middle are inspired by the <a href="https://osf.io/ef53g/">Better Poster Design</a> framework.
      </p>
      {data.map((poster) => (
        <Sheet data={poster} key={poster.title} />
      ))}
    </article>
  </Main>
);

export default Posters;
