import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Choisirmutuelle from "layouts/pages/presentation";
import About from "layouts/pages/about";

// Material Kit 2 React routes
// import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // const getRoutes = (allRoutes) =>
  //   allRoutes.map((route) => {
  //     if (route.collapse) {
  //       return getRoutes(route.collapse);
  //     }

  //     if (route.route) {
  //       return <Route exact path={route.route} element={route.component} key={route.key} />;
  //     }

  //     return null;
  //   });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {/* {getRoutes(routes)} */}
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Choisirmutuelle />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
}
