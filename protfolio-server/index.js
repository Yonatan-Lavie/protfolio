const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const fakeDB = {
  about: {
    text: 'Specializes in web applications development , client servers and databases.',
    img: 'needs to hold an image. probably will pressent as base64.',
  },
  contact: {
    title: 'Hire Me',
    subtitle:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illumsuscipit officia aspernatur veritatis. Asperiores, aliquid?',
    mylocation:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.8050671894534!2d35.070349484423595!3d32.82392958889819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151db7309a6cfb97%3A0x1d1edadfda43ad1c!2z15TXkteT15XXkyDXlNei15HXqNeZIDUzLCDXl9eZ16TXlA!5e0!3m2!1siw!2sil!4v1627426153414!5m2!1siw!2sil',
  },
  navbar: {
    links: ['About', 'Skills', 'Projects', 'Recommendations', 'Contact'],
    logo: 'needs to hold icon or icon identifyer.',
  },
  projects: {
    title: "Apps I've Built",
    subtitle: 'All projects wirte with cuting edge tecnolegies.',
    projectslist: [
      {
        title: 'React Reserve',
        subtitle: 'MERN Stack',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-1.gif',
        link: 'https://reactbootcamp.com',
      },
      {
        title: 'React Tracks',
        subtitle: 'React and Python',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-2.gif',
        link: 'https://reedbarger.com',
      },
      {
        title: 'React Tracks',
        subtitle: 'React and Python',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-2.gif',
        link: 'https://reedbarger.com',
      },
      {
        title: 'React Tracks',
        subtitle: 'React and Python',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-2.gif',
        link: 'https://reedbarger.com',
      },
      {
        title: 'DevChat',
        subtitle: 'React and Firebase',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-3.gif',
        link: 'https://jsbootcamp.com',
      },
      {
        title: 'Epic Todo App',
        subtitle: 'React Hooks',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore rerum laborum iure enim sint nemo omnis voluptate exercitationem eius?',
        image: './project-4.gif',
        link: 'https://pythonbootcamp.com',
      },
    ],
  },
  recommendations: {
    title: 'Recommendations',
    subtitle: 'recommendations subtitle',
    recommendationslist: [
      {
        author: 'jon',
        pub: '12.06.2021',
        text: 'testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  ',
      },
      {
        author: 'dow',
        pub: '15.03.2021',
        text: 'testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  ',
      },
      {
        author: 'helen',
        pub: '22.12.2019',
        text: 'testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  ',
      },
      {
        author: 'daniella',
        pub: '29.01.2021',
        text: 'testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  testimonials  ',
      },
    ],
  },
  skills: {
    title: 'Skills  & Technology',
    subtitle: 'skills subtitle',
    skillslist: [
      {
        name: 'C#',
      },
      {
        name: 'WPF',
      },
      {
        name: 'Prism',
      },
      {
        name: 'JavaScript',
      },
      {
        name: 'NodeJS',
      },
      {
        name: 'React',
      },
      {
        name: 'Redux',
      },
      {
        name: 'Python',
      },
      {
        name: 'Django',
      },
      {
        name: 'MySQL',
      },
      {
        name: 'mongoDB',
      },
    ],
  },
  theme: {
    icons: {
      defaultSize: 25,
      logo: 35,
      title: 60,
    },
    colors: {
      main: '#37474f',
      dark: '#263238',
      light: '#546e7a',
      lighter: '#b0bec5',
      text: '#fafafa',
      link: '#444444',
      white: '#F0F7D4',
      green: '#66AB35',
      lightGreen: '#B0D238',
      blue: '#092834',
      lightBlue: '#347B98',
    },
    fontSizes: {
      large: '3rem',
      medium: '2rem',
      p: '1.5rem',
    },
    spacers: {
      large: '2rem',
    },
    padding: '80px',
    mediaQueries: {
      'bellow-768': `only screen and (max-width: 768px)`,
    },
  },
};

const PORT = 4000;

//Server API'S
app.get('/API/about', (req, res) => {
  const about = fakeDB.about;
  res.status(200).send(about);
});

app.get('/API/contact', (req, res) => {
  const contact = fakeDB.contact;
  res.status(200).send(contact);
});

app.get('/API/navbar', async (req, res) => {
  const navbar = fakeDB.navbar;
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000); /// waiting 3 second.
  res.status(200).send(navbar);
});

app.get('/API/projects', (req, res) => {
  const projects = fakeDB.projects;
  res.status(200).send(projects);
});

app.get('/API/recommendations', (req, res) => {
  const recommendations = fakeDB.recommendations;
  res.status(200).send(recommendations);
});

app.get('/API/skills', (req, res) => {
  const skills = fakeDB.skills;
  res.status(200).send(skills);
});

app.get('/API/theme', (req, res) => {
  const theme = fakeDB.theme;
  res.status(200).send(theme);
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
