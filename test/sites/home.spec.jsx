import React from 'react';
import Home from '../../src/sites/home';

describe('home site', () => {
    let wrapper = null;

    it('should be rendered', () => {
        wrapper = global.shallow(<Home />);
        expect(wrapper).toMatchSnapshot();
    });
});
