import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {RouteWithSubRoutes, routes} from './config';
import NotFound from '../sites/notFound';
import Layout from '../layout';

const RouterElements = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    {routes.map((route, key) => (
                        <RouteWithSubRoutes {...route} key={key} />
                    ))}

                    <Route component={NotFound} />
                </Switch>
            </Layout>
        </Router>
    );
};

export default RouterElements;
