export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "A tech enthusiast passionate about software development.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[90vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I am very flexible when it comes to coordinating across various time zones.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title:
      "Looking for challenging opportunities in a junior software developer role.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center",
    img: "/b5.svg",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "I prioritize teamwork to deliver results that exceed customer expectations.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    // title: "Currently building a JS Animation library",
    // description: "The Inside Scoop",
    // className: "md:col-span-3 md:row-span-2",
    // imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    // titleClassName: "justify-center md:justify-start lg:justify-center",
    // img: "/b5.svg",
    // spareImg: "/grid.svg",
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
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
    title: "The Wild Oasis Hotel Website",
    des: "Where nature's beauty and comfortable living blend seamlessly. Hidden away in the heart of the Italian Dolomites, this is your paradise away from home. But it's not just about the luxury cabins. It's about the experience of reconnecting with nature and enjoying simple pleasures with family.",
    img: "/proj01.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/supabase-icon.svg"],
    link: "https://website-the-wild-oasis-demo.vercel.app/",
  },
  {
    id: 2,
    title: "The Wild Oasis Hotel Dashboard For Admin",
    des: "A dashboard system designed to manage booking information, room reservation statuses, and customer data.",
    img: "/proj02.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/supabase-icon.svg"],
    link: "https://admin-the-wild-oasis.netlify.app/dashboard",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
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
    title: "PTT Exploration and Production Public Company Limited",
    desc: "Mechanical Engineer | As a project team member, developed a cost estimation application utilizing parametric equation cost curves. Managed the integrated procurement data for petroleum drilling rigs, covering piping, instrumentation, mechanical, electrical, and structural systems. Conducted data gathering for the EWP (G1/G2) and Arthit projects, including data ingestion and updates into BigQuery.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "L.P.N. Development Public Company Limited",
    desc: "Mechanical Engineer | Assess quality standards for new condominium buildings and review maintenance reports for high-rise building systems, ensuring compliance with established standards and technical specifications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "New Electrical Technology Co., Ltd.",
    desc: "Mechanical Engineer | Manage and supervise the installation of building systems in the high-rise construction project to ensure smooth and timely execution.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mitsubishi Electric Consumer Products co.,Ltd",
    desc: "Student Internship | Support the engineering team in troubleshooting production problems by utilizing the knowledge and skills acquired during the initial training.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/link.svg",
  },
];
