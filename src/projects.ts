import { iconKey } from './components/Projects/Project/TechStackIcon/TechStackIcon'

const githubUrl = 'https://github.com/tylertierney'

export interface IProject {
  title: string
  description: string
  hostedSite: string
  github: string
  featuredImage: string
  techStack: Array<{
    name: iconKey
  }>
  color: string
}

const projects: IProject[] = [
  {
    title: 'Wordscapes',
    description: `A clone of the popular mobile game Wordscapes. I got sick of seeing their ads, so I made my own version.`,
    hostedSite: 'https://wordscapes-1.netlify.app',
    github: `${githubUrl}/wordscapes`,
    featuredImage: '/images/wordscapes_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      { name: 'Netlify' },
    ],
    color: '',
  },
  {
    title: 'Hot and Cold',
    description: `Hot and Cold is a word guessing game. Each guess is evaluated using a language-learning model that maps words into a shared semantic space, allowing the game to measure how close a guess is to the target word based on meaning alone.`,
    hostedSite: 'https://hot-and-cold-1.netlify.app',
    github: `${githubUrl}/hot-and-cold`,
    featuredImage: '/images/hot-and-cold_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      { name: 'Netlify' },
      {
        name: 'Hugging Face',
      },
    ],
    color: '',
  },
  {
    title: 'Strings',
    description: `Strings is a clone of the popular New York Times game Strands. It's not your typical word search.`,
    hostedSite: 'https://strands-1.netlify.app',
    github: `${githubUrl}/strands`,
    featuredImage: '/images/strands_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      {
        name: 'Netlify',
      },
      {
        name: 'Github Actions',
      },
    ],
    color: '',
  },
  {
    title: 'Movie Quiz',
    description: `Given a blurred movie or TV show poster, try to choose the correct title.`,
    hostedSite: 'https://movie-quiz-1.netlify.app',
    github: `${githubUrl}/movie-quiz`,
    featuredImage: '/images/movie-quiz_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      {
        name: 'Node JS',
      },
      {
        name: 'Netlify',
      },
    ],
    color: '',
  },
  {
    title: 'Connections',
    description: `Another one of my New York Times clones, Connections is a game where you have four attempts to categorize related terms.`,
    hostedSite: 'https://connections-1.netlify.app',
    github: `${githubUrl}/strands`,
    featuredImage: '/images/connections_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      {
        name: 'Netlify',
      },
      {
        name: 'Github Actions',
      },
    ],
    color: 'black',
  },
  {
    title: 'Kadoodle',
    description:
      'Kadoodle is a multiplayer drawing game. Players create a lobby, invite friends, and take turns drawing and guessing to score points. Kadoodle also supports group video chat.',
    hostedSite: 'https://kadoodle.us',
    github: `${githubUrl}/kadoodle`,
    featuredImage: '/images/kadoodle_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      {
        name: 'Node JS',
      },
      {
        name: 'Socket.IO',
      },
      {
        name: 'Storybook',
      },
      {
        name: 'Netlify',
      },
    ],
    color: '#ffaa7c',
  },
  {
    title: 'Minesweeper',
    description: `My recreation of the classic game. Carefully uncover tiles while avoiding the bombs. Adjust the width and height of the grid, and the number of bombs.`,
    hostedSite: 'https://tylertierney.github.io/minesweeper/',
    github: `${githubUrl}/minesweeper`,
    featuredImage: '/images/minesweeper_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
    ],
    color: '',
  },
  {
    title: 'Chatmosphere',
    description:
      'Chatmosphere is an instant messaging platform. Users can sign-in securely via email/password, Github authentication, or anonymously.',
    hostedSite: 'https://chatmosphere.us',
    github: `${githubUrl}/chatapp`,
    featuredImage: '/images/chatmosphere_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      {
        name: 'Chakra UI',
      },
      {
        name: 'Node JS',
      },
      {
        name: 'Heroku',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'Socket.IO',
      },
      {
        name: 'Netlify',
      },
    ],
    color: '#97e4f0',
  },
  {
    title: 'Chord Finder',
    description:
      'Enter guitar notes on a virtual fretboard and identify the associated chord. Built using React, Typescript, and Nextjs.',
    hostedSite: 'https://www.chordfinder.us/',
    github: `${githubUrl}/chordfinder`,
    featuredImage: '/images/chordfinder_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      {
        name: 'Chakra UI',
      },
      {
        name: 'Next.js',
      },
    ],
    color: '#78DD78',
  },
  {
    title: 'MovieWorm',
    description:
      'MovieWorm is a platform where users can create private groups, invite friends, and share movie reviews and ratings.',
    hostedSite: 'https://movieworm.io',
    github: `${githubUrl}/movieworm`,
    featuredImage: '/images/movieworm_iphone_mockups.png',
    techStack: [
      {
        name: 'React',
      },
      {
        name: 'Chakra UI',
      },
      {
        name: 'Node JS',
      },
      {
        name: 'MongoDB',
      },
      {
        name: 'Auth0',
      },
    ],
    color: '#ffa3a3',
  },
]

export default projects

export type ISmallProject = Omit<IProject, 'techStack'>

export const smallerProjects: ISmallProject[] = [
  {
    title: 'Angle',
    description: 'Guess the angle in five tries!',
    hostedSite: 'https://tylertierney.github.io/angle',
    featuredImage: '/images/screenshots/angle_desktop.png',
    color: '#ff9b9b',
    github: `${githubUrl}/angle`,
  },
  {
    title: 'Snake',
    description: 'A quick React game',
    hostedSite: 'https://tylertierney.github.io/snake/',
    featuredImage: '/images/screenshots/snake_desktop.png',
    color: '#ff9f23',
    github: `${githubUrl}/snake`,
  },
  {
    title: 'Wordle Clone',
    description:
      'A clone of the popular New York Times game, Wordle. Built with React and Typescript.',
    hostedSite: 'https://imaginative-griffin-b54662.netlify.app/',
    featuredImage: '/images/screenshots/wordle_desktop.png',
    color: '#7ce9d6',
    github: `${githubUrl}/wordle`,
  },
  {
    title: 'Connect 4',
    description: 'My first Angular project!',
    hostedSite: 'https://tylertierney.github.io/connectfour/',
    featuredImage: '/images/screenshots/connectfour_desktop.png',
    color: '#88ce66',
    github: `${githubUrl}/connectfour`,
  },
  {
    title: 'Battleship',
    description:
      'The classic board game, built with React and TypeScript. See if you can beat the computer!',
    hostedSite: 'https://tylertierney.github.io/battleship/',
    featuredImage: '/images/screenshots/battleship_desktop.png',
    color: '#ff9982',
    github: `${githubUrl}/battleship`,
  },
]
