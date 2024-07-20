import { ReactNode } from "react";
import { Home, NotFound, Loan, Document, Scoring, Sign, Code } from "@pages";
import { ProtectedRoute } from "./ProtectedRoute";

enum RouteNames {
    HOME = '/',
    LOAN = '/loan',
    SCORING = LOAN + '/' + `:applicationId`,
    DOCUMENT = '/' + SCORING + '/document',
    SIGN = DOCUMENT + '/sign',
    CODE = SCORING + '/code',
    NOTFOUND = '*',
}

type TRoutes = {
    path: string,
    component: ReactNode,
    exact: boolean
};

export const routes: Array<TRoutes> = [
    { path: RouteNames.HOME, component: <Home />, exact: true },
    { path: RouteNames.LOAN, component: <Loan />, exact: true },
    { path: RouteNames.SCORING, component: <ProtectedRoute step={3}><Scoring /></ProtectedRoute>, exact: true },
    { path: RouteNames.DOCUMENT, component: <ProtectedRoute step={4}><Document /></ProtectedRoute>, exact: true },
    { path: RouteNames.SIGN, component: <ProtectedRoute step={5}><Sign /></ProtectedRoute>, exact: true },
    { path: RouteNames.CODE, component: <ProtectedRoute step={6}><Code /></ProtectedRoute>, exact: true },
    { path: RouteNames.NOTFOUND, component: <NotFound />, exact: true },
];