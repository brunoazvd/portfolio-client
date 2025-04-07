import { Route, Routes } from "react-router-dom";
import { RoutePaths } from "../data/RoutePaths.jsx";

import { Layout } from "../components/Layout.jsx";

import { Home } from "../pages/Home.jsx";
import { NotFound } from "../pages/NotFound.jsx";
import { About } from "../pages/About.jsx";
import { Projects } from "../pages/Projects.jsx";

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.ABOUT}
      element={
        <Layout>
          <About />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.PROJECTS}
      element={
        <Layout>
          <Projects />
        </Layout>
      }
    />
    <Route
      path={RoutePaths.NOT_FOUND}
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
);
