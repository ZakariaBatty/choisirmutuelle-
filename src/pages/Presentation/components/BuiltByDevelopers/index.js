// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Icon from "@mui/material/Icon";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function BuiltByDevelopers() {
  const bgImage =
    "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desktop.jpg";

  return (
    <MKBox
      display="flex"
      alignItems="center"
      borderRadius="xl"
      my={2}
      py={6}
      sx={{
        backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
          `${linearGradient(
            rgba(gradients.dark.main, 0.8),
            rgba(gradients.dark.state, 0.8)
          )}, url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <Grid container item xs={12} lg={10} sx={{ ml: { xs: 0, lg: 12 } }}>
          <MKTypography variant="h4" color="warning" fontWeight="bold">
            Un réseau mutualiste solidaire au service de votre santé
          </MKTypography>
          <MKTypography variant="h1" color="white" mb={1}>
            Etude mutuelle santé personnalisée
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Vous bénéficiez d’une protection santé innovante, personnalisée qui suit les évolutions
            de votre vie et s’adapte à vos besoins. Choisir mutuelle ne s’arrête pas au simple
            remboursement des soins, un service d’information, d’orientation et d’accompagnement
            vous soutient au fil des années pour vous aider à préserver durablement votre capital
            santé.
          </MKTypography>
          <MKTypography variant="body1" color="white" opacity={0.8} mb={2}>
            Afin d obtenir un devis de mutuelle santé personnalisé, veuillez renseigner les
            informations ci-dessous. Vous pouvez exprimer vos besoins en prestations santé grâce aux
            curseurs gradués.
          </MKTypography>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default BuiltByDevelopers;
