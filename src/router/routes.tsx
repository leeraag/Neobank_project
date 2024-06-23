import { ReactNode } from "react";
import { Home, Card, NotFound } from "../pages";

enum RouteNames {
    HOME = '/',
    CARD = '/card',
    NOTFOUND = '/notfound',
}

type TRoutes = {
    path: string,
    component: ReactNode,
    exact: boolean
};

export const routes: Array<TRoutes> = [
    { path: RouteNames.HOME, component: <Home />, exact: true },
    { path: RouteNames.CARD, component: <Card />, exact: true },
    { path: RouteNames.NOTFOUND, component: <NotFound />, exact: true },
];