/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} date - Year of the award/grant or range of the fellowship
 * @property {string|undefined} url - Company website
 * @property {string} org - Organization granting the award
 * @property {string|undefined} summary - html/markdown summary of the position
 */
const awards = [
  {
    name: 'Student Academic Leadership Award',
    date: '2023',
    url: 'https://www.texastechparents.org/',
    org: 'Texas Tech Parents Association',
    summary: 'Awarded to one student from each of the colleges, for academic and leadership achievements.',
  },
  {
    name: 'Graduate Student of the Year Award',
    date: '2022',
    url: 'https://www.depts.ttu.edu/politicalscience/',
    org: 'Department of Political Science, Texas Tech University',
    summary: 'Awarded to graduate students based on academic and extra-curricular achievements throughout the academic year.',
  },
  {
    name: 'IPAC Academic Fellowship',
    date: '2022',
    url: 'https://www.texastechparents.org/',
    org: 'Institute for Peace & Conflict, Texas Tech University',
    summary: 'IPAC strives to attract faculty and graduate student scholars from a wide variety of university disciplines whose work touches on the themes of peace and conflict and the numerous ways in which societies respond to war, diplomacy, and the pursuit of peace.',
  },
  {
    name: 'J.T. and Margaret Talkington Graduate Fellowship',
    date: '2018-2022',
    url: 'https://www.depts.ttu.edu/gradschool/',
    org: 'Graduate School, Texas Tech University',
    summary: 'The Fellowship is a competitive grant awarded to graduate students in Texas Tech University.',
  },
  {
    name: '2021 EITM Summer Institute Graduate Stipend',
    date: '2021',
    url: 'https://eitminstitute.org/',
    org: 'EITM, Duke University',
    summary: 'The stipend was granted to all students attending the 2021 Empirical Implications of Theoretical Models Summer Institute.',
  },
  {
    name: 'Dr. William A. Jackson Scholarship',
    date: '2020 - 2021',
    url: 'https://www.depts.ttu.edu/politicalscience/',
    org: 'Department of Political Science, Texas Tech University',
    summary: 'Established by William A. Jackson Jr. And Mrs. N.G.Kerr in honor of Dr. William A. Jackson, an early member of the Department of Political Science and first head of what later became the Graduate School. Administered by the Department Scholarship Committee.',
  },
  {
    name: 'R. Guy Carter Scholarship',
    date: '2019 - 2021',
    url: 'https://www.depts.ttu.edu/politicalscience/',
    org: 'Department of Political Science, Texas Tech University',
    summary: 'Established in honor of R. Guy Carter, an attorney, political science alumnus, and member of Texas Tech\'s first graduating class in 1928. Administered by the Department Scholarship Committee and the Alumni Association.',
  },
  {
    name: 'Gordon Treadaway Scholarship',
    date: '2021',
    url: 'https://www.depts.ttu.edu/politicalscience/',
    org: 'Department of Political Science, Texas Tech University',
    summary: 'Awarded annually to one or more graduate or undergraduate students who have demonstrated a strong interest in a public service career. Established in honor of Gordon Treadaway, a political science alumnus and member of Texas Tech\'s first student class.',
  },
  {
    name: 'Graduate Emerging Scholar Award',
    date: '2020 - 2021',
    url: 'https://www.depts.ttu.edu/politicalscience/',
    org: 'Department of Political Science, Texas Tech University',
    summary: 'The Graduate Emerging Scholar Award is awarded annually to the best graduate student research paper written for coursework or for the second year paper requirement, during the previous two long semesters. The award includes a travel grant, aimed at assisting the awardee in presenting this research at a research conference.',
  },
  {
    name: 'Global Guides Scholarship',
    date: '2019 - 2021',
    url: 'https://www.depts.ttu.edu/international/isss/studentlife/global-guides/index.php',
    org: 'Office of International Affairs, Texas Tech University',
    summary: 'The International Global Guides program connects current Texas Tech University Students with prospective students to promote, share, and support their efforts to attend the university. Global Guides will also provide assistance with student life and retention activities through the Office of International Student Life.',
  },
  {
    name: 'John A. Garcia Scholarship',
    date: '2020',
    url: 'https://polmeth.org/',
    org: 'Society for Political Methodology',
    summary: 'Awarded by the Society for Political Methodology to encourage women and underrepresented graduate students in political science to attend the ICPSR Summer Program. The award is named in honor of John A. Garcia, major figure in quantitative social science research and strong supporter of the ICPSR Summer Program.',
  },
  {
    name: 'Student International Research Award (First runner-up)',
    date: '2019',
    url: 'https://www.depts.ttu.edu/international/intlopr/global_vision_awards.php',
    org: 'Office of International Affairs, Texas Tech University',
    summary: 'The Student International Research Award recognizes international scholarship by a graduate student and is based on the 18th Annual Graduate Student Research Poster Competition.',
  },
];

export default awards;
