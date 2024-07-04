import { ReactNode } from "react";
import { Home, NotFound, Loan } from "../pages";

enum RouteNames {
    HOME = '/',
    LOAN = '/loan',
    NOTFOUND = '/notfound',
}

type TRoutes = {
    path: string,
    component: ReactNode,
    exact: boolean
};

export const routes: Array<TRoutes> = [
    { path: RouteNames.HOME, component: <Home />, exact: true },
    { path: RouteNames.LOAN, component: <Loan />, exact: true },
    { path: RouteNames.NOTFOUND, component: <NotFound />, exact: true },
];