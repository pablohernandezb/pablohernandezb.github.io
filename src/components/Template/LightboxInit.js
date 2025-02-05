/* eslint-disable  import/no-unresolved */
import { useEffect } from 'react';
import { initLightboxJS } from 'lightbox.js-react';

const LightboxInit = () => {
  useEffect(() => {
    initLightboxJS('585D-4738-04CB-273E', 'individual');
  });
  return null;
};

export default LightboxInit;
