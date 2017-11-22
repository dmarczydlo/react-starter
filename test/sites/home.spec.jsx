import React from 'react';
import Home from '../../src/sites/home';

describe('home site', () => {
    let wrapper;

    it('should be rendered', () => {
        wrapper = shallow(
            <Home/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});