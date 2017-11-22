import React from 'react';
import App from '../../src/sites/app';

describe('app site', () => {
    let wrapper;

    it('should be rendered', () => {
        wrapper = shallow(
            <App/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});