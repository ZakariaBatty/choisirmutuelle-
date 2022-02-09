const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";
const mma = "https://www.mma.fr/files/live/sites/mmafr/files/logos/mma-logo-desktop.png";

export default [
  {
    title: "Design Blocks",
    description: "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: `${mma}`,
        name: "Page Headers",
        count: 10,
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${imagesPrefix}/features.jpg`,
        name: "Features",
        count: 14,
        route: "/sections/page-sections/features",
      },
      {
        image: `${imagesPrefix}/pricing.jpg`,
        name: "Pricing",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        name: "FAQ",
        count: 1,
        pro: true,
      },
      {
        image: `${imagesPrefix}/blogs.jpg`,
        name: "Blog Posts",
        count: 11,
        pro: true,
      },
      {
        image: `${imagesPrefix}/testimonials.jpg`,
        name: "Testimonials",
        count: 11,
        pro: true,
      },
      {
        image: `${imagesPrefix}/teams.jpg`,
        name: "Teams",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/stats.jpg`,
        name: "Stats",
        count: 3,
        pro: true,
      },
      {
        image: `${imagesPrefix}/call-to-action.jpg`,
        name: "Call to Actions",
        count: 8,
        pro: true,
      },
      {
        image: `${imagesPrefix}/projects.jpg`,
        name: "Applications",
        count: 6,
        pro: true,
      },
      {
        image: `${imagesPrefix}/logo-area.jpg`,
        name: "Logo Areas",
        count: 4,
        pro: true,
      },
      {
        image: `${imagesPrefix}/footers.jpg`,
        name: "Footers",
        count: 10,
        pro: true,
      },
      {
        image: `${imagesPrefix}/general-cards.jpg`,
        name: "General Cards",
        count: 9,
        pro: true,
      },
      {
        image: `${imagesPrefix}/content-sections.jpg`,
        name: "Content Sections",
        count: 8,
        pro: true,
      },
    ],
  },
];
