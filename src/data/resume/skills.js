const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'R',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Bash/Shellscript',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'C/C++/C#',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'HTML + SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PHP/Perl',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'GLM',
    competency: 5,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Mixed-Effects Models',
    competency: 5,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Synthetic Control Methods',
    competency: 5,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Time Series Analysis',
    competency: 4,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Text Analysis',
    competency: 4,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Stata',
    competency: 5,
    category: ['Statistics', 'Tools'],
  },
  {
    title: 'Data Analysis',
    competency: 5,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Experimental Design',
    competency: 4,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Linear and Nonlinear Regression Analysis',
    competency: 5,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Git/GitHub',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Ruby/Ruby on Rails',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 3,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science', 'Research'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Causal Inference',
    competency: 4,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Network Analysis',
    competency: 5,
    category: ['Statistics', 'Research', 'Tools'],
  },
  {
    title: 'Survey Design and Analysis',
    competency: 4,
    category: ['Statistics', 'Research', 'Tools'],
  },
  {
    title: 'Slurm',
    competency: 2,
    category: ['Frameworks', 'Research', 'Tools'],
  },
  {
    title: 'ArcGIS',
    competency: 4,
    category: ['Frameworks', 'Research', 'Tools'],
  },
  {
    title: 'Google Earth Engine',
    competency: 4,
    category: ['Research', 'Tools'],
  },
  {
    title: 'Fedora/CentOS/Red Hat Enterprise Linux',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Excel',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'GIMP/Inkscape',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'GIMP/Inkscape',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Spanish',
    competency: 5,
    category: ['World Languages'],
  },
  {
    title: 'Spanish',
    competency: 5,
    category: ['World Languages'],
  },
  {
    title: 'Portuguese',
    competency: 2,
    category: ['World Languages'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
