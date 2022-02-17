import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import bgImage from "assets/images/mutual.png";
import axios from "axios";
axios.defaults.withCredentials = true;

const ContactUs = () => {
  const [mail, setMail] = useState({
    nom: "",
    prenom: "",
    tel: "",
    email: "",
    nombredenfants: "",
    regime: "",
    ville: "",
    codepostal: "",
    datenaissance: "",
    datedeffets: "",
  });
  const [error, setError] = React.useState("");

  const handleInputChange = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://api.choisirmutuelle.ga/send-mail", mail, {
        withCredentials: true,
      });
      if (res) {
        setError(res.data.message);
      }
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} lg={4}>
          <MKBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid item xs={12} sm={10} md={8} lg={8} xl={8}>
          <MKBox
            bgColor="white"
            borderRadius="xl"
            shadow="lg"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            mt={{ xs: 20, sm: 18, md: 20 }}
            mb={{ xs: 20, sm: 18, md: 20 }}
            mx={3}
          >
            <MKBox
              variant="gradient"
              bgColor="info"
              coloredShadow="info"
              borderRadius="lg"
              p={2}
              mx={2}
              mt={-3}
            >
              <MKTypography variant="h3" color="white">
                Rapide, gratuit et sans engagement !
              </MKTypography>
            </MKBox>
            <MKBox p={3}>
              {error}
              {/* <MKTypography variant="body2" color="text" mb={3}>
              </MKTypography> */}
              <MKBox
                onSubmit={handelSubmit}
                width="100%"
                component="form"
                method="post"
                autocomplete="off"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Nom"
                      onChange={(event) => handleInputChange(event)}
                      name="nom"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Prénom"
                      name="prenom"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="number"
                      variant="standard"
                      label="Tél"
                      name="tel"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="email"
                      variant="standard"
                      label="Email"
                      name="email"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="number"
                      variant="standard"
                      label="Nombre d'enfants"
                      name="nombredenfants"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <InputLabel id="demo-simple-select-label">Régime</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Régime"
                      variant="standard"
                      name="regime"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    >
                      <MenuItem value="Régime général">Régime général</MenuItem>
                      <MenuItem value="Travailleur non salarié">Travailleur non salarié</MenuItem>
                      <MenuItem value="Régime local Alsace Moselle">
                        Régime local Alsace Moselle
                      </MenuItem>
                      <MenuItem value="Régime Agricole">Régime Agricole</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      variant="standard"
                      label="Ville"
                      name="ville"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="number"
                      variant="standard"
                      label="Code postal"
                      name="codepostal"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="date"
                      variant="standard"
                      label="Date Naissance"
                      InputLabelProps={{ shrink: true }}
                      name="datenaissance"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <MKInput
                      type="date"
                      variant="standard"
                      label="Date d'effet"
                      InputLabelProps={{ shrink: true }}
                      name="datedeffets"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <Grid container item justifyContent="center" xs={12} mt={5} mb={2}>
                  <MKButton type="submit" variant="gradient" color="info">
                    JE COMPARE
                  </MKButton>
                </Grid>
              </MKBox>
            </MKBox>
          </MKBox>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;
