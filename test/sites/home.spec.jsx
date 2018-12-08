import React from 'react';
import sinon from 'sinon';
import HomeContainer from '../../src/sites/Home';
import Home from '../../src/sites/Home/home';
import { mapStateToProps, mapDispatchToProps } from '../../src/sites/Home/container';
import { INCREMENT } from '../../src/actions/counter';

describe('home site', () => {
    let wrapper = null;
    const counter = { value: 0 };
    const mockCallBack = sinon.spy();
    const mockDispatchFunc = sinon.spy();
    const updateValue = mockCallBack;


    it('home container should be rendered', () => {
        wrapper = shallow(<HomeContainer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('increment click should update value', () => {
        const warapper = shallow((
            <Home
                counter={counter}
                updateValue={updateValue}
            />));
        // eslint-disable-next-line no-magic-numbers
        warapper.find('#increment').at(0).
            simulate('click');
        // eslint-disable-next-line no-magic-numbers
        expect(mockCallBack).toHaveProperty('callCount', 1);
    });

    it('decrement click should update value', () => {

        const warapper = shallow((
            <Home
                counter={counter}
                updateValue={updateValue}
            />));
        // eslint-disable-next-line no-magic-numbers
        warapper.find('#decrement').at(0).
            simulate('click');
        // eslint-disable-next-line no-magic-numbers
        expect(mockCallBack).toHaveProperty('callCount', 2);
    });


    it('mapStateToProps should can be used', () => {
        // eslint-disable-next-line no-magic-numbers
        expect(mapStateToProps(counter).value).toEqual(0);
    });

    it('mapDispatchToProps should can be used', () => {
        mapDispatchToProps(mockDispatchFunc).updateValue(INCREMENT);
        // eslint-disable-next-line no-magic-numbers
        expect(mockDispatchFunc).toHaveProperty('callCount', 1);
    });
});
