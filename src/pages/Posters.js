/* eslint-disable  import/no-unresolved */
import React from 'react';
import { Link } from 'react-router-dom';
import { SlideshowLightbox } from 'lightbox.js-react';

import Main from '../layouts/Main';
import ScrollToTopButton from '../components/Template/ScrollToTopButton';

const Posters = () => (
  <Main title="Posters" description="Learn about Pablo Hernandez Borges's posters.">
    <article className="post" id="posters">
      <header>
        <div className="title">
          <h2>
            <Link to="/posters">Posters</Link>
          </h2>
          <p>Visualizing research, where data meets design</p>
        </div>
      </header>
      <p>
        Some of these posters were made using <a href="https://www.latex-project.org/">LaTeX</a> on{' '}
        <a href="https://www.overleaf.com/">Overleaf</a>; you can find the Latin Modern font{' '}
        <a href="https://www.gust.org.pl/projects/e-foundry/latin-modern">here</a>.{' '}
        The ones with the big image in the middle are inspired by the <a href="https://osf.io/ef53g/">Better Poster Design</a> framework.
      </p>
      <h3>
        The Early Years (2019-2020)
      </h3>
      <SlideshowLightbox className="images" showThumbnails theme="lightbox">
        <img alt="" src="/images/posters/poster_18th_ttu_PCHB.png" />
        <img alt="" src="/images/posters/poster_SeLAB_2019_PCHB.png" />
        <img alt="" src="/images/posters/poster_TX_Circle_2020_PCHB.png" />
        <img alt="" src="/images/posters/poster_19th_ttu_PCHB.png" />
      </SlideshowLightbox>
      <h3>
        The Better Years (2021-2024)
      </h3>
      <SlideshowLightbox className="images" showThumbnails theme="lightbox">
        <img alt="" src="/images/posters/poster_20th_ttu_PCHB.png" />
        <img alt="" src="/images/posters/poster_21st_ttu_PCHB.png" />
        <img alt="" src="/images/posters/poster_TX_Circle_2023_PCHB.png" />
        <img alt="" src="/images/posters/poster_TX_Circle_2024_PCHB.png" />
      </SlideshowLightbox>
      <ScrollToTopButton />
    </article>
  </Main>
);

export default Posters;
