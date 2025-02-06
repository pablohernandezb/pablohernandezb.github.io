import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faOrcid } from '@fortawesome/free-brands-svg-icons/faOrcid';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter';
import { faBluesky } from '@fortawesome/free-brands-svg-icons/faBluesky';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://www.linkedin.com/in/pablohernandezb/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://github.com/pablohernandezb',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://orcid.org/0000-0002-3147-1740',
    label: 'ORCID',
    icon: faOrcid,
  },
  {
    link: 'https://x.com/pablohernandezb',
    label: 'X',
    icon: faXTwitter,
  },
  {
    link: 'https://bsky.app/profile/pablohernandezb.bsky.social',
    label: 'BlueSky',
    icon: faBluesky,
  },
  {
    link: 'mailto:pablohernandezb@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
