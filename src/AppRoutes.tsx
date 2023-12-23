import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./features/notFound/NotFound";
import { Page } from "./features/page/Page";
import HomePage from "./features/home/Home";

type isRouteActive = boolean;

type RouteConfig = Array<[string, JSX.Element, isRouteActive]>;

const pageRoutes: RouteConfig = [
  ["/", <HomePage />, true],
  ["/details", <HomePage />, true],
];

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      {pageRoutes.map(
        ([path, element, isRouteActive]) =>
          isRouteActive && (
            <Route
              key={path}
              path={path}
              element={<Page key={path}>{element}</Page>}
            />
          )
      )}
    </Routes>
  );
}
