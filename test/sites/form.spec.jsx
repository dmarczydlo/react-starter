import React from 'react';
import sinon from 'sinon';
import FormContainer from '../../src/sites/Form';
import Form from '../../src/sites/Form/form';
import { mapDispatchToProps, mapStateToProps } from '../../src/sites/Form/container';

describe('Form site', () => {
    let wrapper = null;
    const form = { data: {} };
    const mockDispatchFunc = sinon.spy();

    const sendDataAPI = jest.fn();

    const store = {
        data: {},
        error: '',
        sending: false
    };

    it('form container should be rendered', () => {
        wrapper = shallow(<FormContainer />);
        expect(wrapper).toMatchSnapshot();
    });

    it('form  should be rendered', () => {

        wrapper = shallow(
            <Form
                form={store}
                sendDataAPI={sendDataAPI}
            />);
        expect(wrapper).toMatchSnapshot();
    });


    it('button should can be clicked', () => {
        const mockCallBack = sinon.spy();
        wrapper = mount((
            <Form
                form={store}
                sendDataAPI={mockCallBack}
            />));
        wrapper.setState({ name: 'bar' });
        // eslint-disable-next-line no-magic-numbers
        wrapper.find('#button').at(0).
            simulate('click');
        // eslint-disable-next-line no-magic-numbers
        expect(mockCallBack).toHaveProperty('callCount', 1);
    });


    it('error should be set', () => {
        const mockCallBack = sinon.spy();
        wrapper = mount((
            <Form
                form={store}
                sendDataAPI={mockCallBack}
            />));
        // eslint-disable-next-line no-magic-numbers
        wrapper.find('#button').at(0).
            simulate('click');
        // eslint-disable-next-line no-magic-numbers
        expect(wrapper.state().error).not.toBeNull();
        // eslint-disable-next-line no-magic-numbers
        expect(mockCallBack).toHaveProperty('callCount', 0);
    });

    it('should call name onChange prop', () => {
        const mockCallBack = sinon.spy();
        const name = "name";
        const event = {
            target: {
                name,
                value: name
            }
        };
        wrapper = mount(
            <Form
                form={store}
                sendDataAPI={mockCallBack}
            />);


        wrapper.find('input').simulate('change', event);
        expect(wrapper.state().name).toEqual(name);
    });

    it('getDerivedStateFromProps ', () => {
        const error = "New error";
        const givenProps = { form: { error } };
        const givenState = { error: '' };

        const result = Form.getDerivedStateFromProps(givenProps, givenState);
        expect(result).toEqual({ error });
    });

    it('mapStateToProps should can be used', () => {
        // eslint-disable-next-line no-magic-numbers
        expect(mapStateToProps(form).data).toEqual({});
    });

    it('mapDispatchToProps should can be used', () => {
        mapDispatchToProps(mockDispatchFunc).sendDataAPI('abcd');
        // eslint-disable-next-line no-magic-numbers
        expect(mockDispatchFunc).toHaveProperty('callCount', 1);
    });
});
