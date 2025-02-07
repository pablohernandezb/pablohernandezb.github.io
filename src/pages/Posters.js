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
        Research isn&apos;t just about data; for me, it&apos;s also about communication,{' '}
        networking, and art. Through these posters, I not only showcase my research{' '}
        findings but also my commitment to transmitting knowledge in a clear, creative,{' '}
        and engaging manner to a wide range of audiences. I emphasize visual simplicity to{' '}
        make complex information accessible, as I aim to craft an &quot;elevator pitch&quot; that{' '}
        connects with a diverse public and hopefully sparks discussion. Below, you will{' '}
        find a selection of my posters from my graduate student years, demonstrating my{' '}
        progression in both research complexity and design.
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
      <p>
        <SlideshowLightbox className="images" showThumbnails theme="lightbox">
          <img alt="" src="/images/posters/poster_18th_ttu_PCHB.png" />
          <img alt="" src="/images/posters/poster_SeLAB_2019_PCHB.png" />
          <img alt="" src="/images/posters/poster_TX_Circle_2020_PCHB.png" />
          <img alt="" src="/images/posters/poster_19th_ttu_PCHB.png" />
        </SlideshowLightbox>
      </p>
      <h3>
        The Better Years (2021-2024)
      </h3>
      <p>
      "During my third year as a doctoral student, I searched the web for inspiration for{' '}
      poster designs. I discovered the <a href="https://osf.io/ef53g/"></a>Better Poster Design</a> framework, which offered{' '}
      improvements in two key areas: design and simplicity. This framework helped me create{' '}
      more engaging posters that captivated audiences and allowed me to be more concise{' '}
      during my presentations.
      </p>
      <p>
        <SlideshowLightbox className="images" showThumbnails theme="lightbox">
          <img alt="" src="/images/posters/poster_20th_ttu_PCHB.png" />
          <img alt="" src="/images/posters/poster_21st_ttu_PCHB.png" />
          <img alt="" src="/images/posters/poster_TX_Circle_2023_PCHB.png" />
          <img alt="" src="/images/posters/poster_TX_Circle_2024_PCHB.png" />
        </SlideshowLightbox>
      </p>
      <h3>
        Reflection &amp; Impact
      </h3>
      <p>
        I discovered a new passion in crafting posters. I even served as discussant{' '}
        for poster sessions at research conferences. But more importantly, I trained{' '}
        graduate and undergraduate students in the Better Poster philosophy which{' '}
        resulted in award-winning presentations. This journey also allow me to{' '}
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
        please feel free to email me at <a href="mailto:hi@pablohernandezb.dev">hi[at]pablohernandezb.dev</a>.{' '}
        I can also take a look if you are in the process of crafting a poster and offer advise.
      </p>
      <ScrollToTopButton />
    </article>
  </Main>
);

export default Posters;
