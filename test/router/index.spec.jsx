import React from 'react';
import Index from '../../src/router/index';

describe('Router index', () => {
    let wrapper;

    it('should be rendered', () => {
        wrapper = global.shallow(<Index />);
        expect(wrapper).toMatchSnapshot();
    });
});
