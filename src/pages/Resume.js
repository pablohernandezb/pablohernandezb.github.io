import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ScrollToTopButton from '../components/Template/ScrollToTopButton';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import Courses from '../components/Resume/Courses';
import Awards from '../components/Resume/Awards';
import Workshops from '../components/Resume/Workshops';
import Research from '../components/Resume/Research';
import References from '../components/Resume/References';

import research from '../data/resume/research';
import workshops from '../data/resume/workshops';
import awards from '../data/resume/awards';
import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills skills={skills} categories={categories} />,
  Research: () => <Research data={research} />,
  Workshops: () => <Workshops data={workshops} />,
  Courses: () => <Courses data={courses} />,
  Awards: () => <Awards data={awards} />,
  References: () => <References />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Pablo Hernandez Borges's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <p>
            <a href="https://drive.google.com/file/d/1ZAaSrJMe5UaY3WlydLoicgLIH74Oz4cP/view?usp=sharing" download="Resume - Pablo Hernandez Borges.pdf">Download PDF version</a>
          </p>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
      <ScrollToTopButton />
    </article>
  </Main>
);

export default Resume;
