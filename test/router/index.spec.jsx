import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Index from '../../src/router/index';
import {routes, RouteWithSubRoutes} from '../../src/router/config';

describe('Router index', () => {
    let wrapper;

    it('should be rendered', () => {
        wrapper = global.shallow(<Index />);
        expect(wrapper).toMatchSnapshot();
    });

    it('Config should be rendered', () => {
        const route = routes[0];
        expect(RouteWithSubRoutes(route)).not.toBeNull();
        wrapper = global.shallow(<Router>{RouteWithSubRoutes(route)}</Router>);
        expect(wrapper).toMatchSnapshot();
    });

    it('Config should be rendered without layout', () => {
        const Test = () => <span>test</span>;
        const route = {
            path: '/test/',
            component: Test,
            layout: false
        };
        expect(RouteWithSubRoutes(route)).not.toBeNull();
        wrapper = global.shallow(<Router>{RouteWithSubRoutes(route)}</Router>);
        expect(wrapper).toMatchSnapshot();
    });

});
