import projects1 from "../assets/projects1.jpeg";
import projects2 from "../assets/projects2.webp";
import projects3 from "../assets/projects3.jpg";
// import projects4 from "../assets/projects4.webp";
// import projects5 from "../assets/projects5.webp";
// import projects6 from "../assets/projects6.webp";

// import person1 from "../assets/person1.webp";
// import person2 from "../assets/person2.webp";
// import person3 from "../assets/person3.webp";
// import person4 from "../assets/person4.webp";
// import person5 from "../assets/person5.webp";
// import person6 from "../assets/person6.webp";

export const LINKS = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    // { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
    greeting: "Hey there! 🖐️",
    introduction:
        "I’m Pratyush Sinha, a backend developer with expertise in Node.js and MongoDB, passionate about building scalable and efficient web applications.",
    description:
        "I specialize in designing robust server-side architectures, creating secure APIs, and managing databases to ensure seamless performance and scalability. My focus is on developing backend systems that power dynamic and data-driven applications.",
    resumeLinkText: "Download Resume",
    resumeLink: "/resume.pdf",
};

export const PROJECTS = [
    {
        name: "NomadNav",
        description: "Travel Itinerary Planner",
        image: projects1,
        repoLink: "https://github.com/pratyushsinha213/NomadNav-Travel-Itinerary-Planner",
        demoLink: "https://pratyushsinha213.github.io/NomadNav-Travel-Itinerary-Planner/login.html",
    },
    {
        name: "CommunityCares",
        description: "NGO Website",
        image: projects2,
        repoLink: "https://github.com/pratyushsinha213/NGo-Website",
        demoLink: "https://ngo-website-seven.vercel.app/",
    },
    {
        name: "Portfolio",
        description: "Personal Portfolio Version1",
        image: projects3,
        repoLink: "https://github.com/pratyushsinha213/my-react-portfolio",
        demoLink: "https://pratyushsinha213.github.io/my-react-portfolio/",
    },
    // {
    //     name: "DevDeck",
    //     description:
    //         "Interactive dashboard for developers to track coding activity",
    //     image: projects4,
    //     repoLink: "https://github.com/pratyushsinha213/NomadNav-Travel-Itinerary-Planner",
    //     demoLink: "https://pratyushsinha213.github.io/NomadNav-Travel-Itinerary-Planner/login.html",
    // },
    // {
    //     name: "FitConnect",
    //     description: "Fitness social network to connect athletes and trainers",
    //     image: projects5,
    //     repoLink: "https://github.com/pratyushsinha213/NomadNav-Travel-Itinerary-Planner",
    //     demoLink: "https://pratyushsinha213.github.io/NomadNav-Travel-Itinerary-Planner/login.html",
    // },
    // {
    //     name: "WellNest",
    //     description: "A wellness app for mental and physical health improvement",
    //     image: projects6,
    //     repoLink: "https://github.com/pratyushsinha213/NomadNav-Travel-Itinerary-Planner",
    //     demoLink: "https://pratyushsinha213.github.io/NomadNav-Travel-Itinerary-Planner/login.html",
    // },
];

export const ABOUT_CONTENT = {
    paragraphs: [
        "Hi there, Pratyush here. I am currently in my final year at VIT Vellore, pursuing a B.Tech in Computer Science and Engineering.",
        "As a backend developer with a strong foundation in Node.js and MongoDB, I specialize in building scalable server-side applications, designing secure RESTful APIs, and managing databases efficiently. I am also experienced in Express.js, authentication mechanisms, and optimizing backend performance.",
        "I am always open to connecting with fellow professionals and exploring opportunities for collaboration on innovative and impactful projects.",
    ],
};

export const EXPERIENCES = [
    {
        yearRange: "Aug 2024 — Present",
        title: "Front End Developer at Jurident",
        location: "Vellore, India",
        description: [
            "Leading the development of scalable frontend architecture for enterprise-level applications.",
            "Collaborating with cross-functional teams to deliver high-quality, user-centric solutions.",
            "Driving innovation through continuous improvements in performance and UI/UX design.",
        ],
    },
    //   {
    //     yearRange: "2021 — 2023",
    //     title: "Frontend Engineer at Startup Inc.",
    //     location: "Remote",
    //     description: [
    //       "Built dynamic, responsive, and accessible web applications using React, Next.js, and Tailwind CSS.",
    //       "Spearheaded frontend optimization efforts, resulting in a 40% performance boost.",
    //       "Mentored junior developers and led internal frontend workshops.",
    //     ],
    //   },
    //   {
    //     yearRange: "2018 — 2021",
    //     title: "Frontend Developer at Creative Solutions",
    //     location: "London, UK",
    //     description: [
    //       "Developed and maintained user interfaces for high-traffic websites.",
    //       "Worked closely with designers to implement pixel-perfect designs.",
    //       "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
    //     ],
    //   },
];

// export const TESTIMONIALS = [
//   {
//     name: "Sarah Johnson",
//     title: "Frontend Engineer, Google",
//     feedback:
//       "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
//     image: person1,
//   },
//   {
//     name: "Michael Anderson",
//     title: "Product Manager, Facebook",
//     feedback:
//       "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
//     image: person2,
//   },
//   {
//     name: "Emily Davis",
//     title: "Lead Designer, Amazon",
//     feedback:
//       "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
//     image: person3,
//   },
//   {
//     name: "David Lee",
//     title: "Senior Developer, Microsoft",
//     feedback:
//       "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
//     image: person4,
//   },
//   {
//     name: "Laura Martinez",
//     title: "CTO, Shopify",
//     feedback:
//       "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
//     image: person5,
//   },
//   {
//     name: "Chris Brown",
//     title: "Co-founder, Stripe",
//     feedback:
//       "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
//     image: person6,
//   },
// ];

export const CONTACT_CONTENT = {
    headline: "LET'S WORK ON SOMETHING GREAT",
    description:
        "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
    email: "pratisinha@gmail.com",
    socialLinks: [
        {
            platform: "Twitter",
            url: "https://twitter.com/yourprofile",
            ariaLabel: "Follow me on Twitter",
            icon: "RiTwitterXFill",
        },
        {
            platform: "GitHub",
            url: "https://github.com/pratyushsinha213",
            ariaLabel: "View my GitHub profile",
            icon: "RiGithubFill",
        },
        {
            platform: "LinkedIn",
            url: "https://www.linkedin.com/in/pratyushsinha213",
            ariaLabel: "Connect with me on LinkedIn",
            icon: "RiLinkedinFill",
        },
    ],
    footerText: `© ${new Date().getFullYear()} Pratyush Sinha. All rights reserved.`,
};
