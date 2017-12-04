import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../sites/home';

export const routes = [
    {
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/child/:id',
        component: Home,
    },
];

export const RouteWithSubRoutes = route => (
    <Route
        path={route.path}
        exact={route.exact}
        render={props => (
            <route.component {...props} routes={route.routes} />
        )}
    />
);
