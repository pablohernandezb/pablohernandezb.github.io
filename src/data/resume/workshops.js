/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the workshops/course
 * @property {string} date - Year/period of the workshop/course
 * @property {string|undefined} url - Company website
 * @property {string} org - Organization granting the workshop/course
 * @property {string|undefined} summary - html/markdown summary of the position
 */
const workshops = [
  {
    name: 'Graduate Certificate in Geographical Information Science and Technology',
    date: '2021-2022',
    url: 'https://www.depts.ttu.edu/geospatial/center/GraduateCertificate.html#:~:text=A%20graduate%20certificate%20in%20Geographic,their%20education%20in%20geospatial%20technology.',
    org: 'Department of Geosciences, Texas Tech University',
    summary: 'Offered through the Department of Geosciences at Texas Tech University.  The certificate program is designed to provide a flexible solution for professionals, graduate students and recent graduates who would like to further their education in geospatial technology.',
  },
  {
    name: 'Empirical Implication of Theoretical Models (EITM) Summer Institute',
    date: 'July 18-31 2021',
    url: 'https://eitminstitute.org/',
    org: 'Duke University',
    summary: 'Funded by the National Science Foundation (NSF), this program trains graduate students and junior faculty in EITM, a research strategy that integrates theoretical models and empirical research to improve and expand our understanding of politics. The institute will integrate developments and findings from throughout political science, including the substantive areas of American politics, comparative politics, international relations, and political economy.',
  },
  {
    name: 'IPAC Academic Fellowship',
    date: '2022',
    url: 'https://www.texastechparents.org/',
    org: 'Institute for Peace & Conflict, Texas Tech University',
    summary: 'IPAC strives to attract faculty and graduate student scholars from a wide variety of university disciplines whose work touches on the themes of peace and conflict and the numerous ways in which societies respond to war, diplomacy, and the pursuit of peace.',
  },
  {
    name: 'ICPSR Summer Program in Quantitative Methods of Social Research',
    date: 'June-August 2020',
    url: 'https://www.icpsr.umich.edu/',
    org: 'Institute for Social Research, University of Michigan',
    summary: 'Comprehensive, integrated program of studies in research design, statistics, data analysis, and social methodology. Workshops taken: Machine Learning: Applications in Social Science Research; Network Analysis I: Introduction; Data Science and Text Analysis; and Structural Equation Models with Latent Variables.',
  },
  {
    name: 'Type, Teaching, & Communication Series',
    date: 'October-November 2019',
    url: 'https://www.depts.ttu.edu/comc/',
    org: 'Communication Training Center (CTC), Texas Tech University',
    summary: 'Discover your styles of learning and decision making with the theory behind the Myers-Briggs system. Learn how to harness the strengths of each style to maximize student engagement, teacher-student interaction, and classroom communication.',
  },
  {
    name: 'Signature Workshops',
    date: 'January-March 2019',
    url: 'https://www.depts.ttu.edu/comc/',
    org: 'Communication Training Center (CTC), Texas Tech University',
    summary: 'The Signature Workshops is a series of eight workshops designed to improve instructor awareness in order to facilitate and positively impact undergraduate student learning.',
  },
  {
    name: 'Groundwork Program',
    date: 'January 2019',
    url: 'https://www.depts.ttu.edu/tlpdc/',
    org: 'Teaching, Learning and Professional Development Center, Texas Tech University',
    summary: 'The Groundwork Program (Groundwork) is an opportunity for graduate students at Texas Tech University to learn more about teaching in the college classroom. Groundwork is a face-to-face, 2 and a half day program of workshops, discussions, and micro-teaching opportunities.',
  },
  {
    name: 'Research Strategies Training Program',
    date: 'September 2018 - November 2018',
    url: 'https://www.depts.ttu.edu/library/',
    org: 'University Libraries, Texas Tech University',
    summary: 'A series of workshops hosted by the Graduate School to introduce students to a variety of skills to successfully conduct research.',
  },
];

export default workshops;
