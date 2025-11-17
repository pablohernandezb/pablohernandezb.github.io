const skills = [
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'React.js',
    competency: 1,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'Node.js',
    competency: 1,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'Java',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'R',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Bash/Shellscript',
    competency: 1,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'C/C++/C#',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'HTML + SCSS/CSS',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'PHP/Perl',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'GLM',
    competency: 1,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Mixed-Effects Models',
    competency: 1,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Synthetic Control Methods',
    competency: 1,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Time Series Analysis',
    competency: 1,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Text Analysis',
    competency: 1,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Data Mining',
    competency: 1,
    category: ['Data Science'],
  },
  {
    title: 'Stata',
    competency: 1,
    category: ['Statistics', 'Tools'],
  },
  {
    title: 'Data Analysis',
    competency: 1,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Experimental Design',
    competency: 1,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Linear and Nonlinear Regression Analysis',
    competency: 1,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Git/GitHub',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 1,
    category: ['Data Science', 'Research'],
  },
  {
    title: 'Python',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Ruby/Ruby on Rails',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'MATLAB',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 1,
    category: ['Data Science', 'Research'],
  },
  {
    title: 'Tableau',
    competency: 1,
    category: ['Data Science', 'Tools'],
  },
  {
    title: 'Causal Inference',
    competency: 1,
    category: ['Statistics', 'Research'],
  },
  {
    title: 'Network Analysis',
    competency: 1,
    category: ['Statistics', 'Research', 'Tools'],
  },
  {
    title: 'Survey Design and Analysis',
    competency: 1,
    category: ['Statistics', 'Research', 'Tools'],
  },
  {
    title: 'Slurm',
    competency: 1,
    category: ['Frameworks', 'Research', 'Tools'],
  },
  {
    title: 'ArcGIS',
    competency: 1,
    category: ['Frameworks', 'Research', 'Tools'],
  },
  {
    title: 'Google Earth Engine',
    competency: 1,
    category: ['Research', 'Tools'],
  },
  {
    title: 'Fedora/CentOS/Red Hat Enterprise Linux',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Microsoft Excel',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'GIMP/Inkscape',
    competency: 1,
    category: ['Tools'],
  },
  {
    title: 'Spanish',
    competency: 1,
    category: ['World Languages'],
  },
  {
    title: 'English',
    competency: 1,
    category: ['World Languages'],
  },
  {
    title: 'Portuguese',
    competency: 1,
    category: ['World Languages'],
  },
  {
    title: 'Assertive Communication',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Mentorship & Knowledge Sharing',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Interdisciplinary Collaboration',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Cross-Functional Teamwork',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Problem-Solving',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Adaptability',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Resourcefulness',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Critical Thinking',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Continuous Learning',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Industry Awareness',
    competency: 1,
    category: ['Core Competencies'],
  },
  {
    title: 'Pandas',
    competency: 1,
    category: ['AI/ML'],
  },
  {
    title: 'Scikit-learn',
    competency: 1,
    category: ['AI/ML'],
  },
  {
    title: 'Numpy',
    competency: 1,
    category: ['AI/ML'],
  },
  {
    title: 'Matplotlib',
    competency: 1,
    category: ['AI/ML'],
  },
  {
    title: 'NLTK',
    competency: 1,
    category: ['AI/ML'],
  },
  {
    title: 'Textstat',
    competency: 1,
    category: ['AI/ML'],
  },
  {
    title: 'Large Language Models',
    competency: 1,
    category: ['AI/ML', 'Data Science ', 'Research'],
  },
  {
    title: 'TensorFlow',
    competency: 1,
    category: ['AI/ML', 'Data Science '],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#FF4500',
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#319e6a',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
