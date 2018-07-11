import React from 'react';
import Layout from '../../src/layout';

describe('layout', () => {
    let wrapper = null;

    it('should be rendered', () => {
        wrapper = global.shallow(
            <Layout>
                <div>
                    {'abcd'}
                </div>
            </Layout>
        );
        expect(wrapper).toMatchSnapshot();
    });
});
