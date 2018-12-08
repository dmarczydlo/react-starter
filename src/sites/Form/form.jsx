import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {

    state = {
        error: null,
        name: ""
    };

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.form.error && nextProps.form.error !== prevState.error) {
            return { error: nextProps.form.error};
        }

        return null;
    }

    handleOnChange = event => {
        this.setState({ name: event.target.value });
    }

    handleOnSubmit = () => {
        const { name } = this.state;
        const { sendDataAPI } = this.props;

        if (!name) {
            this.setState({ error: 'Name can\'t be empty' });
        } else {
            sendDataAPI(name);
            this.setState({ error: '' });
        }
    }

    render() {
        const { error } = this.state;
        const { form: { data, sending } } = this.props;
        return (
            <fieldset>
                <h2>
                    {'Form'}
                </h2>
                {error && (
                    <p>
                        {error}
                    </p>)
                }
                <label htmlFor="name">
                    {'Name'}
                </label>
                <input
                    name="name"
                    onChange={this.handleOnChange}
                    type="text"
                />
                <button
                    id="button"
                    onClick={this.handleOnSubmit}
                    type="button"
                >
                    {'Send to API'}
                </button>
                {data && !sending && (
                    <p>
                        {JSON.stringify(data)}
                    </p>)
                }
            </fieldset>
        );
    }
}

Form.propTypes = {
    form: PropTypes.shape({
        data: PropTypes.object.isRequired,
        sending: PropTypes.bool.isRequired
    }).isRequired,
    sendDataAPI: PropTypes.func.isRequired
};
export default Form;
