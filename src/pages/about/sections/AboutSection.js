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
import bgFront from "assets/images/cartimg.jpg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function AboutSection() {
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
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  title="Qui sommes nous'"
                  description="Choisir Mutuelle leader des comparateurs de mutuelle santé, est là pour vous aider dans le choix de votre assurance (dentaire, optique, hospitalisation, soins courants …) vous trouverez rapidement la mutuelle santé ou l’assurance complémentaire qui vous convient."
                />
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  title="Demander conseil auprès d’un spécialiste qui pourra vous orienter dans vos démarches."
                />
              </Grid>
            </Grid>
            <Grid container spacing={1} sx={{ mt: { xs: 0, md: 0 } }}>
              <Grid item xs={12} md={12}>
                <DefaultInfoCard
                  title="Comment faire pour obtenir un devis mutuelle santé en ligne ?"
                  description="Souhaites-vous souscrire une mutuelle complémentaire santé et vous souhaitez obtenir un devis détaillé afin d'avoir une idée global sur les tarifs des mutuelles les plus adaptés à votre budget et à votre recherche? Vous pouvez demandez votre devis personnalisé en moins d'une minute.
Le formulaire ci-dessous présente des informations importantes à remplir pour établir votre devis mutuelle personnalisé et présentant les tarifs et garanties des mutuelles santé en fonction de vos besoins."
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default AboutSection;