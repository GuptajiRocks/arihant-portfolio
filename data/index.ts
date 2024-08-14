import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Improving the PyTube Library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Aasha - Modernising Rural Education",
    des: "We built a HTML webpage with study materials curated from all over the net at one place for respective classes.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/py.svg", "/git.svg"],
    link: "https://guptajirocks.github.io/SIHHackathon2023-Aasha/",
  },
  {
    id: 2,
    title: "Amazon Product Availability Checker",
    des: "We built an API which parses the webpage of Amazon products.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg","/jira.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "CLI Based EMS",
    des: "Using IDLE and Pandas, Numpy to build an EMS",
    img: "/p3.svg",
    iconLists: ["/py.svg", "/next.svg","/jira.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Stock Market Terminal",
    des: "Built a stock market terminal in Spring Boot",
    img: "/p4.svg",
    iconLists: ["/git.svg","spring.svg", "/jira.svg"],
    link: "/ui.apple.com",
  },
];

export const testimonials = [
  {
    quote:
      "I had the privilege of working alongside Arihant, and I must say, his dedication and versatility are truly remarkable. His contributions to overseeing day-to-day operations, scriptwriting, video production, and much more have been invaluable. Moreover, Arihant excels in communication, collaboration, and team management, making him an invaluable member of our team. His strategic thinking and commitment to excellence are commendable. and I wholeheartedly recommend him for his outstanding work ethic and multifaceted skills.",
    name: "Abhinav Singh",
    title: "Flutter Developer @ MentorHeal",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Co-Head Research",
    desc: "CSI BU - (2024-2025)",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Director of Technology",
    desc: "MentorHeal - (2023-2024)",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "President - Interact Club",
    desc: "Pragyan School - (2021-2022)",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Research Intern",
    desc: "Bennett University - (2024-2024)",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/GuptajiRocks",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/arihantguptaofficial/",
  },
];
