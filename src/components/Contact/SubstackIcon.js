import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as SubstackSVG } from '../../assets/substack-icon-original.svg';

const SubstackIcon = ({ className, style, ...props }) => {
  const existingTransform = style && style.transform ? `${style.transform} ` : '';
  const mergedStyle = {
    ...(style || {}),
    transform: `${existingTransform}translateY(3px)`,
  };

  return (
    <SubstackSVG
      className={className}
      aria-hidden="true"
      focusable="false"
      width="1em"
      height="1em"
      style={mergedStyle}
      {...props}
    />
  );
};

SubstackIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.shape({
    transform: PropTypes.string,
  }),
};

SubstackIcon.defaultProps = {
  className: undefined,
  style: undefined,
};

export default SubstackIcon;
