import React from 'react';

const SvgMock = React.forwardRef((props, ref) => (
  <svg ref={ref} {...props} />
));

SvgMock.displayName = 'SvgMock';

export const ReactComponent = SvgMock;
export default SvgMock;
