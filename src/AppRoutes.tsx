import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./features/notFound/NotFound";
import { Page } from "./features/page/Page";
import HomePage from "./features/home/Home";
import CountyDetailPage from "./features/countyDetailPage/CountyDetailPage";

type isRouteActive = boolean;

type RouteConfig = Array<[string, JSX.Element, isRouteActive]>;

const pageRoutes: RouteConfig = [
  ["/", <HomePage />, true],
  ["/county/:name", <CountyDetailPage />, true],
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
