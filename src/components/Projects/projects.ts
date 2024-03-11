export interface IProject {
  title: string;
  description: string;
  hostedSite: string;
  github: string;
  desktop_screenshot: string;
  mobile_screenshot: string;
  mobile_screenshot2: string;
  mobile_screenshot3: string;
  featuredImage: string;
  local_url: string;
  techStack: Array<{ name: string; icon: string }>;
  color: string;
}

const projects: IProject[] = [
  {
    title: "Kadoodle",
    description:
      "Kadoodle is a multiplayer drawing game. Players create a lobby, invite friends, and take turns drawing and guessing to score points. Kadoodle also supports group video chat.",
    hostedSite: "https://kadoodle.us",
    github: "https://github.com/tylertierney/kadoodle",
    desktop_screenshot: "",
    mobile_screenshot: "",
    mobile_screenshot2: "",
    mobile_screenshot3: "",
    featuredImage: "/images/kadoodle_iphone_mockups.png",
    local_url: "kadoodle",
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
    desktop_screenshot: "",
    mobile_screenshot: "",
    mobile_screenshot2: "",
    mobile_screenshot3: "",
    featuredImage: "/images/chatmosphere_iphone_mockups.png",
    local_url: "chatmosphere",
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
    desktop_screenshot: "",
    mobile_screenshot: "",
    mobile_screenshot2: "",
    mobile_screenshot3: "",
    featuredImage: "/images/chordfinder_iphone_mockups.png",
    local_url: "chordfinder",
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
    desktop_screenshot: "",
    mobile_screenshot: "",
    mobile_screenshot2: "",
    mobile_screenshot3: "",
    featuredImage: "/images/movieworm_iphone_mockups.png",
    local_url: "movieworm",
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
    desktop_screenshot: "",
    mobile_screenshot: "",
    mobile_screenshot2: "",
    mobile_screenshot3: "",
    featuredImage: "/images/startpage_iphone_mockups.png",
    local_url: "startpage",
    techStack: [{ name: "Angular", icon: "FaAngular" }],
    color: "#A895DA",
  },
  {
    title: "LinkBase",
    description:
      "LinkBase began as my introduction to Next.js. The project is a full-stack social media platform. User authentication is provided by Netlify Identity, database operations are managed through MongoDB, and image storage is provided by Amazon S3. The frontend uses Chakra UI in tandem with Next JS to provide server-side rendering, static page generation, and dynamic routing. All backend operations are written using Node JS.",
    hostedSite: "https://link-base.netlify.app/",
    github: "https://github.com/tylertierney/link-base",
    desktop_screenshot: "/images/screenshots/linkbase_desktop.png",
    mobile_screenshot: "/images/screenshots/linkbase_mobile.png",
    mobile_screenshot2: "/images/screenshots/linkbase_mobile2.png",
    mobile_screenshot3: "",
    featuredImage: "/images/iphone_mockups.png",
    local_url: "linkbase",
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
    desktop_screenshot: "/images/screenshots/thescoop_desktop.png",
    mobile_screenshot: "/images/screenshots/thescoop_mobile.png",
    mobile_screenshot2: "/images/screenshots/thescoop_mobile2.png",
    mobile_screenshot3: "/images/screenshots/thescoop_mobile3.png",
    featuredImage: "",
    local_url: "thescoop",
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
