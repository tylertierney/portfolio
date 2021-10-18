const data = {
  experienceItems: [
    {
      company: "Avocat Group",
      position: "Revenue Operations Manager",
      location: "Tampa, Florida",
      startdate: "Sep 2020",
      enddate: "Aug 2021",
      bullets: [
        "Facilitated the process for CRM data consolidation and integration into new systems (Zoho, Outreach, Zoominfo, Affinity)",
        "Analyzed and interpreted market data and territory research to deliver top-funnel opportunities to SDRs and AMs",
        "Created account-based marketing content, email sequences, and targeted email strategies",
        "Directed contractors on projects related to digital marketing, graphic design, and web development",
      ],
    },
    {
      company: "First Coast News",
      position: "Account Executive",
      location: "Jacksonville, Florida",
      startdate: "Jan 2020",
      enddate: "Sep 2020",
      bullets: [
        "Identified and developed new local accounts through prospecting, media spend research, campaign ideation, and presentations",
        "Conveyed value to clients and prospective clients regarding a wide selection of traditional media, sponsorship, digital, and proprietary OTT products",
        "Built presentations, campaign materials, and programming schedules to increase cost-efficiency and reach/frequency for existing strategies",
        "Established post-sale reporting methods using existing data analytic structures and metrics",
      ],
    },
    {
      company: "First Coast News",
      position: "National Sales Assistant",
      location: "Jacksonville, Florida",
      startdate: "Aug 2019",
      enddate: "Dec 2019",
      bullets: [
        "Collaborated with third-party selling platforms to manage transactional business in broadcast programming",
        "Networked with core account representatives and agencies to ensure timely and accurate delivery of traffic instructions and creative content",
        "Facilitated local transition to internal media selling initiatives while maintaining exceptional (top 10% throughout company) delivery of value to core accounts",
      ],
    },
    {
      company: "First Coast News",
      position: "Sales Intern",
      location: "Jacksonville, Florida",
      startdate: "May 2019",
      enddate: "Aug 2019",
      bullets: [
        "Assisted AEs with prospecting, campaign planning, and client outreach",
        "Liaised between AEs and Account Managers to ensure completion of campaign materials within established parameters",
        "Developed prospecting tools and account research methods by incorporating competitive conquesting insights",
      ],
    },
    {
      company: "Heartwood Soundstage",
      position: "Marketing & Promotions Intern",
      location: "Gainesville, Florida",
      startdate: "",
      enddate: "",
      bullets: [
        "Designed and distributed promotional materials for fall events and festivals",
      ],
    },
    {
      company: "Cinema Verde Film Festival",
      position: "Web Design Intern",
      location: "Gainesville, Florida",
      startdate: "",
      enddate: "",
      bullets: [
        "Streamlined website design using Squarespace and Wordpress to connect audience with filmmakers",
      ],
    },
    {
      company: "HGTV House Hunters",
      position: "Production Assistant",
      location: "San Antonio, Texas",
      startdate: "",
      enddate: "",
      bullets: [""],
    },
  ],
  educationItems: [
    {
      school: "B.S. Media Management",
      image: "images/uflogo.png",
      startdate: "2015",
      enddate: "2019",
      degree: "B.S. Media Management",
      location: "Gainesville, Florida",
      bullets: [""],
    },
    {
      school: "Health Careers High School",
      image: "",
      startdate: "2011",
      enddate: "2015",
      degree: "",
      location: "San Antonio, Texas",
      bullets: [""],
    },
  ],
  projects: [
    {
      title: "MovieWorm",
      description:
        "MovieWorm is a platform where users can create private groups, invite friends, and share movie reviews and ratings.",
      hostedsite: "https://movieworm.netlify.app/",
      github: "https://github.com/tylertierney/movieworm",
      desktop_screenshot: "public/images/screenshots/linkbase_desktop.png",
      mobile_screenshot: "public/images/screenshots/linkbase_mobile.png",
      mobile_screenshot2: "public/images/screenshots/linkbase_mobile2.png",
      local_url: "movieworm",
      tech_stack: [
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
    },
    {
      title: "LinkBase",
      description:
        "LinkBase began as my introduction to Next.js. The project is a full-stack social media platform. User authentication is provided by Netlify Identity, database operations are managed through MongoDB, and image storage is provided by Amazon S3. The frontend uses Chakra UI in tandem with Next JS to provide server-side rendering, static page generation, and dynamic routing. All backend operations are written using Node JS.",
      hostedsite: "https://link-base.netlify.app/",
      github: "https://github.com/tylertierney/link-base",
      desktop_screenshot: "public/images/screenshots/linkbase_desktop.png",
      mobile_screenshot: "public/images/screenshots/linkbase_mobile.png",
      mobile_screenshot2: "public/images/screenshots/linkbase_mobile2.png",
      local_url: "linkbase",
      tech_stack: [
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
    },
    {
      title: "Real Estate Dashboard",
      description:
        "This site provides a facility management and project tracking dashboard for commercial real estate managers working with outside firms. The firm enters data into an excel sheet and uploads the JSON-ified version to the site. The site transforms datapoints like important dates, timelines, relevant messages, and facility info into an actionable interface for their clients to view as a quick point of reference.",
      hostedsite: "https://tylertierney.github.io/facilitytracker/",
      github: "https://github.com/tylertierney/facilitytracker",
      desktop_screenshot:
        "public/images/screenshots/facilitytracker_desktop.png",
      mobile_screenshot:
        "../../public/images/screenshots/facilitytracker_mobile.png",
      mobile_screenshot2:
        "../../public/images/screenshots/facilitytracker_mobile2.png",
      mobile_screenshot3:
        "../../public/images/screenshots/facilitytracker_mobile3.png",
      local_url: "facilitytracker",
      tech_stack: [
        {
          name: "React",
          icon: "FaReact",
        },
        {
          name: "Chakra UI",
          icon: "BsLightningFill",
        },
      ],
    },
    {
      title: "The Scoop",
      description:
        "The Scoop is my first attempt at building a web scraper. Instead of using an API, I parsed HTML from CNN Lite to build a search interface and email notification system. This was also my first project to fully integrate user authentication, in this case those services were provided by Firebase.",
      hostedsite: "https://thescoop-news.herokuapp.com/",
      github: "https://github.com/tylertierney/webscraper",
      desktop_screenshot: "public/images/screenshots/thescoop_desktop.png",
      mobile_screenshot: "public/images/screenshots/thescoop_mobile.png",
      mobile_screenshot2: "public/images/screenshots/thescoop_mobile2.png",
      local_url: "thescoop",
      tech_stack: [
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
    },
    {
      title: "eCommerce",
      description:
        "This eCommerce project was one of my first React applications. Functionality is limited as there are no database connections; this site was simply an opportunity to explore React hooks and develop a frontend.",
      hostedsite: "https://tylertierney.github.io/eCommerce/",
      github: "https://github.com/tylertierney/eCommerce",
      desktop_screenshot: "public/images/screenshots/ecommerce_desktop.png",
      mobile_screenshot: "public/images/screenshots/ecommerce_mobile.jpg",
      mobile_screenshot2: "public/images/screenshots/ecommerce_mobile2.jpg",
      local_url: "ecommerce",
      tech_stack: [],
    },
  ],
};

export default data;
