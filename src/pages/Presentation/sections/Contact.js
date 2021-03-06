import React, { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

import { css } from "@emotion/react";
import PropagateLoader from "react-spinners/PropagateLoader";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import bgImage from "assets/images/mutual.png";
import axios from "axios";
// axios.defaults.withCredentials = true;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #fff;
  color: "#fff";
`;

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
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleInputChange = (e) => {
    setMail({ ...mail, [e.target.name]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(!loading);
      await axios.post("https://apii.choisirmutuelle.ga/create-pdf", mail).then((res) => {
        return new Promise((resolve) => {
          if (!res) resolve("fail");
          console.log({ message: "good", res });
          setMessage(res.data.message);
          setLoading(false);
        });
      });
    } catch (err) {
      console.log(err?.response?.data);
      setError(err?.response?.data?.error);
      setLoading(false);
    }
  };
  return (
    <>
      <Grid id="compare" container spacing={3} alignItems="center">
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
        <Grid item xs={12} sm={10} md={12} lg={8} xl={8}>
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
              <MKTypography
                variant="body2"
                style={{ color: "#417406", fontSize: "24px", textAlign: "center" }}
                mb={3}
              >
                {message}
              </MKTypography>
              <MKTypography
                variant="body2"
                style={{ color: "red", fontSize: "24px", textAlign: "center" }}
                mb={3}
              >
                {error}
              </MKTypography>
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
                      label="Pr??nom"
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
                      label="T??l"
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
                    <InputLabel id="demo-simple-select-label">R??gime</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="R??gime"
                      variant="standard"
                      name="regime"
                      onChange={(event) => handleInputChange(event)}
                      fullWidth
                    >
                      <MenuItem value="R??gime g??n??ral">R??gime g??n??ral</MenuItem>
                      <MenuItem value="Travailleur non salari??">Travailleur non salari??</MenuItem>
                      <MenuItem value="R??gime local Alsace Moselle">
                        R??gime local Alsace Moselle
                      </MenuItem>
                      <MenuItem value="R??gime Agricole">R??gime Agricole</MenuItem>
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
        <div style={{ position: "absolute", left: "62%", right: "48%" }}>
          <PropagateLoader loading={loading} css={override} size={30} />
        </div>
      </Grid>
    </>
  );
};

export default ContactUs;
