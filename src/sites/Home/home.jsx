import React from 'react';
import PropTypes from 'prop-types';

const Home = ({ updateValue, counter: { value } }) => {
    return (
        <div className="counter">
            <button
                id="increment"
                onClick={() => updateValue('INCREMENT')}
                type="button"
            >
                {'+'}
            </button>
            <div
                className="value"
                data-test="value"
            >
                {value}
            </div>
            <button
                id="decrement"
                onClick={() => updateValue('DECREMENT')}
                type="button"
            >
                {'-'}
            </button>

        </div>

    );
};

Home.propTypes = {
    counter: PropTypes.shape({ value: PropTypes.number.isRequired }).isRequired,
    updateValue: PropTypes.func.isRequired
};

export default Home;
