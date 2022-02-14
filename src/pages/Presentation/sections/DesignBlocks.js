// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ExampleCard from "pages/Presentation/components/ExampleCard";

// Data
import data from "pages/Presentation/sections/data/designBlocksData";

function DesignBlocks() {
  const renderData = data.map(({ title, description, items }) => (
    <Grid container spacing={3} sx={{ mb: 10 }} key={title}>
      <Grid item xs={12} lg={3}>
        <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
          <MKTypography variant="h3" fontWeight="bold" mb={1}>
            {title}
          </MKTypography>
          <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
            {description}
          </MKTypography>
        </MKBox>
      </Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {items.map(({ image, name, route }) => (
            <Grid item xs={12} md={4} sx={{ mb: 2 }} key={name}>
              <Link target="_blank" to={route}>
                <ExampleCard image={image} name={name} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ));

  return (
    <MKBox id="partenaires" component="section" my={6} py={6}>
      <Container sx={{ mt: 6 }}>{renderData}</Container>
    </MKBox>
  );
}

export default DesignBlocks;
