const mma = "https://www.mma.fr/files/live/sites/mmafr/files/logos/mma-logo-desktop.png";
const LogoProbtp =
  "https://www.probtp.com/files/live/sites/probtp/files/media/images/homes/logo_probtp_header.jpg";
const LogoAsaf = "https://www.asaf-afps.fr/img/logo-asaf-vert.png";
const LogoNeoliane = "https://neoliane-sante.fr/assets/images/neoliane-sante-prevoyance.svg";
const Logoffa = "https://www.ffa.eu/client/ffa/images/logo-ffa.png";
const LogoXenassur = "https://www.xenassur.fr/apporteur/assets/images/png/logo-xenassur.png";
// const LogoAsaf = "https://www.asaf-afps.fr/img/logo-asaf-vert.png";
// const LogoAsaf = "https://www.asaf-afps.fr/img/logo-asaf-vert.png";
// const LogoAsaf = "https://www.asaf-afps.fr/img/logo-asaf-vert.png";

export default [
  {
    title: "Partenaires",
    description: "Un réseau mutualiste solidaire au service de votre santé",
    items: [
      {
        image: `${mma}`,
        name: "Page Headers",
        route: "/sections/page-sections/page-headers",
      },
      {
        image: `${LogoProbtp}`,
        name: "probtp",
        route: "https://www.probtp.com/particuliers-accueil.html",
      },
      {
        image: `${LogoAsaf}`,
        name: "asaf-vert",
        route: "https://www.asaf-afps.fr/",
      },
      {
        image: `${LogoNeoliane}`,
        name: "neoliane-sante-prevoyance",
        route: "https://neoliane-sante.fr",
      },
      {
        image: `${Logoffa}`,
        name: "Fédération-française",
        route: "https://www.ffa.eu",
      },
      {
        image: `${LogoXenassur}`,
        name: "Xenassur",
        route: "https://www.xenassur.fr",
      },
    ],
  },
];
