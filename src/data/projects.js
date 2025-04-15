// src/data/projects.js

const projects = [
  {
    id: 1,
    slug: "stock-and-shop",
    title: "Stock and Shop",
    subtitle: "University Final Year Project (2024)",
    description:
      "A retail simulation game focused on inventory management, built in Unity with a strong gameplay loop and clear UX. Nominated for a TIGA Award.",
    tags: ["Unity", "C#", "Game Design"],
    github:
      "https://github.com/Richard-Casey/University-Year-3/tree/main/Honours-Project",
    liveDemo: null,
    image: "/images/projects/StockAndShopSplash.png",
    gallery: [
        "/images/projects/stock1.png",
        "/images/projects/stock2.png",
        "/images/projects/stock3.png"
      ]
  },
  {
    id: 2,
    slug: "other-half-hub-website",
    title: "The Other-Half Hub Website",
    subtitle: "Charity Microsite (2024)",
    description:
      "A React site prototype with custom branding and modular content blocks. Built to replace an inflexible third-party platform.",
    tags: ["React", "Tailwind", "Branding"],
    github: "https://github.com/Richard-Casey/P1Website",
    liveDemo: null,
    image: "/images/projects/OHHLogo.png",
    gallery: [
        "/images/projects/stock1.png",
        "/images/projects/stock2.png",
        "/images/projects/stock3.png"
      ]
  },
  {
    id: 3,
    slug: "encompass-work-tracker",
    title: "Encompass Work Tracker",
    subtitle: "Charity Workflow Tool (2025)",
    description:
      "Built with WPF in C# to help streamline data entry and improve GDPR compliance for internal records. Replaced reliance on Airtable.",
    tags: ["C#", "WPF", "Desktop App"],
    github: "https://github.com/Richard-Casey/EncompassWorkTracker",
    liveDemo: null,
    image: "/images/projects/encompass.png",
    gallery: [
        "/images/projects/stock1.png",
        "/images/projects/stock2.png",
        "/images/projects/stock3.png"
      ]
  },
];

export default projects;
