import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';

const Prize = ({
  data: {
    name, date, url, org, summary,
  },
}) => (
  <article className="prize-container">
    <header>
      <h4>
        <a href={url}>{name}</a>
      </h4>
      <p className="daterange">
        {' '}
        {org} - {date}
      </p>
    </header>
    {summary ? (
      <Markdown
        options={{
          overrides: {
            p: {
              props: {
                className: 'summary',
              },
            },
          },
        }}
      >
        {summary}
      </Markdown>
    ) : null}
  </article>
);

Prize.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    url: PropTypes.string,
    org: PropTypes.string.isRequired,
    summary: PropTypes.string,
  }).isRequired,
};

export default Prize;
