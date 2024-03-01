import hawaiiZoningAtlasImg from "../images/HawaiiZoningAtlas.png";
import hierrImg from "../images/HIERR.png";
import habitatFullImg from "../images/habitat-full.jpg";
import foodOasisImg from "../images/foodoasis.jpg";
import uipaImg from "../images/uipa.jpg";
import timeline1Img from "../images/timeline-1.jpg";
import timeline2Img from "../images/timeline-2.jpg";
import timeline3Img from "../images/timeline-3.jpg";
import timeline4Img from "../images/timeline-4.jpg";
import timeline5Img from "../images/timeline-5.jpg";
import timeline6Img from "../images/timeline-6.png";
import timeline7Img from "../images/timeline-7.png";
import client1Img from "../images/client1.png";
import client2Img from "../images/client2.png";
import meetImg from "../images/meet.png";
import progressImg from "../images/progress.png";
import experienceImg from "../images/experience.png";
import oneImg from "../images/one.png";
import twoImg from "../images/two.png";
import threeImg from "../images/three.png";
import sponsor1Img from "../images/sponsor1.png";
import sponsor2Img from "../images/sponsor2.png";
import sponsor3Img from "../images/sponsor3.png";
import sponsor4Img from "../images/sponsor4.png";

const data = {
  currentProjects: [
    {
      id: 1,
      src: hawaiiZoningAtlasImg,
      title: "Hawaii Zoning Atlas",
      text: "An interactive map exploring how restrictive zoning laws can make it difficult to build diverse, affordable housing.",
      about:
        "Building an online-interactive map to educate the public on zoning and land use issues. Our vision is to connect researchers, educators, and advocates.",
      goals:
        "The project's goals are to build an interactive online map to educate the public on zoning and land use issues and generate talking points for affordable housing advocates in Hawaii. Our second goal is to create a website that serves as a hub for the resulting coalition of researchers, educators, and advocates.",
      github: "https://github.com/CodeWithAloha/Hawaii-Zoning-Atlas",
      live: "https://hawaiizoningatlas.com/#9/20.4162/-157.4015/",
      hasWebsite: true,
    },
    {
      id: 2,
      src: habitatFullImg,
      title: "Habitat for Humanity",
      text: " A nonprofit organization that helps people in your community and around the world build or improve a place they can call home.",
      className: "max-h-1/2",
      about:
        "Habitat for Humanity Leeward O`ahu (Leeward Habitat) is a local affiliate of a world- wide organization that builds houses with volunteer labor and sells those houses to very low-income families (those earning under 50% of the area median income). ",
      goals:
        "Habitat works to build homes in Leeward O`ahu which includes the areas of Kapolei, Ewa Beach, and Wai’anae. It is our mission to eliminate substandard housing and homelessness in Leeward O`ahu.",
      github: "https://github.com/CodeWithAloha/LeewardHabitatForHumanity",
      live: "",
      hasWebsite: false,
    },
    {
      id: 3,
      src: hierrImg,
      title: "HIERR",
      text: "The HIERR (Hawaiʻi Economic Recovery & Resilience) Project aims to enable actions toward a more resilient, equitable, and sustainable economy.",
      about:
        "The HIERR Project aims to enable actions toward a more resilient, equitable, and sustainable economy. This planning process is designed to learn from the economic impacts and experiences of hardship associated with the COVID-19 pandemic to inform and enable actions toward a more resilient, equitable, and sustainable economy.",
      goals:
        "The CFH project is focused on developing a digital engagement platform via Pol.is and onboarding materials to solicit resident sentiments on vision and value statements for Hawaii's economic future. Residents will be invited to in-person workshops for onboarding and introduction to the established Pol.is, where they will be invited to interact with seeded vision and value statements as well as add new ones.",
      github: "https://github.com/CodeWithAloha/HIERR",
      live: "https://hierr.vercel.app/",
      hasWebsite: true,
    },
  ],
  histroicalProjects: [
    {
      id: 1,
      src: foodOasisImg,
      width: "400",
      height: "300",
      title: "FOOD OASIS",
      text: "Resource for Community Food Help",
    },
    {
      id: 2,
      src: uipaImg,
      width: "400",
      height: "300",
      title: "UIPA.ORG",
      text: "Publishes public records and request",
      className: "max-h-1/2",
    },
  ],
  timeline: [
    {
      id: 1,
      src: timeline1Img,
      date: "2009",
      title: "Humble beginnings",
      text: "Code for Hawaii was being born from idea to family.",
    },
    {
      id: 2,
      src: timeline2Img,
      date: "2011",
      title: "First Civic App Released",
      text: "Code for Hawaii became official and released its first app aimed to help and improve the community.",
    },

    {
      id: 3,
      src: timeline3Img,
      date: "2012",
      title: "Code for America",
      text: "Honolulu Organizes CityCamp 2012. That was the first local event to introduce Code for America, a national organization that aims to build open source technology and organize a network of people dedicated to making government services simple, effective, and easy to use.",
    },
    {
      id: 4,
      src: timeline4Img,
      date: "August 2012",
      title: "Code for Hawaii joins the brigade!",
      text: "Code for Hawaii joins the inaugural cohort of Brigades along with Portland, ME; Austin; Boston; Lexington; Philly; Chicago; Denver; San Diego; Grand Rapids; Detroit; Arlington; Asheville; Oakland; Bend; Alexandria",
    },
    {
      id: 5,
      src: timeline5Img,
      date: "2015",
      title: "Leadership reboot",
      text: "Code for Hawaii welcomes a reboot and new leadership.",
    },
    {
      id: 6,
      src: timeline6Img,
      date: "2020",
      title: "Kaiulu Strategic Promise Developed",
      text: "Code for Hawaii develops Kaiulu Strategic Promise and clarifies strategic vision for the organization going forward!",
    },
    {
      id: 7,
      src: timeline7Img,
      date: "June 2023",
      title: "Code for America Brigade Cancellation",
      text: "Code for America cancels the local brigades program. Code for Hawaii rebrands as Code With Aloha and joins many other previous brigades in the Alliance of Civic Technologists.",
    },
  ],
  clients: [
    {
      id: 1,
      alt: "Hawaii Zoning Atlus",
      src: client1Img,
      width: 500,
      height: 500,
      className: "h-full  w-1/3 lg:w-1/4 ",
      hasWebsite: true,
      url: "https://hawaiizoningatlas.com/",
    },
    {
      id: 2,
      alt: "The Civil Beat - Law Center For Public Interest",
      src: client2Img,
      width: 500,
      height: 500,
      className: "h-full w-1/3 lg:w-1/4 ",
      hasWebsite: true,
      url: "https://www.civilbeatlawcenter.org/",
    },
  ],
  focus: [
    {
      id: 1,
      src: meetImg,
      alt: "meet illustration",
      width: 500,
      height: 283,
      title: "Meet new people",
      text: "Build with, not for. We are a community of people who are passionate about helping others. We are here to support each other and build together.",
    },

    {
      id: 2,
      src: progressImg,
      alt: "make an impact illustration",
      width: 500,
      height: 266,
      title: "Make a Difference",
      text: "Nobody is coming to save us. It's up to us to impact our community and drive change. We are the ones we've been waiting for. We are the change that we seek.",
      className: "xl:flex-row-reverse",
    },

    {
      id: 3,
      src: experienceImg,
      alt: "gain experience illustration",
      width: 500,
      height: 215,
      title: "Gain Experience",
      text: "Gain experience as a beginner, pay it forward as a mentor. We help each other grow and together we make a difference in our community.",
    },
  ],
  expectations: [
    {
      id: 1,
      src: oneImg,
      width: 500,
      height: 500,
      title: "Meet & Greet",
      text: "At every meeting, we come together from various locations, united by a common goal. We begin by acknowledging the communities we come from, ensuring that we set a respectful and inclusive environment. Afterward, each of the group members introduces themselves and we all discuss a question of the day.",
    },
    {
      id: 2,
      src: twoImg,
      width: 500,
      height: 500,
      title: "Project Updates",
      text: "In our meetings, we keep everyone updated on project milestones, challenges, and progress. We also give guests and partners a platform to share their ongoing work, allowing us to expand our knowledge and impact. By staying connected, we continuously improve our contribution to Hawaii.",
    },

    {
      id: 3,
      src: threeImg,
      width: 500,
      height: 500,
      title: "Breakout Rooms",
      text: "During each meetup, we facilitate breakout rooms tailored to our projects for targeted discussion and planning. Together in these rooms, we drive innovation and progress, contributing to the growth and betterment of our community. Your insights can make a real difference – let's achieve greatness together!",
    },
  ],
  sponsors: [
    {
      id: 1,
      alt: "HTDC",
      src: sponsor1Img,
      width: 500,
      height: 500,
      className: "mx-8 h-full  w-1/6 lg:w-1/8 ",
      hasWebsite: true,
      url: "https://www.htdc.org/",
    },
    {
      id: 2,
      alt: "Box Jelly",
      src: sponsor2Img,
      width: 500,
      height: 500,
      className: "mx-8 h-full w-1/6 lg:w-1/8 ",
      hasWebsite: true,
      url: "https://www.theboxjelly.com/",
    },
    {
      id: 3,
      alt: "Entrepreneur Sandbox",
      src: sponsor3Img,
      width: 500,
      height: 500,
      className: "mx-8 h-full  w-1/6 lg:w-1/8 ",
      hasWebsite: true,
      url: "https://sandboxhawaii.org/",
    },
    {
      id: 4,
      alt: "Hub Coworking Hawaii",
      src: sponsor4Img,
      width: 500,
      height: 500,
      className: "mx-8 h-full w-1/6 lg:w-1/8 ",
      hasWebsite: true,
      url: "https://hubcoworkinghi.com/",
    },
  ],
};

export const getCurrentProjects = () => {
  return structuredClone(data.currentProjects);
};

export const getHistoricalProjects = () => {
  return structuredClone(data.histroicalProjects);
};

export const getTimeline = () => {
  return structuredClone(data.timeline);
};

export const getClients = () => {
  return structuredClone(data.clients);
};
export const getFocus = () => {
  return structuredClone(data.focus);
};
export const getExpectations = () => {
  return structuredClone(data.expectations);
};
export const getSponsors = () => {
  return structuredClone(data.sponsors);
};
