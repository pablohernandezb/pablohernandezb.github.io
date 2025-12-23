/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Remote',
    position: 'Independent ML Consultant & Data Scientist',
    url: '#',
    startDate: '2024-09-01',
    summary: 'Consulting for research organizations, NGOs, and government analytics.',
    highlights: [
      'Engineered large-scale data platform processing electoral, geocoded, and survey datasets through distributed computing, reducing feature extraction time by 70% through optimized HPC pipelines.',
      'Built anomaly detection system achieving 92% precision for data quality validation across multi-source datasets, enabling automated error flagging for governance analytics clients.',
      'Automated data integration pipelines merging multi-source datasets (V-Dem, ERT, Transparency International) with 99%+ consistency validation, eliminating manual reconciliation workflows.',
      'Developed 15+ automated geospatial visualization pipelines processing large raster datasets (maritime traffic, climate, population, terrain) using R, implementing 3D rendering, bivariate classification, geospatial models, and publication-ready cartography workflows that reduced manual cartography time by 70%.',
    ],
  },
  {
    name: 'Universidad Simon Bolivar',
    position: 'Visiting Professor',
    url: 'http://usb.ve',
    startDate: '2025-04-01',
    summary: 'Serving as a adjunct faculty member, I contribute my expertise in social sciences to teach and mentor students and enrich the academic curriculum.',
    highlights: [
      'Developed and led the "Republic of Sartenejas" project, an innovative educational simulation for social science courses, bridging theory with practical application in politics, economics, and sociology.',
      'Fostered awareness about politically relevant worlwide and national recent events, fostering collaboration, critical thinking, and problem-solving skills through class discussions.',
      'Designed and implemented curricula for core freshman courses, integrating project-based learning and digital tools (Google Sites, IA) to enhance student engagement and tech literacy.',
    ],
  },
  {
    name: 'Texas Tech University',
    position: 'Research Assistant & Instructor',
    url: 'https://ttu.edu',
    startDate: '2018-09-01',
    endDate: '2024-08-31',
    summary: 'Spearheaded data-driven research projects using advanced statistical analysis, programming, and data management, including advanced skills in R, Python, and Stata for data-driven research. Taught six courses related to political science methodology with a lab component in R and Stata.',
    highlights: [
      'Experience with high-performance computing and database management for scalable and efficient structured and unstructured data processing (scrapping, cleaning, merging, and coding).',
      'Developed and organized three workshops in R and R Studio for graduate students in the implementation of methods for research projects covering the following topics : data cleaning, merging datasets, running statistical models, data visualization, and data analysis.',
      'Provided mentorship for 15 graduate students and 40 undergraduate students in their research projects, leading to five award-winning research posters.',
      'Assisted in three data-driven research projects relating to political science that included image-generation, data collection, merging, cleaning, and coding.',
    ],
  },
  {
    name: 'Executive Cabinet Composition Project',
    position: 'Independent Researcher',
    startDate: '2018-01-01',
    endDate: '2018-08-31',
    summary: 'Research assistant under the supervision of Dr. Iñaki Sagarzazu.',
    highlights: [
      'Data collection and archival work from the period 1979 to 1993 for the Executive Cabinet Composition Dataset for Venezuela.',
      'The aim of this project was to analyze cabinet rotation and coalition formation across presidential administrations in Venezuela.',
    ],
  },
  {
    name: 'Universidad Simon Bolivar',
    position: 'Adjunct Professor',
    url: 'http://usb.ve',
    startDate: '2017-09-01',
    endDate: '2018-04-01',
    summary: 'Hired as a professor for the Departament of Social Sciences. Lecturer in basic courses for freshmen students.',
    highlights: [
      'Taught CSA-311 "Men, Culture and Society I" and CSA-312 "Men, Culture and Society II" (Jan-Mar 2018).',
      'Taught CSA-211 "Venezuela in the 21st Century: Culture and Society" (Sep-Dec 2017).',
    ],
  },
  {
    name: 'Universidad Simon Bolivar',
    position: 'IT Systems Analyst',
    url: 'https://usb.ve',
    startDate: '2014-12-01',
    endDate: '2016-12-01',
    summary: 'I implemented the final phase of the SIEVAPAO project, a university-wide HR solution for employee peer-to-peer and performance evaluations.',
    highlights: [
      'I developed modules for specific tasks such as reporting and summarizing the evaluations for managers and directors within the department.',
      'Technologies and tools used include PHP, MariaDB, PostgreSQL, HTML5, CSS3, Javascript, JQuery.',
      'Project sponsored by the Director of Human Capital Management.',
    ],
  },
];

export default work;
