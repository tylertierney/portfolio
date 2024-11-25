import { iconKey } from "./components/Projects/Project/TechStackIcon/TechStackIcon";

export interface IProject {
  title: string;
  description: string;
  hostedSite: string;
  github: string;
  featuredImage: string;
  techStack: Array<{ name: iconKey; icon: string }>;
  color: string;
}

const projects: IProject[] = [
  {
    title: "Kadoodle",
    description:
      "Kadoodle is a multiplayer drawing game. Players create a lobby, invite friends, and take turns drawing and guessing to score points. Kadoodle also supports group video chat.",
    hostedSite: "https://kadoodle.us",
    github: "https://github.com/tylertierney/kadoodle",
    featuredImage: "/images/kadoodle_iphone_mockups.png",
    techStack: [
      {
        name: "React",
        icon: "FaReact",
      },
      {
        name: "Node JS",
        icon: "FaNodeJs",
      },
      {
        name: "Heroku",
        icon: "SiHeroku",
      },
      {
        name: "Socket.IO",
        icon: "SiSocketDotIo",
      },
      {
        name: "Netlify",
        icon: "SiNetlify",
      },
    ],
    color: "#ffaa7c",
  },
  {
    title: "Chatmosphere",
    description:
      "Chatmosphere is an instant messaging platform. Users can sign-in securely via email/password, Github authentication, or anonymously.",
    hostedSite: "https://chatmosphere.us",
    github: "https://github.com/tylertierney/chatapp",
    featuredImage: "/images/chatmosphere_iphone_mockups.png",
    techStack: [
      {
        name: "React",
        icon: "FaReact",
      },
      {
        name: "Chakra UI",
        icon: "BsLightningFill",
      },
      {
        name: "Node JS",
        icon: "FaNodeJs",
      },
      {
        name: "Heroku",
        icon: "SiHeroku",
      },
      {
        name: "Firebase",
        icon: "SiFirebase",
      },
      {
        name: "Socket.IO",
        icon: "SiSocketDotIo",
      },
      {
        name: "Netlify",
        icon: "SiNetlify",
      },
    ],
    color: "#97e4f0",
  },
  {
    title: "Chord Finder",
    description:
      "Enter guitar notes on a virtual fretboard and identify the associated chord. Built using React, Typescript, and Nextjs.",
    hostedSite: "https://www.chordfinder.us/",
    github: "https://github.com/tylertierney/chordfinder",
    featuredImage: "/images/chordfinder_iphone_mockups.png",
    techStack: [
      {
        name: "React",
        icon: "FaReact",
      },
      {
        name: "Chakra UI",
        icon: "BsLightningFill",
      },
      {
        name: "Next.js",
        icon: "SiNextDotJs",
      },
    ],
    color: "#78DD78",
  },
  {
    title: "MovieWorm",
    description:
      "MovieWorm is a platform where users can create private groups, invite friends, and share movie reviews and ratings.",
    hostedSite: "https://movieworm.io",
    github: "https://github.com/tylertierney/movieworm",
    featuredImage: "/images/movieworm_iphone_mockups.png",
    techStack: [
      {
        name: "React",
        icon: "FaReact",
      },
      {
        name: "Chakra UI",
        icon: "BsLightningFill",
      },
      {
        name: "Node JS",
        icon: "FaNodeJs",
      },
      {
        name: "MongoDB",
        icon: "SiMongodb",
      },
      {
        name: "Auth0",
        icon: "SiAuth0",
      },
    ],
    color: "#ffa3a3",
  },
  {
    title: "Custom Homepage",
    description:
      "This app, built entirely with Angular, provides a simple interface that allows users to generate and customize a browser homepage. Users can edit bookmarks, change the appearance and colors of the page, update their info, and select from a number of wallpapers.",
    hostedSite: "https://tylertierney.github.io/angular-startpage/",
    github: "https://github.com/tylertierney/angular-startpage",
    featuredImage: "/images/startpage_iphone_mockups.png",
    techStack: [{ name: "Angular", icon: "FaAngular" }],
    color: "#A895DA",
  },
  {
    title: "LinkBase",
    description:
      "LinkBase began as my introduction to Next.js. The project is a full-stack social media platform. User authentication is provided by Netlify Identity, database operations are managed through MongoDB, and image storage is provided by Amazon S3. The frontend uses Chakra UI in tandem with Next JS to provide server-side rendering, static page generation, and dynamic routing. All backend operations are written using Node JS.",
    hostedSite: "https://link-base.netlify.app/",
    github: "https://github.com/tylertierney/link-base",
    featuredImage: "/images/iphone_mockups.png",
    techStack: [
      {
        name: "React",
        icon: "FaReact",
      },
      {
        name: "Chakra UI",
        icon: "BsLightningFill",
      },
      {
        name: "Node JS",
        icon: "FaNodeJs",
      },
      {
        name: "Netlify Identity",
        icon: "SiNetlify",
      },
      {
        name: "Next.js",
        icon: "SiNextDotJs",
      },
      {
        name: "MongoDB",
        icon: "SiMongodb",
      },
      {
        name: "Amazon S3",
        icon: "FaAws",
      },
    ],
    color: "#1e90d6",
  },
  {
    title: "The Scoop",
    description:
      "The Scoop is my first attempt at building a web scraper. Instead of using an API, I parsed HTML from CNN Lite to build a search interface and email notification system. This was also my first project to fully integrate user authentication, in this case those services were provided by Firebase.",
    hostedSite: "https://thescoop-news.herokuapp.com/",
    github: "https://github.com/tylertierney/webscraper",
    featuredImage: "",
    techStack: [
      {
        name: "React",
        icon: "FaReact",
      },
      {
        name: "Chakra UI",
        icon: "BsLightningFill",
      },
      {
        name: "Heroku",
        icon: "SiHeroku",
      },
      {
        name: "Firebase",
        icon: "SiFirebase",
      },
      {
        name: "SendGrid",
        icon: "AiOutlineMail",
      },
    ],
    color: "#FFBB5C",
  },
];

export default projects;

export type ISmallProject = Omit<IProject, "techStack">;

export const smallerProjects: ISmallProject[] = [
  {
    title: "Connections",
    description: "Identify categories from the given words",
    hostedSite: "https://connections-1.netlify.app/",
    featuredImage: "/images/screenshots/connections_desktop.png",
    color: "#7ce9d6",
    github: "https://github.com/tylertierney/connections",
  },
  {
    title: "Movie Quiz",
    description: "Guess the movie from its poster",
    hostedSite: "https://movie-quiz-1.netlify.app/",
    featuredImage: "/images/screenshots/movie-quiz_desktop.png",
    color: "#7ce9d6",
    github: "https://github.com/tylertierney/movie-quiz",
  },
  {
    title: "Minesweeper",
    description: "My recreation of the classic game!",
    hostedSite: "https://tylertierney.github.io/minesweeper",
    featuredImage: "/images/screenshots/minesweeper_desktop.png",
    color: "#A895DA",
    github: "https://github.com/tylertierney/minesweeper",
  },
  {
    title: "Angle",
    description: "Guess the angle in five tries!",
    hostedSite: "https://tylertierney.github.io/angle",
    featuredImage: "/images/screenshots/angle_desktop.png",
    color: "#ff9b9b",
    github: "https://github.com/tylertierney/angle",
  },
  {
    title: "Snake",
    description: "A quick React game",
    hostedSite: "https://tylertierney.github.io/snake/",
    featuredImage: "/images/screenshots/snake_desktop.png",
    color: "#ff9f23",
    github: "https://github.com/tylertierney/snake",
  },
  {
    title: "Wordle Clone",
    description:
      "A clone of the popular New York Times game, Wordle. Built with React and Typescript.",
    hostedSite: "https://imaginative-griffin-b54662.netlify.app/",
    featuredImage: "/images/screenshots/wordle_desktop.png",
    color: "#7ce9d6",
    github: "https://github.com/tylertierney/wordle",
  },
  {
    title: "Connect 4",
    description: "My first Angular project!",
    hostedSite: "https://tylertierney.github.io/connectfour/",
    featuredImage: "/images/screenshots/connectfour_desktop.png",
    color: "#88ce66",
    github: "https://github.com/tylertierney/connectfour",
  },
  {
    title: "Battleship",
    description:
      "The classic board game, built with React and TypeScript. See if you can beat the computer!",
    hostedSite: "https://tylertierney.github.io/battleship/",
    featuredImage: "/images/screenshots/battleship_desktop.png",
    color: "#ff9982",
    github: "https://github.com/tylertierney/battleship",
  },

  {
    title: "Job Tracker",
    description:
      "This is a list component for tracking submitted job applications. If a user provides a link to the LinkedIn job posting, the site will scrape the page for the associated job description.",
    hostedSite: "https://application-tracker123.herokuapp.com/",
    featuredImage: "/images/screenshots/applicationtracker_desktop.png",
    color: "#4cccd7",
    github: "https://github.com/tylertierney/application-tracker",
  },
  {
    title: "Startpage",
    description:
      "I used CSS Grid and React to create a simple homepage for all of my browsing activity. The page includes a dynamic greeting message, date and time, random quotes, Google search, and easily-clickable links to my most-used websites.",
    hostedSite: "https://tylertierney.github.io/startpage/",
    featuredImage: "/images/screenshots/startpage_desktop.png",
    color: "#7ce9d6",
    github: "https://github.com/tylertierney/startpage",
  },
  {
    title: "Landing Page",
    description:
      "This is a fictional product landing page. Created with the purpose of testing out responsive design patterns and serving as a boilerplate Next.js project.",
    hostedSite: "https://condescending-morse-95f608.netlify.app/",
    featuredImage: "/images/screenshots/landingpage_desktop.png",
    color: "#e43535",
    github: "https://github.com/tylertierney/next-boilerplate",
  },
];
