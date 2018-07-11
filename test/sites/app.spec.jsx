import React from 'react';
import App from '../../src/sites/app';

describe('app site', () => {
    let wrapper = null;

    it('should be rendered', () => {
        wrapper = global.shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
