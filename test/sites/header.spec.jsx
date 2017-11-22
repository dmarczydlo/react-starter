import React from 'react';
import Header from '../../src/layout/header';

describe('Header', () => {
    let wrapper;

    it('should be rendered', () => {
        wrapper = shallow(
            <Header/>
        );
        expect(wrapper).toMatchSnapshot();
    });
});