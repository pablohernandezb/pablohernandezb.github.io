import React from 'react';
import PropTypes from 'prop-types';

import Prize from './Awards/Prize';

const Awards = ({ data }) => (
  <div className="awards">
    <div className="link-to" id="awards" />
    <div className="title">
      <h3>Grants and Awards</h3>
    </div>
    {data.map((prize) => (
      <Prize data={prize} key={`${prize.name}-${prize.date}`} />
    ))}
  </div>
);

Awards.propTypes = {
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

Awards.defaultProps = {
  data: [],
};

export default Awards;
