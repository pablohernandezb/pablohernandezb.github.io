/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const research = [
  {
    name: 'Publications',
    summary: 'Research articles, edited volumes, articles and book reviews.',
    highlights: [
      'Selçuk, O., & Hernández-Borges, P. (April 2025). One Step Forward, Two Steps Back: The Venezuelan Opposition under Maduro. In J. Polga-Hecimovich & R. Sanchez-Urribarri (Ed.), Authoritarian Consolidation in Times of Crisis: Venezuela under Nicolás Maduro. Routledge.',
    ],
  },
  {
    name: 'Working Papers',
    summary: 'The current drafts from my research that I am working on, I already presented most of them at research conferences.',
    highlights: [
      'Authoritarian Electoral Engineering I: Small Polling Centers Creation in Venezuelan Presidential Elections (2013-2024).',
      'Authoritarian Electoral Engineering II: Transfer of voters and electoral participation in Venezuelan Sub-National Elections (2013-2024).',
      'Authoritarian or Democratic Innovations? A Reassessment of the Influence of Political Innovations in the Democratic Quality of Latin America. (with Henry Moncrieff)',
      'The Crisis of Divided Government: The Effect of Democratic Backsliding on Legislative Oversight in Venezuela',
      'The Long Trace of Oil Money: A Social Network Analysis of Corruption during the Bolivarian Revolution in Venezuela',
      'The Long Search for a Safe Haven: A Cross-National Analysis of Peacefulness in Refugee-Receiving Countries',
      'Show Me the Carnet de la Patria!: A Quasi-Experiment on the Effect of Political Communications on Clientelistic Control Mechanisms in Venezuela',
    ],
  },
  {
    name: 'Research Assistant Projects',
    summary: 'Served as research assistant during my tenure at Texas Tech University under different PIs, mostly providing technical and methodological service.',
    highlights: [
      'Candidate Appearance and Voter Evaluations. Lubbock, TX. January 2023 - May 2023. Design of portraits and flyers resembling candidate\'s advertisement for an experimental survey. Supervised by Dr. Steven Perry and Dr. Matt Lamb.',
      'Colombian Planning Secretariat Dataset. Lubbock, TX. January 2021 - July 2021. Data collection of Development Plans and Planning Directors of Colombia\'s Mayoralties from 2018 to 2021, compiled by Dr. Ricardo Bello-Gomez.',
    ],
  },
  {
    name: 'Conferences',
    summary: 'Attended local, regional, national, and international conferences here I presented original research, served as discussant for peers and undergraduate students.',
    highlights: [
      'Anual MPSA Conference, Palmer House Hilton, Chicago, IL: 2019, 2021, 2022, 2023, and 2024.',
      'TX Comparative Politics Circle: UNT, Denton, TX (2024); TTU, Lubbock TX (2023); UT, Austin, TX (2022); Rice and UH, Houston, TX (2020).',
      'SPSA Annual Conference: Hilton Riverside, New Orleans, LA (2024)',
      'LASA Congress (Online): 2025 (Forthcoming), 2024, 2023, and 2022',
      'ISA Annual Convention: Gaylord Pryland Resort & Convection Center, Nashville, TN (2022)',
      'APSA Annual Meeting: Hilton Union Suare, San Francisco, CA (2020)',
      'Atlanta Symposium on Political Science: Georgia State University, Atlanta, GA (2020)',
      'SeLAB Conference: University of Mississippi, Oxford, MS (2019)',
      'ECPR Standing Group on Latin American Politics: IE University, Segovia, Spain (2019)',
      'Annual Texas Tech Hispanic/Latinx Research and Creativity Symposium at TTU, Lubbock, TX: 2024, 2023, 2020.',
      'Annual Graduate School Poster Competition at TTU, Lubbock, TX: 2022, 2021, 2020, and 2019.',
      'Arts and Humanities Graduate Student Research Conference at TTU, Lubbock, TX: 2021, 2020, and 2019',
      'Cross-Disciplinary Doctoral Research Conference "United in Research" at TTU, Lubbock, TX (2021)',
    ],
  },
];

export default research;
