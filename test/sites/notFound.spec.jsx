import React from 'react';
import NoFound from '../../src/sites/notFound';

describe('NoFound render', () => {
    let wrapper = null;

    it('should be rendered', () => {
        wrapper = global.shallow(<NoFound />);
        expect(wrapper).toMatchSnapshot();
    });
});
