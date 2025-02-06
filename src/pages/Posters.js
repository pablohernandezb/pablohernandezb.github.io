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
      <h3>
        Setting the Stage
      </h3>
      <p>
        Research is not just about data; for me it is also about communication, networking,{' '}
        and art. Through these posters, I not only show my research findings but also my{' '}
        commitment to transmit knolegde in a clear, creative, and engaging manner to a wide{' '}
        range audience. I put emphasis on visual simplicity to convey complex information accesible{' '}
        , as I need to craft an elevator pitch that connects with a diverse public, and hopefully{' '}
        spark a discussion. Below you will find a periodization of my posters during my graduate student{' '}
        years, they show my progression both in research complexity, and design.
      </p>
      <h3>
        The Early Years (2019-2020)
      </h3>
      <p>
        These posters were made using <a href="https://www.latex-project.org/">LaTeX</a>, you can{' '}
        find dozens of templates on <a href="https://www.overleaf.com/">Overleaf</a>. If you feel intimidated{' '}
        by LaTeX, you can also use Microsoft PowerPoint, Google Slides or Keynote. If you are taking{' '}
        this route, I suggest using the <a href="https://www.gust.org.pl/projects/e-foundry/latin-modern">Latin Modern font</a>{' '}
        to make it look like LaTeX.
      </p>
      <SlideshowLightbox className="images" showThumbnails theme="lightbox">
        <img alt="" src="/images/posters/poster_18th_ttu_PCHB.png" />
        <img alt="" src="/images/posters/poster_SeLAB_2019_PCHB.png" />
        <img alt="" src="/images/posters/poster_TX_Circle_2020_PCHB.png" />
        <img alt="" src="/images/posters/poster_19th_ttu_PCHB.png" />
      </SlideshowLightbox>
      <h3>
        The Better Years (2021-2024)
      </h3>
      <p>
        During my third year as a doctoral student, I surfed the web trying to find inspiration{' '}
        for posters designs. I found the <a href="https://osf.io/ef53g/">Better Poster Design</a> framework,{' '}
        that provided a improvements in two fronts, not only in design but also in simplicity and{' '}
        communication captivating audiences and allow me to be more concise during my{' '}
        presentations.
      </p>
      <SlideshowLightbox className="images" showThumbnails theme="lightbox">
        <img alt="" src="/images/posters/poster_20th_ttu_PCHB.png" />
        <img alt="" src="/images/posters/poster_21st_ttu_PCHB.png" />
        <img alt="" src="/images/posters/poster_TX_Circle_2023_PCHB.png" />
        <img alt="" src="/images/posters/poster_TX_Circle_2024_PCHB.png" />
      </SlideshowLightbox>
      <h3>
        Reflection &amp; Impact
      </h3>
      <p>
        While crafting posters, I discovered a new passion. I even served as discussant{' '}
        for poster session at research conferences. But more importantly, I trained{' '}
        graduate and undergraduate students in the Better Poster philosophy which{' '}
        made them award prizes in their presentations. This journey also allow me to{' '}
        hone valuable soft skills:
        <ul className="points">
          <li>
            Creating these posters refined my ability to communicate complex research{' '}
            with a diverse set of methods in a effective matter, both visually and verbally.
          </li>
          <li>
            Working with my co-authors and my dissertation advisor on some of these projects{' '}
            strengthened my collaboration and teamwork skills.
          </li>
          <li>
            Each poster presented unique challenges, due to the research methodology employed,{' '}
            requiring creative problemo-solving and attention to detail.
          </li>
          <li>
            Presenting at diverse conferences taught me to adapt my communication stlye to{' '}
            different audiences, from peers within political science to general public and{' '}
            practitioners.
          </li>
        </ul>
      </p>
      <h3>
        Continue the Story
      </h3>
      <p>
        If you got here and are interested in discussing my research or poster design skills,{' '}
        please feel free to email me at <a href="mailto:hi@pablohernandezb.dev">hi[at]pablohernandezb.dev</a>.
      </p>
      <ScrollToTopButton />
    </article>
  </Main>
);

export default Posters;
