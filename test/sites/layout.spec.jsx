import React from 'react';
import Layout from '../../src/layout';

describe('layout', () => {
    let wrapper;

    it('should be rendered', () => {
        wrapper = global.shallow(<Layout />);
        expect(wrapper).toMatchSnapshot();
    });
});
