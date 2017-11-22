import React from 'react';
import Footer from '../../src/layout/footer';

describe('Footer', () => {
    let wrapper;

    it('should be rendered', () => {
        wrapper = global.shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });
});
