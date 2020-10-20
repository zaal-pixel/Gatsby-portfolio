import {
  nanoid
} from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Alza', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my share of the Internet', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi I am Alza a',
  name: 'Frontend Developer',
  subtitle: 'Welcome to my share of the Internet',
  cta: 'learn more',
};

// ABOUT DATA
export const aboutData = {
  img: '',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [{
    id: nanoid(),
    img: 'currencytrackepic.PNG',
    title: 'Cryptotracker',
    info: ' I used an API to create a simpe Onepage Cryptotracker',
    info2: '',
    url: 'https://zaal-pixel.github.io/crypto-currency-tracker/',
    repo: 'https://github.com/zaal-pixel/crypto-currency-tracker', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'If you have any questions, dont hesitate to email me :D',
  btn: 'email me',
  email: 'alzadinaya@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [{
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/zaal-pixel',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/alza-ahmad-dinaya-1aa941171/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/zaal-pixel',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};