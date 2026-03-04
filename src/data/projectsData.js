import githubUserImg from '../assets/work_logo/github_user.png';
import samikaranImg from '../assets/company_logo/samikaran.png';
import portfolioImg from '../assets/work_logo/portfolio.png';
import moodImg from '../assets/work_logo/MOOD.png';
import foodDictatorImg from '../assets/work_logo/food_dictator.png';
import weatherImg from '../assets/work_logo/weather.png';
import auraImg from '../assets/work_logo/aura.png';

export const projectsData = [
  {
    id: 'Samikaran-ngo',
    title: 'Samikaran NGO',
    image: samikaranImg,
    shortDescription: 'A full-stack web platform for an NGO with donation support.',
    fullDescription: 'A full-stack web application designed for the Samikaran NGO to showcase their mission, activities, volunteering options, and donation support. Built with a clean UI/UX and integrated with robust backend services for managing contributions.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: 'https://github.com/Piyush232005/Project-samikaran.git'
  },
  {
    id: 'Profile Detective',
    title: 'GitHub Profile Detective',
    image: githubUserImg,
    shortDescription: 'A tool to uncover detailed GitHub profile information and stats.',
    fullDescription: 'A powerful and user-friendly web application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and more.',
    techStack: ['HTML', 'CSS', 'JavaScript', 'React JS', 'API'],
    githubLink: 'https://github.com/Piyush232005/GithubUserFinder.git'
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    image: portfolioImg,
    shortDescription: 'A personal portfolio website built with HTML, CSS, and JS.',
    fullDescription: 'Designed and coded a personal portfolio website from scratch using HTML and CSS, where all projects were showcased alongside skills, major courses, and contact details with engaging animations.',
    techStack: ['JavaScript', 'React JS', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    githubLink: 'https://github.com/Piyush232005/PERSONAL_PORTIFOLIO.git'
  },
  {
    id: 'Ai-mood',
    title: 'AI Mood Detection',
    image: moodImg,
    shortDescription: 'An emotion recognition web application using Face API.js.',
    fullDescription: 'This project made with help of of MERN stack technology with Face Api.js. The AI Mood Detection web application is designed to analyze facial expressions and accurately determine the user\'s current emotional state, such as happiness, sadness, or surprise.',
    techStack: ['React JS', 'Node.js', 'Express', 'Face API.js'],
    githubLink: 'https://github.com/Piyush232005/Mood-listner.git'
  },
  {
    id: 'Aura realtime Chatbot',
    title: 'Aura Chatbot',
    image: auraImg,
    shortDescription: 'A proper chatbot with scalable architecture and real-time features.',
    fullDescription: 'Aura is an advanced, real-time AI companion designed to understand and anticipate your needs. Utilizing cutting-edge behavioral intelligence, Aura instantly adapts to offer seamless, proactive support—from prioritizing your inbox to optimizing your daily schedule—making every conversation smarter and every task simpler.',
    techStack: ['React JS', 'Node.js', 'MongoDB', 'Express', 'Tailwind'],
    githubLink: 'https://github.com/Piyush232005/Aura-Realtime-Ai-App.git'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    image: weatherImg,
    shortDescription: 'A creative weather application with dynamic animations.',
    fullDescription: 'The official website for Weather app, a creative. Built using HTML, CSS, and JavaScript and React.js, it features visually appealing animations and a clean design to showcase the right weather according to the city where user searches.',
    techStack: ['React JS', 'CSS', 'API', 'Tailwind CSS', 'GSAP'],
    githubLink: 'https://github.com/Piyush232005/Weatherdoxxx.git'
  }
];
