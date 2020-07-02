import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Eli / HuanSen',
  lang: 'en',
  description: 'The life and times of a wannabe software engineer',
};

// HERO DATA
export const heroData = {
  title: 'Hi! My name is ',
  name: 'Eli Lim',
  subtitle: 'A full stack engineer wannabe',
  skills: {
    frontend: ['React', 'Vue', 'JS, HTML, CSS', 'Android (Native)'],
    backend: ['Laravel', 'Spring Boot', 'Django', 'Express', 'Kafka'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Neo4j', 'SQLite (haha)'],
    languages: ['Java', 'Python', 'Javascript', 'PHP'],
    'cloud & deployment': ['AWS', 'Heroku', 'Docker', 'Netlify'],
  },
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'jupyterclass-1.png',
    title: 'JupyterClass',
    source: 'hobby',
    status: 'In Production',
    info:
      'A Jupyter notebook extension + dashboard for Python instructors who ' +
      "conduct programming classes / workshops via jupyter notebook to view students' " +
      'progress with practice questions in real time.',
    info2: (
      <>
        <p>
          <i>"Are they done with the questions?"</i>
          <br />
          <i>"How long did they take?"</i>
          <br />
          <b>It's tough to keep track of students' progress in class. </b>
          <br />
        </p>
        <p>
          TAs scurry around to eyeball rows of screens to see where students are at with the
          practice questions. Students fall behind when TAs miss them and they're afraid of asking
          for help.
        </p>
        <p>
          <b>Gain visibility of your class with JupyterClass!</b>
        </p>
      </>
    ),
    stack: {
      frontend: ['Nuxt (Vue)', 'Jupyter NBExtension'],
      backend: ['Nuxt server-side middleware', 'socket.io'],
      databases: ['In memory'],
    },
    url: 'https://jupyter-class.herokuapp.com',
    repo: 'https://github.com/JupyterClass', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'amore-1.png',
    title: 'Amore Fitness Landing Site',
    source: 'work',
    status: 'In Production',
    info:
      'Amore Fitness is the leading ladies-exclusive fitness gym and boutique ' +
      'spa in Singapore.',
    info2: (
      <>
        <p>
          I redesigned the website with Figma and migrated the existing Wordpress site to the
          JAMStack. There was a lot of complexity under the hood:
        </p>
        <ul>
          <li>Serving 100+ 4K images for mobile, tablet and desktop viewports</li>
          <li>Minimise SEO impact with site structure and domain name change</li>
          <li>Transforming legacy-dependent UIs to modern ones (class schedules)</li>
          <li>Implementing JWT-based Authentication with a legacy backend</li>
          <li>
            Building the data pipelines to power business-facing UIs for managing form data (leads,
            queries, etc.)
          </li>
        </ul>
      </>
    ),
    stack: {
      frontend: ['Gatsby (React) SSG', 'Nuxt (Vue) SPA'],
      backend: ['Firebase', 'Sanity CMS', 'GraphQL'],
    },
    url: 'https://amorefitness.com.sg',
  },
  {
    id: uuidv4(),
    img: 'sprintr-2.png',
    title: 'Sprintr',
    source: 'school',
    status: 'Complete',
    info:
      'An application for members of Track teams to share their training progression with ' +
      'team mates. The app allows team mates to record sprint timings for each other with ' +
      'the use of the camera, and recording of jogging metrics.',
    info2: (
      <>
        <p>Core features include:</p>
        <ul>
          <li>User authentication (social login)</li>
          <li>User profile management</li>
          <li>Team management (in-app notifications for team invitations)</li>
          <li>Jogging metrics collection with Android GPS API</li>
          <li>Sprinting metrics collection with Android Camera2 API</li>
          <li>
            Simple pixel diffing algorithm is used to detect when a sprinter crosses the finish line
          </li>
          <li>Chart-based summary (Android MPChart) of collected metrics</li>
        </ul>
      </>
    ),
    stack: {
      frontend: ['Android (Java)'],
      backend: ['Firebase'],
    },
  },
  {
    id: uuidv4(),
    img: 'neuu-1.png',
    title: 'Neuu',
    source: 'hobby',
    status: 'In progress',
    info: 'A Vue component library implementing the Neumorphic UI Design language.',
    info2: '',
    stack: {
      frontend: ['Vue'],
    },
  },
  {
    id: uuidv4(),
    img: 'travue-3.jpg',
    title: 'Travue',
    source: 'school',
    status: 'Completed',
    info: (
      <>
        <p>
          <b>Make trip-planning less painful</b>, stop using Google Sheets to plan your trips.
        </p>
        <p>
          Have a place in mind, but don't wish to google for details like operating hours, reviews,
          safety advisories, news, location, etc.?
        </p>
        <b>Travue does this for you, summarizing it all on one page.</b>
      </>
    ),
    info2: (
      <>
        <p>Core features:</p>
        <ul>
          <li>Location search with autocomplete (Google Places API)</li>
          <li>Location images (Google Places API)</li>
          <li>Location reviews (Google Places API)</li>
          <li>Location Youtube videos (Google Youtube API)</li>
          <li>Location related news (News API)</li>
          <li>Kanban Planner</li>
        </ul>
      </>
    ),
    stack: {
      frontend: ['Vue SPA'],
      backend: ['Express (NodeJS)'],
    },
  },
  {
    id: uuidv4(),
    img: 'tradingapp-1.png',
    title: 'Simple Trading App',
    source: 'school',
    status: 'Completed',
    info: (
      <>
        <p>A simple stock trading app</p>
        <p>

        </p>
      </>
    ),
    info2: '',
    stack: {
      frontend: ['Vue SPA', 'Telegram Bot'],
      backend: ['Spring Boot REST', 'Python Celery'],
      cloud: ['Apigee', 'Heroku', 'AWS EC2'],
      databases: ['PostgreSQL'],
    },
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://linkedin.com/in/limhuansen',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/elihuansen',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
