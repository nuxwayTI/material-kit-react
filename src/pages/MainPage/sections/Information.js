/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
//import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";
import CenteredBlogCard from "examples/Cards/BlogCards/CenteredBlogCard";

import NuxLogo from "../../../assets/images/NuxLogos/logo-NUXWAY-(v2).png";
import InnovaLogo from "../../../assets/images/NuxLogos/IYD-LOGO-nuxway.png";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={NuxLogo}
              title="Visita nuestra pagina web"
              description="En Nuxway ofrecemos servicios en tecnología de la información, una plataforma que contribuye activamente con el crecimiento y desarrollo de las empresas bolivianas, haciendo que sus comunicaciones sean escalables, fácil de gestionar, tenga una mayor productividad, generen menores costos y promuevan la innovación. ¡Visítanos para descubrir todo lo que podemos ofrecerte!"
              action={{
                type: "external",
                route: "http://nuxway.net",
                color: "info",
                label: "Conócenos",
              }}
            />
          </Grid>
          <Grid item xs={12} lg={6} sx={{ ml: "auto", mt: { xs: 3, lg: 0 } }}>
            <CenteredBlogCard
              image={InnovaLogo}
              title="Accede a nuestros servicios"
              description="Inicia sesión y desbloquea un mundo de posibilidades. Desde llamadas automáticas hasta monitoreo de tus centros de llamadas, nuestra plataforma ofrece una amplia gama de servicios diseñados para simplificar tu trabajo y potenciar tu productividad. ¡Únete ahora y descubre todo lo que nuestra nube tiene para ofrecerte!"
              action={{
                type: "internal",
                route: "/authentication",
                color: "info",
                label: "Inicia sesión",
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
