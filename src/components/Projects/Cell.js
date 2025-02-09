import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          {data.title}
        </h3>
        <time className="published">
          {dayjs(data.date).format('MMMM, YYYY')}
        </time>
      </header>
      <figure>
        <a href={data.link} className="image">
          <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
          <div className="img__description_layer">
            <p className="img__description">Go to GitHub repository</p>
          </div>
        </a>
        <figcaption className="figcaption">
          {data.legend}
        </figcaption>
      </figure>
      <h3>
        Overview
      </h3>
      <p>
        {data.overview}
      </p>
      <h3>
        Data
      </h3>
      {data.dataset ? (
        <ul className="points">
          {data.dataset.map((datasetp) => (
            <li key={datasetp}>{datasetp}</li>
          ))}
        </ul>
      ) : null}
      <h3>
        Technologies &amp; Methods
      </h3>
      {data.tech ? (
        <ul className="points">
          {data.tech.map((techp) => (
            <li key={techp}>{techp}</li>
          ))}
        </ul>
      ) : null}
      <h3>
        Challenges &amp; Opportunities
      </h3>
      {data.challenges ? (
        <ul className="points">
          {data.challenges.map((challengesp) => (
            <li key={challengesp}>{challengesp}</li>
          ))}
        </ul>
      ) : null}
      <h3>
        Retrospective
      </h3>
      {data.retrospective ? (
        <ul className="points">
          {data.retrospective.map((retrospectivep) => (
            <li key={retrospectivep}>{retrospectivep}</li>
          ))}
        </ul>
      ) : null}
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    legend: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    dataset: PropTypes.string.isRequired,
    tech: PropTypes.string.isRequired,
    challenges: PropTypes.string.isRequired,
    retrospective: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
