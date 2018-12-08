import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../sites/Home';
import Form from '../sites/Form';


export const routes = [
    {
        component: Home,
        exact: true,
        path: '/'
    },
    {
        component: Form,
        path: '/form'
    }
];

export const RouteWithSubRoutes = (route, key) => (
    <Route
        exact={route.exact}
        key={key}
        path={route.path}
        render={(props) => (
            <route.component
                {...props}
                routes={route.routes}
            />
        )}
    />
);
