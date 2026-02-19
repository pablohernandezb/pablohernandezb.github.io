import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        <a href={s.link} aria-label={s.label}>
          {typeof s.icon === 'function' ? (
            React.createElement(s.icon, { className: 'icon' })
          ) : (
            <FontAwesomeIcon className="icon" icon={s.icon} transform="grow-3" />
          )}
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
