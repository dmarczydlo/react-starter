import React from 'react';
import Header from '../../src/layout/header';

describe('Header', () => {
    let wrapper = null;

    it('should be rendered', () => {
        wrapper = global.shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });
});
