import React from 'react';
import PropTypes from 'prop-types';

import Investigation from './Research/Investigation';

const Research = ({ data }) => (
  <div className="research">
    <div className="link-to" id="research" />
    <div className="title">
      <h3>Research</h3>
    </div>
    {data.map((investigation) => (
      <Investigation data={investigation} key={`${investigation.name}`} />
    ))}
  </div>
);

Research.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string,
      highlights: PropTypes.arrayOf(PropTypes.string),
      summary: PropTypes.string,
    }),
  ),
};

Research.defaultProps = {
  data: [],
};

export default Research;
