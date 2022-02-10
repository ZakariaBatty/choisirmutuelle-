// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "Mutuelle france",
    image: logoCT,
    route: "/",
  },
  socials: [
    {
      icon: <FacebookIcon />,
      link: "#",
    },
    {
      icon: <TwitterIcon />,
      link: "#",
    },
    {
      icon: <GitHubIcon />,
      link: "#",
    },
    {
      icon: <YouTubeIcon />,
      link: "#",
    },
  ],

  menus: [
    {
      name: "Entreprise",
      items: [
        { name: "QUI SOMMES-NOUS", href: "#" },
        { name: "ENTREPRISES", href: "#" },
        { name: "PARTICULIERS", href: "#" },
        { name: "PARTENAIRES", href: "#" },
      ],
    },
    {
      name: "légal",
      items: [
        { name: "terms & conditions", href: "#" },
        { name: "privacy policy", href: "#" },
        { name: "contact us", href: "#" },
      ],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      Tous droits réservés . Copyright &copy; {date}
      <MKTypography
        component="a"
        href="https://akwascreation.com/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        I By Akwas Création
      </MKTypography>
      .
    </MKTypography>
  ),
};
