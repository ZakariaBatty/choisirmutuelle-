// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// import MKSocialButton from "components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import DefaultFooter from "examples/Footers/DefaultFooter";
import FilledInfoCard from "examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Information from "pages/Presentation/sections/Information";
import DesignBlocks from "pages/Presentation/sections/DesignBlocks";
import Contact from "pages/Presentation/sections/Contact";

// Presentation page components
import BuiltByDevelopers from "pages/Presentation/components/BuiltByDevelopers";

// Routes
import routes from "routes";
import footerRoutes from "footer.routes";

// Images
import bgImage from "assets/images/choisirmutuelle.png";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["2rem"],
                },
              })}
              style={{ fontSize: "2rem" }}
            >
              L assurance en ligne facile pour les particuliers
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Tarifs ajust??s ?? votre profil
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Vos besoins couverts ?? 100%
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Des conseillers pour vous aider
            </MKTypography>
            <Grid mt="4" container item xs={6} lg={6} justifyContent="center" mx="auto">
              <MKButton rel="noreferrer"  href="/#compare"  color="white" size="small">
                Je Compare
              </MKButton>
            </Grid>
          </Grid>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        {/* <Counters /> */}
        <Information />
        {/* <Pages /> */}
        <Container id="particulers" sx={{ mt: 6 }}>
          <BuiltByDevelopers />
        </Container>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                variant="gradient"
                color="info"
                icon="flag"
                title="Vous prot??ger, naturellement !"
                description="Pour vous, nous concevons des garanties personnalis??es en sant??, pr??voyance, assurance de pr??ts et ??pargne-retraite, au co??t le plus juste."
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="precision_manufacturing"
                title="Vous ??tes au c??ur de notre mod??le associatif !"
                description="Get inspiration and have an overview about the plugins that we used to create the Material Kit.Z??ro actionnaire??? mais 1182 contributeurs (582 collaborateurs et 600 adh??rents b??n??voles) qui se mobilisent pour vous : c???est ??a, la diff??rence associative !"
              />
            </Grid>
            <Grid item xs={12} lg={4}>
              <FilledInfoCard
                color="info"
                icon="apps"
                title="Vous ??tes acteur de votre sant?? !"
                description="Gouvernance participative, plateforme collaborative ?? Agir Ensemble ??, ateliers sant??, actions de partage??? Pour nous, chacun de nos adh??rents compte et peut participer : c???est ??a, ??tre acteur de sa sant?? !"
              />
            </Grid>
          </Grid>
        </Container>
        <DesignBlocks />
          <Contact />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
