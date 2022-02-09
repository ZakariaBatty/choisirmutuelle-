// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/assur-Bg.png";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Feel the
                    <br />
                    Material Kit
                  </>
                }
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image={bgBack}
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Les Solutions 'Particulier'"
                  description="vous bénéficiez d’une protection santé innovante personnalisée qui suit les évolutions de votre vie et s’adapte à vos besoins..."
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  title="Les Solutions 'Entreprise'"
                  description="Spécialistes de la protection sociale des personnes, nos conseillers entreprises mettent leur expertise à votre service pour définir le niveau de couverture dont vous ..."
                />
              </Grid>
            </Grid>
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  title="Un réseau mutualiste solidaire au service de votre santé"
                  description="Etude mutuelle santé personnalisée. Vous bénéficiez d’une protection santé innovante, personnalisée qui suit les évolutions de votre vie et s’adapte à vos besoins.
                  Choisir mutuelle ne s’arrête pas au simple remboursement des soins, un service d’information, d’orientation et d’accompagnement
                  vous soutient au fil des années pour vous aider à préserver durablement votre capital santé.
                  Afin d'obtenir un devis de mutuelle santé personnalisé, veuillez renseigner les informations ci-dessous.
                  Vous pouvez exprimer vos besoins en prestations santé grâce aux curseurs gradués."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
