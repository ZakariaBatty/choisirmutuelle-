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
    <MKBox id="entreprises" component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={
                  <>
                    Formulaire
                    <br />
                    Particulier
                  </>
                }
                description="Demander conseil auprès d’un spécialiste qui pourra vous orienter dans vos démarches."
              />
              <RotatingCardBack
                image={bgBack}
                title="Découvrir plus"
                description="Comment faire pour obtenir un devis mutuelle santé en ligne ?"
                action={{
                  type: "internal",
                  route: "#compare",
                  label: "Cliquez ici",
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
            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 0 } }}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  title="Un réseau mutualiste solidaire au service de votre santé"
                  description="Etude mutuelle santé entreprise. Spécialistes de la protection sociale des personnes, nos conseillers entreprises mettent leur expertise à votre service pour définir le niveau de couverture dont vous avez besoin pour chaque catégorie de personnel et module de prestations
                  Vous souhaitez des renseignements sur nos solutions santé et prévoyance pour les entreprises
                  Merci de compléter le formulaire ci-dessous, nos conseillers vous répondront dans les plus brefs délais.."
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
