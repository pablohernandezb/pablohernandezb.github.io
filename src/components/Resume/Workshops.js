import React from 'react';
import PropTypes from 'prop-types';

import Training from './Workshops/Training';

const Workshops = ({ data }) => (
  <div className="workshops">
    <div className="link-to" id="workshops" />
    <div className="title">
      <h3>Workshops and Professional Training</h3>
    </div>
    {data.map((training) => (
      <Training data={training} key={`${training.name}-${training.date}`} />
    ))}
  </div>
);

Workshops.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      url: PropTypes.string,
      org: PropTypes.string.isRequired,
      summary: PropTypes.string,
    }),
  ),
};

Workshops.defaultProps = {
  data: [],
};

export default Workshops;