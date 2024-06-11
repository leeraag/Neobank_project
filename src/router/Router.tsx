import { FC } from 'react';
import { Routes, Route } from "react-router-dom";
import { routes } from './routes';

const Router: FC = () => {
    return (
        <Routes>
            {routes.map((route, index) =>
                <Route path={route.path} element={route.component} key={index} />
            )}
        </Routes>
    );
};

export { Router };