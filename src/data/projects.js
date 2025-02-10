// TODO Add a couple lines about each project
const data = [
  {
    title: 'The Crisis of Divided Government: The Effect of Democratic Backsliding on Legislative Oversight in Venezuela',
    link: 'https://github.com/pablohernandezb/the-crisis-of-divided-government',
    legend: 'Result from the Synthetic Control Method experiment on Legislative constraints in the executive index in Venezuela (1959-2021); the treatment year is 1998.',
    image: '/images/projects/project_crisis_divided_govt.png',
    date: '2023-04-01',
    overview: 'This project examines the dynamics between the executive and the legislature during democratic backsliding, '
     + 'specifically focusing on Venezuela. It investigates how legislative constraints on the executive branch are affected '
     + 'during episodes of democratic breakdown and regressed autocracy. The study reveals '
     + 'how aspiring autocrats diminish legislative constraints and alter executive-legislative relations. It aims to determine '
     + 'and quantify the decline of legislative constraints and their sub-components during democratic backsliding.',
    dataset: [
      'This project primarily uses data from the Varieties of Democracy (V-Dem) project and the Episodes of Regime Transition (ERT) datasets.',
      'The V-Dem dataset provides panel data on democratization and autocratization processes, including measurements of democracy and executive-legislative relations.',
      'The resulting dataset includes 37 countries from 1959 to 2019.',
    ],
    tech: [
      'This project relays mainly on the Synthetic Control Method (SCM).',
      'This method involves constructing a "synthetic" Venezuela, a combination of other countries that closely resembles Venezuela in political, social, and economic aspects before the onset of democratic backsliding.',
      'The SCM is used to compare the actual post-treatment outcomes in Venezuela with the counterfactual outcomes that would have been expected had the democratic backsliding not occurred.',
    ],
    challenges: [
      'One of the main limitations as the difficulty of finding countries similar to Venezuela during the period of study. The V-Dem project datasets helped overcome the issue of not having data that could be collected on the field.',
      'The timeframe from this project was less than six months, which diminshed the expectation of doing field work but opened the opportunity for causal inferences approaches such as SCM.',
    ],
    retrospective: [
      'With a more mixed-method approach, this project could be expanded in the future to include study cases such as Hungary in Europe.',
      'Another limitation and opportunity for this project should be focused on comparing the four different legislatures (2000-2006, 2006-2011, 2011-2016, and 2016-2021) during the historical period known as Bolivarian Revolution when Chávez came to power in 1998.',
      'I produced research results relying on computer experiments and curated dataset at a fast-paced which allowed me to comply with the time restrictions.',
    ],
  },
  {
    title: 'The Long Trace of Oil Money: A Social Network Analysis of corruption during the Bolivarian Revolution in Venezuela',
    link: 'https://github.com/pablohernandezb/the-long-trace-of-oil-money',
    image: '/images/projects/project_long_trace.png',
    legend: 'Graphical representation of the corruption network in Venezuela: On the left, '
     + 'corruption networks by actors with international trials; red nodes have trials '
     + 'while blue not. Size of the nodes indicates the number of countries they operate. '
     + 'On the right, corruption groups by edge betweenness and the relations between them.',
    date: '2021-05-01',
    overview: 'It uses social network analysis (SNA) to identify key actors and the resilience of these networks. '
      + 'The study aims to provide knowledge on how these connections are formed and propose policy reforms to hinder their formation. '
      + 'The object of this project has both academic and political implications. '
      + 'It tests theoretical expectations of SNA in the context of corruption networks. '
      + 'The study assesses the international community\'s behavior in disrupting corruption networks, comparing it to the US\'s behavior.',
    dataset: [
      'The primary data source is the Transparency International (2020) report, "Chavismo Inc.", in collaboration with Alianza Rebelde Investiga (ARI) and CONNECTAS.',
      'The report covers 86 investigation cases across 61 countries, involving 751 agents (persons of interest) and 239 institutions.',
      'The social network includes over 3,900 relationships, including occupied functions, corruption denunciations, enablers, family ties, business connections, international trials, company connections, sanctions, contracts, friendships, student connections, enemies, company integration, human rights violations, and designations by public officials.',
    ],
    tech: [
      'The research employs the Statnet package in R and associated libraries for network analysis.',
      'Techniques for assessing and disrupting dark networks are used, drawing from the sub-discipline within Social Network Analysis (SNA).',
      'Quadratic Assignment Procedure (QAP) and logistic regression are used to determine tie formation and the likelihood of international or US trials for corruption.',
      'Factor analysis is employed on centrality measurements.',
    ],
    challenges: [
      'Data limitations are a significant challenge when studying dark networks.',
      'The hidden nature of corruption networks makes it difficult to assess their organization and power distribution.',
      'The study seeks to fill the gap in determining the actual brokers of the network and delving into its functioning.',
      'Addresses the need to move beyond descriptive analysis based on observational data and centrality measurements to draw causal links.',
    ],
    retrospective: [
      'Learned that measuring prestige using cutpoint strength and brokerage level in addition to centrality offers a more precise method to determine the most important actors within the network.',
      'More data is needed to better characterize the actors. A more holistic approach that includes different measures.',
      'A potential gap to fill in future studies relates to the social dimension, given the limited data on friends, enemies, and student colleagues within the network.',
    ],
  },
];

export default data;
