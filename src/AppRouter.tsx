import React from "react";
import { GlobalContainer } from "./common/components/GlobalContainer";
import { Route, Switch, BrowserRouter, RouteProps } from "react-router-dom";

type NavigationProps = { key: string };

type RouteDef = RouteProps & NavigationProps;

const routeDefs: RouteDef[] = [
  {
    key: "blogView",
    path: "/blog/:id",
    component: React.lazy(() => import("./components/Blog/BlogViewContainer")),
  },
  {
    key: "blog",
    path: "/blog",
    component: React.lazy(() => import("./components/Blog/BlogContainer")),
  },
  {
    key: "profile",
    path: "/",
    component: React.lazy(
      () => import("./components/Profile/ProfileContainer")
    ),
  },
];

const withComponentNavigation = (
  Component: RouteProps["component"],
  props: any
) => {
  if (!Component) {
    throw new Error("Route Component not defined");
  }
  const ComponentWithNavi = () => (
    <React.Suspense fallback="...loading">
      <GlobalContainer>
        <Component {...props} />
      </GlobalContainer>
    </React.Suspense>
  );
  return ComponentWithNavi;
};

const routeComponents = routeDefs.reduce<{
  [key: string]: RouteDef["component"];
}>((acc, current) => {
  acc[current.key] = withComponentNavigation(current.component, current);
  return acc;
}, {});

export const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Switch>
      {routeDefs.map((routeDef) => (
        <Route
          key={routeDef.key}
          path={routeDef.path}
          component={routeComponents[routeDef.key]}
        />
      ))}
    </Switch>
  </BrowserRouter>
);
