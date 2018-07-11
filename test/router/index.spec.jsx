import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Index from '../../src/router/index';
import {routes, RouteWithSubRoutes as routeWithSubRoutes} from '../../src/router/config';

describe('Router index', () => {
    let wrapper = null;

    it('should be rendered', () => {
        wrapper = global.shallow(<Index />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Config should be rendered', () => {
        const {0: route} = routes;
        expect(routeWithSubRoutes(route)).not.toBeNull();
        wrapper = global.shallow(
            <Router>
                {routeWithSubRoutes(route)}
            </Router>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Config should be rendered without layout', () => {
        const Test = () => (
            <span>
                {'test'}
            </span>
        );
        const route = {
            component: Test,
            layout: false,
            path: '/test/'
        };
        expect(routeWithSubRoutes(route)).not.toBeNull();
        wrapper = global.shallow(
            <Router>
                {routeWithSubRoutes(route)}
            </Router>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
